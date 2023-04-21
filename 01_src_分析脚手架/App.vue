<template>
  <div>
    <SchoolName></SchoolName>
    <StudentName></StudentName>
  </div>
</template>

<script>
import SchoolName from './components/SchoolName.vue'
import StudentName from './components/StudentName.vue'

export default {
  name: 'App',
  components: {
    SchoolName,
    StudentName
  }
}
</script>

<style>
SchoolName {
  background-color: #9c2626;
}
</style>