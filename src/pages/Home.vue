<template>
  <div class="home">
    <Header />
    <Body />
    <Foot />
  </div>
</template>

<script setup>
import { defineComponent } from "vue";
import Header from "../components/home/Header.vue";
import Body from "../components/home/Body.vue";
import Foot from "../components/home/Foot.vue";
</script>

<style lang="scss">
.home {
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  height: 100%;
  width: 100%;
  text-align: left;
}
</style>
