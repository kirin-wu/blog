---
title: 'Hooks'
showArticleMetadata: true
sort: 3
date: 2024-08-15
description: Hooks
---

# useEffect

### 解释

可以看作是 `componentsDidMount`,`componentDidUpdate`,`componentWillUnmount` 的三个函数的组合

### 参数

useEffect(setup, dependencies?)

- setup 处理 Effect 的函数
- dependencies 可选 setup 代码中引用的所有响应式值的列表

### 用法

1. 写[],componentDidMount 仅触发一次
2. 不写[],componentDidUpdate 只要数据变化就触发
3. []写 useState 的第一个参，componentDidUpdate 指定更新触发
4. 写[],再写返回值 componentWillUnmount

```jsx
function Login() {
  React.useEffect(() => {
    console.log('componentDidMount')
    return () => {
      console.log('componentWillUnMount')
    }
  }, [])
  return <div>this is login</div>
}
```

### 注意

- useEffect return 触发执行时机永远是上一次的状态，用来卸载断开操作
- 开启严格模式,useEffect 本地开发环境下会触发两次，目的是帮你发现副作用的代码
- useEffect 不能写在条件判断内或者某个函数方法内，只能写在顶级作用域,因为它的数据接口使用链表不能断开

# useLayoutEffect

### 解释

useLayoutEffect 在浏览器重新绘制屏幕之前触发

### 参数

`useLayoutEffect(setup, dependencies?)`

- setup 处理 Effect 的函数
- dependencies 可选 setup 代码中引用的所有响应式值的列表

### 用法

```jsx
function Login() {
  React.useLayoutEffect(() => {
    console.log('componentDidMount')
    return () => {
      console.log('componentWillUnMount')
    }
  }, [])
  return <div>this is login</div>
}
```

### 注意

- useEffect 在 js 修改 dom 之前调用，执行是浏览器渲染完成之后调用
- useLayoutEffect 在 js 修改 dom 之后调用，执行是浏览器渲染之前调用。
- useLayoutEffect（同步） 优先级比 useEffect（异步） 高，useLayoutEffect 会阻塞浏览器渲染，useEffect 不会
- useLayoutEffect 适合处理 dom 操作，useEffect 适合处理数据请求
- useLayoutEffect 比 useLayoutEffect 先执行完成
