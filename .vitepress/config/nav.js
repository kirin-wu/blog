export const nav = [
  { text: 'Home', link: '/' },
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
    ],
  },
  {
    text: '程序员客栈',
    activeMatch: '^/programmer',
    items: [
      { text: '前端', link: '/programmer/front' },
      { text: '后端', link: '/programmer/back' },
      { text: '运维', link: '/programmer/ops' },
      { text: '网络', link: '/programmer/network' },
    ],
  },
  {
    text: '知识库',
    activeMatch: '^/knowledge',
    items: [
      { text: 'Vue', link: '/knowledge/vue' },
      { text: 'React', link: '/knowledge/react' },
      { text: 'Node.js', link: '/knowledge/node.js' },
      { text: 'Nest.js', link: '/knowledge/nest' },
      { text: 'TypeScript', link: '/knowledge/typescript' },
      { text: 'Webpack', link: '/knowledge/webpack' },
      { text: 'Vite', link: '/knowledge/vite' },
      { text: 'Git', link: '/knowledge/git' },
      { text: 'Docker', link: '/knowledge/docker' },
      { text: 'Markdown', link: '/knowledge/markdown' },
      { text: '问题记录', link: '/knowledge/issue' },
      { text: '优化技巧', link: '/knowledge/optimization' },
    ],
  },
]
