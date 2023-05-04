<template>
  <div>
    <ul>
      <li>消息编号:{{$route.query.id}}</li>
      <li>消息标题:{{$route.query.title}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'VueTestDetail',
  mounted () {
    console.log(this.$route.query)
  },
};
</script>

<style scoped>
</style>