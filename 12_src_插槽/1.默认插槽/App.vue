<template>
  <div id="app">
    <Category title="美食" :listData="foods">
      <img
        src="https://img1.baidu.com/it/u=413643897,2296924942&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1683133200&t=a7e4dbe3bd8b337c8a726451a39bdb3c"
        alt="" srcset="">
    </Category>
    <Category title="游戏" :listData="games">
      <ul>
        <li v-for="(item, index) in games" :key="index">{{item}}</li>
      </ul>
    </Category>
    <Category title="电影" :listData="movies">
      <video controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
    </Category>
  </div>
</template>

<script>
import Category from '../components/Category.vue'
export default {
  name: 'VueTestApp',
  components: { Category },
  data () {
    return {
      foods: ['火锅', '烧烤', '小龙虾', '牛排'],
      games: ['英雄联盟', '穿越火线', '原神', '塞尔达'],
      movies: ['教父', '肖申克的救赎', '环太平洋', '阿凡达']
    };
  },
};
</script >

<style scoped>
#app {
  display: flex;
  justify-content: space-around;
}
img {
  width: 200px;
}
video{
  width: 200px;
}
</style>
