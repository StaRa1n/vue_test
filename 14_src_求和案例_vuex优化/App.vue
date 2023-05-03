<template>
  <div id="app">
    <Count />
  </div>
</template>

<script>
import Count from './components/Count.vue'
export default {
  name: 'VueTestApp',
  components: { Count },
  data () {
    return {

    };
  },
  mounted () {
    console.log(this);
  }
};
</script >
