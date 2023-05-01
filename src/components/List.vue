<template>
  <div>
    <!-- 展示用户列表 -->
    <div class="row">
      <div v-for="user in info.users" :key="user.id" class="card">
        <a :href="user.html_url" target="_blank">
          <img :src="user.avatar_url" style='width: 100px' />
        </a>
        <p class="card-text">{{user.login}}</p>
      </div>
    </div>
    <!-- 展示初始信息 -->
    <h1 v-show="info.isStart">欢迎使用!</h1>
    <!-- 展示加载信息 -->
    <h1 v-show="info.isLording">正在加载...</h1>
    <!-- 展示错误信息 -->
    <h1 v-show="info.errMsg">{{info.errMsg}}</h1>
  </div>
</template>

<script>
import PubSub from "pubsub-js";

export default {
  name: 'VueTestList',

  data () {
    return {
      info: {
        isStart: true,
        isLording: false,
        errMsg: '',
        users: []
      }
    };
  },
  watch: {
    isStart: {

    }
  },
  mounted () {
    //消息订阅
    this.pid = PubSub.subscribe('Users', (msgName, data) => {
      console.log('list接收到了数据', data);
      this.info = { ...this.info, ...data }
    })
  },
  beforeDestroy () {
    //取消订阅
    PubSub.unsubscribe(this.pid)
  }
};
</script>

<style scoped>
.album {
  min-height: 50rem; /* Can be removed; just added for demo purposes */
  padding-top: 3rem;
  padding-bottom: 3rem;
  background-color: #f7f7f7;
}

.card {
  float: left;
  width: 33.333%;
  padding: 0.75rem;
  margin-bottom: 2rem;
  border: 1px solid #efefef;
  text-align: center;
}

.card > img {
  margin-bottom: 0.75rem;
  border-radius: 100px;
}

.card-text {
  font-size: 85%;
}
</style>