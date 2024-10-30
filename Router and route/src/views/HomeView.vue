<template>
  <div class="home">
    <h1>This is the home page</h1>
    <Comp />
  </div>
</template>

<script setup>
import { useRouter, useRoute } from "vue-router";
import Comp from "@/components/MyComponent.vue";

const router = useRouter();
console.log("Router from view: ", router);

const route = useRoute();
console.log("Route from view: ", route);
</script>
