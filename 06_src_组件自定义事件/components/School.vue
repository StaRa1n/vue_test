<template>
  <div class="demo">
    <h2>学校名称:{{ name }}</h2>
    <h2>学校地址:{{ address }}</h2>
    <button @click="sendSchoolName">点我提示学校信息</button>
    <button @click="unbind">解绑showName事件</button>
  </div>
</template>

<script>

export default {
  name: 'VueTestSchool',
  data () {
    return {
      name: '江财',
      address: '南昌'
    };
  },
  methods: {
    sendSchoolName () {
      this.$emit('showName', this.name);
      this.$emit('demo');
    },
    unbind () {
      //解绑事件
      // this.$off('showName') //解绑一个事件
      // this.$off(['showName', 'demo']) //解绑多个事件
      this.$off() //解绑全部事件
    }
  }
};
</script>
