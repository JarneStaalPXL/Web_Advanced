<template>
  <router-link to="/profileinput">Input User</router-link>|
  <h1>Your first name is {{this.GetName}}</h1>
</template>

<script>
import ProfilePage from "../../views/ProfilePage";

export default {
  name: "ProfileComponent",
  components: {ProfilePage},
  methods : {
    GetName : function (){
      return localStorage.getItem('NAME').toString();
    }
  },
}
</script>

<style scoped>

</style>