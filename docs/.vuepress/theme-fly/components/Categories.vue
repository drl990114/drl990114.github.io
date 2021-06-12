 <template>
  <div class="categories">
    <div class="categories-main">
      <Categoriesheader />
      <div class="categories-class">
        <span> 类别：</span>
        <div class="categories-list">
          <a
            v-bind:class="{ current: currentCate === 'all' }"
            href="/categories/?name=all"
            >全部</a
          >
          <a
            v-bind:class="{ current: currentCate === item }"
            v-for="item in allCategories"
            :key="item"
            :href="'/categories/?name=' + item"
            >{{ item }}</a
          >
        </div>
      </div>
      <div
        class="categories-detail"
        v-for="([key, value], index) in archivePages"
        :key="index"
      >
        <strong
          ><a :href="'/archives/?year=' + key">{{ key }}年</a></strong
        >
        <div class="currentYear">
          <ul>
            <li v-for="item in value" :key="item.key">
              <a :href="item.path">{{ item.title }} </a>
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
    </div>
    <LeftNav />
  </div>
</template>
<script>
import LeftNav from "./LeftNav.vue";
import Categoriesheader from "./Categoriesheader.vue";
import {
  getTimeLines,
  getCategories,
  getUrlParams,
  nearFormatTime,
} from "../util";
export default {
  components: { LeftNav, Categoriesheader },
  computed: {
    archivePages() {
      const res = getTimeLines(this.$site.pages);
      let nameParam = getUrlParams("name");

      // let cateActicle
      if (nameParam) {
        if (nameParam == "all") {
          const cateActicles = getTimeLines(this.$site.pages);
          return cateActicles;
        } else {
          const cateActicle = this.$site.pages.filter(
            (page) =>
              page.frontmatter.categories &&
              page.frontmatter.categories[0] === nameParam
          );
          const cateActicles = getTimeLines(cateActicle);
          console.log(cateActicles);
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
  },
};
</script>
 <style lang="stylus">
 .current {
   background: #eee;
 }

 .categories {
   font-size: 14px;
   height: 100vh;
   width: 50%;
   font-family: Palatino, Garamond, Times, Georgia, serif;
   margin: 0 auto;
   transition: all 0.3s;

   .categories-main {
     .categories-class {
       display: flex;
       margin-bottom: 10px;
       padding: 15px;
       font-size: 16px;
       background: #f8f8f8;
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
</style>