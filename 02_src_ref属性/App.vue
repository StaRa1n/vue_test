<template>
  <div>
    <h1 ref="title">欢迎报考江财</h1>
    <button @click="showDOM">点我提示上一个DOM元素</button>
    <School ref="sch"></School>
  </div>
</template>

<script>
import School from './components/School.vue'

export default {
  name: 'VueTestApp',
  components: {
    School
  },
  methods: {
    showDOM() {
      console.log(this.$refs.title); //真实DOM元素
      console.log(this.$refs.sch);//School组件的实例对象（vc）
    }
  }
};
</script>