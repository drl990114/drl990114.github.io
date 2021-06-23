<template>
  <div class="body-foot" aria-hidden="true">
    <router-link id="music" @click="bgPlay"
      >🙈
      <div>点击播放音乐</div>
    </router-link>
    <span
      >©{{ themeConfig.foot.year || "" }}
      <small
        ><router-link to="/" about="_blank">{{
          themeConfig.foot.record || ""
        }}</router-link></small
      ></span
    >
    本站由
    <router-link to="/about/">{{ themeConfig.author }}</router-link> 纯手工打造
    |
    <router-link to="/about/">联系方式</router-link>
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
  methods: {
    bgPlay() {
      if (typeof window != "undefined") {
        let bgm = document.getElementById("musicplayer");
        bgm.play();
      }
    },
  },
};
</script>

<style lang="stylus">
.body-foot {
  position: relative;
  width: 100%;
  margin: 10px 0;
  padding-bottom: 10px;
  color: #aaa;
  text-align: right;
  border-top: 1px solid #666;
  padding-top: 10px;
  font-size: 14px;
  padding-right: 20px;

  #music {
    cursor: pointer;
    position: relative;

    div {
      display: none;
    }

    &:hover div {
      position: absolute;
      top: -35px;
      left: -5px;
      background: red;
      width: 100px;
      height: 30px;
      display: inline-block;
    }
  }

  small {
    display: inline-block;
    margin-right: 8px;
  }
}
</style>