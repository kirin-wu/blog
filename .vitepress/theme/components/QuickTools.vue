<!-- quick -->
<script setup>
  import { quickTools } from '../config/quickTools'
</script>
<template>
  <div class="quick">
    <li v-for="item in quickTools" :key="item.name">
      <span>{{ item.name }}</span>
      <strong>{{ item.desc }}</strong>
    </li>
  </div>
</template>
