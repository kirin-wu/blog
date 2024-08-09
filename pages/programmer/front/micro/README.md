---
sort: 1
title: '微前端'
showArticleMetadata: false
---

# 微前端

## 什么是微前端

微前端是一种设计思想，它将前端应用拆分成多个独立的小应用，每个小应用可以独立开发、部署和升级，同时又能无缝地集成到主应用中。微前端的核心思想是将前端应用拆分成多个独立的小应用，每个小应用可以独立开发、部署和升级，同时又能无缝地集成到主应用中。

## 微前端的优势

1. 独立开发：每个小应用可以独立开发，互不影响，提高开发效率。
2. 独立部署：每个小应用可以独立部署，互不影响，提高部署效率。
3. 独立升级：每个小应用可以独立升级，互不影响，提高升级效率。
4. 灵活扩展：每个小应用可以独立扩展，互不影响，提高扩展性。
5. 简化维护：每个小应用可以独立维护，互不影响，简化维护成本。

## 微前端的实现方式

1. iframe：使用 iframe 标签将小应用嵌入到主应用中，优点是简单易用，缺点是样式、脚本隔离性差，通信成本高。
2. Web Components：使用 Web Components 技术将小应用封装成自定义元素，优点是样式、脚本隔离性好，通信成本低，缺点是兼容性差。
3. 微前端框架：使用微前端框架如 Single-SPA、Qiankun 等，优点是功能强大，支持多种通信方式，缺点是学习成本高，需要额外维护一个微前端框架。

## 微前端框架

1. iframe
2. qiankun
3. micro-app
4. Emp 方案
5. 无界

# 前置知识

## [1. Web Components](https://developer.mozilla.org/zh-CN/docs/Web/API/Web_components)

Web Components 是一种用于构建可重用组件的技术，它由三个主要技术组成：Custom Elements、Shadow DOM 和 HTML Templates。封装一个自定义 UI 组件，在任何地方使用，不担心代码冲突。

### Custom Elements

（自定义元素）：一组 JavaScript API，允许你定义 custom elements 及其行为，然后可以在你的用户界面中按照需要使用它们。

### Shadow DOM

一组 JavaScript API，用于将封装的“影子”DOM 树附加到元素（与主文档 DOM 分开呈现）并控制其关联的功能。通过这种方式，你可以保持元素的功能私有，这样它们就可以被脚本化和样式化，而不用担心与文档的其他部分发生冲突。

### HTML Templates

`<template> 和 <slot>` 元素使你可以编写不在呈现页面中显示的标记模板。然后它们可以作为自定义元素结构的基础被多次重用。

- 实现自定义元素

```javaScript
class WordCount extends HTMLParagraphElement {
  constructor() {
    super();
  }
  // 此处编写元素功能

  // 声明周期
  connectedCallback() {
    console.log("自定义元素添加至页面。");
  }

  disconnectedCallback() {
    console.log("自定义元素从页面中移除。");
  }

  adoptedCallback() {
    console.log("自定义元素移动至新页面。");
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log(`属性 ${name} 已变更。`);
  }
}
```

- 注册自定义元素

  ```
  Window.customElements 的 define() 方法
  	define()
  - name 名称
  - constructor 构造函数
  - options 配置
  ```

  ```JavaScript
  customElements.define("word-count", WordCount, { extends: "p" });
  // 或者
  customElements.define("popup-info", PopupInfo);
  ```

- 使用自定义元素

```html
<p is="word-count"></p>
// 或者
<popup-info>
  <!-- 元素的内容 -->
</popup-info>
```
