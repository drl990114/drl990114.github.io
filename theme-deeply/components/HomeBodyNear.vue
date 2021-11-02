 <template>
  <div class="home-near">
    <h2><router-link to="/archives/">博客归档 »</router-link>近期文章</h2>
    <ul>
      <li v-for="item in nearPages" :key="item.key">
        <span>{{ item.nearFormatT }} » </span>
        <router-link :to="item.path">{{ item.frontmatter.title }}</router-link>
      </li>
      <li>
        <router-link to="/archives/">所有文章 »</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { timeSort, nearFormatTime, filterConfigMd } from "../util";
import moment from "moment";
export default {
  computed: {
    nearPages () {
      let pageArr = [];
      let articleArr = filterConfigMd(this.$site.pages);
      articleArr.forEach((item) => {
        if (!item.frontmatter.hasOwnProperty("article") && !item.article) {
          let nearFormatT = String(
            moment(item.frontmatter.date)
              .subtract(moment().utcOffset() / 60, "hours")
              .format("YYYY-MM-DD")
          );
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
   min-height: 340px;

   h2 {
     font-size: 22px;
     font-weight: 400;
     border-bottom: 1px dashed #ccc;
     width: 100%;
     line-height: 2;
     margin-bottom: 15px;
     margin-top: 35px;
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
       font-family: Georgia, serif;
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