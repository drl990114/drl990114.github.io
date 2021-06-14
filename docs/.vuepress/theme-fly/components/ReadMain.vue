 <template>
  <div class="read-main">
    <div class="read-header-title">{{ articleData.title || "" }}</div>
    <div class="read-header-mes">
      <div class="post-info">
        <span
          >作者: <a href="/about/">{{ themeConfigs.author || "" }}</a></span
        >
        <span>
          <span class="aria-readonly"
            >本文最后更新于 {{ articleData.lastUpdated || "" }}</span
          > </span
        ><span
          >分类:
          <a class="category-link" href="/blog/categories/工具/前端杂烩/">{{
            articleData.frontmatter.categories
              ? articleData.frontmatter.categories[0]
              : "无"
          }}</a></span
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
          <li>发表日期: {{ articleData.frontmatter.date || "" }}</li>
          <li>
            文章分类:
            {{
              articleData.frontmatter.categories
                ? articleData.frontmatter.categories[0]
                : "无"
            }}
          </li>
          <li>
            文章标签:
            {{
              articleData.frontmatter.tags
                ? articleData.frontmatter.tags[0]
                : "无"
            }}
          </li>
          <li>
            版权声明: 署名-非商业性使用-禁止演绎 3.0 国际（<a
              href="https://creativecommons.org/licenses/by-nc-nd/3.0/deed.zh"
              target="_blank"
              >CC BY-NC-ND 3.0</a
            >）
          </li>
          <li>最后更新时间: {{ articleData.lastUpdated }}</li>
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
        <a v-if="prevNext.prev" :href="prevNext.prev.path || ''" class="prev"
          ><span class="icon iconfont icon-jiantou1" />
          <b>{{ prevNext.prev.title || "" }}</b> </a
        ><a v-if="prevNext.next" :href="prevNext.next.path || ''" class="next"
          ><b>{{ prevNext.next.title || "" }}</b
          ><span class="icon iconfont icon-jiantou"
        /></a>
      </div>
    </div>
  </div>
</template>
<script>
import { findPrevNext, filterConfigMd } from "../util";
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
      let articles = filterConfigMd(this.$site.pages);
      const res = findPrevNext(this.$page, articles);
      return res;
    },
  },
};
</script>
 <style lang="stylus">
 .read-main {
   margin: 0 auto;
   color: var(--textColor);

   h1, h2, h3, h4, h5, h6 {
     font-family: Palatino, Garamond, Times, Georgia, serif;
   }

   .read-header-mes {
     font-size: 14px;
     color: var(--textColor);
     font-weight: 700;
     margin-bottom: 25px;
     position: relative;
     z-index: 8;
     background: var(--bodyBg);
     font-family: Palatino, Garamond, Times, Georgia, serif;

     span {
       padding-right: 10px;
     }

     .post-info {
       color: #808080;
     }
   }

   .read-header-title {
     line-height: 70px;
     margin-bottom: 20px;
     font-weight: 400;
     font-family: Palatino, Garamond, Times, Georgia, serif;
     color: var(--titleColor);
   }

   .main-foot {
     margin-top: 50px;

     .info {
       border-top: 1px dashed var(--borderColor);
       border-bottom: 1px dashed var(--borderColor);
       background: var(--categories);
       font-size: 14px;
       font-family: 'lucida grande', 'lucida sans unicode', lucida, 'Helvetica Neue', helvetica, 'Hiragino Sans GB', 'Microsoft YaHei', 'WenQuanYi Micro Hei', sans-serif;
       color: var(--textColor);

       ul {
         list-style: none;
       }
     }

     .post-relative {
       overflow: hidden;
       margin: 25px 0;
       font-weight: 700;
       height: 60px;
       justify-content: space-between;

       .prev {
         float: left;
       }

       .next {
         float: right;
       }

       span {
       }

       b {
         font-weight: 1000;
         font-family: Georgia, serif;
       }
     }
   }

   p {
     -webkit-font-smoothing: antialiased;
     word-break: break-word;
     white-space: normal;
     color: var(--textColor);
   }

   pre {
     font-family: monospace, Consolas, 'Courier New';
     background: var(--codeBg) !important;
     padding: 10px 4070px;
     overflow-x: auto;
     border: 1px dashed var(--borderColor);
     border-width: 1px 0;
     margin-left: -4070px;
     margin-right: -4080px;
     transition: border 0.5s;
     font-size: 16px;
     line-height: 26px;
     max-width: 960px;
     overflow: auto;
     color: var(--codeColor);
   }

   table {
     border: 1px solid #ccc;
     margin: 15px 0;
     border-radius: 5px;
     border-spacing: 0;
   }

   ul {
     margin-bottom: 10px;
   }
 }

 @media screen and (min-width: 1281px) {
   .read-main {
     width: 51%;

     .read-header-title {
       font-size: 55px;
       padding: 50px 0 20px 0;
     }

     .post-relative {
       font-size: 20px;
     }

     .info {
       padding: 30px 55px 50px 55px;
     }

     h1 {
       display: none;
     }

     h2 {
       font-size: 40px;
       line-height: 68px;
       margin: 15px 0;
       font-weight: 500;
     }

     h3 {
       font-size: 32px;
       line-height: 64px;
       margin: 15px 0;
       font-weight: normal;
     }

     p {
       margin-bottom: 25px;
     }
   }
 }

 @media screen and (min-width: 998px) and (max-width: 1280px) {
   .read-main {
     width: 60%;

     .read-header-title {
       font-size: 50px;
       padding: 40px 0 20px 0;
     }

     .post-relative {
       font-size: 20px;
     }

     .info {
       padding: 25px 45px 40px 45px;
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
       margin-bottom: 20px;
     }
   }
 }

 @media screen and (min-width: 660px) and (max-width: 997px) {
   .read-main {
     width: 80%;

     .read-header-title {
       font-size: 45px;
       padding: 30px 0 20px 0;
     }

     .post-relative {
       font-size: 18px;
     }

     .info {
       padding: 15px 30px 25px 30px;
     }

     h1 {
       display: none;
     }

     h2 {
       font-size: 35px;
       line-height: 68px;
       margin: 15px 0;
       font-weight: 400px;
     }

     h3 {
       font-size: 30px;
       line-height: 64px;
       margin: 15px 0;
       font-weight: normal;
     }

     p {
       font-size: 16px;
       margin-bottom: 15px;
     }
   }
 }

 @media screen and (max-width: 660px) {
   .read-main {
     width: 94%;

     .read-header-title {
       font-size: 35px;
       padding: 10px 0 0 0;
     }

     .post-relative {
       font-size: 14px;
     }

     .info {
       padding: 10px;
     }

     h1 {
       display: none;
     }

     h2 {
       font-size: 30px;
       line-height: 68px;
       margin: 8px 0;
       font-weight: 400px;
     }

     h3 {
       font-size: 25px;
       line-height: 40px;
       margin: 5px 0;
       font-weight: normal;
     }

     p {
       font-size: 16px;
       margin-bottom: 10px;
     }
   }
 }
</style>