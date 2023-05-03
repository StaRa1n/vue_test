<template>
  <div id="app">
    <Count />
    <hr>
    <Persons />
  </div>
</template>

<script>
import Count from './components/Count.vue'
import Persons from "./components/Persons.vue";

export default {
  name: 'VueTestApp',
  components: { Count, Persons },
  data () {
    return {

    };
  },
  mounted () {
    console.log(this);
  }
};
</script >
