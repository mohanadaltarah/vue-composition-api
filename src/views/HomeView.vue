<template>
  <div class="home">
    <h1>This is the home page</h1>
    <h1>{{ welcomeUser }}</h1>
    <h1>{{ afterYears }}</h1>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

//Data
const name = ref("Mohanad");
const age = ref(24);

//Computed
const welcomeUser = computed(
  () => `Hello, ${name.value}, Your age is ${age.value}`
);

const afterYears = computed(
  () =>
    `Hey, ${name.value}, Your age will be ${age.value + 10} after ten years!`
);
</script>
