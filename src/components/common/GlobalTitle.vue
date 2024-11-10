<script setup lang="ts">
defineProps({
  brand: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div class="title-outer">
    <h1 class="title-text">{{ brand }}</h1>
  </div>
</template>

<style></style>
