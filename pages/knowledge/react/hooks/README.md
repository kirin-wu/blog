---
title: 'Hooks'
showArticleMetadata: true
sort: 3
date: 2024-08-15
description: Hooks
---

# useState

### 解释

`useState` 是一个 Hook，它允许你在函数组件中添加状态。`useState` 返回一个数组，其中第一个元素是当前状态值，第二个元素是一个更新状态的函数。

### 参数

`useState(initialState)`

- `initialState` 是状态的初始值

### 用法

```jsx
function Counter() {
  const [count, setCount] = React.useState(0)
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  )
}
```

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

# React.memo

### 解释

React.memo 是一个高阶组件，它接受一个组件作为参数，并返回一个新的组件。这个新的组件会对传入的 props 进行浅比较，如果 props 没有变化，那么这个组件就不会重新渲染。

### 参数

`React.memo(Component, areEqual?)`

- `Component` 需要被包裹的组件
- `areEqual` 一个函数，用来比较 props 是否相等，默认是浅比较

### 用法

```jsx
import React from 'react'

function MyComponent(props) {
  /* render using props */
}

export default React.memo(MyComponent)
```

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

# forwardRef

### 解释

`forwardRef` 允许组件使用 ref 将 DOM 节点暴露给父组件。

### 参数

`forwardRef((props, ref) => ReactElement)`

- `props` 组件的 props
- `ref` 父组件传递下来的 ref

### 用法

```jsx
import React, { forwardRef, useRef } from 'react'

function Form() {
  const ref = useRef(null)

  function handleClick() {
    ref.current.focus()
  }

  return (
    <form>
      <MyInput label='Enter your name:' ref={ref} />
      <button type='button' onClick={handleClick}>
        编辑
      </button>
    </form>
  )
}

const MyInput = forwardRef(function MyInput(props, ref) {
  return (
    <label>
      {props.label}
      <input ref={ref} />
    </label>
  )
})
```

### 注意

- 实际上函数组件没有 ref，我们想拿到函数组件的 DOM 节点，需要通过 forwardRef 来实现
- forwardRef 接受一个渲染函数，这个函数接收 props 和 ref 两个参数，并返回一个 React 元素。

# useContext

### 解释

上下文传递参数 用 provider 标签包裹，可以传数据也可以传函数

### 参数

`useContext(MyContext)`

- `MyContext` 上下文对象

### 用法

```jsx
import React, { useContext, createContext } from 'react'

const MyContext = createContext(null)

function MyComponent() {
  const value = useContext(MyContext)
  return <div>{value}</div>
}

function App() {
  return (
    <MyContext.Provider value='Hello World'>
      <MyComponent />
    </MyContext.Provider>
  )
}
```

# useTransition

### 解释

useTransition 是 React 提供的一个 Hook，用于在渲染过程中暂停更新，以便在用户交互期间提供更流畅的体验。
真正比 vue 高级的地方
利用 `fiber 架构（数据结构）` 和 `浏览器的空闲时间`

### 参数

`const [isPending, startTransition] = useTransition()`

- `isPending` 告诉你是否存在待处理的 transition
- `startTransition` 你可以使用此方法将状态更新标记为 transition

### 用法

```jsx
function TabContainer() {
  const [isPending, startTransition] = useTransition()
  const [tab, setTab] = useState('about')

  function selectTab(nextTab) {
    startTransition(() => {
      setTab(nextTab)
    })
  }
  // ……
}
```

### 注意

- 基于 fiber 架构利用浏览器空闲时间 `requestIdleCallback` 这个 api 的思想
- 因为 requestIdleCallback 这个 api 的兼容性不好，所以用的是 `postMessage` 模拟实现

# useDeferredValue

### 解释

useDeferredValue 是 React 提供的一个 Hook，用于在渲染过程中延迟更新，以便在用户交互期间提供更流畅的体验。

### 参数

`const deferredValue = useDeferredValue(value)`

- `value` 需要延迟更新的值，可以是任何类型

### 用法

```jsx
import { useState, useDeferredValue } from 'react'

function SearchPage() {
  const [query, setQuery] = useState('')
  const deferredQuery = useDeferredValue(query)
  // ...
}
```

### 注意

- 故意减缓了渲染速度
- 输入框的输入感觉非常卡顿。这是因为没有使用 useDeferredValue，每次按键都会立即强制整个列表以不可中断的方式进行重新渲染。
- 与防抖或节流不同，useDeferredValue 不需要选择任何固定延迟时间
