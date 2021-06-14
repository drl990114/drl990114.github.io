<template>
  <div class="body-foot" aria-hidden="true">
    <a class="page_editor">🙈</a>
    <span
      >©{{ themeConfig.foot.year || "" }}
      <small
        ><a href="/" about="_blank">{{
          themeConfig.foot.record || ""
        }}</a></small
      ></span
    >
    本站由 <a :href="base+'/about/'">{{ themeConfig.author }}</a> 纯手工打造 |
    <a :href="base+'/about/'">联系方式</a>
  </div>
</template>

<script>
export default {
  computed: {
    themeConfig() {
      return this.$themeConfig;
    },
    base() {
      const res = this.$site.base.substr(0, this.$site.base.length - 1);
      return res;
    },
  },
};
</script>

<style lang="stylus">
.body-foot {
  width: 100%;
  margin: 10px 0;
  padding-bottom: 10px;
  color: #aaa;
  text-align: right;
  border-top: 1px solid #666;
  padding-top: 10px;
  font-size: 14px;
  padding-right: 20px;
  position: relative;

  small {
    display: inline-block;
    margin-right: 8px;
  }
}
</style>