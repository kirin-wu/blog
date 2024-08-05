---
# https://vitepress.dev/reference/default-theme-home-page
layout: home
layoutClass: 'm-home-layout'

hero:
  name: '生活就像海洋'
  text: '意志坚强才能到达彼岸'
  image:
    src: /sea.png
    alt: Sea

  actions:
    - theme: brand
      text: 进入博客
      link: /blog
    - theme: alt
      text: 进入仓库
      link: https://github.com/kirin-wu/blog

features:
  - title: 生活日记
    details: 记录日常生活中的点滴和心情，通过图文并茂的方式展示旅行、日常生活和心情记录。
    icon:
      src: /life.svg
    link: /life
    linkText: 生活旅游分享

  - title: 工具分享
    details: 生活和工作工具分享模块致力于推荐和评测各类实用工具，从生产力软件到健康管理应用，提供详细的功能介绍、优缺点分析和使用教程。
    icon:
      src: /tool.svg
    link: /tool
    linkText: 实用工具分享

  - title: 知识库
    details: 整理和分享知识的平台，涵盖各类主题，如编程、阅读笔记和科学知识。
    icon:
      src: /zhishi.svg
    link: /knowledge
    linkText: 编程知识整理
---

<style>
.m-home-layout .image-src:hover {
  transform: translate(-50%, -50%) rotate(666turn);
  transition: transform 59s 1s cubic-bezier(0.3, 0, 0.8, 1);
}

.m-home-layout .details small {
  opacity: 0.8;
}

.m-home-layout .item:last-child .details {
  display: flex;
  justify-content: flex-end;
  align-items: end;
}
</style>
