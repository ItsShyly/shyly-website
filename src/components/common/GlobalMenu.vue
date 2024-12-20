<script setup lang="ts">
import { routes } from '@/router'
import { ref, onMounted, onBeforeUnmount, defineProps } from 'vue'

// isHome prop from App.vue
const props = defineProps({
  isHome: {
    type: Boolean,
    required: true,
  },
})

// holes ref
const holes = ref<number[]>([])

// track selection
const selectedMenuItem = ref<string>('')

// get route paths
const routePaths = routes.map((route) => route.path).slice(1)

// select menu item
const selectMenuItem = (item: string) => {
  selectedMenuItem.value = item
  localStorage.setItem('selected', 'true')
  hideMenu()
  console.log(`Menu selected: ${selectedMenuItem.value}`)
}

// update holes calculation for the dynamic layout
const updateHoles = () => {
  const screenWidth = window.innerWidth
  const screenHeight = window.innerHeight

  const holeOuterWidth = (5 * screenHeight) / 100 // 5% of the viewport width

  // get number of holeOuterWidths that can fit in screenWidth
  const numberOfHoleContainers = Math.max(1, Math.floor(screenWidth / holeOuterWidth))

  // update holes array
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

// UI elements visibility
const isTitleVisible = ref(true)
const isMenuVisible = ref(true)
const isButtonVisible = ref(false)

// Emit handler for when a menu item is selected
const hideMenu = () => {
  isMenuVisible.value = false
  isTitleVisible.value = false
  isButtonVisible.value = true
}

const showMenu = () => {
  isMenuVisible.value = true
  isTitleVisible.value = true
  isButtonVisible.value = false
}

const showButton = () => {
  isButtonVisible.value = true
}
// get initial menu state based if one home
if (props.isHome) {
  showMenu()
} else {
  hideMenu()
}
</script>

<template>
  <div class="component-container">
    <transition name="slide-menu" @after-leave="showButton">
      <div v-if="isMenuVisible" @menu-selected="hideMenu" class="component-container">
        <div class="hole-container">
          <div v-for="(hole, index) in holes" :key="index" class="hole-outer">
            <div class="hole"></div>
          </div>
        </div>
        <div class="menu-wrapper">
          <div class="menu-grid">
            <!-- Menu categories  -->
            <div
              v-for="(path, index) in routePaths"
              :key="index"
              class="menu-frame"
              :class="{ selected: selectedMenuItem === path }"
            >
              <!-- close the menu when an item is selected -->
              <RouterLink :to="path" class="menu-action" @click="selectMenuItem(path)">
                {{ path.replace('/', '').replace('-', ' ') }}
              </RouterLink>
            </div>
          </div>
        </div>
        <div class="hole-container">
          <div v-for="(hole, index) in holes" :key="index" class="hole-outer">
            <div class="hole"></div>
          </div>
        </div>
      </div>
    </transition>
    <transition name="slide-title">
      <div v-show="isTitleVisible" class="title-outer">
        <h1 class="title-text">shyly</h1>
      </div>
    </transition>
    <transition name="fade">
      <button v-if="isButtonVisible && !isMenuVisible" class="show-menu-button" @click="showMenu">
        ▲
      </button>
    </transition>
  </div>
</template>

<style scoped lang="scss">
/* Transitions */

/* Menu: Slide-out */
.slide-menu-enter-active,
.slide-menu-leave-active {
  transition: transform 0.4s ease;
}
.slide-menu-enter {
  transform: translateY(100%);
  transition-duration: 0;
}
.slide-menu-leave-to {
  transform: translateY(100%);
  transition-duration: 0.4s ease;
}

/* Menu: Slide-in */
.slide-menu-enter-from {
  transform: translateY(100%);
  transition-delay: 0s;
}
.slide-menu-enter-to {
  transform: translateY(0);
  transition-duration: 0.2s;
  transition-delay: 0s;
}

/* Title: Slide-out*/
.slide-title-enter-active,
.slide-title-leave-active {
  transition: transform 0.3s ease-out;
}
.slide-title-enter {
  transform: translateY(-100%);
  transition-delay: 0s;
}
.slide-title-leave-to {
  transform: translateY(-100%);
  transition-delay: 0s;
}

/* Title: Slide-in */
.slide-title-enter-from {
  transform: translateY(-100%);
}
.slide-title-enter-to {
  transform: translateY(0);
  transition-duration: 0.2s;
}

/* Button: Fading */
.fade-enter-active {
  transition: opacity 0.5s ease;
}
.fade-leave-active {
  transition: opacity 0;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-to,
.fade-leave-from {
  opacity: 1;
  transition-delay: 0.5s;
}

/* Selections */
.selected {
  border: 2px solid $pink;
}
</style>
