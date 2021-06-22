// 引入Home路由
import Home from "@/pages/Home";
// 引入Login路由
import Login from "@/pages/Login";
// 引入Login路由
import Register from "@/pages/Register";
// 引入Login路由
import Search from "@/pages/Search";

export default [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/login",
    component: Login,
    meta: { isHideFooter: true },
  },
  {
    path: "/register",
    component: Register,
    meta: { isHideFooter: true },
  },
  {
    path: "/search/:keyword?",
    component: Search,
    name:"search"
  },
  {
    path: "/",
    redirect: "/",
  },
];
