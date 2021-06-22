// 引入Vue
import Vue from "vue";
// 引入Vue路由
import VueRouter from "vue-router";
//引入路由
import routes from './routes';
const  solvePush = VueRouter.prototype.push
VueRouter.prototype.push = function (location, onComplete =()=>{}, onAbort) { 
    return solvePush.call(this,location, onComplete, onAbort)
 }
// 使用Vue路由
Vue.use(VueRouter);
export default new VueRouter({
    mode:"history",
    // 引入路由地址及其组件
    routes
})
