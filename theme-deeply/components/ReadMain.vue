<template>
  <div class="read-main">
    <div class="read-header-title">
      {{ articleData.title || "" }}
      <img class="read-avatar" :src="$withBase(themeConfigs.avatar)" />
      <div class="read-header-nav">
        <router-link to="/about/"
          >{{ themeConfigs.author }} 的个人博客</router-link
        >
        » <router-link to="/home/">博客</router-link> »
        <router-link
          v-for="item in pageCate"
          :key="item"
          :to="{
            path: '/categories/',
            query: { category: item },
          }"
          >{{ item }}</router-link
        >
      </div>
    </div>
    <div class="read-header-mes">
      <div class="post-info">
        <span
          >作者:
          <router-link to="/about/">{{
            themeConfigs.author || ""
          }}</router-link></span
        >
        <span>
          <span class="aria-readonly"
            >本文发布于 {{ publishDate || "" }}</span
          > </span
        ><span
          >分类:
          <span v-if="categories !== '无'">
            <router-link
              v-for="item in categories"
              class="category-link"
              :to="{
                path: '/categories/',
                query: { category: item },
              }"
              :key="item"
              >{{ item }}</router-link
            >
          </span>
          <router-link
            v-if="categories == '无'"
            class="category-link"
            to="/categories/"
          ></router-link>
        </span>

        <span
          >标签:
          <router-link
            v-for="tag in tags"
            :key="tag"
            class="category-link"
            :to="{
              path: '/tags/',
              query: { tag },
            }"
            >{{ tag }}</router-link
          ></span
        >
      </div>
    </div>
    <Content />

    <div class="main-foot">
      <div class="info">
        <Avatar class="info-avatar" WH="90" />
        <ul>
          <li>
            作者:
            <router-link to="/about/" itemprop="name">{{
              themeConfigs.author
            }}</router-link>
          </li>
          <li>发表日期: {{ publishDate }}</li>
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
            <span v-for="tag in articleData.frontmatter.tags" :key="tag">{{
              tag
            }}</span>
          </li>
          <li>
            {{ copyright.version }}（<a
              :href="copyright.link.url"
              target="_blank"
              >{{ copyright.link.name }}</a
            >）
          </li>
          <!-- <li>最后更新时间: {{ lastUpdateDate }}</li> -->
          <li class="editThisPage">
            <a :href="editUrl">{{ edit }} </a>
          </li>
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
        <router-link
          v-if="prevNext.prev"
          :to="prevNext.prev.path || ''"
          class="prev"
          ><span class="icon iconfont icon-jiantou1" />
          <b>{{ prevNext.prev.title || "" }}</b> </router-link
        ><router-link
          v-if="prevNext.next"
          :to="prevNext.next.path || ''"
          class="next"
          ><b>{{ prevNext.next.title || "" }}</b
          ><span class="icon iconfont icon-jiantou"
        /></router-link>
      </div>
    </div>
  </div>
