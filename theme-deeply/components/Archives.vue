 <template>
  <div>
    <div class="archives">
      <Categoriesheader />
      <div
        class="categories-detail"
        v-for="([key, value], index) in archivePages"
        :key="index"
      >
        <strong
          ><a @click="year = key">{{ key }}年</a></strong
        >
        <div class="currentYear">
          <ul>
            <li v-for="item in value" :key="item.key">
              <router-link :to="item.path">{{ item.title }} </router-link>
              <span
                >({{ item.lastUpdated.split(",")[0] }} · 分类:{{
                  item.frontmatter.categories
                    ? item.frontmatter.categories[0]
                    : "无"
                }})</span
              >
            </li>
          </ul>
        </div>
      </div>
      <LeftNav />
    </div>
    <ReadFoot />
  </div>
</template>
<script>
import LeftNav from "./LeftNav.vue";
import Categoriesheader from "./Categoriesheader.vue";
import ReadFoot from "./ReadFoot.vue";
import { getTimeLines } from "../util";
export default {
  name: "Archives",
  components: { LeftNav, Categoriesheader, ReadFoot },
  data() {
    return {
      year: this.$route.query.year,
    };
  },
  computed: {
    themeConfigs() {
      return this.$themeConfig;
    },
    archivePages() {
      const archiveActicles = getTimeLines(this.$site.pages);
      let yearParam =
        typeof this.year == "undefined"
          ? this.year
          : Number.parseInt(this.year);
      if (!yearParam && isNaN(yearParam)) {
        return archiveActicles;
      } else {
        const currentYearActs = archiveActicles.get(yearParam);
        let res = new Map();
        res.set(yearParam, currentYearActs);
        return res;
      }
    },
  },
};
</script>
 <style lang="stylus">
 .archives {
   font-size: 14px;
   font-family: Palatino, Garamond, Times, Georgia, serif;
   margin: 0 auto;
   transition: all 0.3s;
   min-height: 100vh;

   .categories-detail {
     font-size: 14px;

     strong {
       display: block;
       margin: 20px 0;
       padding-bottom: 6px;
       border-bottom: 1px dashed #aaa;
       font-size: 18px;
       font-weight: bold;
       line-height: 30px;
       text-align: center;
       color: #555;
       font-family: Georgia, serif;

       a {
         color: #555;
         font-weight: 700;
         cursor: pointer;
       }
     }

     a:hover {
       color: #E58C7C;
     }

     .currentYear a {
       display: inline-block;
       color: #4a75b5;
       font-weight: normal;
       word-break: break-all;
       text-decoration: none;
       list-style-type: square;
       line-height: 28px;
       font-size: 16px;
       padding: 0;
       border: none;
       margin: 0;

       &:hover {
         color: #E58C7C;
         padding: 0;
         margin: 0;
         border-bottom: 1px solid #E58C7C;
       }
     }

     ul {
       margin: 25px 0 25px 25px;
       list-style-type: square;
       line-height: 30px;

       li {
         display: list-item;
         margin-bottom: 2px;
         list-style-type: square;
         line-height: 28px;
         font-size: 16px;
         height: 28px;
       }

       span {
         color: #666;
         vertical-align: top;
         white-space: nowrap;
         font-size: 12px;
         display: inline-block;
         margin-left: 2px;
         font-family: Georgia, serif;
       }
     }
   }
 }

 @media screen and (min-width: 1281px) {
   .archives {
     width: 50%;
   }
 }

 @media screen and (min-width: 998px) and (max-width: 1280px) {
   .archives {
     width: 60%;
   }
 }

 @media screen and (min-width: 660px) and (max-width: 997px) {
   .archives {
     width: 75%;
   }
 }

 @media screen and (max-width: 659px) {
   .archives {
     width: 94%;
   }
 }
</style>