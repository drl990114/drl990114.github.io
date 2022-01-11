<template>
  <div class="read">
    <ReadMain />
    <ReadFoot />
    <LeftNav />
    <Directory />
  </div>
</template>

<script>
import LeftNav from "./LeftNav.vue";
import ReadMain from "./ReadMain.vue";
import Directory from "./Directory.vue";
import ReadFoot from "./ReadFoot.vue";
export default {
  name: "Read",
  components: {
    LeftNav,
    ReadMain,
    Directory,
    ReadFoot,
  },

  computed: {
    articleData() {
      console.log(this.$site);
      console.log(this.$page);
      console.log(this.$themeConfig);
      return this.$page;
    },
    themeConfigs() {
      return this.$themeConfig;
    },
    avatarUrl() {
      return this.$themeConfig.avatar;
    },
  },
};
</script>

<style lang="stylus">
.read {
  margin: 0 auto;
  width: 100%;
  padding-left: 20px;
  color: #2f2f2f;
  min-height: 100vh;
}

@media screen and (min-width: 1281px) {
  .read {
    padding-left: 20px;
  }
}

@media screen and (min-width: 998px) and (max-width: 1280px) {
  .read {
    padding-left: 20px;
  }
}

@media screen and (max-width: 998px) {
  .read {
    padding-left: 0;
  }
}
</style>
