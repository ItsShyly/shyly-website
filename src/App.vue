<!-- src/App.vue -->
<script setup lang="ts">
import Menu from '@/components/common/GlobalMenu.vue'
import Title from '@/components/common/GlobalTitle.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <Title brand="shyly" />
  <Menu />
  <RouterView />
</template>

<style scoped></style>
