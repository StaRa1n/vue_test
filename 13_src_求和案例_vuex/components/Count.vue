<template>
  <div>
    <h1>当前求和为:{{$store.state.sum}}</h1>
    <h3>当前值乘10为{{$store.getters.bigSum}}</h3>
    <h3>我在{{$store.state.school}},学习{{$store.state.majoy}}</h3>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementOdd">当前为奇数再加</button>
    <button @click="incrementWait">等一等再加</button>
  </div>
</template>

<script>
export default {
  name: 'VueTestCount',
  data () {
    return {
      n: 1,
    };
  },
  methods: {
    increment () {
      this.$store.commit('ADD', this.n)
    },
    decrement () {
      this.$store.commit('MINUS', this.n)
    },
    incrementOdd () {
      this.$store.dispatch('addOdd', this.n)
    },
    incrementWait () {
      this.$store.dispatch('addWait', this.n)
    },
  },
};
</script>

<style lang="css" scoped>
</style>