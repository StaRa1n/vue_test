<template>
  <div>
    <Student name="张三" sex="男" :age="16"></Student>
    <hr>
    <Student name="李四" sex="女"></Student>
  </div>
</template>

<script>
import Student from './components/Student.vue'

export default {
  name: 'VueTestApp',
  components: {
    Student
  },

};
</script>