import { defineConfig } from 'vitepress'
import { nav } from './config/nav'
import { sidebar } from './config/sidebar'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'KirinWu Blog',
  description: '生活就像海洋，只有意志坚强的人才能到达彼岸。',
  // 简洁的url
  cleanUrls: true,
  head: [['link', { rel: 'icon', href: '/logo.ico' }]],
  themeConfig: {
    logo: '/logo.ico',

    // 导航栏
    nav: nav,

    // 侧边栏
    sidebar: sidebar,

    socialLinks: [{ icon: 'github', link: 'https://github.com/kirin-wu' }],
    search: {
      provider: 'local',
    },

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-2024 Kirin Wu',
    },
    outline: {
      label: '目录', // 自定义右侧目录标题
      level: [1, 2], // 设置显示目录的标题层级
    },
  },
  // 路由重写
  rewrites: {
    'pages/:categorie/:type/index.md': ':categorie/:type.md',
    'pages/:categorie/index.md': ':categorie.md',
    'pages/:categorie/:yyyy/:title/README.md': ':categorie/:yyyy/:title.md',
  },

  srcExclude: ['./.github/', './README.md'],
})
