<template>
  <div class="categories-header">
    <div class="categories-header-left">
      <router-link to="/about/">{{ author }}</router-link> »
      <span >{{ blogNav }} </span>
      <div id="arrow-expend" @click="arrowClick">
        ▾
        <ul id="arrow-expend-ul">
          <li v-for="item in headNav" :key="item.label">
            <router-link :to="item.link">{{ item.label }}</router-link>
          </li>
        </ul>
      </div>
      <span v-if="currentNav">» {{ currentNav }}</span>
    </div>
  </div>
</template>
<script>
import { move } from "../util";
import { isAbout, isBlogRoll, isCategories, isArchives } from "../util/isPath";
export default {
  name: "Categoriesheader",
  computed: {
    PATH() {
      return this.$router.history.current.path;
    },
    author() {
      return this.$themeConfig.author;
    },
    base() {
      const res = this.$site.base.substr(0, this.$site.base.length - 1);
      return res;
    },
    headNav() {
      return this.$themeConfig.headNav;
    },
    currentNav() {
      if (isCategories(this.PATH)) {
        return "文章分类";
      }
      if (isArchives(this.PATH)) {
        return "归档";
      }
    },
    blogNav() {
      if (isAbout(this.PATH)) {
        return "关于我";
      } else if (isBlogRoll(this.PATH)) {
        return "友情链接";
      } else return "博客";
    },
  },
  methods: {
    arrowClick: function () {
      if (typeof window != "undefined") {
        const arrow = document.getElementById("arrow-expend");
        const arrowUl = document.getElementById("arrow-expend-ul");
        let callback = () => {
          arrowUl.style.display = "none";
        };
        let moveHight = this.$themeConfig.headNav.length * 40;
        if (arrowUl.style.height != moveHight + "px") {
          arrowUl.style.display = "inline-block";
          move(arrowUl, 20, moveHight, () => {});
        } else {
          move(arrowUl, 20, 0, callback);
        }

        document.addEventListener("click", (e) => {
          if (e.target !== arrow) {
            move(arrowUl, 20, 0, callback);
          }
        });
      }
    },
  },
};
</script>

<style lang="stylus">
.categories-header {
  width: 100%;
  height: 70px;
  font-size: 28px;
  font-weight: bold;
  font-family: Palatino, Garamond, Times, Georgia, serif;

  .categories-header-left {
    float: left;
  }

  .categories-header-right {
    position: relative;
    width: 150px;
    height: 40%;
    float: right;
    top: 10%;
    border: 1px solid black;

    input {
      position: absolute;
      border: none;
      margin: 0;
      width: 100%;
      height: 100%;
      font-size: 1rem;
      color: #888;
      font-family: initial;
    }
  }

  #arrow-expend {
    font-style: normal;
    display: inline-block;
    color: #4a75b5;
    cursor: pointer;
    font-size: 20px;
    position: relative;
  }

  #arrow-expend ul {
    font-weight: 400;
    font-family: Georgia, serif;
    margin: 0;
    overflow: hidden;
    display: none;
    position: absolute;
    width: 120px;
    height: 0px;
    background: var(--leftNavColor);
    border: 1px solid #ccc;
    left: -56px;
    text-align: center;
    top: 45px;
    padding: 0;
    list-style: none;
    z-index: 100;

    li {
      height: 40px;
      list-style: none;
      line-height: 40px;
    }
  }
}

@media screen and (min-width: 1281px) {
  .categories-header {
    padding-top: 80px;
    margin-bottom: 20px;
  }
}

@media screen and (min-width: 998px) and (max-width: 1280px) {
  .categories-header {
    padding-top: 70px;
    margin-bottom: 20px;
  }
}

@media screen and (min-width: 660px) and (max-width: 997px) {
  .categories-header {
    padding-top: 50px;
    margin-bottom: 10px;
  }
}

@media screen and (max-width: 659px) {
  .categories-header {
    padding-top: 30px;
    margin-bottom: 0px;
  }
}
</style>
