<template>
  <div>
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
      console.log(this.$site);
      console.log(this.$page);
      console.log(this.$themeConfig);
    },
  },
};
</script>

<style>
label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
