<template>
  <div class="box">
    <h3>我是父组件</h3>
    <!-- 在模版中 ref 会自动解包, 不需要使用 toy.value -->
    <Child :toy="toy" msg="fly"/>
  </div>
</template>

<script setup lang="ts">
// 引入子组件
import Child from './Child.vue';
// 引入 ref 函数
import {ref} from 'vue';
// define the reactive data object
const toy = ref('drone');
  
</script>

<style scoped>
  .box{
    height: 50px;
    width: 200px;
    border: 1px double aqua;
    background-color: aqua;
  }
</style>