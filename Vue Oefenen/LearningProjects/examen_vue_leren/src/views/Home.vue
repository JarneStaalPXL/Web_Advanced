<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div>
      <h1>Write something amazing</h1>
      <Sharing v-model="bericht" />
      <Showing :bericht="bericht" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Sharing from "../components/Sharing";
import Showing from "../components/Showing";

export default {
  name: 'Home',
  components: {
    Showing,
    Sharing,
  },
  data(){
    return {
      bericht: '',
    }
  }
}
</script>