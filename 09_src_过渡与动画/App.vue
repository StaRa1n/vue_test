<template>
  <div>
    <test />
    <hr>
    <test2 />
  </div>
</template>

<script>
import Test from './components/Test.vue'
import Test2 from './components/Test2.vue'

export default {
  name: 'VueTestApp',
  components: { Test, Test2 },
};
</script>