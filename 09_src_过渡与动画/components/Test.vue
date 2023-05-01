<template>
  <div class="demo">
    <button @click="isShow = !isShow">显示/隐藏</button>
    <transition name="hello" appear>
      <h1 v-show="isShow">你好</h1>
    </transition>
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

.hello-enter-active {
  animation: atguigu 1s  ease-in;
}

.hello-leave-active {
  animation: atguigu 1s ease-in reverse;
}

@keyframes atguigu {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0px);
  }
}
</style>