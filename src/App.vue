<template>
  <div>
    <h1>{{msg}}</h1>
    <!-- 通过父组件给子组件传递函数类型的props实现:子给父传递数据,($emit触发) -->
    <Student :getStudentName="getStudentName"></Student>
    <hr>
    <!-- 通过父组件给子组件绑定一个自定义事件实现:子给父传递数据,($emit触发) -->
    <!--第一种写法: 使用@或v-on,可修饰事件 -->
    <!-- <School @showName.once="getSchoolName"></School> -->
    <School v-on:showName="getSchoolName" @demo="d1"></School>

    <hr>
    <h2>ref实现</h2>
    <!--第二 种写法: 使用ref获取School组件的实例对象 -->
    <School ref="School"></School>
  </div>
</template>

<script>
import Student from './components/Student.vue'
import School from './components/School.vue'

export default {
  name: 'VueTestApp',
  components: {
    Student,
    School
  },
  data () {
    return {
      msg: '你好啊',
    };
  },
  methods: {
    //剩余参数以数组接受
    getSchoolName (name) {
      console.log(name);
    },
    getStudentName (name) {
      console.log(name);
    },
    d1 () {
      console.log('demo被调用了');
    }
  },
  mounted () {
    //App组件中未定义,但在School组件的$emit中定义了
    this.$refs.School.$on('showName', this.getSchoolName)
    // 触发一次
    // this.$refs.School.$once('showName', this.getSchoolName)
  }
};
</script>