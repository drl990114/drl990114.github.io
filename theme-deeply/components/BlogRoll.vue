 <template>
  <div class="blogroll">
    <Categoriesheader />
    <div class="blogroll-main">
      <p>欢迎交流~（<router-link to="/about/">我的联系方式</router-link>）</p>
      <ul>
        <li v-for="item in blogRollArr" :key="item.link">
          <router-link :to="item.link" target="_blank">{{ item.name }}</router-link>
          <font> » </font>
          <span>{{ item.desc }}</span>
        </li>
      </ul>
    </div>
    <HomeFoot />
    <LeftNav />
  </div>
</template>
<script>
import LeftNav from "./LeftNav.vue";
import HomeFoot from "./HomeFoot.vue";
import Categoriesheader from "./Categoriesheader.vue";
export default {
  name: "BlogRoll",
  components: {
    LeftNav,
    Categoriesheader,
    HomeFoot,
  },
  computed: {
    blogRollArr() {
      console.log(this.$themeConfig);
      return this.$themeConfig.blogRoll;
    },
    base() {
      const res = this.$site.base.substr(0, this.$site.base.length - 1);
      return res;
    },
  },
};
</script>
 <style lang="stylus">
 .blogroll {
   margin: 0 auto;

   .blogroll-main {
     font: 300 1em / 1.8 PingFang SC, Lantinghei SC, Microsoft Yahei, Hiragino Sans GB, Microsoft Sans Serif, WenQuanYi Micro Hei, Helvetica, sans-serif;

     ul {
       margin: 25px 0 125px 35px;
       list-style-type: square;

       li {
         margin-bottom: 5px;
         list-style-type: square;
         line-height: 28px;
         font-size: 16px;
       }
     }
   }
 }

 @media screen and (min-width: 1281px) {
   .blogroll {
     width: 50%;
   }
 }

 @media screen and (min-width: 998px) and (max-width: 1280px) {
   .blogroll {
     width: 60%;
   }
 }

 @media screen and (min-width: 660px) and (max-width: 997px) {
   .blogroll {
     width: 75%;
   }
 }

 @media screen and (max-width: 659px) {
   .blogroll {
     width: 94%;
   }
 }
</style>