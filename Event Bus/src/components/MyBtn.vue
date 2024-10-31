<template>
  <button @click="fireEmit">click me</button>
</template>

<script setup>
import { inject } from "vue";

const emitter = inject("emitter");

const fireEmit = () => {
  emitter.emit("globalEvent", "Mohanad");
};
</script>

<style lang="scss" scoped></style>
