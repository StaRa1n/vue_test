# vue_test

## 文件结构

> // mddir 生成树形目录

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

## ref 属性

1. 用来给元素或子组件注册引用信息(id 的代替者)
2. 用于获取 html 标签的真实 dom 元素，组件标签上的组件实例对象(vc)
3. 使用方法：`<h1 ref="xxx">...</h1>` 或 `<School/ ref="xxx">`
4. 获取: `this.$refs.xxx`

## 配置项 props

1. 功能：让组件接收外部传过来的数据

2. 传递数据：`<Demo name="xxx"/>`

3. 接收数据：

   1. 第一种方式（只接收）：`props:['name'] `

   2. 第二种方式（限制类型）：`props:{name:String}`

   3. 第三种方式（限制类型、限制必要性、指定默认值）：

      ```js
      props:{
      	name:{
      	type:String, //类型
      	required:true, //必要性
      	default:'老王' //默认值
      	}
      }
      ```

   > 备注：props 是只读的，Vue 底层会监测你对 props 的修改，如果进行了修改，就会发出警告，若业务需求确实需要修改，那么请复制 props 的内容到 data 中一份，然后去修改 data 中的数据。

## mixin(混入)

1. 功能:可以把多个组件公用的配置提取成一个混入对象
2. 使用方式:

   1. 定义混和,如:

   ```
   {
     data(){...},
     method:{...}
   }
   ```

   2. 使用混合
      (1) 全局混入: `Vue.mixin(xxx)`
      (2) 局部混入: `mixins:['xxx']`
