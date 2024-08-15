---
title: '脚手架'
showArticleMetadata: true
isOriginal: true
description: '基本知识'
articleLink: 'https://www.runoob.com/react/react-component-life-cycle.html'
date: 2024-08-13
sort: 1
---

## 脚手架

https://github.com/facebook/create-react-app

[中文官网](https://react.docschina.org/)

## 快速构建项目

```bash
npx create-react-app my-app
cd my-app
npm start
```

## 项目结构

```
my-app
├── README.md
├── node_modules
├── package.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
└── src
    ├── App.css
    ├── App.js
    ├── App.test.js
    ├── index.css
    ├── index.js
    ├── logo.svg
    ├── reportWebVitals.js
    └── setupTests.js
```

## react 和 react-dom

- react 是 react 的核心库，包含了 react 的核心功能，如组件、状态管理等。
- react-dom 是 react 的 DOM 渲染库，包含了 react 在浏览器中渲染组件的功能。

## react 的严格模式

严格模式是 React 16 引入的一个新的功能，它可以帮助开发者发现代码中的潜在问题。在开发模式下，React 会自动在组件的渲染方法中添加额外的检查，以确保组件的行为符合预期。这些检查包括：

- 检查组件是否在渲染方法中使用了异步操作。
- 检查组件是否在渲染方法中使用了不安全的生命周期方法。
- 检查组件是否在渲染方法中使用了不安全的 DOM 操作。
- 检查组件是否在渲染方法中使用了不安全的全局变量。
- 检查组件是否在渲染方法中使用了不安全的回调函数。

## JSX

JSX 是一种 JavaScript 的语法扩展，目的是快速开发，它允许我们在 JavaScript 代码中直接书写 HTML 标签。JSX 的语法非常类似于 HTML，但是它有一些特殊的语法，如：

- 在 JSX 中，所有的 HTML 标签都必须以小写字母开头。
- 在 JSX 中，所有的属性都必须以驼峰命名法命名。
- 在 JSX 中，所有的属性值都必须是 JavaScript 表达式，而不是字符串。
- 在 JSX 中，所有的属性值都必须用引号括起来，或者用花括号括起来。

### 作用

- 将 JSX 语法通过 babel 转换为 JavaScript 语法，从而可以在 JavaScript 代码中直接书写 HTML 标签，提高开发效率。
- 在 jsx 文件默认引入了一个库，react，这个库中有一个 createElement 方法，用于创建虚拟 dom，这个方法接受三个参数，第一个参数是标签名，第二个参数是属性对象，第三个参数是子元素。
- 在 jsx 文件中，所有的组件都必须以大写字母开头，这是因为在 React 中，组件的名称是区分大小写的，以大写字母开头的组件会被视为一个 React 组件，而以小写字母开头的组件会被视为一个普通的 HTML 标签。

## react 创建组件的两种方式

### 函数组件

```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>
}
```

### 类组件

```jsx
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>
  }
}
```
