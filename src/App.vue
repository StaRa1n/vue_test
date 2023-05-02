<template>
  <div id="app">

    <Category title="游戏" :listData="games">
      <!-- 使用作用域插槽必须用template, scope接收数据 -->
      <!-- 默认写法 -->
      <template v-slot:default="slotProps">
        <ul>
          <li v-for="(item, index) in slotProps.games" :key="index">{{item}}</li>
        </ul>
      </template>
    </Category>

    <Category title="游戏" :listData="games">
      <!-- 简写写法 -->
      <template v-slot="slotProps">
        <ol>
          <li v-for="(item, index) in slotProps.games" :key="index">{{item}}</li>
        </ol>
      </template>
    </Category>

    <Category title="游戏" :listData="games">
      <!-- 解构赋值写法 -->
      <template v-slot="{games}">
        <h4 v-for="(item, index) in games" :key="index">{{item}}</h4>
      </template>
    </Category>

    <Category title="游戏" :listData="games">
      <!-- 作用域+具名+解构赋值写法 -->
      <template v-slot:foot="{games}">
        <h4 v-for="(item, index) in games" :key="index">{{item}}</h4>
      </template>
    </Category>

  </div>
</template>s

<script>
import Category from './components/Category.vue'
export default {
  name: 'VueTestApp',
  components: { Category },
  data () {
    return {

    };
  },
};
</script >

<style scoped>
#app,
.foot {
  display: flex;
  justify-content: space-around;
}
img {
  width: 200px;
}
video {
  width: 200px;
}
h4 {
  text-align: center;
}
</style>
