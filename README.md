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

## 组件的自定义事件

1. 一种组件间通信的方式，适用于：<strong style="color:red">子组件 ===> 父组件</strong>

2. 使用场景：A 是父组件，B 是子组件，B 想给 A 传数据，那么就要在 A 中给 B 绑定自定义事件（<span style="color:red">事件的回调在 A 中</span>）。

3. 绑定自定义事件：

   1. 第一种方式，在父组件中：`<Demo @getName="test"/>` 或 `<Demo v-on:getName="test"/>`

   2. 第二种方式，在父组件中：

      ```js
      <Demo ref="demo"/>
      ......
      mounted(){
         this.$refs.xxx.$on('getName',this.test)
      }
      ```

   3. 若想让自定义事件只能触发一次，可以使用`once`修饰符，或`$once`方法。

4. 触发自定义事件：`this.$emit('getName',数据)`

5. 解绑自定义事件`this.$off('getName')`

6. 组件上也可以绑定原生 DOM 事件，需要使用`native`修饰符。

7. 注意：通过`this.$refs.xxx.$on('atguigu',回调)`绑定自定义事件时，回调<span style="color:red">要么配置在 methods 中</span>，<span style="color:red">要么用箭头函数</span>，否则 this 指向会出问题！

## 消息订阅与发布

1.  一种组件间通信的方式，适用于<span style="color:red">任意组件间通信</span>。

2.  使用步骤：

    1.  安装 pubsub：`npm i pubsub-js`

    2.  引入: `import pubsub from 'pubsub-js'`

    3.  接收数据：A 组件想接收数据，则在 A 组件中订阅消息，订阅的<span style="color:red">回调留在 A 组件自身。</span>

        ```js
        methods(){
          demo(data){......}
        }
        ......
        mounted() {
          this.pid = pubsub.subscribe('xxx',this.demo) //订阅消息
        }
        ```

    4.  提供数据：`pubsub.publish('xxx',数据)`

    5.  最好在 beforeDestroy 钩子中，用`PubSub.unsubscribe(pid)`去<span style="color:red">取消订阅。</span>

## Vue 封装的过度与动画

1. 作用：在插入、更新或移除 DOM 元素时，在合适的时候给元素添加样式类名。

2. 写法：

   1. 准备好样式：

      - 元素进入的样式：
        1. v-enter：进入的起点
        2. v-enter-active：进入过程中
        3. v-enter-to：进入的终点
      - 元素离开的样式：
        1. v-leave：离开的起点
        2. v-leave-active：离开过程中
        3. v-leave-to：离开的终点

   2. 使用`<transition>`包裹要过度的元素，并配置 name 属性：

      ```vue
      <transition name="hello">
      	<h1 v-show="isShow">你好啊！</h1>
      </transition>
      ```

   3. 备注：若有多个元素需要过度，则需要使用：`<transition-group>`，且每个元素都要指定`key`值。

## vue 脚手架配置代理

#### 方法一

​ 在 vue.config.js 中添加如下配置：

```js
devServer: {
  proxy: 'http://localhost:5000'
}
```

说明：

1. 优点：配置简单，请求资源时直接发给前端（8080）即可。
2. 缺点：不能配置多个代理，不能灵活的控制请求是否走代理。
3. 工作方式：若按照上述配置代理，当请求了前端不存在的资源时，那么该请求会转发给服务器 （优先匹配前端资源）

#### 方法二

​ 编写 vue.config.js 配置具体代理规则：

```js
module.exports = {
  devServer: {
    proxy: {
      '/api1': {
        // 匹配所有以 '/api1'开头的请求路径
        target: 'http://localhost:5000', // 代理目标的基础路径
        changeOrigin: true,
        pathRewrite: { '^/api1': '' },
      },
      '/api2': {
        // 匹配所有以 '/api2'开头的请求路径
        target: 'http://localhost:5001', // 代理目标的基础路径
        changeOrigin: true,
        pathRewrite: { '^/api2': '' },
      },
    },
  },
}
/*
   changeOrigin设置为true时，服务器收到的请求头中的host为：localhost:5000
   changeOrigin设置为false时，服务器收到的请求头中的host为：localhost:8080
   changeOrigin默认值为true
*/
```

说明：

1. 优点：可以配置多个代理，且可以灵活的控制请求是否走代理。
2. 缺点：配置略微繁琐，请求资源时必须加前缀。

## 插槽

1. 作用：让父组件可以向子组件指定位置插入 html 结构，也是一种组件间通信的方式，适用于 <strong style="color:red">父组件 ===> 子组件</strong> 。

2. 分类：默认插槽、具名插槽、作用域插槽

3. 使用方式：

   1. 默认插槽：

      ```vue
      父组件中：
      <Category>
        <div>html结构1</div>
      </Category>
      子组件中：
      <template>
        <div>
          <!-- 定义插槽 -->
          <slot>插槽默认内容...</slot>
        </div>
      </template>
      ```

   2. 具名插槽：

      ```vue
      父组件中：
      <Category>
        <template slot="center">
          <div>html结构1</div>
        </template>
      
        <template v-slot:footer>
          <div>html结构2</div>
        </template>
      </Category>
      子组件中：
      <template>
        <div>
          <!-- 定义插槽 -->
          <slot name="center">插槽默认内容...</slot>
          <slot name="footer">插槽默认内容...</slot>
        </div>
      </template>
      ```

   3. 作用域插槽：

      1. 理解：<span style="color:red">数据在组件的自身，但根据数据生成的结构需要组件的使用者来决定。</span>（games 数据在 Category 组件中，但使用数据所遍历出来的结构由 App 组件决定）

      2. 具体编码：
         默认写法`v-slot:default="scopeData"`
         简写写法`v-slot="scopeData"`<span style="color:red">&emsp;&emsp; 注意混淆:具名插槽`v-slot:name`</span>
         作用域+具名+解构赋值写法:`v-slot:foot="{games}`

      ```vue
      父组件中：
      <Category>
        <template v-slot:default="scopeData">
        <!-- 生成的是ul列表 -->
          <ul>
            <li v-for="g in scopeData.games" :key="g">{{g}}</li>
          </ul>
        </template>
      </Category>

      <Category>
        <template v-slot="scopeData">
          <!-- 生成的是h4标题 -->
          <h4 v-for="g in scopeData.games" :key="g">{{g}}</h4>
        </template>
      </Category>

      子组件中：
      <template>
        <div>
          <slot :games="games"></slot>
        </div>
      </template>

      <script>
      export default {
        name: 'Category',
        props: ['title'],
        //数据在子组件自身
        data() {
          return {
            games: ['红色警戒', '穿越火线', '劲舞团', '超级玛丽'],
          }
        },
      }
      </script>
      ```
