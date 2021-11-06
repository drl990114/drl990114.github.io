 <template>
  <div>
    <div class="categories">
      <div class="categories-main">
        <Categoriesheader />
        <div class="categories-class">
          <span> 类别：</span>
          <div class="categories-list">
            <a
              v-bind:class="{ current: categorieName === 'all' }"
              @click="categorieName = 'all'"
              >全部</a
            >

            <router-link
              v-bind:class="{ current: categorieName === item }"
              v-for="item in allCategories"
              :key="item"
              :to="{
                path: '/categories/',
                query: { category: item },
              }"
              >{{ item }}</router-link
            >
          </div>
        </div>
        <div
          class="categories-detail"
          v-for="([key, pages], index) in archivePages"
          :key="index"
        >
          <strong
            ><router-link
              :to="{
                path: '/archives/',
                query: { year: key },
              }"
              >{{ key }}年</router-link
            ></strong
          >
          <div class="currentYear">
            <ul>
              <li v-for="page in pages" :key="page.key">
                <router-link :to="page.path">{{ page.title }} </router-link>
                <span
                  >({{ page.frontmatter.formatDate }} · 标签:{{
                    page.frontmatter.tags ? page.frontmatter.tags[0] : "无"
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
import { getTimeLines, getCategories } from "../util";
export default {
  components: { LeftNav, Categoriesheader, ReadFoot },
  data () {
    console.log('router', this.$route)
    return {
      categorieName:
        typeof this.$route.query.category == "undefined"
          ? "all"
          : this.$route.query.category,
    };
  },
  computed: {
    archivePages () {
      const res = getTimeLines(this.$site.pages);
      let nameParam = this.categorieName;
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
    allCategories () {
      const res = getCategories(this.$site.pages);
      return res;
    },
  },
  watch: {
    '$route.query.category' (category) {
      this.categorieName = category
      // this.category = category ? decodeURIComponent(category) : ''
      // if (this.category) {
      //   this.total = this.$groupPosts.categories[this.category].length
      // } else {
      //   this.total = this.$sortPosts.length
      // }
      // this.currentPage = 1
    }
  }
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
           cursor: pointer;
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