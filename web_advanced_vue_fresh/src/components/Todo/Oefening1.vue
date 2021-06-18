<template>
  <ToDoComponent></ToDoComponent>
</template>

<script>
import TodoList from "./ToDoList";
import SubmitForm from "./SubmitForm";
import Header from "./Header";
import ToDoComponent from "./ToDoComponent";
export default {
  name: "Oefening1",
  components: {ToDoComponent, Header, SubmitForm, TodoList}
}
</script>

<style scoped>

</style>