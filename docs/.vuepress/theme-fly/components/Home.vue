<template>
  <div class="home">
    <HomeHeader />
    <HomeBody />
    <HomeFoot />
    <div>{{ consoleLog }}</div>
  </div>
</template>

<script>
import HomeHeader from "./HomeHeader.vue";
import HomeBody from "./HomeBody.vue";
import HomeFoot from "./HomeFoot.vue";
export default {
  name: "Home",
  components: { HomeHeader, HomeBody, HomeFoot },
  computed: {
    consoleLog() {
      // console.log(this.$site);
      // console.log(this.$page);
      // console.log(this.$themeConfig);
    },
  },
};
</script>

<style>
.home {
  font-family: Palatino, Garamond, Times, Georgia, serif;
}
</style>
