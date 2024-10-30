<template>
  <div class="component">
    <h1>This is my component</h1>
    <h3>Name is: {{ props.userName }}</h3>
    <h3>Age is: {{ props.userAge }}</h3>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  userName: {
    type: String,
    required: true,
  },
  userAge: {
    type: Number,
    required: true,
  },
});
</script>

<style lang="scss" scoped></style>
