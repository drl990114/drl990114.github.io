<template>
  <div id="container">
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";

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
#container {
  margin: 0 auto;
  width: 70%;
  height: 100%;
}
#app {
  /* filter: invert(0.9) hue-rotate(180deg); */
  min-height: 100vh;
  width: 100%;
  margin: 0 auto;
  background: rgb(255, 255, 255);
  font-family: Palatino, Garamond, Times, Georgia, serif;
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
html {
  font-size: 12px;
}
a {
  color: #4a75b5;
  word-break: break-all;
  text-decoration:none;
}
</style>
