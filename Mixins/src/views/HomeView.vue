<template>
  <div class="home">
    <h1>This is the home page</h1>
    <h2>Counter is: {{ counter }}</h2>
    <button @click="increase">Increase counter</button>
    <button @click="decrease">decrease counter</button>
  </div>
</template>

<script setup>
import counterFunction from "@/mixins/counter";

const { counter, increase, decrease } = counterFunction();
</script>
