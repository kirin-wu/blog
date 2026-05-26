---
title: 'JavaScript'
showArticleMetadata: true
sort: 2
date: 2026-05-26
description: JavaScript
---

# JavaScript 学习与实战

## 一、核心能力目标

1. 理解 JS 运行机制，不靠“背结论”。
2. 能写出可靠的异步代码与可维护模块。
3. 能快速定位线上常见 bug（闭包、this、事件循环）。

## 二、语言核心

### 1. 数据类型与引用

- 基本类型：`string number boolean null undefined symbol bigint`
- 引用类型：`object function array ...`
- 区分值拷贝与引用拷贝。

### 2. 原型与继承

- 任何对象都可沿原型链查找属性。
- `class` 是语法糖，本质仍是原型继承。

### 3. this 绑定规则

1. 默认绑定（严格模式下为 `undefined`）。
2. 隐式绑定（对象调用）。
3. 显式绑定（`call/apply/bind`）。
4. `new` 绑定优先级最高。

### 4. 闭包

闭包 = 函数 + 对其词法作用域的引用。

常见用途：

- 私有变量。
- 函数工厂。
- 防抖/节流。

## 三、异步与事件循环

### 1. Promise 与 async/await

- `await` 只会等待 Promise。
- 错误处理要用 `try/catch` 或统一中间层。

### 2. 宏任务与微任务

- 微任务：`Promise.then`、`queueMicrotask`。
- 宏任务：`setTimeout`、`setInterval`、I/O。

核心：每轮宏任务结束后，会清空微任务队列。

## 四、模块化

1. ESM：`import/export`，静态分析友好。
2. CommonJS：`require/module.exports`。
3. 浏览器项目优先 ESM，Node 根据运行环境选择。

## 五、常用实战函数

### 1. 防抖

```js
function debounce(fn, wait = 300) {
  let timer = null
  return function (...args) {
    clearTimeout(timer)
    timer = setTimeout(() => fn.apply(this, args), wait)
  }
}
```

### 2. 节流

```js
function throttle(fn, wait = 300) {
  let last = 0
  return function (...args) {
    const now = Date.now()
    if (now - last >= wait) {
      last = now
      fn.apply(this, args)
    }
  }
}
```

### 3. 深拷贝（优先）

```js
const data = { a: 1, nested: { b: 2 } }
const copy = structuredClone(data)
```

## 六、常见坑

1. `forEach` 里不能 `await` 串行控制。
2. `map(async ...)` 返回的是 Promise 数组。
3. `==` 隐式转换易出错，建议统一 `===`。
4. 浮点数精度问题：`0.1 + 0.2 !== 0.3`。

## 七、面试高频

1. 事件循环完整流程。
2. 原型链与 `new` 的过程。
3. `call/apply/bind` 区别。
4. Promise 链式错误传递。
5. 浏览器缓存与强缓存/协商缓存。

## 八、进阶方向

1. 函数式编程思想（纯函数、组合、不可变数据）。
2. 浏览器 API（`IntersectionObserver`、`MutationObserver`）。
3. 性能剖析（内存泄漏、长任务、渲染阻塞）。

