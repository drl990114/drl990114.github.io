<template>
  <Nav v-if="frontmatter?.navbar !== false"></Nav>
  <Layout :class="{ 'no-navbar': frontmatter?.navbar === false }">
    <template #doc-before>
      <Title />
      <PostTags v-if="frontmatter?.tags" :tags="frontmatter.tags" />
      <Category />
    </template>
    <template #doc-after>
      <div class="done">--- Done ---</div>
      <div>
        <button @click="back">cd ··</button>
      </div>
      <!-- <Comments /> -->
    </template>
    <!-- Home slot-->
    <template #home-features-after>
      <Page />
    </template>
  </Layout>
  <!-- copywright -->
  <CopyWright />
</template>
<script lang="ts" setup>
import DefaultTheme from "vitepress/theme";
import Nav from './Nav.vue'
import CopyWright from "./CopyWright.vue";
import Page from "./Page.vue";
import Category from "./Category.vue";
import Title from "./Title.vue";
import PostTags from "./PostTags.vue";
import { useData } from 'vitepress';

const { Layout } = DefaultTheme;
const { frontmatter } = useData();
const back = () => {
  history.back();
};
</script>
<style>
.Layout.no-navbar #VPContent {
  padding-top: 0;
}
.Layout {
  min-height: 100% !important;
}

.done {
  margin-bottom: 20px;
}
button {
  display: inline-block;
  position: relative;
  color: var(--vp-c-color-d);
  cursor: pointer;
  font-size: 1.2em;
  font-weight: bold;
}

button::after {
  content: "";
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: var(--vp-c-color-d);
  transform-origin: bottom right;
  transition: transform 0.25s ease-out;
}

button:hover::after {
  transform: scaleX(1);
  transform-origin: bottom left;
}
</style>
