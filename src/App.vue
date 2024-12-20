<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { defineAsyncComponent } from 'vue'

import '@scss/main.scss'

const isHome = ref(false)
const route = useRoute()

// Watch for changes in the route's name
watch(
  () => route.name,
  (newRoute) => {
    // Set isHome based on the route name
    isHome.value = newRoute === 'home'
  },
)

// async the menu
const Menu = defineAsyncComponent(() => import('@/components/common/GlobalMenu.vue'))
</script>

<template>
  <Menu :is-home="isHome" class="menu" />
  <RouterView />
</template>

<style scoped lang="scss">
.menu {
  width: 100vw;
  height: 100vh;
  overflow: none;
  pointer-events: none;
}
</style>
