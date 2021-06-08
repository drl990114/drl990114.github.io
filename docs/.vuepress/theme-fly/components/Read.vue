<template>
  <div class="read">
    <div class="read-nav">read</div>
    <div>{{ consoleLog }}</div>

          <Content />

    <LeftNav />
  </div>
</template>

<script>
import LeftNav from "./LeftNav.vue";
export default {
  name: "Read",
  components: {
    LeftNav,
  },
  computed: {
    consoleLog() {
      console.log(this.$site);
      console.log(this.$page);
    },
  },
};
</script>

<style lang="stylus">
.read {
  margin: 0 auto;
  width: 80%;
  font: 18px PingFang SC, Lantinghei SC, Microsoft Yahei, Hiragino Sans GB, Microsoft Sans Serif, WenQuanYi Micro Hei, Helvetica, sans-serif;

  .read-nav {
    // height: 200px;
  }

  h1 {
    font-size: 50px;
    line-height: 70px;
    margin-bottom: 20px;
    font-weight: 400;
  }

  h2 {
    font-size: 40px;
    line-height: 68px;
    margin: 15px 0;
    font-weight: 400;
  }

  h3 {
    font-size: 32px;
    line-height: 64px;
    margin: 15px 0;
    font-weight: normal;
  }

  p {
    color: #2f2f2f;
    margin-bottom: 25px;
    font: 400 1em / 1.8 PingFang SC, Lantinghei SC, Microsoft Yahei, Hiragino Sans GB, Microsoft Sans Serif, WenQuanYi Micro Hei, Helvetica, sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  pre {
    font-family: monospace, Consolas, 'Courier New';
    background: #fafafa;
    padding: 10px 4070px;
    overflow-x: auto;
    border: 1px dashed #eee;
    border-width: 1px 0;
    margin-left: -4080px;
    margin-right: -4080px;
    transition: border 0.5s;
  }
}
</style>
