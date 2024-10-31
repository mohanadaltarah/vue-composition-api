<template>
  <div class="home">
    <h1>This is the home page</h1>
  </div>
  <MyComponent />
</template>

<script setup>
// eslint-disable-next-line no-unused-vars
import MyComponent from "@/components/MyComponent.vue";
import { ref, provide } from "vue";

const userName = ref("Mohanad_2001");
const age = ref(24);

const sayHello = () => {
  console.log("Hello, " + userName.value + ", your age is: " + age.value);
};

provide("name", userName.value);
provide("age", age.value);
provide("sayHello", sayHello);
</script>
