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

`useEffect(setup, dependencies?)`

- `setup` 处理 Effect 的函数
- `dependencies` 可选 setup 代码中引用的所有响应式值的列表

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

- `setup` 处理 Effect 的函数
- `dependencies` 可选 setup 代码中引用的所有响应式值的列表

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

# useMemo

### 解释

它在每次重新渲染的时候能够缓存计算的结果

### 参数

`useMemo(calculateValue, dependencies)`

- `calculateValue` 要缓存计算值的函数
- `dependencies` 所有在 calculateValue 函数中使用的响应式变量组成的数组

### 用法

```jsx
import { useMemo } from 'react'

function TodoList({ todos, tab }) {
  const visibleTodos = useMemo(() => filterTodos(todos, tab), [todos, tab])
}
```

### 注意

- useMemo 的计算结果会缓存，只有当依赖项发生变化时才会重新计算
- 适用于子组件重新计算 render 计算量比较大 ，而且结果能复用
- useMeno 在项目中不得已用才用，useMeno 本身要消耗性能

# useCallback

### 解释

是一个允许你在多次渲染中缓存函数的 React Hook

### 参数

`useCallback(fn, dependencies)`

- `fn` 想要缓存的函数
- `dependencies` 有关是否更新 fn 的所有响应式值的一个列表

### 用法

```jsx
import { useCallback } from 'react';

function ProductPage({ productId, referrer, theme }) {
  const handleSubmit = useCallback((orderDetails) => {
    post('/product/' + productId + '/buy', {
      referrer,
      orderDetails,
    });
  }, [productId, referrer]);
```

### 注意

- useCallback 是用来优化性能的，useCallback 返回一个函数，只有在依赖项变化的时候才会更新（返回一个新的函数）。
- 用 useCallback 包括的函数，根据依赖是否发生变化，才会决定是否返回一个新的函数，如果没有变化，就会返回上一次缓存的函数。
- 要结合 React.memo()一起使用，否则没有意义
- useMemo 和 useCallback 的区别是，useMemo 是用来缓存计算结果的，而 useCallback 是用来缓存函数的。

# useRef

### 解释

useRef 返回一个可变的 ref 对象，其 .current 属性被初始化为传入的参数（initialValue）。返回的 ref 对象在组件的整个生命周期内保持不变。

### 参数

`useRef(initialValue)`

- `initialValue` ref 对象的初始值。可以是任意值。

### 用法

```jsx
import { useRef } from 'react'

export default function Counter() {
  let ref = useRef(0)

  function handleClick() {
    ref.current = ref.current + 1
    alert('You clicked ' + ref.current + ' times!')
  }

  return <button onClick={handleClick}>点击！</button>
}
```
