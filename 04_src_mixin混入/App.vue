<template>
  <div>
    <School></School>
    <hr>
    <Student></Student>
  </div>
</template>

<script>
import Student from './components/Student.vue'
import School from './components/School.vue'

export default {
  name: 'VueTestApp',
  components: {
    Student,
    School
  }
};
</script>