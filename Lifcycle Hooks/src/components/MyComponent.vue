<template>
  <div class="component">
    <h1>This is my component</h1>
    <h3>Username is: {{ userName }}</h3>
    <h3>Age is: {{ age }}</h3>
    <button @click="sayHello">Say Hello</button>
  </div>
</template>

<script setup>
import { inject } from "vue";

const userName = inject("userName");
const age = inject("age");
const sayHello = inject("sayHello");
</script>

<style lang="scss" scoped></style>
