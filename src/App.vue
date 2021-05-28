<template>
  <div id="container">
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import "../public/index.css";
export default {
  setup() {
    const router = useRouter();
    const toHome = () => {
      router.push({
        name: "home",
      });
    };
    return {
      toHome,
    };
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
html {
  margin: 0px;
  height: 100%;
}
body {
  min-height: 100vh;
  /* filter: invert(0.9) hue-rotate(180deg); */
  font-size: 12px;
}
#app {
  /* display: flex; */

  width: 100%;
  height: 100%;
  margin: 0 auto;
  background: rgb(255, 255, 255);
  font-family: Palatino, Garamond, Times, Georgia, serif;
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

a {
  color: #4a75b5;
  word-break: break-all;
  text-decoration: none;
}
a:hover {
  color: #e58c7c;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: Palatino, Garamond, Times, Georgia, serif;
}
#container {
  margin: 0 auto;
  height: 1000px;
}
</style>
