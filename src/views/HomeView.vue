<template>
  <div class="home">
    <h1>This is the home page</h1>
    <h1 ref="welcomeEl">{{ welcomeUser }}</h1>
    <h1>{{ afterYears }}</h1>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

//Data
const name = ref("Mohanad");
const age = ref(24);
const welcomeEl = ref("Mohanad");
console.log(welcomeEl.value);
setTimeout(() => {
  console.log(welcomeEl.value);
}, 2000);

//Computed
const welcomeUser = computed(
  () => `Hello, ${name.value}, Your age is ${age.value}`
);

const afterYears = computed(
  () =>
    `Hey, ${name.value}, Your age will be ${age.value + 10} after ten years!`
);
</script>
