 <template>
  <div class="home-introduction">
    <div class="home-introduction-header">
      <img :src="$withBase(avatarUrl)" />
      <h3>
        {{ author }}
        <span>{{ location }}</span>
      </h3>
      <br />
    </div>

    <span>{{ introduction }}</span>
    <router-link class="aboutme" to="/about/">关于我</router-link>
  </div>
</template>
<script>
export default {
  computed: {
    introduction() {
      return this.$themeConfig.introduction;
    },
    avatarUrl() {
      return this.$themeConfig.avatar;
    },
    author() {
      return this.$themeConfig.author;
    },
    location() {
      return this.$themeConfig.location;
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
     width: 60px;
     height: 60px;
     border-radius: 30px;
     transition: all 0.3s;
   }

   img:hover {
     transform: rotate(-180deg);
   }

   h3 {
     display: inline-block;
     margin: 12px 20px;
     color: #0078b6;
     font-weight: normal;
     font-size: 18px !important;
   }

   h3 span {
     color: #999;
     font-size: 12px;
   }

   span {
     display: block;
     margin-top: 12px;
     font: 300 14px / 1.8 PingFang SC, Lantinghei SC, Microsoft Yahei, Hiragino Sans GB, Microsoft Sans Serif, WenQuanYi Micro Hei, Helvetica, sans-serif;
   }

   .aboutme {
     display: block;
     height: 35px;
     cursor: pointer;
     text-align: right;
     padding-right: 12px;
     line-height: 60px;
     font-size: 12px;
     color: #0078b6;
   }
 }
</style>