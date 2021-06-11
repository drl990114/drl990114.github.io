 <template>
  <div class="read-directory">
    <ul>
      <li id="directoryTitle">{{ articleTitle }}</li>
      <li v-for="item in articleHeader" :key="item.slug" class="directory-li">
        <a :href="'./#' + item.slug">{{ item.title }}</a>
      </li>
    </ul>
    <BackTop />
  </div>
</template>
<script>
import BackTop from "./BackTop.vue";
export default {
  name: "ReadHead",
  components: {
    BackTop,
  },
  mounted() {
    if (typeof document != "undefined") {
      const h2Arr = document.getElementsByTagName("h2");
      const h3Arr = document.getElementsByTagName("h3");
      let directoryArr = [...h2Arr, ...h3Arr];
      const linkArr = document.getElementsByClassName('directory-li')
      
      document.addEventListener("scroll", () => {
        directoryArr.forEach((item, idx) => {
          if (
            document.documentElement.scrollTop - item.offsetTop < 20 &&
            document.documentElement.scrollTop - item.offsetTop > -20
          ) {
            linkArr.forEach((itm) => {
              const hashUrl = decodeURIComponent(itm.childNodes[0].hash.split("#")[1]);
              if (hashUrl === item.id) {
                console.log(item.id);
                itm.style.background = "#f5f5f5";
              } else {
                itm.style.background = "white";
              }
            });
          }
        });
      });
    }
  },
  computed: {
    themeConfigs() {
      return this.$themeConfig;
    },
    articleHeader() {
      if (this.$page.headers) {
        return this.$page.headers;
      } else {
        return [];
      }
    },
    articleTitle() {
      return this.$page.title;
    },
  },
  methods: {
    scrollFunction: () => {
      if (typeof window !== "undefined") {
        if (
          document.body.scrollTop > 20 ||
          document.documentElement.scrollTop > 20
        ) {
          document.getElementById("myBtn").style.display = "block";
        } else {
          document.getElementById("myBtn").style.display = "none";
        }
      }
    },
  },
};
</script>
 <style lang="stylus">
 .read-directory {
   position: fixed;
   top: 15px;
   right: 15px;
   width: 200px;
   overflow: auto;
   background: rgba(255, 255, 255, 0.58);
   padding: 10px;
   border: 1px solid #fff;
   font-family: 'Microsoft Yahei';
   z-index: 1;
   max-height: 560px;

   ul {
     list-style: none;
     font-size: 16px;

     li {
       font-size: 14px;
       font-weight: 400;
       margin-bottom: 10px;
     }
   }
 }
</style>