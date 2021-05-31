 <template>
  <div class="home-introduction">
    <div class="home-introduction-header">
      <img src="../../../public/头像.jpg" />
      <h3>
        RuiLinDong
        <span>浙江杭州</span>
      </h3>
      <br />
    </div>

    <span
      >一名热爱前端的程序员，我喜欢编程、音乐、各种棋类，希望和你交个朋友。</span
    >
    <footer>关于我</footer>
  </div>
</template>

 <style scoped>
.home-introduction {
  position: absolute;
  right: 0;
  top: 600px;
  width: 302px;
  height: 193px;
  border: 1px solid #ccc;
  padding: 15px;
  margin-bottom: 30px;
}
.home-introduction .home-introduction-header {
  display: flex;
  flex: 0;
}
.home-introduction .home-introduction-header span {
  margin-top: 5px;
}
.home-introduction img {
  display: inline-block;
  width: 70px;
  border-radius: 35px;
}
.home-introduction h3 {
  display: inline-block;
  margin: 12px 20px;
  color: #0078b6;
  font: 17px/1.125 Arial, Helvetica, sans-serif;
}
.home-introduction h3 span {
  color: #999;
  font-size: 12px;
}

.home-introduction span {
  display: block;
  margin-top: 10px;
  font: 300 14px/1.8 PingFang SC, Lantinghei SC, Microsoft Yahei,
    Hiragino Sans GB, Microsoft Sans Serif, WenQuanYi Micro Hei, Helvetica,
    sans-serif;
}
.home-introduction footer {
  position: absolute;
  right: 15px;
  bottom: 15px;
  color: #0078b6;
}
@media screen and (max-width: 998px) {
  .home-introduction {
    display: none;
  }
}
</style>