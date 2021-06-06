 <template>
  <div class="home-introduction">
    <div class="home-introduction-header">
      <img :src="$withBase('/img/头像.jpg')" />
      <h3>
        RuiLinDong{{ aDouble }}
        <span>浙江杭州</span>
      </h3>
      <br />
    </div>

    <span
      >一名热爱前端的程序员，我喜欢编程、音乐、各种棋类，希望和你交个朋友。</span
    >
    <a class="aboutme">关于我</a>
  </div>
</template>
<script>
export default {
  computed: {
    // 仅读取
    aDouble: function () {
      // console.log(this.$themeConfig)
      return this.a * 2;
    },
    // 读取和设置
    aPlus: {
      get: function () {
        return this.a + 1;
      },
      set: function (v) {
        this.a = v - 1;
      },
    },
  },
};
</script>
 <style lang="stylus">
 @media screen and (max-width: 998px) {
   .home-introduction {
     display: none;
   }
 }

 .home-introduction {
   height: 293px;
   border: 1px solid #ccc;
   padding: 15px;

   .home-introduction-header {
     display: flex;
     flex: 0;
   }

   .home-introduction-header span {
     margin-top: 5px;
   }

   img {
     display: inline-block;
     width: 70px;
     border-radius: 35px;
     transition: all 0.3s;
   }

   img:hover {
     transform: rotate(-180deg);
   }

   h3 {
     display: inline-block;
     margin: 12px 20px;
     color: #0078b6;
     fon: 17px / 1.125 Arial, Helvetica, sans-serif;
   }

   h3 span {
     color: #999;
     font-size: 12px;
   }

   span {
     display: block;
     margin-top: 16px;
     font: 300 14px / 1.8 PingFang SC, Lantinghei SC, Microsoft Yahei, Hiragino Sans GB, Microsoft Sans Serif, WenQuanYi Micro Hei, Helvetica, sans-serif;
   }

   .aboutme {
     display: block;
     height: 35px;
     cursor: pointer;
     text-align: right;
     padding-right: 12px;
     line-height: 65px;
     font-size: 12px;
     color: #0078b6;
   }
 }
</style>