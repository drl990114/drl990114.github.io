<template>
  <div class="home-header">
    <div class="home-header-left">
      <router-link to="/welcome">RuiLinDong</router-link>
      <font aria-hidden="true">» 博客</font>
      <div class="arrow-expend">▾</div>
    </div>
    <div class="home-header-right">
      <input placeholder="站内搜索" />
    </div>
  </div>
</template>

<style scoped>
.home-header {
  width: 100%;
  height: 70px;
  margin: 50px 0 10px 0;
  font-size: 28px;
  font-weight: bold;
}
.arrow-expend {
  display: inline-block;
  font-size: 2rem;
}
.home-header-left {
  float: left;
}
.home-header-right {
  position: relative;
  width: 150px;
  height: 40%;
  float: right;
  top: 10%;
  border: 1px solid black;
}

.home-header-right input {
  position: absolute;
  border: none;
  margin: 0;
  width: 100%;
  height: 100%;
  font-size: 1rem;
  color: #888;
  font-family: initial;
}
</style>
