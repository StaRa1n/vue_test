<template>
  <div>
    <h2>我是Home的内容</h2>
    <ul class="nav nav-tabs">
      <li>
        <router-link class="list-group-item" active-class="active" to="/Home/HomeNews">HomeNews</router-link>
      </li>
      <li>
        <router-link class="list-group-item" active-class="active" to="/Home/HomeMsg">HomeMsg</router-link>
      </li>
    </ul>
    <div class="col-xs-6">
      <div class="panel">
        <div class="panel-body">
          <!-- 指定组件的呈现位置 -->
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HomeMsgVue from './HomeMsg.vue';
import HomeNews from './HomeNews.vue';

export default {
  name: 'VueTestHome',
};
</script>

<style scoped>
</style>