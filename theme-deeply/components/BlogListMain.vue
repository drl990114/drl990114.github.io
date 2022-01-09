<template>
  <div>
    <div
      class="bloglist-detail"
      v-for="([key, pages], index) in archivePages"
      :key="index"
    >
      <strong
        ><router-link
          :to="{
            path: '/archives/',
            query: { year: key },
          }"
          >{{ key }}年</router-link
        ></strong
      >
      <div class="currentYear">
        <ul>
          <li v-for="page in pages" :key="page.key">
            <router-link :to="page.path">{{ page.title }} </router-link>
            <span
              >({{ page.frontmatter.formatDate
              }}<span class="currentYear-msg">
                · 分类:
                <router-link
                  class="currentYear-tag"
                  v-for="category in page.frontmatter.categories"
                  :to="{
                    path: '/categories/',
                    query: { category },
                  }"
                  :key="category + 'category'"
                  >{{ category }}</router-link
                >
                · 标签:<router-link
                  class="currentYear-tag"
                  v-for="tag in page.frontmatter.tags"
                  :key="tag + 'tag'"
                  :to="{
                    path: '/tags/',
                    query: { tag },
                  }"
                  >{{ tag }}
                </router-link></span
              >)
            </span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import { getTimeLines, getCategories } from "../util";
export default {
  props: ["archivePages", "allCategories"],
  name: "BlogListMain",
};
</script>
