<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <!-- 通过自定义组件获取用户输入的值 -->
        <TodoHeader @addTodo="addTodo" />
        <!-- 将checkTodo传入List再传入Items -->
        <ToDoList :todos="todos" :checkTodo="checkTodo" :deleteTodo="deleteTodo" />
        <!-- 自定义组件 -->
        <ToDoFooter :todos="todos" @checkAll="checkAll" @clearAllDone="clearAllDone" />
      </div>
    </div>
  </div>
</template>

<script>
import ToDoFooter from './components/ToDoFooter.vue';
import TodoHeader from './components/ToDoHeader.vue';
import ToDoList from './components/ToDoList.vue';

export default {
  name: 'VueTestApp',
  components: {
    TodoHeader,
    ToDoList,
    ToDoFooter
  },
  data () {
    return {
      todos: JSON.parse(localStorage.getItem('todos')) || []
    };
  },
  methods: {
    // 再todos最前添加todo
    addTodo (todo) {
      this.todos.unshift(todo)
    },
    //勾选或取消勾选todo
    checkTodo (id) {
      // for (let i = 0; i < this.todos.length; i++) {
      //   if (id === this.todos[i].id) this.todos[i].done = !this.todos[i].done
      // }
      this.todos.forEach((todo) => {
        if (id === todo.id) todo.done = !todo.done
      })
    },
    //删除todo
    deleteTodo (id) {
      if (confirm('确定删除?')) {
        this.todos.splice(this.todos.findIndex((todo) => todo.id === id), 1)
      }
    },
    //全选
    checkAll (isAll) {
      this.todos.forEach((todo) => todo.done = isAll)
    },
    //清除已完成
    clearAllDone () {
      if (confirm('确定删除?')) {
        this.todos = this.todos.filter((todo) => todo.done !== true)
      }
    }
  },
  watch: {
    todos: {
      deep: true,
      handler (value) {
        localStorage.setItem('todos', JSON.stringify(value))
      }
    }
  }
};
</script>

<style>
/*base*/
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}

.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>