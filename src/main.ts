// 引入vue核心代码
import { createApp } from 'vue'
// 引入 element-plus
import ElementPlus from 'element-plus'
// 引入 element-plus 的样式
import 'element-plus/dist/index.css'
// 引入App组件
import App from './App.vue'
// 引入 router 组件
import router from './router'
// 引入创建pinia的方法
import { createPinia } from 'pinia'
// 创建app
const app = createApp(App)
// 注册路由器
app.use(router)
// 注册pinia
app.use(createPinia())
// 注册ElementPlus
app.use(ElementPlus)


// 挂载 app
app.mount('#app')
