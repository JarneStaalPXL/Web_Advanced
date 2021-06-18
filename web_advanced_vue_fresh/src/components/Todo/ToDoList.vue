<template>
  <ul>
    <li v-for="todo in todos" :key="todo">
      <ToDoItem :todo="todo" @add="removeTodo" />
    </li>
  </ul>
</template>

<script>
import ToDoItem from "./ToDoItem";
export default {
  name: "ToDoList",
  components: {ToDoItem},
  props: {
    todos: Array
  },
  computed: {
    myVar(){
      this.$store.commit('updateMyVar', 'newest value');
      //this.$store.commit('updateMyVar', {} []);
    }
  }
}
</script>

<style scoped>
  ul{
    list-style-type: none;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  li{
    display: flex;
  }
</style>