 <template>
  <div>
    <div class="aboutPage">
      <Categoriesheader />
      <div>
        <div class="aboutme">
          <strong class="title">一个有趣的灵魂<span> / About Me</span></strong>
          <div>
            {{ about.aboutMe.introduction || "" }}
          </div>
          <strong class="title"
            >关于内容<span> / About The Website</span></strong
          >
          <div>
            <p>
              {{ copyright.version }}（<a
                :href="copyright.link.url"
                target="_blank"
                >{{ copyright.link.name }}</a
              >）
            </p>
            {{ about.aboutWebsite.content }}
          </div>
          <strong v-if="about.rss.show" class="title"
            >订阅地址<span> / The RSS Address</span></strong
          >
          <div v-if="about.rss.show">
            <p>
              博客源码：<a
                href="https://github.com/halodong/halodong.github.io"
                target="_blank"
                >https://github.com/halodong/halodong.github.io</a
              >，本站由
              <a href="https://pages.github.com/" target="_blank">Github</a>
              强力驱动。
            </p>
          </div>
          <strong class="title">社交信息<span> / Social Links</span></strong>
          <div class="about-post">
            <ul>
              <li v-for="item in about.social" :key="item.link">
                {{ item.label || "" }}:
                <a :href="item.link || '/'" target="_blank">{{
                  item.name || ""
                }}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <LeftNav />
      <div class="lastChange">最后更新时间： {{ lastUpdateTime || "" }}</div>
    </div>
    <ReadFoot />
  </div>
</template>
<script>
import LeftNav from "./LeftNav.vue";
import Categoriesheader from "./Categoriesheader.vue";
import ReadFoot from "./ReadFoot.vue";
import moment from "moment";
import { getTimeLines, getUrlParams } from "../util";
export default {
  name: "About",
  components: { LeftNav, Categoriesheader, ReadFoot },
  computed: {
    about () {
      return this.$themeConfig.about;
    },
    avatarUrl () {
      return this.$themeConfig.avatar;
    },
    copyright () {
      return this.$themeConfig.copyright;
    },
    lastUpdateTime () {
      const last = moment(this.$page.lastUpdated)
        .subtract(moment().utcOffset() / 60, "hours")
        .format("YYYY年MM月DD日 hh:mm:ss");

      return last;
    },
  },
};
</script>
 <style lang="stylus">
 .aboutPage {
   font-size: 16px;
   margin: 0 auto;
   transition: all 0.3s;
   color: var(--textColor);

   .aboutme {
     font-size: 16px;

     strong.title {
       display: block;
       font-size: 20px;
       border-bottom: 1px dashed #ccc;
       line-height: 30px;
       margin-bottom: 15px;
       margin-top: 30px;
       color: var(--codeColor);
       padding-bottom: 8px;

       span {
         color: #b6b6b6;
       }
     }

     p {
       line-height: 28px;
       margin-bottom: 15px;
     }
   }

   .about-post ul {
     list-style-type: square;

     li {
       margin-bottom: 5px;
       list-style-type: square;
       line-height: 28px;
       font-size: 16px;
     }
   }

   .lastChange {
     padding: 20px;
     margin: 30px 0;
     text-align: center;
     background: var(--categories);
     border-top: 1px dashed var(--borderColor);
     border-bottom: 1px dashed var(--borderColor);
   }
 }

 @media screen and (min-width: 1281px) {
   .aboutPage {
     width: 50%;
   }
 }

 @media screen and (min-width: 998px) and (max-width: 1280px) {
   .aboutPage {
     width: 60%;
   }
 }

 @media screen and (min-width: 660px) and (max-width: 997px) {
   .aboutPage {
     width: 75%;
   }
 }

 @media screen and (max-width: 659px) {
   .aboutPage {
     width: 94%;
   }
 }
</style>