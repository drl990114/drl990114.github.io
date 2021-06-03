<template>
  <div class="home-header">
    <div class="home-header-left">
      <router-link to="/welcome">RuiLinDong</router-link>
      <span aria-hidden="true"> » 博客 </span>
      <div id="arrow-expend" @click="arrowClick">
        ▾
        <ul id="arrow-expend-ul">
          <li><a href="/entry/">博客</a></li>
          <li><a href="/translation/">翻译</a></li>
          <li><a href="/message/">留言</a></li>
          <li><a href="/demo/">实验室</a></li>
          <li><a href="/friends/">友情链接</a></li>
        </ul>
      </div>
    </div>
    <div class="home-header-right">
      <input placeholder="站内搜索" />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    let timer: any;

    function move(obj: any, speed: any, zd: any, callback: any) {
      clearInterval(timer);
      let current = parseInt(getComputedStyle(obj, null).height);
      if (current > zd) {
        speed = -speed;
      }
      timer = setInterval(function () {
        let olddata = parseInt(getComputedStyle(obj, null).height);
        let newdata = olddata + speed; //speed正值为右，负值为左

        if ((speed < 0 && newdata < zd) || (speed > 0 && newdata > zd)) {
          newdata = zd;
        }
        obj.style.height = newdata + "px";
        if (newdata === zd) {
          clearInterval(timer);
          callback();
        }
      }, 30);
    }

    const arrowClick = () => {
      if (typeof window !== "undefined") {
        const arrow = <HTMLElement>document.getElementById("arrow-expend");
        const arrowUl = <HTMLElement>document.getElementById("arrow-expend-ul");
        let callback = () => {
          arrowUl.style.display = "none";
        };
        if (arrowUl.style.height !== "200px") {
          arrowUl.style.display = "inline-block";
          move(arrowUl, 20, 200, () => {});
        } else {
          move(arrowUl, 20, 0, callback);
        }

        document.addEventListener("click", (e) => {
          if (e.target !== arrow) {
            move(arrowUl, 20, 0, callback);
          }
        });
      }
    };

    return {
      arrowClick,
    };
  },
});
</script>

<style lang="scss">
.home-header {
  width: 100%;
  height: 70px;
  margin: 50px 0 -6px 0;
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
    background: #fff;
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
