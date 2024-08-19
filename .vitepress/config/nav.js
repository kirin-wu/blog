export const nav = [
  { text: 'Home', link: '/' },
  {
    text: '知识库',
    activeMatch: '^/knowledge',
    items: [
      { text: 'Node', link: '/knowledge/node' },
      { text: 'Vue', link: '/knowledge/vue' },
      { text: 'React', link: '/knowledge/react' },
      { text: 'Nuxt', link: '/knowledge/nuxt' },
      { text: 'Next', link: '/knowledge/next' },
      { text: 'Nest', link: '/knowledge/nest' },
      { text: 'Markdown', link: '/knowledge/markdown' },
    ],
  },
  {
    text: '程序员客栈',
    activeMatch: '^/programmer',
    items: [
      { text: '编程基础', link: '/programmer/basic' },
      { text: '后端', link: '/programmer/back' },
      { text: '运维', link: '/programmer/ops' },
      { text: '网络', link: '/programmer/network' },
    ],
  },
  {
    text: '生活日记',
    activeMatch: '^/life',
    items: [
      { text: '旅游攻略', link: '/life/tourism' },
      { text: '美食聚餐', link: '/life/delicacy' },
    ],
  },
  {
    text: '工具分享',
    activeMatch: '^/tool',
    items: [
      { text: '在线工具', link: '/tool/online' },
      { text: '软件下载', link: '/tool/software' },
      { text: '实用网站', link: '/tool/website' },
      { text: 'MacOS', link: '/tool/mac' },
    ],
  },
]
