<template>
  <input v-model="yourInput" />
</template>

<script>
export default {
  name: "HomeAdd",
  emits: ["update:modelValue"],
  props: {
    modelValue: String,
  },

  computed: {
    yourInput: {
      get() {
        return this.modelValue;
      },
      set(value) {
        this.$emit("update:modelValue", value);
      },
    },
  },
}
</script>

<style scoped>

</style>