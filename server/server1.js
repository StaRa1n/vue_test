//1. 引入express
const express = require('express')

//2. 创建应用对象
const app = express()

//3. 创建路由对象
//request 请求报文的封装
//response 响应报文的封装
//axios 服务
app.all('/Students', (request, response) => {
  //设置响应头, 设置允许跨域
  response.setHeader('Access-Control-Allow-Origin', '*')
  response.setHeader('Access-Control-Allow-Headers','*')
  const Students = JSON.stringify({
    school: {
      name: '江财',
      address: '南昌'
    },
    students: {
      name: '张三',
      age: 20
    }
  })
  //设置响应体
  response.send(Students)
})


//4. 监听端口启动服务
app.listen(5000, () => {
  console.log('服务已启动, 5000端口监听中');
})