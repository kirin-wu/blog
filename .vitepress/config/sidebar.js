import fs from 'fs'
import fg from 'fast-glob'
import matter from 'gray-matter'
const sync = fg.sync

export const sidebar = {
  '/life': getItemsByCategory('pages/life'),
  '/tool': getItemsByCategory('pages/tool'),
  '/programmer': getItemsByCategory('pages/programmer'),
  '/knowledge': getItemsByCategory('pages/knowledge', ['frontend', 'backend', 'ai', 'devops']),
  '/project': getItemsByCategory('pages/project'),
}

// 根据 pages/分类/细分类/标题/README.md的目录格式, 获取侧边栏分组及分组下标题
// 组成路由 => /分类/细分类/标题
function getItemsByCategory(path, includeGroups = null) {
  // 侧边栏分组数组
  let groups = []
  // 侧边栏分组下标题数组
  let items = []
  let total = 0
  // 当分组内文章数量少于 2 篇或文章总数显示超过 20 篇时，自动折叠分组
  const groupCollapsedSize = 2
  const titleCollapsedSize = 20

  // 1.获取所有分组目录
  sync(`${path}/*`, {
    onlyDirectories: true,
    objectMode: true,
  })
    .sort((a, b) => {
      if (fs.existsSync(`${a.path}/index.md`) && fs.existsSync(`${b.path}/index.md`)) {
        let aData = matter.read(`${a.path}/index.md`)
        let bData = matter.read(`${b.path}/index.md`)
        return aData.data.sort - bData.data.sort
      }
      return 0
    })
    .forEach(({ name }) => {
      let group = name
      if (Array.isArray(includeGroups) && includeGroups.length > 0 && !includeGroups.includes(group)) {
        return
      }

      // 获取章节标题
      let chapter = ''
      let showChapterCount = true
      let showChapterCountName = ''
      let needRoute = false
      if (fs.existsSync(`${path}/${group}/index.md`)) {
        const { data } = matter.read(`${path}/${group}/index.md`)
        data.title !== undefined ? (chapter = data.title) : (chapter = group)
        data.showChapterCount !== undefined ? (showChapterCount = data.showChapterCount) : (showChapterCount = true)
        data.showChapterCountName !== undefined ? (showChapterCountName = data.showChapterCountName) : (showChapterCountName = '篇')
        data.needRoute !== undefined ? (needRoute = data.needRoute) : (needRoute = false)
      }

      // 2.获取分组下的所有文章
      sync(`${path}/${group}/*`, {
        onlyDirectories: true,
        objectMode: true,
      }).forEach(({ name }) => {
        let title = name
        sync(`${path}/${group}/${title}/*.md`, {
          onlyFiles: true,
          objectMode: true,
        }).forEach(article => {
          const { data } = matter.read(`${article.path}`)
          // 向前追加标题
          items.push({
            text: data.title,
            link: `/${path}/${group}/${title}`.replace('pages/', ''),
            date: data.date,
            sort: data.sort,
          })
          total += 1
        })
      })

      groups.push({
        text: `${chapter !== '' ? chapter : group} ${showChapterCount && items.length > 0 ? `(${items.length}${showChapterCountName})` : ''}`,
        link: `${needRoute ? `/${path}/${group}`.replace('pages/', '') : ''}`,
        items: items,
        // collapsed: items.length < groupCollapsedSize || total > titleCollapsedSize,
        collapsed: total > titleCollapsedSize,
      })

      // 4.清空侧边栏分组下标题数组
      items = []
    })

  // 添加序号
  sortArticleItems(groups)
  return groups
}

// 根据date 排序, 逆序
function sortArticleItems(groups) {
  groups.forEach(group => {
    group.items?.sort((a, b) => {
      if (a.sort && b.sort) {
        return a.sort - b.sort
      }

      if (a.date && b.date) {
        return new Date(b.date).getTime() - new Date(a.date).getTime()
      }
      return 0
    })

    group.items?.forEach(item => {
      item.text = `📝 ${item.text}`
      delete item.date
    })
  })
}
