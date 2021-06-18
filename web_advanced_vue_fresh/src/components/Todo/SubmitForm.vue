<template>
  <input type="text" v-model="todo" />
  <input type="button" value="Add todo" @click="addTodo">
</template>

<script>
export default {
  name: "SubmitForm",
  data(){
    return{
      todo : ''
    }
  },
  methods : {
    addTodo(){
      this.$emit('add', this.todo); //Created add eventHandler and shares prop to share it to ToDoComponent
    }
  }
}
</script>

<style scoped>

</style>