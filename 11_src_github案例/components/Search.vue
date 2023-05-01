<template>
  <div>
    <section class="jumbotron">
      <h3 class="jumbotron-heading">Search Github Users</h3>
      <div>
        <input type="text" placeholder="enter the name you search" v-model="keyword" />&nbsp;
        <button @click="searchUsers">Search</button>
      </div>
    </section>
  </div>
</template>

<script>
import PubSub from "pubsub-js";
import axios from 'axios';

export default {
  name: 'VueTestSearch',
  data () {
    return {
      keyword: ''
    };
  },
  methods: {
    searchUsers () {
      //发布加载中的页面信息
      PubSub.publish('Users', {
        isStart: false,
        isLording: true,
        errMsg: '',
        users: []
      })
      axios.get(`https://api.github.com/search/users?q=${this.keyword}`).then(
        response => {
          console.log('请求成功');
          //消息发布
          PubSub.publish('Users', {
            isLording: false,
            errMsg: '',
            users: response.data.items
          })
        },
        error => {
          console.log('请求失败', error.message);
          PubSub.publish('Users', {
            isStart: false,
            isLording: false,
            errMsg: error.message,
            users: []
          })
        }
      )
    }
  },
};
</script>

<style lang="scss" scoped>
</style>