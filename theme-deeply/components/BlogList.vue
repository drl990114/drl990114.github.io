<template>
  <div>
    <div class="bloglist">
      <div class="bloglist-main">
        <Categoriesheader />
        <BlogListHeader
          v-if="this.category"
          :allCategories="this.category"
          :categorieName="paramValue"
          :pathName="this.type"
          :paramName="this.paramName"
        />
        <BlogListMain
          :archivePages="this.archivePages"
          :allCategories="this.category"
        />
      </div>
    </div>
    <LeftNav />
    <ReadFoot />
  </div>
</template>
<script>
import LeftNav from "./LeftNav.vue";
import Categoriesheader from "./Categoriesheader.vue";
import ReadFoot from "./ReadFoot.vue";
import { getTimeLines, getCategories, getTags } from "../util";
import BlogListHeader from "./BlogListHeader.vue";
import BlogListMain from "./BlogListMain.vue";
export default {
  name: "BlogList",
  components: {
    LeftNav,
    ReadFoot,
    Categoriesheader: () => import("./Categoriesheader.vue"),
    BlogListMain,
    BlogListHeader,
  },
  mounted() {
    const PATH = this.$route.path;
    if (PATH) {
      if (PATH.includes("categories")) {
        this.type = "categories";
        this.paramName = "category";
      } else if (PATH.includes("tags")) {
        this.type = "tags";
        this.paramName = "tag";
      } else if (PATH.includes("archives")) {
        this.type = "archives";
        this.paramName = null;
      }
    }
  },
  data() {
    const PATH = this.$route.path;
    let paramName;
    if (PATH) {
      if (PATH.includes("categories")) {
        paramName = "category";
      } else if (PATH.includes("tags")) {
        paramName = "tag";
      } else if (PATH.includes("archives")) {
        paramName = null;
      }
    }
    return {
      paramValue:
        typeof this.$route.query[paramName] == "undefined"
          ? "all"
          : this.$route.query[paramName],
      type: "",
      paramName: null,
      category: [],
    };
  },

  computed: {
    archivePages() {
      const res = getTimeLines(this.$site.pages);
      let nameParam = this.paramValue;
      if (nameParam) {
        if (nameParam == "all") {
          const cateActicles = getTimeLines(this.$site.pages);
          return cateActicles;
        } else {
          const cateActicle = this.$site.pages.filter(
            (page) =>
              page.frontmatter[this.type] &&
              page.frontmatter[this.type].includes(nameParam)
          );
          const cateActicles = getTimeLines(cateActicle);
          return cateActicles;
        }
      }
      return res;
    },
  },
  watch: {
    "$route.query"(query) {
      this.paramValue = query[this.paramName] ?? "all";
    },
    type(type) {
      switch (type) {
        case "categories":
          this.category = getCategories(this.$site.pages);
          break;
        case "tags":
          this.category = getTags(this.$site.pages);
          break;
        case "archives":
          this.category = null;
          break;
      }
    },
  },
};
</script>
<style lang="stylus">
.current {
  background: var(--cateCurrent);
}

.bloglist {
  font-size: 14px;
  min-height: 100vh;
  font-family: Palatino, Garamond, Times, Georgia, serif;
  margin: 0 auto;

  .bloglist-main {
    .bloglist-class {
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
        white-space: nowrap;
      }

      .bloglist-list {
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

    .bloglist-detail {
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
        .currentYear-tag {
          display: inline-block;
          margin: 0 3px;
          font-size: 12px;
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
  .bloglist {
    width: 50%;
  }
}

@media screen and (min-width: 998px) and (max-width: 1280px) {
  .bloglist {
    width: 60%;
  }
}

@media screen and (min-width: 660px) and (max-width: 997px) {
  .bloglist {
    width: 75%;
  }
}

@media screen and (max-width: 659px) {
  .bloglist {
    width: 94%;
  }

  .bloglist {
    width: 94%;

    .bloglist-main {
      .bloglist-class {
        font-size: 14px;

        .bloglist-list {
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
