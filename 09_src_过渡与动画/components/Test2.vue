<template>
  <div class="demo">
    <button @click="isShow = !isShow">显示/隐藏</button>
    <transition-group name="hello" appear>
      <h1 v-show="isShow" key="1">你好</h1>
      <h1 v-show="isShow" key="2">江财</h1>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: 'VueTestTest',
  data () {
    return {
      isShow: true
    };
  }
};
</script>

<style scoped>
h1 {
  background-color: #b33232;
}

.hello-enter,
.hello-leave-to {
  transform: translateX(-100%);
}

.hello-enter-active,
.hello-leave-active {
  transition: 0.5s linear;
}

.helle-enter-to,
.hello-leave {
  transform: translateX(0);
}
</style>