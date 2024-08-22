// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme'
import Redirect from './components/Redirect.vue'
import QuickTools from './components/QuickTools.vue'

/** @type {import('vitepress').Theme} */
export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // 注册自定义全局组件
    app.component('Redirect', Redirect)
    app.component('QuickTools', QuickTools)
  },
}
