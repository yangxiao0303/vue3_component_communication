<template>
  <div>
    <h1>我是子组件</h1>
    <h2>{{ toy }}</h2>
    <h2>{{ msg }}</h2>
  </div>
</template>

<script setup lang="ts">
  defineProps(["toy","msg"])
</script>

<style scoped>
  
</style>