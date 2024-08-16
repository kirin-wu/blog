---
title: '00-NodeJS服务端框架'
showArticleMetadata: true
sort: 1
date: 2024-08-15
description: 00-NodeJS服务端框架
---

# HTTP 框架

- 是什么：就是基于【http 模块】封装的代码，更加方便工作开发
- 框：因为底层封装了，所以你别约束起来，只能用他们的规则和方法
- 架：可以理解为底层基于 http 模块封装了很多代码
- 但是：加快了开发速度，统一了开发规范
  HTTP 框架源码分析：查看 tools 里面的 express 迷你版 验证上述结论
  HTTP 框架有哪些呢：express、koa、koa2、egg 等等
  HTTP 框架架构 路由 Routes、model 模型、视图 View、控制层 controller

```
express   es5   callback
koa       es6   generator/yield + promise
koa2      es7   async/await + promise
egg       基于koa开发 + 生态     企业级  
```
