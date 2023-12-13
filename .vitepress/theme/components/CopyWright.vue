<template>
  <div class="footer">
    <VPNavBarSocialLinks />
    <footer>
      Powered by
      <a href="https://github.com/drl990114" target="_blank" title="作者">drl990114</a>
      | Copyright © 2023-{{ date }} | MIT License
    </footer>
  </div>
</template>
<script lang="ts" setup>
import VPNavBarSocialLinks from 'vitepress/dist/client/theme-default/components/VPNavBarSocialLinks.vue'
const date = new Date().getFullYear();


</script>
<style scoped>
.footer {
  width: 100%;
  padding: 50px;
  background-color: var(--footer-color);
}

footer {
  text-align: center;
  color: var(--vp-c-text);
}

a {
  color: var(--vp-c-brand);
  font-weight: bold;
}

a:hover {
  text-decoration: none;
  color: var(--vp-c-hover);
}
</style>
