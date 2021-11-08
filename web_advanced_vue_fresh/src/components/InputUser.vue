<template>
<input type="text" v-model="name">
<input type="text" v-model="password">
  <p>Hello <b>{{ name }}</b></p>
  <p>Password is <b>{{ password }}</b></p>
</template>

<script>
export default {
  name: "InputUser",
  data(){
    return {
      name : '',
      password : ''
    }
  }
}
</script>

<style scoped>

</style>