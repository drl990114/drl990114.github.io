<template>
  <div class="body-foot" aria-hidden="true">
    <a id="music" @click="bgPlay"
      >🙈
      <div>
        <span>小彩蛋：</span>
        <p>点击播放音乐~</p>
      </div>
    </a>

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
    | <router-link to="/about/">联系方式</router-link> |
    <span id="busuanzi_container_site_pv"
      >本站总访问量 <span id="busuanzi_value_site_pv"></span>次
    </span>
  </div>
</template>

<script>
export default {
  computed: {
    themeConfig() {
      return this.$themeConfig;
    },
  },
  mounted() {
    if (
      typeof this.$themeConfig !== "undefined" &&
      typeof document !== "undefined"
    ) {
      (function () {
        let pv = document.createElement("script");
        pv.src = "//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js";
        let pvs = document.getElementsByTagName("script")[0];
        pvs.parentNode.insertBefore(pv, pvs);
      })();
    }
  },
  methods: {
    bgPlay() {
      if (typeof window != "undefined") {
        let bgm = document.getElementById("musicplayer");
        console.log(bgm.pause);
        if (bgm.paused) {
          bgm.play();
        } else {
          bgm.pause();
        }
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
      top: -60px;
      left: -40px;
      padding: 7px;
      background: var(--darkModeBtn);
      border: 1px solid var(--borderColor);
      min-width: 100px;
      min-height: 30px;
      display: inline-block;
      color: var(--textColor);
      text-align: left;
      font-family: Palatino, Garamond, Times, Georgia, serif;
    }
  }

  small {
    display: inline-block;
    margin-right: 8px;
  }
}
</style>