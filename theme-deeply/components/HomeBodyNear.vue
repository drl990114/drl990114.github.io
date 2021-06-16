 <template>
  <div class="home-near">
    <h2><a :href="base + '/archives/'">博客归档 »</a>近期文章</h2>
    <ul>
      <li v-for="item in nearPages" :key="item.key">
        <span>{{ item.nearFormatT }} » </span>
        <a :href="base + item.path">{{ item.frontmatter.title }}</a>
      </li>
      <li>
        <a :href="base + '/archives/'">所有文章 »</a>
      </li>
    </ul>
  </div>
</template>

<script>
import { timeSort, nearFormatTime, filterConfigMd } from "../util";
export default {
  computed: {
    base() {
      const res = this.$site.base.substr(0, this.$site.base.length - 1);
      return res;
    },
    nearPages() {
      let pageArr = [];
      let articleArr = filterConfigMd(this.$site.pages);
      articleArr.forEach((item) => {
        if (!item.frontmatter.hasOwnProperty("article") && !item.article) {
          let nearFormatT = nearFormatTime(item.lastUpdated);
          item.nearFormatT = nearFormatT;
          pageArr.push(item);
        }
      });
      pageArr = timeSort(pageArr);
      if (pageArr.length >= 10) {
        pageArr.length = 10;
      }
      return pageArr;
    },
  },
  methods: {},
};
</script>

 <style lang="stylus">
 .home-near {
   height: 475px;

   h2 {
     font-size: 22px;
     font-weight: 400;
     border-bottom: 1px dashed #ccc;
     width: 100%;
     line-height: 2;
     margin-bottom: 15px;
     margin-top: 40px;
     padding-left: 5px;

     a {
       float: right;
       font-size: 14px;
       margin-top: 10px;
       font-weight: 700;
     }
   }

   ul {
     padding-left: 27px;
   }

   li {
     margin-bottom: 5px;
     list-style: circle;
     line-height: 28px;
     font-size: 16px;
     text-overflow: ellipsis;

     span {
       color: #999;
       max-width: 100px;
     }

     a {
       white-space: nowrap;
       max-width: 65%;
       display: inline-block;
       overflow: hidden;
       text-overflow: ellipsis;
       vertical-align: middle;
     }
   }

   .aria-readonly {
     height: 0;
     width: 0;
     line-height: 0;
     position: absolute !important;
     left: -9999px !important;
   }
 }
</style>