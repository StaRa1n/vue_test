<template>
  <div class="demo">
    <h2 @click="showName">学生姓名:{{ name }}</h2>
    <h2>性别:{{ sex }}</h2>
  </div>
</template>

<script>
import { mixin } from '../mixin.js';

export default {
  name: 'VueTestSchool',
  data() {
    return {
      name: '张三',
      sex: '男'
    };
  },
  mixins: [mixin]
};
</script>
  