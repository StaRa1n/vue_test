# vue_test


// mddir生成树形目录

## 文件结构
    |-- VUE_TEST
        |-- .gitignore
        |-- babel.config.js
        |-- jsconfig.json
        |-- package-lock.json
        |-- package.json
        |-- README.md
        |-- vue.config.js
        |-- public
        |   |-- favicon.ico
        |   |-- index.html
        |-- src
            |-- App.vue
            |-- main.js
            |-- assets
            |   |-- logo.png
            |-- components
                |-- SchoolName.vue
                |-- StudentName.vue


## ref属性
    1.用来给元素或子组件注册引用信息(id的代替者)
    2.用于获取html标签的真实dom元素，组件标签上的组件实例对象(vc)
    3.使用方法：
        <h1 ref="xxx">...</h1> 或 <School/ ref="xxx">
        获取: this.$refs.xxx