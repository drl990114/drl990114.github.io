<template>
  <div class="home-header">
    <div class="home-header-left">
      <router-link to="/about/" style="font-weight: bold">{{ author }}</router-link>
      <span> » 博客 </span>
      <div id="arrow-expend" @click="arrowClick">
        ▾
        <ul id="arrow-expend-ul">
          <li v-for="item in headNav" :key="item.label">
            <router-link :to="item.link">{{ item.label }}</router-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="home-header-right">
      <input placeholder="站内搜索" />
    </div>
    <!-- <div id="hits" style="display:none">
    </div>
    <div id="searchbox" style="display:none">
    </div> -->
  </div>
</template>
<script>
import { move } from "../util";
// import { searchBox, hits } from "instantsearch.js/es/widgets";
export default {
  name: "HomeHeader",
  computed: {
    author() {
      return this.$themeConfig.author;
    },
    headNav() {
      return this.$themeConfig.headNav;
    },
  },
  // mounted: function () {
  //   this.$nextTick(function () {
  //     const algoliasearch = require("algoliasearch/lite");
  //     const instantsearch = require("instantsearch.js").default;

  //     const searchClient = algoliasearch(
  //       "8OGO3JZZRY",
  //       "6956f18773dbf5757dc4f3a3c375222d"
  //     );

  //     const search = instantsearch({
  //       indexName: "dev_blog",
  //       searchClient,
  //     });

  //     search.addWidgets([
  //       searchBox({
  //         container: "#searchbox",
  //       }),

  //       hits({
  //         container: "#hits",
  //       }),
  //     ]);

  //     search.start();
  //   });
  // },

  methods: {
    arrowClick() {
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
.home-header {
  width: 100%;
  height: 70px;
  margin-top: 50px;
  font-size: 28px;
  font-weight: bold;

  .home-header-left {
    float: left;
  }

  .home-header-right {
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
      background: var(--leftNavColor);
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
</style>
