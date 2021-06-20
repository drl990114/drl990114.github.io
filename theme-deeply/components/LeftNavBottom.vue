 <template>
  <div class="bar-down">
    <div class="bar-item">
      <span
        class="icon iconfont icon-youqinglianjie1 bar-item-current"
        @click="toBlogroll"
      >
        <span class="show">链接</span>
        <div class="bar-item-hover" @click="toBlogroll">
          友情链接~
          <div class="triangle"></div>
          <div class="triangleBorder"></div>
        </div>
      </span>
    </div>
  </div>
</template>
<script>
export default {
  name: "LeftNavBottom",
  methods: {
    toBlogroll() {
      const res = this.$site.base.substr(0, this.$site.base.length - 1);
      window.location.href = `${res}/blogroll/`;
    },
  },
};
</script>
 <style lang="stylus">
 .bar-down {
   position: absolute;
   right: 0;
   bottom: 25px;
   width: 26px;
   height: 26px;
   font-size: 18px;
   text-align: center;
   color: var(--codeColor);
   transition: all 0.5s;

   span {
     cursor: pointer;
     padding: 6px 0;
     display: block;
     height: 18px;
     line-height: 18px;
     font-size: 27px;
   }
 }
</style>