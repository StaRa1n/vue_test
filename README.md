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


## 配置项props
    功能:让组件接收外部传来的数据
    传递:
        <School name="xxx"/>
    接收:
        (1)数组: 
            props: ['name']
        (2)对象(限制类型): 
            props: {
                name: String
            }
        (3)对象(限制类型,限制必要性,指定默认值):
            props:{
                name:{
                    type:String,
                    required:true,
                    default:'张三'
                }
            }
    * props只可读,如要进行修改,传入data中进行双向数据绑定 *