<template>
  <div class="todo-footer">
    <label>
      <!-- <input type="checkbox" :checked="isAll" @change="check" /> -->
      <input type="checkbox" v-model="isAll" />
    </label>
    <span>
      <span>已完成{{completed}}</span> / 全部{{todos.length}}
    </span>
    <button @click="clear">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  name: 'WorkspaceJsonToDoFooter',
  props: ['todos', 'checkAll', 'clear'],
  computed: {
    completed () {
      return this.todos.reduce((pre, cur) => pre + (cur.done ? 1 : 0), 0)
    },
    isAll: {
      get () {
        return this.todos.length === this.completed && this.todos.length > 0
      },
      set (value) {
        this.checkAll(value)
      }
    },
  }
};
</script>

<style scoped>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>