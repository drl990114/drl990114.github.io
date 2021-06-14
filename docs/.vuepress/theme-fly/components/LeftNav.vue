 <template>
  <div class="read-left">
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
  name: "LeftNav",
  methods: {
    backHome: function () {
      window.location.href = "/home/";
    },
    dark: function () {
      toDark();
    },
    light: function () {
      toLight();
    },
    toAbout: function () {
      window.location.href = "/about/";
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
 .read-left {
   border-right: none;
   position: fixed;
   top: 0;
   bottom: 0;
   left: -680px;
   width: 706px;
   height: 100vh;
   box-shadow: 10px 0 10px 0 #282c341c;
   transition: all 0.5s;
   z-index: 80;
   background: var(--leftNavColor);

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

   .bar-item {
     span {
       font-size: 20px;
       padding: 8px 0;
     }
   }

   .bar-item-current {
     position: relative;

     .show {
       position: absolute;
       right: -14px;
       top: 0px;
       font-size: 14px !important;
       opacity: 0;
       text-align: center;
       color: var(--textColor);
     }

     .bar-item-hover {
       display: none;
       opacity: 0;
       border-radius: 3px;
       color: var(--textColor);

       .triangle {
         display: block;
         width: 0;
         height: 0;
         border-width: 8px 8px 9px 0;
         border-style: solid;
         border-color: transparent var(--borderColor) transparent transparent;
         position: absolute;
         top: 7px;
         left: -8px;
       }

       .triangleBorder {
         width: 0;
         height: 0;
         border-width: 7px 7px 8px 0;
         border-style: solid;
         border-color: transparent var(--leftNavBtn) transparent transparent;
         position: absolute;
         top: 8px;
         left: -7px;
       }
     }

     &:hover {
       .bar-item-hover {
         position: absolute;
         left: 72px;
         top: 30px;
         display: inline-block;
         opacity: 1;
         min-width: 80px;
         margin-top: -50% !important;
         border: 1px solid var(--borderColor);
         padding: 8px;
         background: var(--leftNavBtn);
         font-size: 14px;
       }

       .read-left {
         left: -648px;
         transition: all 0.3s;
       }

       .about {
         padding: 10px 5px;
         background: var(--leftNavBtn);
         border: 1px solid var(--borderColor);
         border-radius: 4px;
         background-image: none;
         box-shadow: none;
         color: var(--textColor);
       }

       .choose-box {
         display: flex;

         div {
           width: 45px;
           padding: 3px 20px;
           background: var(--lightModeBtn);
           border: 1px solid var(--borderColor);
           border-radius: 4px;
           background-image: none;
           box-shadow: none;
           color: var(--textColor);

           span {
             font-size: 20px;
           }
         }
       }
     }
   }
 }

 .read-left:hover {
   left: -648px;
   transition: all 0.3s;

   .bar-up {
     right: 20px;
     width: 52px;
     transition: all 0.3s;
   }

   .bar-item span {
     font-size: 18px;
   }

   .show {
     opacity: 1;
   }
 }

 @media screen and (max-width: 660px) {
   .read-left {
     display: none;
   }
 }
</style>