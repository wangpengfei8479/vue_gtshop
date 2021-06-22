<template>
  <div>
    <!-- 商品分类导航 -->
    <TypeNav/>
    
    <!--列表-->
    <ListContainer/>
   

    <!--今日推荐-->
    <TodayRecommend/>

    <!-- 商品排行 -->
    <Rank/>

    <!-- 猜你喜欢 -->
    <Like/>


    <!--楼层-->
    <Floor/>


    <!--楼层-->
    <Floor/>

    <!--商标-->
     <Brand/>
  </div>
</template>

<script>
// 引入swiper
import { MySwiper, Floor1Swiper, Floor2Swiper } from "../../plugins/Swiper";
import ListContainer from './ListContainer';
import TodayRecommend from './TodayRecomend';
import Rank from './Rank';
import Like from './Like';
import Floor from './Floor';
import Brand from './Brand'
export default {
  name: "Home",
  mounted() {
    // 调用swiper的实例
    MySwiper(), Floor1Swiper(), Floor2Swiper();
  },
  components:{
    ListContainer,
    TodayRecommend,
    Rank,
    Like,
    Floor,
    Brand
  }
};
</script>

<style lang="less" scoped>













</style>
