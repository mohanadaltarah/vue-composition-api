<template>
  <div class="home">
    <h1>This is the home page</h1>
    <Comp :userAge="age" :userName="name" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import Comp from "@/components/MyComponent.vue";

//Data
const name = ref("Mohanad");
const age = ref(24);
</script>
