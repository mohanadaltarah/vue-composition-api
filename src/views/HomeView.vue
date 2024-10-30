<template>
  <div class="home">
    <h1>This is the home page</h1>
    <h3>Age is {{ age }}</h3>
  </div>
  <button @click="increaseAge">increase age</button>
</template>

<script setup>
import { ref } from "vue";

const age = ref(24);

function increaseAge() {
  age.value++;
}
</script>
