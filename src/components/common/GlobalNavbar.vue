<script setup lang="ts">
defineProps({
  brand: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <nav>
    <h1>{{ brand }}</h1>
  </nav>
</template>

<style></style>
