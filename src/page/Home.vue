<template>
  <div class="home">
    <Header />
    <Body />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "../components/home/Header.vue";
import Body from "../components/home/Body.vue";
export default defineComponent({
  name: "Home",
  components: {
    Header,
    Body,
  },
});
</script>

<style scoped>
.home {
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  height: 100%;
  width: 100%;
  text-align: left;
}
</style>
