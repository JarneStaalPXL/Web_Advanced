<template>
  <div>
    <HomeContent :your-input="yourInput" />
    <HomeAdd v-model="yourInput" />
  </div>
</template>
<script>
import HomeContent from "../../components/home/HomeContent";
import HomeAdd from "../../components/home/HomeAdd";
export default {
  name: "HomePage",
  components: {HomeAdd, HomeContent},
  data: () => ({
    yourInput: "some input",
  }),
}
</script>

<style scoped>

</style>