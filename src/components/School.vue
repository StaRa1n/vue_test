<template>
  <div class="demo">
    <h2 @click="showName">学校名称:{{ name }}</h2>
    <h2>学校地址:{{ address }}</h2>
  </div>
</template>

<script>
import { mixin } from '../mixin.js';

export default {
  name: 'VueTestSchool',
  data() {
    return {
      name: '江财',
      address: '南昌'
    };
  },
  mixins: [mixin]
};
</script>
