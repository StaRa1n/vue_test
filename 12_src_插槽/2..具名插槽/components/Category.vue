<template>
  <div class="category">
    <h3>{{title}}分类</h3>
    <!-- 定义一个插槽(等待组件使用者填充) -->
    <slot name="center">我是默认值,当使用者没有传递结构时我会出现</slot>
    <slot name="footer">我是默认值,当使用者没有传递结构时我会出现</slot>
  </div>
</template>

<script>

export default {
  name: 'VueTestList',
  props: ['title'],
};
</script>

<style scoped>
.category {
  width: 200px;
  height: 300px;
  background-color: #58bbe9;
}
h3 {
  background-color: #d7d35e;
  text-align: center;
}
</style>