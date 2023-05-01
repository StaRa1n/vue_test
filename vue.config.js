const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
  /* devServer: {
    proxy: 'http://localhost:5000' //配置代理服务器
  } */
  devServer: {
    proxy: {
      '/atstudents': {
        target: 'http://localhost:5000',
        pathRewrite:{'^/atstudents':''}
        // ws: true, //用于支持websocket
        // changeOrigin: true //用于控制请求头中的host值
      },
      '/atcar': {
        target: 'http://localhost:5001',
        pathRewrite:{'^/atcar':''}
        // ws: true,
        // changeOrigin: true
      },
    }
    
  }
})
