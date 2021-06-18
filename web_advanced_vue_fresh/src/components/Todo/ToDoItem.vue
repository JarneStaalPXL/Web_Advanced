<template>
  <p>{{todo}}</p>
  <input type="button" class="btn_remove" value="X"  />
</template>

<script>
export default {
  name: "ToDoItem",
  props: {
    todo: String
  },
}
</script>

<style scoped>
 p{
   width: 300px
 }
</style>