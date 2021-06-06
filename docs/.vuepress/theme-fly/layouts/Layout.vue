<template>
  <div class="theme-container">
    <div id="container">
      <div>{{ consoleLog }}</div>
      <template v-if="index">
        <Welcome />
      </template>
      <template v-if="this.$router.history.current.path.indexOf('read') != -1">
        <Read />
      </template>
      <template v-if="this.$router.history.current.path.indexOf('home') != -1">
        <Home />
      </template>
      <template v-if="this.$router.history.current.path.indexOf('categories') != -1">
        <Categories />
      </template>
    </div>
  </div>
</template>

<script>
import Welcome from "../components/Welcome.vue";
import Read from "../components/Read.vue";
import Home from "../components/Home.vue";
import Categories from "../components/Categories.vue";
import { isIndex } from "../util/isPath.js";
export default {
  components: { Welcome, Read, Home,Categories },
  computed: {
    consoleLog() {
      // console.log(this.$site);
      // console.log(this.$page);
      // console.log(this.$themeConfig);
    },
    index() {
      return isIndex(this.$router.history.current.path);
    },
  },
};
</script>
<style lang="stylus">
@import url('../styles/index.styl');
@import url('../styles/font/iconfont.css');
* {
  margin: 0;
  padding: 0;
}

html, body {
  min-height: 100vh;
  min-width: 90vw;
  /* background: #222; */
  /* color: #ccc; */
}

.theme-container {
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  height: 100%;
  margin: 0 auto;
  background: rgb(255, 255, 255);
}

a {
  color: #4a75b5;
  word-break: break-all;
  text-decoration: none;
}

a:hover {
  color: #e58c7c;
}

#container {
  margin: 0 auto;
  height: 100%;
}
</style>