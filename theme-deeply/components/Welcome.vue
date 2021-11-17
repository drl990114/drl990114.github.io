<template>
  <div class="welcome">
    <div class="nav">
      <h2>
        {{ author }}的个人网站
        <router-link :to="'/home/'"
          ><img :src="$withBase(avatarUrl)"
        /></router-link>
      </h2>
      <a class="wbf" @click="open">无障碍浏览</a>
      <p>
        <font>»</font>
        <router-link class="hovera" :to="'/home/'"> 博客 </router-link>
        <router-link class="hovera" :to="'/about/'"> 关于我 </router-link>
      </p>
      <p>
        <font>»</font>
        <a v-for="item in social" :href="item.link" :key="item.link">
          <span :class="'hovera icon iconfont ' + item.className"
        /></a>
      </p>
    </div>
  </div>
</template>

<script>
import Wbf from 'web-barrier-free'
export default {
  name: "Welcome",
  computed: {
    social () {
      return this.$themeConfig.about.social;
    },
    avatarUrl () {
      return this.$themeConfig.avatar;
    },
    author () {
      return this.$themeConfig.author;
    },
  },
  methods: {
    open () {
      const wbf = new Wbf()
      wbf.open()
    }
  }
};
</script>

<style lang="stylus">
.welcome {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  color: var(--textColor);
  background: linear-gradient(to right, #003973 0, #e5e5be 100%);
}
.wbf {
  color: #e58c7c;
  font-family: Georgia, serif;
  &:hover {
    color: white
  }
}
.nav {
  margin: 20px auto;
  padding: 40px 30px;
  text-align: center;
  -webkit-user-select: none;
  z-index: 10;
  width: 440px;
  min-height: 200px;
  background: rgba(97, 97, 97, 0.3);
  padding: 20px;
  border-radius: 12px;
  color: #eee;
  font-family: Georgia, serif;

  .hovera {
    word-break: break-all;
    text-decoration: none;
    cursor: pointer;
  }

  .hovera:hover {
    color: #e58c7c;
  }

  h2 {
    color: #eee;
    font-weight: 400;
    font-size: 24px;
    text-align: center;
    line-height: 36px;
    margin: 0;
    border: none;
    padding: 0;
  }

  h3 {
    color: #eee;
    font-weight: 400;
    font-size: 16px;
    text-align: center;
    line-height: 36px;
    margin-bottom: 30px;
  }

  img {
    width: 50px;
    height: 50px;
    border-radius: 100%;
    vertical-align: middle;
    margin-left: 5px;
  }

  span {
    display: inline-block;
    margin-right: 10px;
    font-size: 24px;
  }

  p {
    display: flex;
    justify-content: start;
    background: rgba(154, 154, 154, 0.5);
    padding: 10px;
    line-height: 24px;
    margin-bottom: 20px;
    border-radius: 8px;
    font-size: 18px;
    color: #eee;

    font {
      margin-right: 5px;
    }

    a {
      margin-right: 7px;
      color: #eee;
    }

    &:hover {
      background: rgba(228, 228, 228, 0.7);
      color: #9c9c9c;

      a {
        color: #000000;
      }
    }
  }
}

.link {
  margin: 4px;
}
</style>
