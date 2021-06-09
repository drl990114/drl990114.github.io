<template>
  <div class="read">
    <ReadHead />
    <ReadMain />
    <div class="read-foot"></div>
    <LeftNav />
  </div>
</template>

<script>
import LeftNav from "./LeftNav.vue";
import ReadHead from "./ReadHead.vue";
import ReadMain from "./ReadMain.vue";
export default {
  name: "Read",
  components: {
    LeftNav,
    ReadHead,
    ReadMain,
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
  font-size: 18px;
}

.read-foot {
  height: 410px;
  background: #3f3f3f;
  overflow: hidden;
  z-index: 1000px;
}
</style>