</template>
<script>
import { findPrevNext, filterConfigMd } from "../util";
import Avatar from "./Avatar.vue";
import moment from "moment";
export default {
  name: "ReadMain",
  components: { Avatar },
  computed: {
    edit () {
      return "编辑本文：</>";
    },
    articleData () {
      return this.$page;
    },
    editUrl () {
      const branch = this.$themeConfig.branch;
      const relativePath = this.$page.relativePath;
      const repoUrl = this.$themeConfig.repo;
      return `${repoUrl}/edit/${branch}/docs/${relativePath}`;
    },
    publishDate () {
      const format = "YYYY-MM-DD HH:mm";
      const time = String(
        moment(this.$page.frontmatter.date)
          .subtract(moment().utcOffset() / 60, "hours")
          .format(format)
      );
      return time || "";
    },
    lastUpdateDate () {
      const format = "YYYY-MM-DD HH:mm";
      const time = String(moment(this.$page.lastUpdated).format(format));
      return time || "";
    },
    themeConfigs () {
      return this.$themeConfig;
    },
    copyright () {
      return this.$themeConfig.copyright;
    },
    prevNext () {
      let articles = filterConfigMd(this.$site.pages);
      const res = findPrevNext(this.$page, articles);
      return res;
    },
    categories () {
      return this.$page.frontmatter.categories || "无";
    },
    tags () {
      return this.$page.frontmatter.tags;
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
    font-size: 13px;
    color: var(--textColor);
    font-weight: 700;
    margin-bottom: 25px;
    position: relative;
    z-index: 8;
    background: var(--bodyBg);
    font-family: Palatino, Garamond, Times, Georgia, serif;

    span {
      padding-right: 10px;
      white-space: nowrap;
    }

    .post-info {
      color: #808080;
    }
  }

  .read-header-title {
    position: relative;
    line-height: 70px;
    margin-bottom: 20px;
    font-weight: 400;
    font-family: Palatino, Garamond, Times, Georgia, serif;
    color: var(--titleColor);

    .read-header-nav {
      text-align: right;
      position: absolute;
      left: -190px;
      top: 18px;
      border-left: 4px solid #7b9ac9;
      padding-left: 20px;
      line-height: 18px;
      font-size: 18px;

      a {
        color: #a8a8a8;
        font-size: 18px;
        font-family: Palatino, Garamond, Times, Georgia, serif;
        text-align: right;
        transition: color 0.4s ease;

        &:hover {
          color: #4a75b5;
        }
      }
    }

    .read-avatar {
      position: absolute;
      left: -150px;
      width: 120px;
      min-height: 120px;
      border-radius: 100%;
      box-shadow: 1px 1px 3px #ccc;
    }
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

      .info-avatar {
        float: right;
      }

      ul {
        padding: 0;
        list-style: none;
      }

      .editThisPage {
        text-align: right;
        font-size: 14px;

        a {
          font-weight: bold;
          color: #999;
        }
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

  li {
    margin-left: 13px;
    margin-bottom: 8px !important;
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

  img {
    width: 100%
  }
}

@media screen and (min-width: 1281px) {
  .read-main {
    width: 35%;
    min-width: 700px;

    .read-header-title {
      padding: 50px 0 10px 0;
      font-size: 50px;
      line-height: 70px;
      margin-bottom: 20px;
      font-weight: 400;
    }

    .post-relative {
      font-size: 20px;
    }

    .info {
      padding: 40px 55px 40px 55px;
    }

    .content__default {
      width: 100%;

      h1 {
        display: none;
      }

      h2 {
        font-size: 40px;
        line-height: 68px;
        margin: 10px 0;
        font-weight: 500;
      }

      h3 {
        font-size: 32px;
        line-height: 64px;
        margin: 15px 0;
        font-weight: normal;
      }

      > * {
        font-size: 18px;
        margin-bottom: 25px;
      }
    }
  }
}

@media screen and (min-width: 998px) and (max-width: 1280px) {
  .read-main {
    width: 50%;
    min-width: 620px;

    .read-header-title {
      font-size: 50px;
      padding: 40px 0 20px 0;
    }

    .post-relative {
      font-size: 20px;
    }

    .info {
      padding: 30px 45px 30px 45px;
    }

    .content__default {
      width: 100%;

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

      > * {
        font-size: 16px;
        margin-bottom: 20px;
      }
    }
  }
}

@media screen and (min-width: 660px) and (max-width: 997px) {
  .read-main {
    width: 80%;

    .read-header-title {
      font-size: 45px;
      padding: 30px 0 20px 0;

      .read-header-nav {
        display: none;
      }

      .read-avatar {
        display: none;
      }
    }

    .post-relative {
      font-size: 18px;
    }

    .info {
      padding: 25px 30px 25px 30px;
    }

    .content__default {
      width: 100%;

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

      > * {
        font-size: 16px;
        margin-bottom: 15px;
      }
    }
  }
}

@media screen and (max-width: 660px) {
  .read-main {
    width: 96%;

    .read-header-title {
      font-size: 35px;
      padding: 10px 0 0 0;

      .read-header-nav {
        display: none;
      }

      .read-avatar {
        display: none;
      }
    }

    .post-relative {
      font-size: 14px;
    }

    .info {
      padding: 20px;
    }

    .content__default {
      width: 100%;

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

      > * {
        font-size: 16px;
        margin-bottom: 10px;
      }
    }
  }
}
</style>
