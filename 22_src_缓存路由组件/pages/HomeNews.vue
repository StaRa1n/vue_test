<template>
  <div>
    <ul>
      <li>HomeNew1 <input type="text"> </li>
      <li>HomeNew2 <input type="text"> </li>
      <li>HomeNew3 <input type="text"> </li>
      <li>HomeNew4 <input type="text"> </li>
      <li>HomeNew5 <input type="text"> </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'VueTestHomeNews',
  beforeDestroy () {
    console.log('News组件即将被销毁了');
  }
};
</script>

<style scoped>
</style>