// 引入 mode functions
import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'

// 创建路由器
const router = createRouter({
  // 配置路由mode
  history: createWebHistory(),
  // 路由规则
  routes
})

export default router