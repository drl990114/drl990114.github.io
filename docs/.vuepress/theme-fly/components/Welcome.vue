<template>
  <div class="welcome">
    <div class="nav">
      <h3 style="margin-bottom: 30px">Welcome</h3>
      <p  style="margin-bottom: 10px">{{welcome}}
      </p>
      <a href="/home/">博客</a>
      <a href="/categories/"> 关于我 </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Welcome",
  computed: {
    userNav() {
      console.log(this.$site);
      console.log(this.$page);
      console.log(this.$themeConfig);
      console.log(this.$router.history.current.path);
      return this.$themeLocaleConfig.nav || this.$site.themeConfig.nav || [];
    },
    welcome(){
      return this.$themeConfig.welcome
    }
  },
};
</script>

<style lang="stylus">
.welcome {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  color: var(--textColor)
}

.nav {
  width: 100%;
  margin: 20px auto;
  padding: 40px 30px;
  text-align center
}

.link {
  margin: 4px;
}


</style>
