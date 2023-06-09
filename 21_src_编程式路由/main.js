//引入vue
import Vue from 'vue'
//引入App
import App from './App.vue'

import VueRouter from "vue-router";

import router from './router'
//关闭生产提示
Vue.config.productionTip = false;

Vue.use(VueRouter)

new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})