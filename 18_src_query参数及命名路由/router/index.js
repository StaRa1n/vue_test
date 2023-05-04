// 该文件专门用于创建整个应用的路由器
import VueRouter from "vue-router";

import About from '../pages/About'
import Home from '../pages/Home'
import HomeNews from '../pages/HomeNews'
import HomeMsg from '../pages/HomeMsg'
import Detail from '../pages/Detail'


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
          path: 'homenews', //此处不要写'/HomeNews'
          component: HomeNews,
        },
        {
          path: 'homemsg',
          component: HomeMsg,
          children: [{
            name: 'detail', //给路由命名
            path: 'detail',
            component: Detail
          }]
        }
      ]
    }
  ]
})