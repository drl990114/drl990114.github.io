 <template>
  <div id="backTop" @click="topFunction">回到顶部</div>
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
    topFunction: () => {
      let timer = setInterval(() => {
        let wTop =
          document.documentElement.scrollTop || document.body.scrollTop;
        document.documentElement.scrollTop = document.body.scrollTop =
          wTop - 500;
        if (wTop <= 0) {
          clearInterval(timer);
        }
      }, 30);
    },
  },
};
</script>
 <style lang="stylus">
 #backTop {
   position: fixed;
   display: none;
   bottom: 20px;
   right: 30px;
   z-index: 99;
   border: none;
   outline: none;
   background-color: red; /* 设置背景颜色，你可以设置自己想要的颜色或图片 */
   color: white; /* 文本颜色 */
   cursor: pointer;
   padding: 15px;
   border-radius: 10px; /* 圆角 */
 }
</style>