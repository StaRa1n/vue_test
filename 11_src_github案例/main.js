//引入vue
import Vue from 'vue'
//引入App
import App from './App.vue'

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  render: h => h(App),
})