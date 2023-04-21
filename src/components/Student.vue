<template>
  <div class="demo">
    <h1>{{ msg }}</h1>
    <h2>学校名称：{{ name }}</h2>
    <h2>学校地址：{{ sex }}</h2>
    <h2>学校地址：{{ age }}</h2>
  </div>
</template>

<script>
export default {
  name: 'VueTestSchool',

  data() {
    return {
      msg: '我是一个江财的学生',
    };
  },
  // props: ['name', 'sex', 'age'] //简单接受

  //接收的同时对数据进行类型限制
  /* props: {
    name: String,
    age: Number,
    sex: String,
  } */

  //接收的同时对数据：进行类型限制+默认值的指定+必要性的限制
  props: {
    name: {
      type: String,
      required: true
    },
    sex: {
      type: String,
      required: true
    },
    age: {
      type: Number,
      default: 20
    }
  }
};
</script>
