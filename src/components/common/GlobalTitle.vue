<script setup lang="ts">
defineProps({
  brand: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <h1>{{ brand }}</h1>
</template>

<style></style>
