 <template>
  <div class="home-leftBody">
    <div class="home-leftBody-article">
      <h1>
        <a :href="recommend.link">{{ recommend.title }}</a>
      </h1>
      <p itemprop="description">
        {{ recommend.more + "..." }}
        <a :href="recommend.link">阅读全文 »</a>
      </p>
      <span
        >Posted by <a :href="base+'/about/'">{{ author }}</a> at
        <a :href="base+'/archives/'"></a> on <time>{{ recommend.time }}</time>
        <a :href="base+'/archives/'"
          ><b
            class="ds-thread-count disqus-comment-count cy_cmt_count"
            data-thread-key="year-2020"
            data-disqus-identifier="year-2020"
            id="sourceId::year-2020"
          ></b></a
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
    author() {
      return this.$themeConfig.author;
    },
    recommend() {
      console.log(this.$themeConfig.recommend);
      return this.$themeConfig.recommend;
    },
    base() {
      const res = this.$site.base.substr(0, this.$site.base.length - 1);
      return res;
    },
  },
};
</script>

 <style lang="stylus">
 .home-leftBody {
   border-radius: 2px;

   .home-leftBody-article {
     min-height: 180px;
     background: var(--homeArticleBg);
     box-shadow: 2px 2px 4px var(--shadowColor);
     padding: 20px;

     h1 {
       font-size: 22px;
       margin: 8px 0;
       font-weight: 400;
     }

     p {
       font-size: 15px;
       line-height: 30px;
       padding-bottom: 15px;
       margin-bottom: 15px;
       border-bottom: 1px dashed #ccc;
     }

     span {
       float: right;
       font-size: 14px;
       color: #999;
     }
   }
 }
</style>