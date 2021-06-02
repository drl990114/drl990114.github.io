<template>
  <div id="container">
    <router-view v-slot="{ Component }">
      <Suspense>
        <component :is="Component" />
      </Suspense>
    </router-view>
  </div>
</template>

<script setup>
import Welcome from './pages/Welcome.vue'
import Home from './pages/Home.vue'
import Lab from './pages/Lab.vue'
import Login from './pages/Login.vue'
import Read from './pages/Read.vue'
import ShowData from './pages/ShowData.vue'
import Write from './pages/Write.vue'

</script>

<style>
@import "../public/index.css";
@import "../public/font_pvlkp9ndb6/iconfont.css";
* {
  margin: 0;
  padding: 0;
}

html,
body {
  min-height: 100vh;
  min-width: 90vw;
  font-size: 12px;
  /* background: #222; */
  /* color: #ccc; */
}
#app {
  /* display: flex; */
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  height: 100%;
  margin: 0 auto;
  background: rgb(255, 255, 255);
  font-family: Palatino, Garamond, Times, Georgia, serif;
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #2c3e50; */
  /* filter: invert(0.87) hue-rotate(180deg); */
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
  height: 100%;
}
</style>
