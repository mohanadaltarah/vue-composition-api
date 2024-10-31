<template>
  <div class="home">
    <h1 v-colorize="'orange'">This is the home page</h1>
  </div>
</template>

<script setup>
const vColorize = {
  mounted: (el, data) => {
    el.style.color = data.value;
  },
};
</script>
