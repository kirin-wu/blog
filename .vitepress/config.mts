import { defineConfig } from 'vitepress'
import { nav } from './config/nav'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'KirinWu Blog',
  description: '生活就像海洋，只有意志坚强的人才能到达彼岸。',
  head: [['link', { rel: 'icon', href: '/logo.ico' }]],
  themeConfig: {
    logo: '/logo.ico',

    // 导航栏
    nav: nav,

    // 侧边栏
    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/life' },
          { text: 'Runtime API Examples', link: '/api-examples' },
          { text: '知识库', link: '/knowledge' },
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
