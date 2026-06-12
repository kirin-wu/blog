export const nav = [
  { text: 'Home', link: '/' },
  {
    text: '知识库',
    activeMatch: '^/knowledge',
    items: [
      { text: '前端', link: '/knowledge/frontend' },
      { text: '后端', link: '/knowledge/backend' },
      { text: 'AI', link: '/knowledge/ai' },
      { text: '运维', link: '/knowledge/devops' },
    ],
  },
  {
    text: '项目实战',
    activeMatch: '^/project',
    items: [
      { text: '项目复盘', link: '/project/retrospective' },
      { text: '踩坑记录', link: '/project/pitfalls' },
      { text: '性能优化', link: '/project/performance' },
      { text: '架构演进', link: '/project/architecture' },
    ],
  },
  {
    text: '工具资源',
    activeMatch: '^/tool',
    items: [
      { text: '在线工具', link: '/tool/online' },
      { text: '实用网站', link: '/tool/website/quick' },
      { text: 'MacOS', link: '/tool/mac' },
      { text: 'Vim', link: '/tool/vim' },
    ],
  },
  {
    text: '生活随笔',
    activeMatch: '^/life',
    items: [
      { text: '旅游攻略', link: '/life/tourism' },
      { text: '美食聚餐', link: '/life/delicacy' },
    ],
  },
  {
    text: '关于',
    activeMatch: '^/about',
    link: '/about',
  },
]
