<template>
  <div class="read">
    <div class="read-header">
      <div class="read-header-nav">
        <a href="/">{{ themeConfigs.author }} 的个人博客</a> »
        <a href="/home/">博客</a> »
        <a class="category-link" href="/blog/categories/工具/">工具</a>,<a
          class="category-link"
          href="/blog/categories/工具/前端杂烩/"
          >前端杂烩</a
        >
      </div>
      <div class="read-header-title">{{ articleData.title }}</div>
      <div class="read-header-avatar">
        <div class="post-info">
          <span
            >作者: <a href="/about/">{{ themeConfigs.author }}</a></span
          >
          <span>
            <span class="aria-readonly"
              >本文发布时间{{ articleData.lastUpdated }}</span
            > </span
          ><span
            >分类:<a
              class="category-link"
              href="/blog/categories/工具/前端杂烩/"
              >{{ articleData.frontmatter.categories[0] }}</a
            ></span
          >
          <span
            tabindex="0"
            aria-hidden="true"
            id="busuanzi_container_site_pv"
            style="display: inline"
            >热度: <span id="busuanzi_value_page_pv">270133</span></span
          >
        </div>
      </div>
    </div>
    <div></div>

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
    articleData() {
      console.log(this.$site);
      console.log(this.$page);
      console.log(this.$themeConfig);
      return this.$page;
    },
    themeConfigs() {
      return this.$themeConfig;
    },
  },
};
</script>

<style lang="stylus">
.read {
  margin: 0 auto;
  width: 70%;
  padding-left: 30px;
  font: 18px PingFang SC, Lantinghei SC, Microsoft Yahei, Hiragino Sans GB, Microsoft Sans Serif, WenQuanYi Micro Hei, Helvetica, sans-serif;
  color: #2f2f2f;

  h1, h2, h3, h4, h5, h6 {
    font-family: Palatino, Garamond, Times, Georgia, serif;
  }

  .read-header {
    height: 200px;
    margin-bottom: 20px;
    font-family: Palatino, Garamond, Times, Georgia, serif;
  }

  .read-header-avatar {
    font-size: 14px;
    color: grey;
    font-weight: 700;
    margin-bottom: 25px;
    position: relative;
    z-index: 8;
    background: #fff;

    span {
      padding-right: 10px;
    }
  }

  .read-header-nav {
    text-align: right;
    position: absolute;
    left: 119px;
    top: 31px;
    border-left: 4px solid #7b9ac9;
    padding-left: 20px;
    line-height: 24px;

    a {
      color: #a8a8a8;

      &:hover {
        color: #4a75b5;
      }
    }
  }

  .read-header-title {
    padding: 80px 0 20px 0;
    font-size: 50px;
    line-height: 70px;
    margin-bottom: 20px;
    font-weight: 400;
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
    margin-bottom: 25px;
    font: 400 1em / 1.8 PingFang SC, Lantinghei SC, Microsoft Yahei, Hiragino Sans GB, Microsoft Sans Serif, WenQuanYi Micro Hei, Helvetica, sans-serif;
    -webkit-font-smoothing: antialiased;
    word-break: break-word;
    white-space: normal;
  }

  pre {
    font-family: monospace, Consolas, 'Courier New';
    background: #fafafa !important;
    padding: 10px 4070px;
    overflow-x: auto;
    border: 1px dashed #eee;
    border-width: 1px 0;
    margin-left: -4080px;
    margin-right: -4080px;
    transition: border 0.5s;
    font-size: 16px;
    line-height: 26px;
    max-width: 960px;
    overflow: auto;
  }

  table {
    border: 1px solid #ccc;
    margin: 15px 0;
    border-radius: 5px;
    border-spacing: 0;
  }
}
</style>
