<template>
  <div class="home">
    <HomeHeader />
    <HomeBody />
    <HomeFoot />
  </div>
</template>

<script>
import HomeHeader from "./HomeHeader.vue";
import HomeBody from "./HomeBody.vue";
import HomeFoot from "./HomeFoot.vue";
export default {
  name: "Home",
  components: { HomeHeader, HomeBody, HomeFoot },

};
</script>

<style>
.home {
  font-family: Palatino, Garamond, Times, Georgia, serif;
}
</style>
