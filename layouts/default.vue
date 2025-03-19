<template>
  <div><slot /></div>
</template>

<script setup lang="ts">
const { data: navigation } = await useAsyncData(
  "navigation",
  () => fetchContentNavigation(),
  { default: () => [] }
);
provide("navigation", navigation);
</script>

<style scoped></style>
