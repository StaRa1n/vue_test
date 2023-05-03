<template>
  <div>
    <h1>当前求和为:{{$store.state.countAbout.sum}}</h1>
    <h3>当前值乘10为{{bigSum}}</h3>
    <h3>我在{{school}},学习{{majoy}}</h3>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="add(n)">+</button>
    <button @click="minus(n)">-</button>
    <button @click="addOdd(n)">当前为奇数再加</button>
    <button @click="addWait(n)">等一等再加</button>
    <h2>人员列表</h2>
    <ul>
      <li v-for=" person in persons" :key="person.id">{{person.name}}</li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'

export default {
  name: 'VueTestCount',
  data () {
    return {
      n: 1,
    };
  },
  methods: {
    //借助mapMutations生成对应方法,方法会调用commit去联系mutations
    ...mapMutations('countAbout', { add: 'ADD', minus: 'MINUS' }),

    ...mapActions('countAbout', { addOdd: 'addOdd', addWait: 'addWait' })
  },
  computed: {
    //借助mapState生成计算属性,从state中读取数据(对象写法)
    ...mapState('countAbout', { school: 'school', majoy: 'majoy', persons: 'persons' }),
    ...mapState('personAbout', { persons: 'persons' }),

    //借助mapGetters生成计算属性,从Getters中读取数据(对象写法)
    ...mapGetters('countAbout', { bigSum: 'bigSum' }),

  }
};
</script>

<style lang="css" scoped>
</style>