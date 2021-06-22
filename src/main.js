// 引入vue
import Vue from "vue";
// 引入根组件
import App from "./App.vue";
// 引入路由
import router from "./router";
// 引入样式初始化文件
import '../public/css/reset.css';
// 引入swiper样式表
import '../public/css/swiper.min.css';
// 插入全局组件
import TypeNav from '@/components/TypeNav'

import store from './store'

Vue.component("TypeNav",TypeNav)
Vue.config.productionTip = false;
// 创建实例
new Vue({
//  挂载根组件
  render: (h) => h(App),
  // 添加路由
  router,
  store
}).$mount("#app");
