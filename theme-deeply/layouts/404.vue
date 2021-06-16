<template>
  <div class="theme-container">
    <div class="remind">
      <span>Not Found~</span>
      <h2>可能因为网站改造，导致页面地址变化~</h2>
      <blockquote>
        您可以来这里逛逛:
        <a :href="base + '/home/'">博客</a> |
        <a :href="base + '/'">返回首页</a>|
        <a :href="base + '/about'">关于我</a>
      </blockquote>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    base() {
      const res = this.$site.base.substr(0, this.$site.base.length - 1);
      return res;
    },
    msgs() {
      return [
        `这里什么都没有。`,
        `可能因为网站改造，导致页面地址变化~`,
        `看来我们的链接坏掉了~`,
      ];
    },
  },
  methods: {
    getMsg() {
      return msgs[Math.floor(Math.random() * msgs.length)];
    },
  },
};
</script>

<style lang="stylus" >
.theme-container {
  min-height: 60vh;
  min-width: 90vw;
  margin-top: 40vh;
  background: var(--bodyBg);
  color: var(--textColor);
  font-family: Palatino, Garamond, Times, Georgia, serif;

  .remind {
    height: 100%;
    text-align: center;
    margin: 0 auto;
    margin-top: 40vh;
    color: var(--textColor);

    h2 {
      font-size: 24px;
      color: #585858;
      line-height: 1.2;
      margin-top: 20px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      border: none;
      height: 28px;
    }

    span {
      display: inline-block;
      padding: 20px;
      margin: 0 0 20px 0;
      border: 2px solid #ccc;
      background-color: #fafafa;
      border-radius: 4px;
      color: #555;
      font-family: cursive, consolas;
      top: 0;
    }
  }
}

a {
  color: #4a75b5;
  word-break: break-all;
  text-decoration: none;
}

a:hover {
  color: #e58c7c;
}
</style>
