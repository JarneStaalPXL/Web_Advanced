<template>
  <div class="home">
    <ul>
      <li v-for="building in buildings" :key="building.title" >
        <BuildingItem :building="building" />
      </li>
    </ul>
  </div>
</template>
<script>
// @ is an alias to /src
import BuildingItem from "../components/BuildingItem";
export default {
  name: 'Home',
  components: {
    BuildingItem
  },
  data() {
    return {
      buildings: [
        {
          title: 'Imperial Barracks',
          gold: 5000,
          steel: 100,
          ammunition: 100
        },
        {
          title: 'Imperial Barracks2',
          gold: 5000,
          steel: 100,
          ammunition: 100
        },
        {
          title: 'Imperial Barracks3',
          gold: 5000,
          steel: 100,
          ammunition: 100
        },
      ]
    }
  }
}
</script>