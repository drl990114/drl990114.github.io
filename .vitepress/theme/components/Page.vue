<template>
  <div class="blogList">
    <a class="blog" :style="getBlogStyle(index)" v-for="(item, index) in posts" :href="withBase(item.regularPath)">
      <div class="title">{{ item.frontMatter.title }}</div>
      <div class="date">{{ transDate(item.frontMatter.date) }}</div>
    </a>
  </div>
  <div class="pagination">
    <div class="left pageLocation">{{ `Page: ${pageCurrent}/${pagesNum}` }}</div>
    <button class="left-btn" v-if="pageCurrent > 1" @click="go(pageCurrent - 1)">
      <PaginationPrev />
    </button>
    <button class="right-btn" v-if="pageCurrent < pagesNum" @click="go(pageCurrent + 1)">
      <PaginationNext />
    </button>
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import { useData, withBase } from "vitepress";
import PaginationNext from "./Icons/PaginationNext.vue";
import PaginationPrev from "./Icons/PaginationPrev.vue";

interface post {
  regularPath: string;
  frontMatter: object;
}
const { theme } = useData();

// get posts
let postsAll = theme.value.posts || [];
// get postLength
let postLength = theme.value.postLength;
// get pageSize
let pageSize = theme.value.pageSize;

//  pagesNum
let pagesNum =
  postLength % pageSize === 0
    ? postLength / pageSize
    : postLength / pageSize + 1;
pagesNum = parseInt(pagesNum.toString());
//pageCurrent
let pageCurrent = ref(1);
// filter index post
postsAll = postsAll.filter((item: post) => {
  return item.regularPath.indexOf("index") < 0;
});
// pagination
let allMap = {};
for (let i = 0; i < pagesNum; i++) {
  allMap[i] = [];
}
let index = 0;
for (let i = 0; i < postsAll.length; i++) {
  if (allMap[index].length > pageSize - 1) {
    index += 1;
  }
  allMap[index].push(postsAll[i]);
}
// set posts
let posts = ref([]);
posts.value = allMap[pageCurrent.value - 1];

// click pagination
const go = (i) => {
  pageCurrent.value = i;
  posts.value = allMap[pageCurrent.value - 1];
};
// timestamp transform
const transDate = (date: string) => {
  const dateArray = date.split("-");
  let year = dateArray[0],
    month = ``,
    day = dateArray[2];
  switch (dateArray[1]) {
    case "1":
    case "01":
      month = `Jan`;
      break;
    case "2":
    case "02":
      month = `Feb`;
      break;
    case "3":
    case "03":
      month = `Mar`;
      break;
    case "4":
    case "04":
      month = `Apr`;
      break;
    case "5":
    case "05":
      month = `May`;
      break;
    case "6":
    case "06":
      month = `Jun`;
      break;
    case "7":
    case "07":
      month = `Jul`;
      break;
    case "8":
    case "08":
      month = `Aug`;
      break;
    case "9":
    case "09":
      month = `Sep`;
      break;
    case "10":
      month = `Oct`;
      break;
    case "11":
      month = `Nov`;
      break;
    case "12":
      month = `Dec`;
      break;
    default:
      month = `Month`;
  }
  return `${month} ${day}, ${year}`;
};

const getBlogStyle = (index: number) => {
  const isRight = index % 3 === 2
  const isLeft = index % 3 === 0

  const borderStyle = '1px solid var(--border-color)'

  const style = {
  }

  if (isLeft) {
    style['border-right'] = borderStyle
  }

  if (isRight) {
    style['border-left'] = borderStyle
  }

  return style
}
</script>

<style scoped>
.blogList {
  height: calc(100% - var(--vp-nav-height));
  display: grid;
  background-color: var(--vp-c-bg);
  grid-template-columns: repeat(3, 33.33333%);
  grid-template-rows: repeat(3, 25%);
}

.blog {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: var(--vp-c-bg);
  border-bottom: 1px solid var(--border-color);
  cursor: pointer;
}

.title {
  position: relative;
  color: var(--vp-c-brand-light);
  font-size: 1.2em;
  font-weight: bold;
}

.title::after {
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

.blog:hover .title::after {
  transform: scaleX(1);
  transform-origin: bottom left;
}

.date {
  padding-bottom: 7px;
}

.pagination {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 60px;
  margin: 0 auto;
  padding: 12px 0;
  border-bottom: 1px solid var(--border-color);
  background-color: var(--footer-color);
  position: relative;
}

.pagination__button--prev-icon {
  fill: #0f65ef;
}

.pagination__button--next-icon {
  fill: #0f65ef;
}

.pagination button {
  height: 40px;
  width: 40px;
  padding: 12px;
  color: #0f65ef;
  border: 1px solid rgba(0, 0, 0, .2);
  text-decoration: none;
  color: #0f65ef;
  background: var(--btn-bg);
  transition: background-color .15s ease 0s;
}

.left-btn {
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
}

.right-btn {
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
}

button:hover {
  transition: background-color .15s ease 0s;
  background-color: var(--btn-hover-bg);
}

.pageLocation {
  padding-left: 1rem;
}

.left {
  position: absolute;
  left: 0;
}

.right {
  position: absolute;
  right: 0;
}
</style>
