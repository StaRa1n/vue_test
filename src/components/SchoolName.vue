<template>
  <!-- 组件的结构 -->
  <div calss="demo" style="background-color: #aaa;">
    <h2>学校名称: {{ schoolName }}</h2>
    <h2>学校地址: {{ schooladdress }}</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      schoolName: '江财',
      schooladdress: '南昌'
    };
  },
}
</script>

<style>
.demo {
  background-color: aquamarine;
}
</style>