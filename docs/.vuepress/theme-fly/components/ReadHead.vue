 <template>
  <div class="read-head">
    <div class="read-header-head">
      <img :src="$withBase(themeConfigs.avatar)" />
    </div>
    <div class="read-header">
      <div class="read-header-nav">
        <a href="/">{{ themeConfigs.author }} 的个人博客</a> »
        <a href="/home/">博客</a> »
        <a class="category-link" href="/blog/categories/工具/">工具</a>,<a
          class="category-link"
          href="/blog/categories/工具/前端杂烩/"
          >前端杂烩</a
        >
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ReadHead",
  computed: {
    themeConfigs() {
      return this.$themeConfig;
    },
  },
};
</script>
 <style lang="stylus">
 .read-head {
   .read-header {
     height: 25px;
     margin-bottom: 20px;
     font-family: Palatino, Garamond, Times, Georgia, serif;
   }

   .read-header-nav {
     text-align: right;
     position: absolute;
     left: 119px;
     top: 31px;
     border-left: 4px solid #7b9ac9;
     padding-left: 20px;
     line-height: 24px;

     a {
       color: #a8a8a8;

       &:hover {
         color: #4a75b5;
       }
     }
   }

   .read-header-head {
     position: absolute;
     top: 100px;
     left: 190px;

     img {
       width: 120px;
       min-height: 120px;
       border-radius: 100%;
       box-shadow: 1px 1px 3px #ccc;
     }
   }
 }
</style>