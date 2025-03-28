<script lang="ts" setup>
import VPNavBarSearch from 'vitepress/dist/client/theme-default/components/VPNavBarSearch.vue'
import VPNavBarSocialLinks from 'vitepress/dist/client/theme-default/components/VPNavBarSocialLinks.vue'
import VPNavBarHamburger from 'vitepress/dist/client/theme-default/components/VPNavBarHamburger.vue'
import { useData } from "vitepress";
import Dark from "./Icons/Dark.vue";
import Light from "./Icons/Light.vue";
import { inject } from 'vue'

defineProps<{
  isScreenOpen: boolean
}>()

defineEmits<{
  (e: 'toggle-screen'): void
}>()

const { isDark } = useData()

const toggleAppearance = inject('toggle-appearance', () => {
  isDark.value = !isDark.value
})
const { site } = useData();

</script>

<template>
  <div class="VPNavBar">
    <div class="container">
      <div class="content">
        <div class="curtain" />
        <div class="content-body">
          <div class="content-body-left">
            <a href="/">{{ site.title }}</a>
          </div>
          <div class="content-body-mid">
            <VPNavBarSearch class="search" />
          </div>
          <div class="content-body-right">
            <VPNavBarSocialLinks class="social-links" />
            <Dark class="appearance-btn" v-if="isDark" @click="toggleAppearance" />
            <Light class="appearance-btn" v-else @click="toggleAppearance" />
            <VPNavBarHamburger class="hamburger" :active="isScreenOpen" @click="$emit('toggle-screen')" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.VPNavBar {
  position: relative;
  border-bottom: 1px solid transparent;
  padding: 0 !important;
  height: var(--vp-nav-height);
  transition: border-color 0.5s, background-color 0.5s;
  background-color: transparent;
  pointer-events: none;
}

.VPNavBar.has-sidebar {
  border-bottom-color: var(--vp-c-gutter);
}

.appearance-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 22px;
  height: 22px;
  padding: 6px;
  border-radius: 22px;
  margin-left: 6px;
  transition: color 0.5s;
  box-sizing: content-box;
}

.appearance-btn:hover {
  background-color: var(--btn-hover-bg);
}

@media (min-width: 768px) {
  .VPNavBar {
    padding: 0 32px;
  }
}

@media (min-width: 960px) {
  .VPNavBar.has-sidebar {
    border-bottom-color: transparent;
    padding: 0;
  }

  .VPNavBar.fill:not(.has-sidebar) {
    border-bottom-color: var(--vp-c-gutter);
  }
}

.container {
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  width: 100%;
  pointer-events: none;
}

.container :deep(*) {
  pointer-events: auto;
}

@media (min-width: 960px) {
  .VPNavBar.has-sidebar .container {
    max-width: 100%;
  }
}

.title {
  flex-shrink: 0;
  height: calc(var(--vp-nav-height) - 1px);
  transition: background-color 0.5s;
}

@media (min-width: 960px) {
  .VPNavBar.has-sidebar .title {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    padding: 0 32px;
    width: var(--vp-sidebar-width);
    height: var(--vp-nav-height);
    background-color: transparent;
  }
}

@media (min-width: 1440px) {
  .VPNavBar.has-sidebar .title {
    padding-left: max(32px, calc((100% - (var(--vp-layout-max-width) - 64px)) / 2));
  }
}

.content {
  height: var(--vp-nav-height);
  flex-grow: 1;
}

@media (min-width: 960px) {
  .VPNavBar.has-sidebar .content {
    position: relative;
    z-index: 1;
    padding-right: 32px;
    padding-left: var(--vp-sidebar-width);
  }
}

@media (min-width: 1440px) {
  .VPNavBar.has-sidebar .content {
    padding-right: calc((100vw - var(--vp-layout-max-width)) / 2 + 32px);
    padding-left: calc((100vw - var(--vp-layout-max-width)) / 2 + var(--vp-sidebar-width));
  }
}

.content-body {
  display: grid;
  grid-template-columns: repeat(3, 33.3333%);
  grid-template-rows: repeat(3, 33%);
  height: calc(var(--vp-nav-height) - 1px);
  transition: background-color 0.5s;
}

.content-body-left {
  display: flex;
  align-items: center;
  padding-left: 10px;
  height: var(--vp-nav-height);
  border-right: 1px solid var(--border-color);
}

.content-body-mid {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: var(--vp-nav-height);
}

.content-body-right {
  display: flex;
  justify-content: center;
  align-items: center;
  height: var(--vp-nav-height);
  border-left: 1px solid var(--border-color);
}

@media (min-width: 960px) {
  .VPNavBarSocialLinks {
    display: flex;
    align-items: center;
  }

  .VPNavBar.has-sidebar .content-body,
  .VPNavBar.fill .content-body {
    position: relative;
    background-color: var(--vp-nav-bg-color);
  }
}

.menu+.translations::before,
.menu+.appearance::before,
.menu+.social-links::before,
.translations+.appearance::before,
.appearance+.social-links::before {
  margin-right: 8px;
  margin-left: 8px;
  width: 1px;
  height: 24px;
  background-color: var(--vp-c-divider);
  content: "";
}

.menu+.appearance::before,
.translations+.appearance::before {
  margin-right: 16px;
}

.appearance+.social-links::before {
  margin-left: 16px;
}

.appearance {
  margin-left: 16px;
}

.social-links {
  margin-right: -8px;
}

@media (min-width: 960px) {
  .VPNavBar.has-sidebar .curtain {
    position: absolute;
    right: 0;
    bottom: -31px;
    width: calc(100% - var(--vp-sidebar-width));
    height: 32px;
  }

  .VPNavBar.has-sidebar .curtain::before {
    display: block;
    width: 100%;
    height: 32px;
    background: linear-gradient(var(--vp-c-bg), transparent 70%);
    content: "";
  }
}


@media (min-width: 1440px) {
  .VPNavBar.has-sidebar .curtain {
    width: calc(100% - ((100vw - var(--vp-layout-max-width)) / 2 + var(--vp-sidebar-width)));
  }
}
</style>
