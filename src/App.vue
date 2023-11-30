<template>
  <div class="com">
    <h1>
      各种Vue组件间通信/传值(10种)
      <span style="color: red;">非常重要, 面试必备</span>
    </h1>

    <div>
      <h2 style="display: inline">练习版演示:</h2>&nbsp;&nbsp;
      <router-link to="/props">props</router-link>&nbsp;&nbsp;
    </div>
    <br>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
  export default {
    name: 'App',
  }
</script>
<script lang="ts" setup>
  
</script>
<style lang="less" scoped>
  .com {
    margin: 10px;
    a {
      font-size: 16px;
      margin-right: 5px;
      &.router-link-active {
        color: red;
      }
    }
  }
</style>
<style>
  .box {
    border: solid 1px #aaa;
    margin: 5px;
    padding: 5px;
  }
</style>