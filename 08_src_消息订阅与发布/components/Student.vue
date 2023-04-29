<template>
  <div class="demo">
    <h2>学生姓名:{{ name }}</h2>
    <h2>性别:{{ sex }}</h2>
    <button @click="sendStudentName">把学生姓名给School组件</button>
  </div>
</template>

<script>
import { PubSub } from "pubsub-js";
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
      PubSub.publish('getStudentName', this.name)
    }
  },
};
</script>
  