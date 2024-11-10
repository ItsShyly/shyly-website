<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

// holes ref
const holes = ref<number[]>([])

const updateHoles = () => {
  const screenWidth = window.innerWidth
  const screenHeight = window.innerHeight

  const holeOuterWidth = (5 * screenHeight) / 100 // 5% of the viewport width

  // get number of holeOuterWidths that can fit in screenWidth
  const numberOfHoleContainers = Math.max(1, Math.floor(screenWidth / holeOuterWidth))

  // Update holes array
  holes.value = Array(numberOfHoleContainers).fill(0)
}

// hole recount on window resize
onMounted(() => {
  updateHoles()
  window.addEventListener('resize', updateHoles)
})

// event listener cleanup on unmount
onBeforeUnmount(() => {
  window.removeEventListener('resize', updateHoles)
})
</script>

<template>
  <div class="hole-container">
    <!-- .hole-outer div for each hole -->
    <div v-for="(hole, index) in holes" :key="index" class="hole-outer">
      <div class="hole"></div>
    </div>
  </div>
  <div class="menu-wrapper">
    <div class="menu-grid">
      <div class="menu-frame">
        <RouterLink to="/example1" class="menu-action">Example 1</RouterLink>
      </div>
      <div class="menu-frame">
        <RouterLink to="/example2" class="menu-action">Example 2</RouterLink>
      </div>
      <div class="menu-frame">
        <RouterLink to="/example3" class="menu-action">Example 3</RouterLink>
      </div>
      <div class="menu-frame">
        <RouterLink to="/example4" class="menu-action">Example 4</RouterLink>
      </div>
    </div>
  </div>
  <div class="hole-container">
    <!-- .hole-outer div for each hole -->
    <div v-for="(hole, index) in holes" :key="index" class="hole-outer">
      <div class="hole"></div>
    </div>
  </div>
</template>
