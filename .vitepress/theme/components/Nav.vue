<script setup lang="ts">
import { provide } from 'vue'
import { useNav } from 'vitepress/dist/client/theme-default/composables/nav.js'
import { useSidebar } from 'vitepress/dist/client/theme-default/composables/sidebar.js'
import VPNavBar from './VPNavBar.vue'
import VPNavScreen from 'vitepress/dist/client/theme-default/components/VPNavScreen.vue'

const { isScreenOpen, closeScreen, toggleScreen } = useNav()
const { hasSidebar } = useSidebar()

provide('close-screen', closeScreen)
</script>

<template>
  <header class="Nav" :class="{ 'no-sidebar': !hasSidebar }">
    <VPNavBar :is-screen-open="isScreenOpen" @toggle-screen="toggleScreen" />
    <VPNavScreen :open="isScreenOpen">
      <template #nav-screen-content-before>
        <slot name="nav-screen-content-before" />
      </template>
      <template #nav-screen-content-after>
        <slot name="nav-screen-content-after" />
      </template>
    </VPNavScreen>
  </header>
</template>

<style scoped>
.Nav {
  position: relative;
  top: 0;
  left: 0;
  z-index: 99999;
  width: 100%;
  height: var(--vp-nav-height);
  background-color: var(--vp-c-bg);
  border-bottom: 1px solid var(--border-color);
  pointer-events: none;
}

.VPNavScreen {
  display: flex !important;
}

@media (min-width: 960px) {
  .Nav {
    position: fixed;
  }

  .Nav.no-sidebar {
    -webkit-backdrop-filter: saturate(50%) blur(8px);
    backdrop-filter: saturate(50%) blur(8px);
  }
}
</style>
