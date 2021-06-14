<template>
  <div id="theme-container">
    <template v-if="index">
      <Welcome />
    </template>
    <template v-if="read">
      <Read />
    </template>
    <div id="container">
      <template v-if="home">
        <Home />
      </template>
    </div>
    <template v-if="categories">
      <Categories />
    </template>
    <template v-if="archives">
      <Archives />
    </template>
    <template v-if="about">
      <About />
    </template>
  </div>
</template>

<script>
import Welcome from "../components/Welcome.vue";
import Read from "../components/Read.vue";
import Home from "../components/Home.vue";
import Categories from "../components/Categories.vue";
import Archives from "../components/Archives.vue";
import About from "../components/About.vue";
import {
  isIndex,
  isHome,
  isRead,
  isArchives,
  isCategories,
  isAbout,
} from "../util/isPath.js";
import { toLight, toDark, currentMode } from "../util/colorMode";
export default {
  components: { Welcome, Read, Home, Categories, Archives, About },
  mounted() {
    let current = currentMode();
    if (current == "dark") {
      toDark();
    } else toLight();
  },
  computed: {
    PATH() {
      return this.$router.history.current.path;
    },
    index() {
      return isIndex(this.PATH);
    },
    home() {
      return isHome(this.PATH);
    },
    about() {
      return isAbout(this.PATH);
    },
    read() {
      return isRead(this.PATH);
    },
    archives() {
      return isArchives(this.PATH);
    },
    categories() {
      return isCategories(this.PATH);
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