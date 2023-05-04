// 该文件专门用于创建整个应用的路由器
import VueRouter from "vue-router";

import About from '../pages/About'
import Home from '../pages/Home'
import HomeNews from '../pages/HomeNews'
import HomeMsg from '../pages/HomeMsg'


export default new VueRouter({
  routes:[
    {
      path:'/about',
      component: About
    },
    {
      path:'/home',
      component: Home,
      //配置子级路由
      children: [
        {
          path: 'HomeNews', //此处不要写'/HomeNews'
          component: HomeNews,
        },
        {
          path: 'HomeMsg',
          component: HomeMsg,
        }
      ]
    }
  ]
})