<template>
  <div class="welcome">
    <h1>Welcome</h1>
    <div class="nav">
      <a href="/read/">read</a>
      <a href="/home/">blog</a>
      <a href="/categories/"> categories </a>
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
  },
};
</script>

<style lang="stylus">
.welcome 
  width: 100%
  margin: 0 auto

.nav 
  width: 40%
  margin: 20px auto
  padding: 40px 30px
  background: #ecf0f3
  border-radius: 20px
  font-size: 1.5rem
  box-shadow: -6px -6px 20px rgba(255, 255, 255, 1),
    6px 6px 20px rgba(0, 0, 0, 0.1)

.link 
  margin: 4px

</style>
