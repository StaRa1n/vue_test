<template>
  <div>
    <ul>
      <li>消息编号:{{id}}</li>
      <li>消息标题:{{title}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'VueTestDetail',
  props: ['id', 'title'],
  mounted () {
    console.log(this.$route.query)
  },
};
</script>

<style scoped>
</style>