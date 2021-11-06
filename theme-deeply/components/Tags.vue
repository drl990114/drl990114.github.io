 <template>
  <div>
    <div class="tags">
      <div class="tags-main">
        <Categoriesheader />
        <div class="tag-class">
          <span> 标签：</span>
          <div class="tag-list">
            <router-link
              v-bind:class="{ current: tag === 'all' }"
              :to="{
                path: '/tags',
              }"
              >全部</router-link
            >
            <router-link
              v-bind:class="{ current: tag === item }"
              v-for="item in allTags"
              :key="item"
              :to="{
                path: '/tags/',
                query: { tag: item },
              }"
              >{{ item }}</router-link
            >
          </div>
        </div>
        <div
          class="tags-detail"
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
                  >({{ page.frontmatter.formatDate
                  }}<span class="currentYear-msg">
                    · 分类:
                    <router-link
                      class="currentYear-tag"
                      v-for="category in page.frontmatter.categories"
                      :to="{
                        path: '/categories/',
                        query: { category },
                      }"
                      :key="category"
                      >{{ category }}</router-link
                    >
                    · 标签:<router-link
                      class="currentYear-tag"
                      v-for="tag in page.frontmatter.tags"
                      :key="tag"
                      :to="{
                        path: '/tags/',
                        query: { tag },
                      }"
                      >{{ tag }}
                    </router-link></span
                  >)
                </span>
              </li>
            </ul>
          </div>
        </div>
        <LeftNav />
      </div>
    </div>
    <ReadFoot />
  </div>
</template>
<script>
import LeftNav from "./LeftNav.vue";
import Categoriesheader from "./Categoriesheader.vue";
import ReadFoot from "./ReadFoot.vue";
import { getTimeLines, getTags } from "../util";
export default {
  components: { LeftNav, Categoriesheader, ReadFoot },
  data () {
    return {
      tag:
        typeof this.$route.query.tag == "undefined"
          ? "all"
          : this.$route.query.tag,
    };
  },
  computed: {
    archivePages () {
      const res = getTimeLines(this.$site.pages);
      let nameParam = this.tag;
      if (nameParam) {
        if (nameParam == "all") {
          const tagActicleslines = getTimeLines(this.$site.pages);
          return tagActicleslines;
        } else {
          const tagActicle = this.$site.pages.filter(
            (page) => {
              if (Array.isArray(page?.frontmatter?.tags)) {
                return page.frontmatter.tags.includes(nameParam)
              } else {
                return false
              }

            }
          );
          const tagActicleslines = getTimeLines(tagActicle);
          return tagActicleslines;
        }
      }
      return res;
    },
    allTags () {
      const res = getTags(this.$site.pages);
      return res;
    },
  },
  watch: {
    '$route.query.tag' (tag) {
      this.tag = tag ?? 'all'
    }
  }
};
</script>
 <style lang="stylus">
 .current {
   background: var(--cateCurrent);
 }

 .tags {
   font-size: 14px;
   margin: 0 auto;
   font-family: Palatino, Garamond, Times, Georgia, serif;

   .tags-main {
     min-height: 100vh;

     .tag-class {
       display: flex;
       min-height: 80px;
       padding: 15px;
       font-size: 16px;
       background: var(--categories);
       margin-bottom: 10px;

       span {
         display: inline-block;
         width: 60px;
         padding: 5px 0 0 0;
         text-align: right;
         font-weight: 700;
         margin-right: 8px;
         white-space: nowrap;
       }

       .tag-list {
         a {
           display: inline-block;
           padding: 2px 8px;
           font-size: 16px;
           line-height: 24px;
           cursor: pointer;
         }
       }
     }

     .tags-detail {
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

       .currentYear {
         font-size: 10px;

         .currentYear-tag {
           display: inline-block;
           margin: 0 3px;
           font-size: 10px;
           color: #555;

           &:hover {
             color: #e58c7c;
             margin: 0 3px;
           }
         }

         a {
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
           min-height: 28px;
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
   .tags {
     width: 50%;
   }
 }

 @media screen and (min-width: 998px) and (max-width: 1280px) {
   .tags {
     width: 60%;
   }
 }

 @media screen and (min-width: 660px) and (max-width: 997px) {
   .tags {
     width: 75%;
   }
 }

 @media screen and (max-width: 659px) {
   .tags {
     width: 94%;

     .tags-main {
       .tag-class {
         font-size: 14px;

         .tag-list {
           a {
             font-size: 14px;
           }
         }
       }
     }
   }

   .currentYear {
     a {
       font-size: 14px !important;
     }
   }

   .currentYear-msg {
     display: none !important;
   }
 }
</style>