<template>
  <div class="home">
    <h1>This is the home page</h1>
    <h1>My name is {{ firstName }} {{ lastName }}</h1>
    <h3>Age is {{ age }}</h3>
    <h4>User Active is {{ isActive }}</h4>
    <h3>My brother that you see is {{ userObject.name }}</h3>
    <h3>My favorite number is {{ myArray[0] }}</h3>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";

const firstName = reactive("Mohanad");
const lastName = ref("Altarah");
const age = ref(24);
const isActive = ref(true);
const userObject = ref({
  name: "Muhammed",
  age: 30,
});
const myArray = ref([1, 2, 3, 4, 5]);
</script>
