<template>
  <div class="home">
    <h1>This is the home page</h1>
    <Comp @handle-click="executeFunction" />
  </div>
</template>

<script setup>
import Comp from "@/components/MyComponent.vue";

const executeFunction = () => {
  console.log("executed");
};
</script>
