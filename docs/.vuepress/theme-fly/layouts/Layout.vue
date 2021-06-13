<template>
  <div id="theme-container">
    <div>{{ consoleLog }}</div>
    <template v-if="index">
      <Welcome />
    </template>
    <template v-if="this.$router.history.current.path.indexOf('read') != -1">
      <Read />
    </template>
    <div id="container">
      <template v-if="this.$router.history.current.path.indexOf('home') != -1">
        <Home />
      </template>
    </div>
    <template
      v-if="this.$router.history.current.path.indexOf('categories') != -1"
    >
      <Categories />
    </template>
    <template
      v-if="this.$router.history.current.path.indexOf('archives') != -1"
    >
      <Archives />
    </template>
  </div>
</template>

<script>
import Welcome from "../components/Welcome.vue";
import Read from "../components/Read.vue";
import Home from "../components/Home.vue";
import Categories from "../components/Categories.vue";
import Archives from "../components/Archives.vue";
import { isIndex } from "../util/isPath.js";
import { toLight, toDark, currentMode } from "../util/colorMode";
export default {
  components: { Welcome, Read, Home, Categories, Archives },
  mounted() {
    let current = currentMode();
    if (current == "dark") {
      toDark();
    } else toLight();
  },
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
@require '../styles/index.styl';
@require '../styles/font/iconfont.css';
@require '../styles/palette.styl';

* {
  margin: 0;
  padding: 0;
}

*::selection {
  background: $fontSelect;
}

html, body {
  min-height: 100vh;
  min-width: 90vw;
  overflow-x: hidden;
  background: var(--bodyBg);
}

#theme-container {
  width: 100%;
  height: 100%;
  // filter: invert(1) hue-rotate(180deg);
  margin: 0 auto;
  background: var(--bodyBg);
  color: var(--textColor);
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

h1, h2, h3, h4, h5, h6 {
  color: var(--titleColor);
}
</style>