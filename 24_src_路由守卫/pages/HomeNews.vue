<template>
  <div>
    <ul>
      <li :style={opacity}>江西财经大学</li>
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
  data () {
    return {
      opacity: 1,
    };
  },
  /* beforeDestroy () {
    console.log('News组件即将被销毁了');
    clearInterval(this.timer)
  }, */
  /* mounted () {
    const timer = setInterval(() => {
      console.log('1');
      this.opacity -= 0.01
      if (this.opacity <= 0) this.opacity = 1
    }, 16)
  } */

  // 路由组件被激活时触发
  activated () {
    console.log('News组件被激活了');
    this.timer = setInterval(() => {
      console.log('1');
      this.opacity -= 0.01
      if (this.opacity <= 0) this.opacity = 1
    }, 16)
  },

  //路由组件失活时触发
  deactivated () {
    console.log('News组件失活');
    clearInterval(this.timer)
  }
};
</script>

<style scoped>
</style>