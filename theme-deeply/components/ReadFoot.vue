<template>
  <div class="read-foot">
    <div class="content">
      <div class="content-main">
        <div class="content-main-nav">
          <a
            @click="relatedNav"
            v-bind:class="{ currentNav: currentNav === 'related' }"
            >相关文章</a
          >
          <a
            @click="commentNav"
            v-bind:class="{ currentNav: currentNav === 'comments' }"
            >评论内容</a
          >
        </div>
      </div>
      <div class="read-active">
        <div style="display: block">
          <div
            v-if="currentNav == 'related'"
            class="read-foot-btn"
            @click="commentNav"
          >
            打开评论
          </div>
        </div>
        <ul v-if="currentNav == 'related'">
          <li :v-if="relevant" v-for="item in relevant" :key="item.path">
            <span
              ><font>{{ item.nearTime || "" }} » </font> </span
            ><router-link :to="item.path">{{ item.title || "" }}</router-link>
            <div class="relative-box">
              <span
                style="display: inline"
                v-html="item.excerpt || '空'"
                id="moreRelevant"
              ></span
              >...
            </div>
          </li>
        </ul>
        <Vssue v-if="currentNav == 'comments'" :title="title" />
        <div style="display: block">
          <div class="read-foot-btn" @click="backHome">回到首页</div>
        </div>
      </div>

      <HomeFoot />
    </div>
  </div>
</template>
<script>
import HomeFoot from "./HomeFoot.vue";
import { getRelevant, timeSort } from "../util";
import moment from "moment";
export default {
  name: "ReadFoot",
  components: {
    HomeFoot,
  },
  data() {
    return {
      currentNav: "related",
    };
  },
  computed: {
    themeConfigs() {
      return this.$themeConfig;
    },
    relevant() {
      const res = getRelevant(this.$page, this.$site.pages);
      res.forEach((item) => {
        item.nearTime = moment(item.frontmatter.date)
          .subtract(moment().utcOffset() / 60, "hours")
          .format("YYYY-MM-DD");
      });
      return res;
    },
    title() {
      return this.$page.title;
    },
  },
  methods: {
    backHome() {
      this.$router.push({
        path: "/home/",
      });
    },
    commentNav() {
      this.currentNav = "comments";
    },
    relatedNav() {
      this.currentNav = "related";
    },
  },
};
</script>
<style lang="stylus">
.read-foot {
  min-height: 200px;
  background: #3f3f3f;
  overflow: hidden;
  z-index: 1000px;

  #moreRelevant {
    font-size: 14px !important;

    h1, h2, h3, h4, h5, h6 {
      display: none !important;
    }
  }

  .content {
    height: 100%;
    margin: 0 auto;

    .read-active {
      min-height: 200px;
    }

    ul {
      list-style-type: square;
      line-height: 28px;
      color: #cacaca;
      margin: 0 10px;
      font-family: 'lucida grande', 'lucida sans unicode', lucida, 'Helvetica Neue', helvetica, 'Hiragino Sans GB', 'Microsoft YaHei', 'WenQuanYi Micro Hei', sans-serif;

      li a {
        color: #b9857b;

        &:hover {
          color: #e58c7c;
        }
      }

      .relative-box {
        border-left: 4px solid #757575;
        padding-left: 15px;
        font-size: 15px;
        margin-top: 10px;
        margin-bottom: 40px;
      }
    }

    .content-main {
      .content-main-nav {
        min-height: 70px;
        width: 800px;
        margin: 0 auto;
        padding-left: 30px;
        color: #fff;
        font-size: 16px;

        a {
          display: inline-block;
          margin-right: 10px;
          color: #999;
          cursor: pointer;
        }

        .currentNav {
          border-top: 5px solid #e58c7c;
          padding: 10px 6px;
          color: #fff;
          text-decoration: none;
          box-shadow: 0 -17px 26px #1b15157d;
        }
      }
    }

    .read-foot-btn {
      width: 400px;
      max-width: 98%;
      font-size: 14px;
      margin: 30px auto;
      border-radius: 10px;
      line-height: 40px;
      text-align: center;
      box-shadow: 3px 3px 5px #555;
      cursor: pointer;
      background-color: #565656;
      color: #ccc;
      text-decoration: none;

      &:hover {
        background-color: #636363;
        box-shadow: none;
      }
    }
  }
}

@media screen and (min-width: 1281px) {
  .content {
    width: 35%;
    min-width: 700px;
  }
}

@media screen and (min-width: 998px) and (max-width: 1280px) {
  .content {
    width: 60%;
  }
}

@media screen and (min-width: 660px) and (max-width: 997px) {
  .content {
    width: 75%;
  }
}

@media screen and (max-width: 659px) {
  .content {
    width: 96%;
  }
}
</style>
