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
            name: 'detail',
            path:'detail',  //接收params参数时需要使用占位符声明
            component: Detail,

            //props的第一种写法，值为对象，该对象中的所有key-value都会以props的形式传给Detail组件。
            // props:{a:1,b:'hello'}

            // props的第二种写法，值为布尔值，若布尔值为真，就会把该路由组件收到的所有params参数，以props的形式传给Detail组件。
            // props:true

            //props的第三种写法，值为函数
            //使用params接收时path需要有占位符声明
            props(route){
              return {
                id: route.query.id,
                title: route.query.title,
              }
            }
          }]
        }
      ]
    }
  ]
})