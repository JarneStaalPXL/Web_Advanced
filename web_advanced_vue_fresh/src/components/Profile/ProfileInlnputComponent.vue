<template>
  <div>
    <h1>Enter firstname</h1>
    <input type="text" v-model="firstName" >
    <input type="button" @click="ConsoleTest()" value="SEND">
    <h1 id="nice">{{}}</h1>
  </div>

</template>z

<script>
export default {
  name: "ProfileInlnputComponent",
  data(){
    return {
      firstName : '',
    }
  },
  methods : {
    ConsoleTest : function (){
      localStorage.setItem('NAME',this.firstName);
      return this.firstName;
    }
  },
  mounted() {
    if (localStorage.name) {
      this.name = localStorage.name;
    }
  },
}
</script>

<style scoped>

</style>