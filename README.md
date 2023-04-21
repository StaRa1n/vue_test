# vue_test


// mddir生成树形目录


## ref属性
    1.用来给元素或子组件注册引用信息(id的代替者)
    2.用于获取html标签的真实dom元素，组件标签上的组件实例对象(vc)
    3.使用方法：
        <h1 ref="xxx">...</h1> 或 <School/ ref="xxx">
        获取: this.$refs.xxx