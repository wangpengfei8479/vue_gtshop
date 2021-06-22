<template>
  <div>
    <!-- 引入header组件 -->
    <Header />
    <!-- 展示路由 -->
    <router-view></router-view>
    <!-- 引入foot而组件 并设置v-if值，给路由设置meta参数 -->
    <Footer v-if="!$route.meta.isHideFooter"/>
  </div>
</template>

<script>
// 引入组件Header
import Header from "@/components/Header";
// 引入组件Footer
import Footer from "@/components/Footer";



export default {
  name: "App",
  // 注册组件
  components: {
    Header,
    Footer,
  },
  async mounted(){
      this.$store.dispatch("getBaseCategoryList")
  }
};
</script>

<style lang="less">
</style>
