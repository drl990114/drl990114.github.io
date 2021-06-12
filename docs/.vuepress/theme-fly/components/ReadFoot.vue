 <template>
  <div class="read-foot">
    <div class="content">
      <div class="content-main">
        <div class="content-main-nav">
          <a href="">相关文章</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ReadFoot",
  computed: {
    themeConfigs() {
      return this.$themeConfig;
    },
  },
};
</script>
 <style lang="stylus">
 .read-foot {
   height: 410px;
   background: #3f3f3f;
   overflow: hidden;
   z-index: 1000px;

   .content {
     width: 55%;
     height: 100%;
     margin: 0 auto;

     .content-main {
       .content-main-nav {
         min-height: 410px;
         width: 800px;
         margin: auto;
         padding-left: 40px;
         color: #fff;

         a {
           display: inline-block;
           margin-right: 10px;
           border-top: 5px solid #3f3f3f;
           padding: 10px 6px;
           color: #fff;
           border-top-color: #e58c7c;
           text-decoration: none;
           box-shadow: 0 -17px 26px #130f0fc9;
         }
       }
     }
   }
 }
</style>