<template>
<div>
  <div class="email">
    <h3>Emailadres</h3>
    <input id="eml" :value="emailValue" @input="TransferData(emailValue)"/>
  </div>
  <div class="password">
    <h3>Wachtwoord</h3>
    <input :value="pswValue" @input="TransferData(pswValue)"/>
  </div>
</div>
</template>

<script>
export default {
  name: "SharingComponent",
  props :{
    emailValue : String,
    pswValue : String
  },
  methods : {
    TransferData(value){
      $emit(`update:${value}`, [`${value}`])
    }
  }
}
</script>

<style scoped>
.email, .password {
  display: flex;
  justify-content: center;
}

.email h3,.password h3 {
  margin: 20px;
}
</style>