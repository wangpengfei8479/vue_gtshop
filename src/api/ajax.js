// 引入axios包
import axios from "axios";
// 引入进度条
import Nprogress from "nprogress";
// 引入进度条样式表
import "nprogress/nprogress.css";

// 设置根路径和响应时间
const ajax = axios.create({
    baseURL:"/api",
    timeout:20000
})

// 设置请求拦截器
ajax.interceptors.request.use((config) => {
  Nprogress.start();
  return config;
});
// 设置响应拦截器
ajax.interceptors.response.use(res=>{
    Nprogress.done();
    return res.data
},error=>{
    return Promise.reject(error)
})
export default ajax