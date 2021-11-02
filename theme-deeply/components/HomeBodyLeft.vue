 <template>
  <div class="home-leftBody">
    <div class="home-leftBody-article">
      <h1>
        <router-link :to="recommend.link">{{ recommend.title }}</router-link>
      </h1>
      <p itemprop="description">
        {{ recommend.more + "..." }}
        <router-link :to="recommend.link">阅读全文 »</router-link>
      </p>
      <span
        >Posted by <router-link to="/about/">{{ author }}</router-link> at
        <router-link to="/archives/"></router-link> on
        <time>{{ recommend.time }}</time>
        <router-link to="/archives/"
          ><b
            class="ds-thread-count disqus-comment-count cy_cmt_count"
            data-thread-key="year-2020"
            data-disqus-identifier="year-2020"
            id="sourceId::year-2020"
          ></b></router-link
      ></span>
    </div>
    <HomeBodyNear />
  </div>
</template>

<script>
import HomeBodyNear from "./HomeBodyNear.vue";
export default {
  components: {
    HomeBodyNear,
  },
  computed: {
    author () {
      return this.$themeConfig.author;
    },
    recommend () {
      console.log(this.$themeConfig.recommend);
      return this.$themeConfig.recommend;
    },
  },
};
</script>

 <style lang="stylus">
 .home-leftBody {
   border-radius: 2px;

   .home-leftBody-article {
     min-height: 190px;
     background: var(--homeArticleBg);
     box-shadow: 2px 2px 4px var(--shadowColor);
     padding: 20px 20px 25px 20px;

     h1 {
       font-size: 22px;
       margin: 8px 0;
       font-weight: 400;
     }

     p {
       font-size: 15px;
       line-height: 30px;
       padding-bottom: 10px;
       margin-bottom: 10px;
       border-bottom: 1px dashed #ccc;
     }

     span {
       display: block;
       float: right;
       font-size: 14px;
       color: #999;
       font-family: Georgia, serif;
     }
   }
 }
</style>