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
        <button @click="push(msg)">push查看</button>
        <button @click="replace(msg)">replace查看</button>
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
  methods: {
    push (msg) {
      this.$router.push({
        name: 'detail',
        query: {
          id: msg.id,
          title: msg.title
        }
      })
    },
    replace (msg) {
      this.$router.replace({
        name: 'detail',
        query: {
          id: msg.id,
          title: msg.title
        }
      })
    }
  },
  //进入守卫：通过路由规则，进入该组件时被调用
  beforeRouteEnter (to, from, next) {
    console.log('组件路由进入之前', to, from);
    next()
  },
  //离开守卫：通过路由规则，离开该组件时被调用
  beforeRouteLeave (to, from, next) {
    console.log('组件路由离开之前', to, from);
    next()
  }
};
</script>

<style scoped>
</style>