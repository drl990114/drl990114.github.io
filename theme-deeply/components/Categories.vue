<template>
  <BlogList />
</template>
<script>
import { getTimeLines, getCategories } from "../util";
import BlogList from "./BlogList.vue";
export default {
  name: "Categories",
  components: { BlogList },
};
</script>
