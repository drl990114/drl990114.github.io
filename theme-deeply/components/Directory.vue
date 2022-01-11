 <template>
  <div>
    <div class="read-directory">
      <ul>
        <li v-for="item in articleHeader" :key="item.slug" class="directory-li">
          <router-link :to="'./#' + item.slug">{{ item.title }}</router-link>
        </li>
      </ul>
    </div>
    <BackTop />
  </div>
</template>
<script>
import BackTop from "./BackTop.vue";
export default {
  components: {
    BackTop,
  },
  mounted() {
    if (typeof document != "undefined") {
      const h2Arr = document.getElementsByTagName("h2");
      const h3Arr = document.getElementsByTagName("h3");
      let directoryArr = [...h2Arr, ...h3Arr];
      const linkArr = document.getElementsByClassName("directory-li");

      document.addEventListener("scroll", () => {
        directoryArr.forEach((item, idx) => {
          if (
            document.documentElement.scrollTop - item.offsetTop < 20 &&
            document.documentElement.scrollTop - item.offsetTop > -20
          ) {
            linkArr.forEach((itm) => {
              const hashUrl = decodeURIComponent(
                itm.childNodes[0].hash.split("#")[1]
              );
              if (hashUrl === item.id) {
                itm.childNodes[0].style.color = "#e58c7c";
              } else {
                itm.childNodes[0].style.color = "#4a75b5";
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
};
</script>
 <style lang="stylus">
 .read-directory {
   position: fixed;
   top: 15px;
   right: 15px;
   width: 200px;
   overflow: auto;
   background: transparent;
   padding: 10px;
   font-family: 'Microsoft Yahei';
   z-index: 1;
   max-height: 360px;

   ul {
     list-style: none;
     background: transparent;

     .directory-li {
       font-size: 12px;
       font-weight: 400;
       margin-bottom: 10px;
       background: transparent !important;
     }
   }
 }

 @media screen and (min-width: 1281px) {
   .read-directory {
     display: inline-block;
   }
 }

 @media screen and (max-width: 998px) {
   .read-directory {
     display: none;
   }
 }
</style>