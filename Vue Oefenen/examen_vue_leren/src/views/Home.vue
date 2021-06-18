<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div>
      <h1>Hello there</h1>
      <Sharing v-model="bericht" />
      <Showing :welcome="bericht" />
      <p>The Sharing component shared <br><b>{{bericht}}</b></p>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Sharing from "../components/Sharing";
import Showing from "../components/Showing";

export default {
  name: 'Home',
  props : {
    welcome : ''
  },
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
