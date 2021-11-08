<template>
  <div>
    <div>
      <h1>Your email is</h1>
      <h1><i>{{emailValue}}</i></h1>
    </div>
    <div>
      <h1>Your password is</h1>
      <h1><i>{{pswValue}}</i></h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShowingComponent",
  props : ['emailValue','pswValue']
}
</script>

<style scoped>

</style>