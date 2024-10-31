<template>
  <div class="home">
    <h1>This is the home page</h1>
    <h3>Counter is: {{ counter }}</h3>
    <button @click="counter++">increase counter</button>
    <button @click="myArr.push(counter)">Push counter value</button>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";

const counter = ref(0);
const myArr = ref([]);

watch(
  () => counter.value,
  (newVal, oldVal) => {
    console.log(oldVal);
    console.log(newVal);
  }
);

watch(
  () => myArr.value,
  (newVal) => {
    console.log(newVal);
  },
  { deep: true }
);
</script>
