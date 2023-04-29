<template>
  <div class="demo">
    <h2>学校名称:{{ name }}</h2>
    <h2>学校地址:{{ address }}</h2>
    <h2 v-show="StudentName">学生姓名:{{StudentName}}</h2>
  </div>
</template>

<script>
import { PubSub } from "pubsub-js";
export default {
  name: 'VueTestSchool',
  data () {
    return {
      name: '江财',
      address: '南昌',
      StudentName: ''
    };
  },
  mounted () {
    this.pid = PubSub.subscribe('getStudentName', (msgName, data) => {
      this.StudentName = data
      console.log(data);
    })
  },
  beforeDestroy () {
    PubSub.unsubscribe(this.pid)
  }
};
</script>
