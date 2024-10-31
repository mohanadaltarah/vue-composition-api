<template>
  <div class="home">
    <h1>This is the home page</h1>
  </div>
</template>

<script setup>
import { inject, onMounted } from "vue";

const emitter = inject("emitter");

onMounted(() => {
  emitter.on("callPolice", () => {
    console.log("Gotcha.. police is on the way!");
  });
});
</script>
