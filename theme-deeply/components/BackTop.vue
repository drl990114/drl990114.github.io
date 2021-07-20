 <template>
  <div id="backTop" @click="topFunction(1)">
    <span class="icon iconfont icon-dingbu" />
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
  mounted() {
    if (typeof document != "undefined" && document.getElementById("backTop")) {
      window.onscroll = function () {
        scrollFunction();
      };

      function scrollFunction() {
        if (
          document.body.scrollTop > 40 ||
          document.documentElement.scrollTop > 40
        ) {
          document.getElementById("backTop").style.display = "block";
        } else {
          document.getElementById("backTop").style.display = "none";
        }
      }
    }
  },
  methods: {
    topFunction: (rate) => {
      let doc = document.body.scrollTop
        ? document.body
        : document.documentElement;
      let scrollTop = doc.scrollTop;

      let top = function () {
        scrollTop = scrollTop + (0 - scrollTop) / (rate || 2);

        // 临界判断，终止动画
        if (scrollTop <= 1) {
          doc.scrollTop = 0;
          return;
        }
        doc.scrollTop = scrollTop;
        requestAnimationFrame(top);
      };
      top();
    },
  },
};
</script>
 <style lang="stylus">
 #backTop {
   position: fixed;
   display: none;
   bottom: 140px;
   right: 30px;
   z-index: 99;
   border: none;
   outline: none;
   color: #999;
   width: 40px;
   height: 40px;
   border: 1px solid #ccc;
   line-height: 20px;
   text-align: center;
   cursor: pointer;

   span {
     display: inline-block;
     margin-top: 10px;
     font-size: 20px;
     font-weight: bold;
   }
 }
</style>