---
title: '生命周期'
showArticleMetadata: true
sort: 2
date: 2024-08-14
---

## react 生命周期

![react生命周期](https://www.runoob.com/wp-content/uploads/2016/02/ogimage.png)

## 1. 挂载

当组件实例被创建并插入 DOM 中时，其生命周期调用顺序如下：

- constructor(): 在 React 组件挂载之前，会调用它的构造函数。
- getDerivedStateFromProps(): 在调用 render 方法之前调用，并且在初始挂载及后续更新时都会被调用。
- render(): render() 方法是 class 组件中唯一必须实现的方法。
- componentDidMount(): 在组件挂载后（插入 DOM 树中）立即调用。

## 2. 更新

每当组件的 state 或 props 发生变化时，组件就会更新。

- getDerivedStateFromProps(): 在调用 render 方法之前调用，并且在初始挂载及后续更新时都会被调用。根据 shouldComponentUpdate() 的返回值，判断 React 组件的输出是否受当前 state 或 props 更改的影响。
- shouldComponentUpdate():当 props 或 state 发生变化时，shouldComponentUpdate() 会在渲染执行之前被调用。
- render(): render() 方法是 class 组件中唯一必须实现的方法。
- getSnapshotBeforeUpdate(): 在最近一次渲染输出（提交到 DOM 节点）之前调用。
- componentDidUpdate(): 在更新后会被立即调用。

## 3. 卸载

当组件从 DOM 中移除时会调用如下方法：

- componentWillUnmount(): 在组件卸载及销毁之前直接调用

## getDerivedStateFromProps 的作用

对状态做了拦截处理，它的返回值会对 state 进行修改，返回空对象 null 不会拦截

## shouldComponentUpdate 的作用

用于控制组件的重新渲染过程。它可以让开发者根据具体条件决定是否要让组件更新,返回 true：允许组件重新渲染,返回 false：阻止组件重新渲染。

## getSnapshotBeforeUpdate 的作用

当你需要在 DOM 更新前记录一些信息（如滚动位置、文本宽度等）,可以用来在更新后的 componentDidUpdate 中执行某些逻辑，比如将滚动条恢复到之前的位置。
getSnapshotBeforeUpdate 必须返回一个值，或者返回 null。返回的值传递给 componentDidUpdate 作为第三个参数。
