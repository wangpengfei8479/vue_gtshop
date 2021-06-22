//引入vue组件
import Vue from "vue";
// 引入Vuex组件
import Vuex from "vuex";
// // 引入暴露的动态数据
// import state from "./state";
// // 引入暴露的间接修改数据的方法
// import actions from "./actions";
// // 引入暴露的直接修改数据的方法
// import mutations from "./mutations";

import modules from "./modules";
// // 引入可修改数据的
// import getters from "./getters";
Vue.use(Vuex);
console.log(modules);
export default new Vuex.Store({
//   state,
//   mutations,
//   actions,
//   getters,
  modules,
});
