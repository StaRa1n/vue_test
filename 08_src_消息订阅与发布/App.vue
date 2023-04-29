<template>
  <div>
    <!-- 接收子传父的数据 -->
    <h1>{{msg}}</h1>
    <School />
    <hr>
    <Student />
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
      schoolName: ''
    };
  }
};
</script>