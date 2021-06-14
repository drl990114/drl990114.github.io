 <template>
  <div>
    <div class="aboutPage">
      <Categoriesheader />
      <div>
        <div class="aboutme">
          <strong class="title">一个有趣的灵魂<span> / About Me</span></strong>
          <div>
            <a class="site-avatar" href="/blogimgs/avatar.png"
              ><img
                :src="$withBase(avatarUrl)"
                height="100"
                width="100"
                alt="Barret李靖"
            /></a>
            <p>
              My name is Lee Jing(李靖). You can call me Barret. I was born in
              1992.
            </p>
          </div>
          <strong class="title"
            >关于内容<span> / About The Website</span></strong
          >
          <div>
            <p>
              版权声明: 「署名-非商业性使用-禁止演绎 3.0 国际」（<a
                href="https://creativecommons.org/licenses/by-nc-nd/3.0/deed.zh"
                target="_blank"
                >CC BY-NC-ND 3.0</a
              >）
            </p>
            <p>
              所有文章非特别说明皆为原创。技术更迭迅猛，部分内容可能会作修改，为保证信息与源同步，转载时请务必注明文章出处！谢谢合作
              :-)
            </p>
            <p>文章皆为个人观点，不代表所服务的公司。</p>
          </div>
          <strong class="title">订阅地址<span> / The RSS Address</span></strong>
          <div>
            <p>
              博客源码：<a
                href="https://github.com/barretlee/blog"
                target="_blank"
                >https://github.com/barretlee/blog</a
              >，本站由
              <a href="http://pages.coding.me" target="_blank">Coding</a> &amp;
              <a href="https://pages.github.com/" target="_blank">Github</a>
              强力驱动。
            </p>
          </div>
          <strong class="title">社交信息<span> / The RSS Address</span></strong>
          <div class="about-post">
            <ul>
              <li>
                Github：
                <a href="https://github.com/barretlee" target="_blank"
                  >@barretlee</a
                >
              </li>
              <li>
                Social：
                <a href="http://www.zhihu.com/people/barretlee" target="_blank"
                  >知乎</a
                >
              </li>
              <li>
                E-mail：
                <a href="mailto:barret.china@gmail.com" target="_blank"
                  >barret.china(at)gmail.com</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
      <LeftNav />
    </div>
    <ReadFoot />
  </div>
</template>
<script>
import LeftNav from "./LeftNav.vue";
import Categoriesheader from "./Categoriesheader.vue";
import ReadFoot from "./ReadFoot.vue";
import { getTimeLines, getUrlParams } from "../util";
export default {
  name: "About",
  components: { LeftNav, Categoriesheader, ReadFoot },
  computed: {
    themeConfigs() {
      return this.$themeConfig;
    },
    avatarUrl() {
      return this.$themeConfig.avatar;
    },
  },
};
</script>
 <style lang="stylus">
 .aboutPage {
   font-size: 14px;
   margin: 0 auto;
   transition: all 0.3s;
   color: var(--textColor);

   .aboutme {
     strong.title {
       display: block;
       font-size: 20px;
       border-bottom: 1px dashed #ccc;
       line-height: 30px;
       margin-bottom: 15px;
       margin-top: 30px;
       color: var(--textColor);
       padding-bottom: 8px;
     }

     p {
       line-height: 28px;
       font-size: 16px;
       margin-bottom: 15px;
     }
   }

   .about-post ul {
     margin: 25px 0 25px 35px;
     list-style-type: square;

     li {
       margin-bottom: 5px;
       list-style-type: square;
       line-height: 28px;
       font-size: 16px;
     }
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