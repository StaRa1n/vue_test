<template>
  <div>
    <h2>我是Home的内容</h2>
    <ul class="nav nav-tabs">
      <li>
        <router-link class="list-group-item" active-class="active" to="/home/homenews">HomeNews</router-link>
      </li>
      <li>
        <router-link class="list-group-item" active-class="active" to="/home/homemsg">HomeMsg</router-link>
      </li>
    </ul>
    <div class="col-xs-6">
      <div class="panel">
        <div class="panel-body">
          <!-- 指定组件的呈现位置 -->
          <!-- include的值为vue组件的name属性 -->
          <keep-alive include="VueTestHomeNews"> 
            <router-view></router-view>
          </keep-alive>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'VueTestHome',
};
</script>

<style scoped>
</style>