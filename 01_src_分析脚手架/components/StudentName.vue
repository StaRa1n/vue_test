<template>
  <!-- 组件的结构 -->
  <div calss="student">
    <h2>学生姓名: {{ studentName }}</h2>
    <h2>年龄: {{ age }}</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      studentName: '张',
      age: 19
    };
  },
}
</script>

<style>
.student {
  font-size: 30px;
}
</style>