// 该文件专门用于创建整个应用的路由器
import VueRouter from "vue-router";

import About from '../pages/About'
import Home from '../pages/Home'
import HomeNews from '../pages/HomeNews'
import HomeMsg from '../pages/HomeMsg'
import Detail from '../pages/Detail'


const router = new VueRouter({
  routes:[
    {
      name: 'guanyu',
      path:'/about',
      component: About,
      meta: {title: '关于'},
    },
    {
      name: 'zhuye',
      path:'/home',
      component: Home,
      meta: {title: '主页'},
      //配置子级路由
      children: [
        {
          name: 'homenews',
          path: 'homenews', //此处不要写'/HomeNews'
          component: HomeNews,
          meta: {isAuth:true, title: '新闻'} // 路由元信息 添加自定义数据
        },
        {
          name: 'HomeMsg',
          path: 'homemsg',
          component: HomeMsg,
          meta: {isAuth:true, title: '消息'},
          children: [{
            name: 'detail',
            path:'detail',  //接收params参数时需要使用占位符声明
            component: Detail,
            meta: {title: '详情'},
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

//全局前置守卫：初始化时执行、每次路由切换前执行
router.beforeEach((to, from, next) => {
  console.log('前置路由守卫', to, from);
  if (to.meta.isAuth) {
    if (localStorage.getItem('school') === 'jiangcai') {
      next()
    } else {
      alert( localStorage.getItem('school') + '学校没有权限')
    }
  } else {
    next()
  }
})

//全局后置守卫：初始化时执行、每次路由切换后执行 (改变页面标题)
router.afterEach((to, from, next) => {
  console.log('后置路由守卫', to, from);
  if (to.meta.title) {
    document.title = to.meta.title
  }else {
    document.title = 'Vue_test'
  }
})

export default router