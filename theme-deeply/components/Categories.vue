 <template>
  <div>
    <div class="categories">
      <div class="categories-main">
        <Categoriesheader />
        <div class="categories-class">
          <span> 类别：</span>
          <div class="categories-list">
            <router-link
              v-bind:class="{ current: currentCate === 'all' }"
              to="/categories/?name=all"
              >全部</router-link
            >
            <router-link
              v-bind:class="{ current: currentCate === item }"
              v-for="item in allCategories"
              :key="item"
              :to="'/categories/?name=' + item"
              >{{ item }}</router-link
            >
          </div>
        </div>
        <div
          class="categories-detail"
          v-for="([key, value], index) in archivePages"
          :key="index"
        >
          <strong
            ><a :href="base + '/archives/?year=' + key">{{ key }}年</a></strong
          >
          <div class="currentYear">
            <ul>
              <li v-for="item in value" :key="item.key">
                <a :href="base + item.path">{{ item.title }} </a>
                <span
                  >({{ item.lastUpdated.split(",")[0] }} · 标签:{{
                    item.frontmatter.tags ? item.frontmatter.tags[0] : "无"
                  }})</span
                >
              </li>
            </ul>
          </div>
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
import HomeHeader from "./HomeHeader.vue";
import {
  getTimeLines,
  getCategories,
  getUrlParams,
  nearFormatTime,
} from "../util";
export default {
  components: { LeftNav, Categoriesheader, ReadFoot },
  computed: {
    archivePages() {
      const res = getTimeLines(this.$site.pages);
      let nameParam = getUrlParams("name");
      console.log(nameParam);
      console.log(this.$site.pages);
      // let cateActicle
      if (nameParam) {
        if (nameParam == "all") {
          const cateActicles = getTimeLines(this.$site.pages);
          return cateActicles;
        } else {
          const cateActicle = this.$site.pages.filter(
            (page) =>
              page.frontmatter.categories &&
              page.frontmatter.categories[0] == nameParam
          );
          const cateActicles = getTimeLines(cateActicle);
          return cateActicles;
        }
      }
      return res;
    },
    currentCate() {
      let urlparam = getUrlParams("name");
      return urlparam;
    },
    allCategories() {
      const res = getCategories(this.$site.pages);

      return res;
    },
    base() {
      const res = this.$site.base.substr(0, this.$site.base.length - 1);
      return res;
    },
  },
};
</script>
 <style lang="stylus">
 .current {
   background: var(--cateCurrent);
 }

 .categories {
   font-size: 14px;
   min-height: 100vh;
   font-family: Palatino, Garamond, Times, Georgia, serif;
   margin: 0 auto;
   transition: all 0.3s;

   .categories-main {
     .categories-class {
       display: flex;
       margin-bottom: 10px;
       padding: 15px;
       font-size: 16px;
       background: var(--categories);
       min-height: 80px;

       span {
         display: inline-block;
         width: 60px;
         padding: 5px 0 0 0;
         text-align: right;
         font-weight: 700;
         margin-right: 8px;
       }

       .categories-list {
         display: inline-block;
         width: 595px;
         vertical-align: top;
         max-width: 80%;

         a {
           display: inline-block;
           padding: 2px 8px;
           font-size: 16px;
           line-height: 24px;
         }
       }
     }

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
 }

 @media screen and (min-width: 1281px) {
   .categories {
     width: 50%;
   }
 }

 @media screen and (min-width: 998px) and (max-width: 1280px) {
   .categories {
     width: 60%;
   }
 }

 @media screen and (min-width: 660px) and (max-width: 997px) {
   .categories {
     width: 75%;
   }
 }

 @media screen and (max-width: 659px) {
   .categories {
     width: 94%;
   }
 }
</style>