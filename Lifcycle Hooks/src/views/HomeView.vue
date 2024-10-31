<template>
  <div class="home">
    <h1>This is the home page</h1>
    <h2>Counter = {{ counter }}</h2>
    <button @click="counter++">Increase</button>
  </div>
</template>

<script setup>
import { onBeforeMount, onBeforeUpdate, onMounted, onUpdated, ref } from "vue";

const counter = ref(0);

onBeforeMount(() => {
  console.log("Before Mount");
});
onMounted(() => {
  console.log("Mounted");
});

onBeforeUpdate(() => {
  console.log("Before Update");
});
onUpdated(() => {
  console.log("Updated");
});
</script>
