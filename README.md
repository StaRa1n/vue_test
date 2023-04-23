# vue_test



## 文件结构
>// mddir生成树形目录

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
*props只可读,如要进行修改,传入data中进行双向数据绑定*

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

## mixin(混入)
	功能:可以把多个组件公用的配置提取成一个混入对象
	使用方式:
		1.定义混和,如:
			{
				data(){...},
				method:{...}
			}
		2.使用混合
			(1)全局混入: Vue.mixin(xxx)
			(2)局部混入: mixins:['xxx']
