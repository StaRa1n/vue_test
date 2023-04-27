<template>
  <div class="demo">
    <h2>学生姓名:{{ name }}</h2>
    <h2>性别:{{ sex }}</h2>
    <button @click="sendStudentName">点我提示学生信息</button>
  </div>
</template>

<script>

export default {
  name: 'VueTestSchool',
  props: ['getStudentName'],
  data () {
    return {
      name: '张三',
      sex: '男'
    };
  },
  methods: {
    sendStudentName () {
      this.getStudentName(this.name)
    }
  }
};
</script>
  