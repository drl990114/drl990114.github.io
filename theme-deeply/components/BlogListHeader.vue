<template>
  <div>
    <div class="bloglist-class">
      <span> 类别：</span>
      <div class="bloglist-list">
        <router-link
          v-bind:class="{ current: categorieName === 'all' }"
          :to="{
            path: '/' + pathName + '/',
          }"
          >全部</router-link
        >

        <router-link
          v-bind:class="{ current: categorieName === item }"
          v-for="item in allCategories"
          :key="item"
          :to="{
            path: '/' + pathName + '/',
            query: { [paramName]: item },
          }"
          >{{ item }}</router-link
        >
      </div>
    </div>
  </div>
</template>
<script>
import { getTimeLines, getCategories } from "../util";
export default {
  name: "BlogListHeader",
  props: ["allCategories", "categorieName", "pathName", "paramName"],
};
</script>
