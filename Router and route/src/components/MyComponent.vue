<template>
  <div class="component">
    <h1>This is my component</h1>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log("Router from components: ", this.$router);
    console.log("Route from components: ", this.$route);
  },
};
</script>

<style lang="scss" scoped></style>
