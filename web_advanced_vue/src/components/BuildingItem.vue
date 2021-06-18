<template>
  <div class="building-item">
    <h2>{{ building.title }}</h2>
    <label>Gold: {{ building.gold }}</label>
    <label>resources needed: {{ building.steel }} steel, {{ building.ammunition }} ammunition</label>
    <input type="button" value="Purchase building" @click="purchaseBuilding" />
  </div>
</template>
<script>
export default {
  name: "BuildingItem",
  props: {
    building: Object
  },
  methods:{
    purchaseBuilding(){
      alert('Proficiat u heeft een ' + this.building.title + ' gebouwd');
    }
  },
  data() {
    return {
    }
  }
}
</script>
<style scoped>
.building-item {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-evenly;
}
</style>