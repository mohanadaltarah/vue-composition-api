<template>
  <div class="component">
    <h1>This is my component</h1>
    <button @click="emits('handleClick')">Emit Event</button>
  </div>
</template>

<script setup>
import { defineEmits } from "vue";

const emits = defineEmits(["handleClick"]);
</script>

<style lang="scss" scoped></style>
