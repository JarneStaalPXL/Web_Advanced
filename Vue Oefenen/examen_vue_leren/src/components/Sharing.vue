<template>
  <div>
    <!--On input gaan we een emit doen.
    Een emit is een custom event dat je maakt. Een soort van Event Handler.
    Eerst geef je het event mee dus een click event of een input event (Input = onchange).

    Daarna maak je een custom emit.
    In dit voorbeeld update hij de modelValue prop met de waarde
    van de input.

    $event.target.value is dus de waarde van de input
    (ik denk dat je dit bij alles kan gebruiken waar je iets in kan typen)
    -->
    <input @input="$emit('update:modelValue', $event.target.value)" />
  </div>
</template>
<script>
export default {
  name: "Sharing",
  props: {
    modelValue: String
  }
}
</script>

<style scoped>
input {
  width: 20%;
  text-align: center;
}
</style>