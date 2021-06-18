<template>
<h1>You have {{ todos.length }} todo's</h1>
</template>

<script>
export default {
  name: "Header",
  props: {
    todos: Array
  }
}
</script>

<style scoped>

</style>