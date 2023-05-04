<template>
  <div>
    <ul>
      <li v-for="msg in detailList" :key="msg.id">
        <!-- 跳转并携带params参数，to的字符串写法 -->
        <!-- <router-link :to="`/home/homemsg/detail/${msg.id}/${msg.title}`">跳转{{msg.title}}</router-link> -->

        <!-- 跳转并携带query参数，to的对象写法 -->
        <router-link :to="{ 
          name: 'detail',   //若使用 to 的对象写法，则不能使用 path 配置项，必须使用 name 配置！
          query: {
            id: msg.id,
            title: msg.title
          },
        }">跳转{{msg.title}}</router-link>
      </li>
      <router-view></router-view>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'VueTestHomeMsg',
  data () {
    return {
      detailList: [
        { id: '001', title: '标题一' },
        { id: '002', title: '标题二' },
        { id: '003', title: '标题三' }
      ]
    };
  },
};
</script>

<style scoped>
</style>