import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'KirinWu Blog',
  description: '生活就像海洋，只有意志坚强的人才能到达彼岸。',
  head: [['link', { rel: 'icon', href: '../assets/logo.ico' }]],
  themeConfig: {
    logo: '../assets/logo.ico',

    // 导航栏
    nav: [
      { text: 'Home', link: '/' },
      { text: '生活日记', link: '/life' },
      { text: '工具分享', link: '/tool' },
      { text: '程序员客栈', link: '/programmer' },
      { text: '知识库', link: '/knowledge' },
    ],

    // 侧边栏
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

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-2024 Kirin Wu',
    },
  },
  vite: {},
})
