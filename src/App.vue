<template>
  <router-link to="/home">Home</router-link>
  <router-view></router-view>
  <div>
    <form v-on:submit.prevent="addNewTodo">
      <input v-model="newTodoText" type="text">
      <button>Add</button>
    </form>
    <ul>
      <TodoItem
          v-for="(todo,index) in todos"
          :key="todo.id"
          :title="todo.title"
          @remove="todos.splice(index,1)"
      ></TodoItem>
    </ul>
  </div>
  <TodoItem></TodoItem>
</template>

<script>
import TodoItem from "./components/TodoItem";

export default {
  name: 'App',
  components: {
    TodoItem
  },provide:{
    user:'admin'
  },methods:{
    addNewTodo(){
      this.todos.push({
        id: this.nextTodoId++,
        title: this.newTodoText
      })
      this.newTodoText = ''
    }
  },data(){
    return {todos: [],newTodoText:'',nextTodoId: 1}; //json
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
