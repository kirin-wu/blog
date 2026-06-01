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
  - title: 知识库
    details: 按前端、后端、AI、运维四大分类整理技术内容，沉淀可复用的学习与实战经验。
    icon:
      src: /zhishi.svg
    link: /knowledge
    linkText: 进入知识库

  - title: 项目实战
    details: 聚焦项目复盘、踩坑记录、性能优化与架构演进，强调真实场景下的问题与方案。
    icon:
      src: /tool.svg
    link: /project
    linkText: 查看实战专题

  - title: 工具资源
    details: 汇总日常开发高频使用的在线工具、软件与实用网站，提升学习与开发效率。
    icon:
      src: /life.svg
    link: /tool
    linkText: 浏览工具资源
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
<!-- chore: minor markdown update -->
