---
title: 'Vue'
showArticleMetadata: true
sort: 4
date: 2026-05-26
description: Vue
---

# Vue 学习与实战（Vue 3）

## 一、核心能力目标

1. 熟练使用组合式 API 开发业务。
2. 能设计组件边界与状态流。
3. 能处理性能、路由、权限、异常等工程问题。

## 二、Vue 3 基础模型

### 1. 响应式核心

- `ref`：包装基本类型或对象引用。
- `reactive`：包装对象。
- `computed`：派生状态。
- `watch/watchEffect`：副作用处理。

```vue
<script setup lang="ts">
import { computed, ref } from 'vue'

const price = ref(100)
const count = ref(2)
const total = computed(() => price.value * count.value)
</script>
```

### 2. 生命周期

常用：`onMounted`、`onBeforeUnmount`、`onUpdated`。

### 3. 组件通信

1. 父传子：`props`
2. 子传父：`emit`
3. 跨层：`provide/inject`
4. 全局状态：Pinia

## 三、路由与状态管理

### 1. Vue Router

- 动态路由。
- 路由守卫（登录态、权限校验）。
- 懒加载路由组件。

### 2. Pinia

- `defineStore` 管理全局状态。
- 推荐按业务域拆 store。

```ts
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({ token: '', profile: null as null | { id: string; name: string } }),
  actions: {
    setToken(token: string) {
      this.token = token
    }
  }
})
```

## 四、组件设计建议

1. 页面组件只做编排，业务逻辑下沉到 hooks/composables。
2. 通用组件保证“高内聚、低耦合”，明确输入输出。
3. 接口调用统一收敛到 `services` 层。

## 五、性能优化

1. `defineAsyncComponent` 做组件懒加载。
2. 长列表使用虚拟滚动。
3. 大对象避免深层 watch。
4. 合理拆分响应式状态，减少无关更新。

## 六、常见问题

1. `ref` 在模板中自动解包，在脚本中必须 `.value`。
2. `watch` 默认浅监听，必要时使用 `deep`。
3. `v-if` 与 `v-show` 的适用场景不同。

## 七、面试高频

1. Vue2 和 Vue3 响应式原理差异。
2. `computed` 与 `watch` 区别。
3. `nextTick` 的作用和时机。
4. diff 与 patch 的关键流程。

## 八、进阶方向

1. 组合式函数库（composables）体系化。
2. 组件库开发与文档系统。
3. Nuxt 全栈化与 SSR 场景。

