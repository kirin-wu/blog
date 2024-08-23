---
title: '工程化'
showArticleMetadata: true
sort: 1
date: 2024-08-22
description: 工程化
---

## 同一个页面三个组件请求同一个 api

## cjs esm umd 等区别是什么

`cjs` 是 `commonjs`
`esm` 是 `es module`
`umd` 是 `universal module definition`

```js
exports.sum = (x, y) => x + y
const { sum } = require('./sum')

export const sum = (x,y) = >x+y
import { sum } from './sum'
```

## 前端权限管理的模型

- acl 基于用户权限管理
- rbac 基于角色权限模型
- abac 基于属性权限模型

## browserslist

### 作用

- 指定目标浏览器
- 与工具集成 PostCSS、Babel、ESLint 等，以确保生成的代码在指定的浏览器范围内是兼容的

```
 1%
 last 2 versions
 not dead
```

### 解释

- 1%: 支持全球市场份额超过 1% 的浏览器。
- last 2 versions: 支持每个主流浏览器的最后两个版本。
- not dead: 不支持官方不再维护和更新的浏览器。

## minify 代码压缩

- 移除空格和换行
- 删除注释
- 缩短变量名
- 移除未使用的代码

## pacgage-lock.json

- 锁定版本，开发环境和生产环境保持一致
- 提高安装速度、安全性

## webpack 有哪些常见的 loader

- raw-loader：加载文件原始内容
- file-loader：把文件输出到文件夹中,通过相对路径访问对应的资源
- url-loader：把文件输出到文件夹中，并返回 URL
- image-loader：加载并压缩图片文件
- babel-loader：把 ES6 转换成 ES5
- ts-loader：把 TypeScript 转换成 JavaScript
- css-loader：加载 CSS 文件
- style-loader：把 CSS 代码注入到 JavaScript 中
- sass-loader：把 Sass/SCSS 文件转换成 CSS 文件
- less-loader：把 Less 文件转换成 CSS 文件
- postcss-loader：使用 PostCSS 处理 CSS 文件

## webpack 有哪些常见的 plugin

- html-webpack-plugin：生成 HTML 文件，并自动引入打包后的 JS 文件
- clean-webpack-plugin：清理打包目录
- mini-css-extract-plugin：提取 CSS 到单独文件
- optimize-css-assets-webpack-plugin：压缩 CSS 文件
- terser-webpack-plugin：压缩 JavaScript 文件
- copy-webpack-plugin：复制文件或文件夹
- webpack-bundle-analyzer：分析打包文件大小
- webpack-dev-server：提供开发服务器
- webpack-hot-middleware：热更新
- webpack-merge：合并 webpack 配置

## webpack 构建流程

1. 初始化参数
2. 开始编译
3. 确定入口
4. 编译模块
5. 完成模块编译
6. 输出资源
7. 生成 hash
8. 输出文件

## webpack 热更新原理

- webpack-dev-server：启动一个本地服务器，监听文件变化
- webpack-hot-middleware：热更新中间件，监听 webpack 编译结果
- webpack-dev-middleware：将 webpack 编译结果输出到内存中
- webpack-hot-middleware：热更新中间件，监听文件变化，并通知浏览器更新
