<template>
  <div class="welcome">
    <h1>Welcome</h1>
    <div class="nav">
      <a href="/read/">read</a>
        <div v-if="this.$router.history.current.path == '/categories/'">categories</div>
    </div>
  </div>
</template>

<script>
import { isExternal, isMailto, isTel, ensureExt,resolveNavLinkItem} from '../util'
export default {
  name: "Welcome",
  computed: {
    userNav() {
      console.log(this.$site)
      console.log(this.$page)
      console.log(this.$router.history.current.path)
      return this.$themeLocaleConfig.nav || this.$site.themeConfig.nav || [];
    },
    nav() {
      let currentPath = this.$router.history.current.path
      if(currentPath === "categories") {
        return <div v-if="nav">not home</div>
      } else {
        return false
      }
      
    },

    userLinks() {
      return (this.nav || []).map((link) => {
        return Object.assign(resolveNavLinkItem(link), {
          items: (link.items || []).map(resolveNavLinkItem),
        });
      });
    },

    link () {
      return ensureExt(this.item.link)
    },

  },
};
</script>

<style>
.welcome {
  width: 100%;
  margin: 0 auto;
}
.nav {
  width: 40%;
  margin: 20px auto;
  padding: 40px 30px;
  background: #ecf0f3;
  border-radius: 20px;
  font-size: 1.5rem;
  box-shadow: -6px -6px 20px rgba(255, 255, 255, 1),
    6px 6px 20px rgba(0, 0, 0, 0.1);
}
.link {
  margin: 4px;
}
</style>
