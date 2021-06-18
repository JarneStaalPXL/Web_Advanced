<template>
  <Header :todos="todos"/>
  <ToDoList :todos="todos" />
  <SubmitForm @add="addTodo"/>
</template>

<script>
import Header from "./Header";
import ToDoList from "./ToDoList";
import SubmitForm from "./SubmitForm";

export default {
  name: "ToDoComponent",
  components: {SubmitForm, ToDoList, Header},
  data(){
    return {
      todos: []
    }
  },
  methods : {
    addTodo(todo){
      this.todos.push(todo);
    },
    removeTodo(todo){
      this.todos.splice()
    }
  }
}
</script>

<style scoped>

</style>