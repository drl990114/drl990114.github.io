 <template>
  <div class="read-foot">
    <div class="content">
      <div class="content-main">
        <div class="content-main-nav">
          <a href="">相关文章</a>
        </div>
      </div>
      <div style="display: block">
        <div class="read-foot-btn">回到首页</div>
      </div>
      <HomeFoot />
    </div>
  </div>
</template>
<script>
import HomeFoot from "./HomeFoot.vue";
export default {
  name: "ReadFoot",
  components: {
    HomeFoot,
  },
  computed: {
    themeConfigs() {
      return this.$themeConfig;
    },
  },
};
</script>
 <style lang="stylus">
 .read-foot {
   min-height: 250px;
   background: #3f3f3f;
   overflow: hidden;
   z-index: 1000px;

   .content {
     width: 55%;
     height: 100%;
     margin: 0 auto;

     .content-main {
       min-height 150px
       .content-main-nav {
         min-height: 70px;
         width: 800px;
         margin: 0 auto;
         padding-left: 40px;
         color: #fff;

         a {
           display: inline-block;
           margin-right: 10px;
           border-top: 5px solid #e58c7c;
           padding: 10px 6px;
           color: #fff;
           text-decoration: none;
           box-shadow: 0 -17px 26px #1b15157d;
         }
       }
     }

     .read-foot-btn {
       width: 400px;
       max-width: 98%;
       font-size: 14px;
       margin: 30px auto;
       border-radius: 10px;
       line-height: 40px;
       text-align: center;
       box-shadow: 3px 3px 5px #555;
       cursor: pointer;
       background-color: #565656;
       color: #ccc;
       text-decoration: none;
     }
   }
 }
</style>