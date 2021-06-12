 <template>
  <div class="read-main">
    <div class="read-header-title">{{ articleData.title }}</div>
    <div class="read-header-mes">
      <div class="post-info">
        <span
          >作者: <a href="/about/">{{ themeConfigs.author }}</a></span
        >
        <span>
          <span class="aria-readonly"
            >本文最后更新于 {{ articleData.lastUpdated }}</span
          > </span
        ><span
          >分类:<a
            class="category-link"
            href="/blog/categories/工具/前端杂烩/"
            >{{ articleData.frontmatter.categories[0] }}</a
          ></span
        >
        <span
          tabindex="0"
          aria-hidden="true"
          id="busuanzi_container_site_pv"
          style="display: inline"
          >热度: <span id="busuanzi_value_page_pv">270133</span></span
        >
      </div>
    </div>
    <Content />
    <div class="main-foot">
      <div class="info">
        <ul>
          <li>
            作者:
            <a href="/about/" itemprop="name">{{ themeConfigs.author }}</a>
          </li>
          <li>发表日期: {{ articleData.frontmatter.date }}</li>
          <li>文章分类: {{ articleData.frontmatter.categories[0] }}</li>
          <li>文章标签: {{ articleData.frontmatter.tags[0] || "无" }}</li>
          <li>
            版权声明: 署名-非商业性使用-禁止演绎 3.0 国际（<a
              href="https://creativecommons.org/licenses/by-nc-nd/3.0/deed.zh"
              target="_blank"
              >CC BY-NC-ND 3.0</a
            >）
          </li>
          <li>最后编辑时间: {{ articleData.lastUpdated }}</li>
          <!-- <li>
            Feed 订阅: <a href="/rss2.xml"><i class="icon">◈</i></a>
          </li> -->
          <!-- <li style="opacity: 0.3; text-align: right">
            编辑本文：<a
              href="https://github.com/barretlee/blog/edit/master/blog/src/_posts/2020-11-29-year-2020.md"
              target="_blank"
              aria-hidden="true"
              ><i class="icon"></i></a
            >； 新建文章：<a
              href="https://github.com/barretlee/blog/new/master/blog/src/_posts"
              target="_blank"
              aria-hidden="true"
              ><i class="icon"></i></a
            >
          </li> -->
        </ul>
      </div>
      <div class="post-relative">
        <a :href="prevNext.prev.path" class="prev"
          ><span class="icon iconfont icon-jiantou1" />
          <b>{{ prevNext.prev.title }}</b> </a
        ><a :href="prevNext.next.path" class="next"
          ><b>{{ prevNext.next.title }}</b
          ><span class="icon iconfont icon-jiantou"
        /></a>
      </div>
    </div>
  </div>
</template>
<script>
import { findPrevNext } from "../util";
export default {
  name: "ReadMain",
  computed: {
    articleData() {
      console.log(this.$site);
      console.log(this.$page);
      console.log(this.$themeConfig);
      return this.$page;
    },
    themeConfigs() {
      return this.$themeConfig;
    },
    prevNext() {
      const res = findPrevNext(this.$page, this.$site.pages);
      console.log(res);
      return res;
    },
  },
};
</script>
 <style lang="stylus">
 .read-main {
   margin: 0 auto;

   h1, h2, h3, h4, h5, h6 {
     font-family: Palatino, Garamond, Times, Georgia, serif;
   }

   .read-header-mes {
     font-size: 14px;
     color: grey;
     font-weight: 700;
     margin-bottom: 25px;
     position: relative;
     z-index: 8;
     background: #fff;
     font-family: Palatino, Garamond, Times, Georgia, serif;

     span {
       padding-right: 10px;
     }
   }

   .read-header-title {
     padding: 50px 0 20px 0;
     font-size: 55px;
     line-height: 70px;
     margin-bottom: 20px;
     font-weight: 400;
     font-family: Palatino, Garamond, Times, Georgia, serif;
   }

   .main-foot {
     margin-top: 50px;

     .info {
       border-top: 1px dashed #ccc;
       border-bottom: 1px dashed #ccc;
       padding: 30px 55px 50px 55px;
       background: #f8f8f8;
       font-size: 14px;
       font-family: 'lucida grande', 'lucida sans unicode', lucida, 'Helvetica Neue', helvetica, 'Hiragino Sans GB', 'Microsoft YaHei', 'WenQuanYi Micro Hei', sans-serif;

       ul {
         list-style: none;
       }
     }

     .post-relative {
       overflow: hidden;
       margin: 25px 0;
       font-weight: 700;
       display: flex;
       flex-direction: row;
       align-items: center;
       height: 60px;
       padding-left: 30px;
       padding-right: 30px;
       justify-content: space-between;

       a {
         display: flex;
         line-height: 1px;
       }

       span {
         font-size: 25px;
       }

       b {
         font-size: 20px;
         font-weight: 1000;
         font-family: Georgia, serif;
       }
     }
   }

   h1 {
     display: none;
   }

   h2 {
     font-size: 40px;
     line-height: 68px;
     margin: 15px 0;
     font-weight: 400;
   }

   h3 {
     font-size: 32px;
     line-height: 64px;
     margin: 15px 0;
     font-weight: normal;
   }

   p {
     margin-bottom: 25px;
     -webkit-font-smoothing: antialiased;
     word-break: break-word;
     white-space: normal;
   }

   pre {
     font-family: monospace, Consolas, 'Courier New';
     background: #fafafa !important;
     padding: 10px 4070px;
     overflow-x: auto;
     border: 1px dashed #eee;
     border-width: 1px 0;
     margin-left: -4070px;
     margin-right: -4080px;
     transition: border 0.5s;
     font-size: 16px;
     line-height: 26px;
     max-width: 960px;
     overflow: auto;
     color: #727272;
   }

   table {
     border: 1px solid #ccc;
     margin: 15px 0;
     border-radius: 5px;
     border-spacing: 0;
   }
 }

 @media screen and (min-width: 1281px) {
   .read-main {
     width: 55%;
   }
 }

 @media screen and (min-width: 998px) and (max-width: 1280px) {
   .read-main {
     width: 60%;
   }
 }

 @media screen and (max-width: 998px) {
   .read-main {
     width: 96%;
   }
 }
</style>