<template>
  <div>
    <h1>人员列表</h1>
    <input type="text" placeholder="请输入名字" v-model="personName">
    <button @click="addPerson(personName)">添加</button>
    <ul>
      <li v-for=" person in persons" :key="person.id">{{person.name}}</li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'VueTestPerson',
  data () {
    return {
      personName: ''
    };
  },
  methods: {
    ...mapMutations({ addPerson: 'addPerson' })
  },
  computed: {
    ...mapState({ persons: 'persons' })
  }
};
</script>

<style scoped>
</style>