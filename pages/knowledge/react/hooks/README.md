---
title: 'Hooks'
showArticleMetadata: true
sort: 3
date: 2024-08-15
description: Hooks
---

# useEffect

useEffect(setup, dependencies?)

可以看作是 componentsDidMount,componentDidUpdate 和 componentWillUnmount 的三个函数的组合

```
React.useEffect(() => {
console.log('count')
}, [])

- 写[],componentDidMount 仅触发一次
- 不写[],componentDidUpdate 只要数据变化旧触发
- []写 useState 的第一个参，componentDidUpdate 指定更新触发
- 写[],再写返回值 componentWillUnmount
```

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
