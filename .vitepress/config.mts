import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'KirinWu Blog',
  description: '一个个人的博客',
  themeConfig: {
    logo: '/logo.svg',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: '生活日记', link: '/life' },
      { text: '工具分享', link: '/tool' },
      { text: '程序员客栈', link: '/programmer' },
      { text: '知识库', link: '/knowledge' },
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/life' },
          { text: 'Runtime API Examples', link: '/api-examples' },
          { text: '知识库', link: '/knowledge-base' },
        ],
      },
    ],

    socialLinks: [{ icon: 'github', link: 'https://github.com/kirin-wu' }],
    search: {
      provider: 'local',
    },
  },
  vite: {},
})
