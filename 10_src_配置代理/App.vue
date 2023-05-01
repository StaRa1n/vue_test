<template>
  <div>
    <button @click="getStudent">获取学生信息</button>
    <button @click="getCar">获取车辆信息</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: 'VueTestApp',
  methods: {
    getStudent () {
      axios.get('http://localhost:8080/atstudents/Students').then(
        response => {
          console.log('请求成功了', response.data)
        },
        error => {
          console.log('请求失败了', error.message)
        }
      )
    },
    getCar () {
      axios.get('http://localhost:8080/atcar/Car').then(
        response => {
          console.log('请求成功了', response.data)
        },
        error => {
          console.log('请求失败了', error.message)
        }
      )
    }
  }
};
</script>