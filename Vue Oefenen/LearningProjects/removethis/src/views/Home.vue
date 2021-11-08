<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <SharingComponent v-model="berichtje"/>
    <ShowingComponent :berichtje="berichtje" />
  </div>
</template>

<script>
// @ is an alias to /src

import SharingComponent from "../../../inputsharing/src/components/SharingComponent";
import ShowingComponent from "../../../inputsharing/src/components/ShowingComponent";
export default {
  name: 'Home',
  components: {
    ShowingComponent,
    SharingComponent
  },
  data(){
    return {
      berichtje : ''
    }
  }
}
</script>
