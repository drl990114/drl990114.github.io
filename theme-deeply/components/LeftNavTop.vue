 <template>
  <div class="read-left-top">
    <div class="bar-up">
      <div class="bar-item">
        <span class="icon iconfont icon-yingyong bar-item-current">
          <span class="show" @click="backHome">首页</span>
          <div class="bar-item-hover" @click="backHome">
            首页瞧瞧~
            <div class="triangle"></div>
            <div class="triangleBorder"></div>
          </div>
        </span>

        <span class="icon iconfont icon-A bar-item-current">
          <span class="show">日间</span>
          <div class="bar-item-hover">
            <div>
              <div class="choose-box">
                <div @click="light">
                  <span class="icon iconfont icon-rijianmoshi" />
                </div>
                <div @click="dark" class="mode">
                  <span class="icon iconfont icon-yejianmoshi1" />
                </div>
              </div>
              <div class="triangle"></div>
              <div class="triangleBorder"></div>
            </div>
          </div>
        </span>

        <span class="icon iconfont icon-wode bar-item-current" @click="toAbout">
          <span class="show">关于</span>
          <div class="bar-item-hover">
            <div style="width: 100px; height: 60px">
              <div class="about">
                <div>关于作者</div>
              </div>
              <div class="triangle"></div>
              <div class="triangleBorder"></div>
            </div>
          </div>
        </span>
      </div>
    </div>
  </div>
</template>
<script>
import { toDark, toLight, currentMode } from "../util/colorMode.js";
export default {
  name: "LeftNavTop",
  methods: {
    backHome() {
      this.$router.push({
        path: "/home",
      });
    },
    dark() {
      toDark();
    },
    light() {
      toLight();
    },
    toAbout() {
      this.$router.push({
        path: "/about/",
      });
    },
  },
  computed: {
    currentMode() {
      const res = currentMode();
      console.log(res);
      return res == "light";
    },
  },
};
</script>
 <style lang="stylus">
 .mode {
   background: var(--darkModeBtn) !important;
 }

 .bar-up {
   position: absolute;
   right: 0;
   top: 15px;
   bottom: 10px;
   width: 26px;
   height: 26px;
   font-size: 18px;
   text-align: center;
   color: var(--codeColor);
   transition: all 0.5s;
 }

 .bar-up span {
   cursor: pointer;
   padding: 6px 0;
   display: block;
   height: 18px;
   line-height: 18px;
   font-size: 27px;
 }
</style>