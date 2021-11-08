<template>
  <div>
    <input @input="$emit('update:modelValue', $event.target.value)" />
  </div>
</template>
<script>
export default {
  name: "Sharing",
  props: {
    modelValue: ''
  }
}
</script>

<style scoped>
input {
  width: 20%;
  text-align: center;
}
</style>