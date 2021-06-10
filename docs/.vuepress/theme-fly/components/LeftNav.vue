 <template>
  <div class="read-left">
    <div class="bar-up">
      <div class="bar-item">
        <span class="icon iconfont icon-yingyong bar-item-current">
          <span class="show">首页</span>
          <div class="bar-item-hover">s</div>
        </span>
        <span class="icon iconfont icon-yingyong bar-item-current">
          <span class="show">首页</span>
        </span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "LeftNav",
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
   transition: all 0.3s;
   z-index: 80;
   background: #fff;

   .bar-up {
     position: absolute;
     right: 0;
     top: 10px;
     bottom: 10px;
     width: 26px;
     height: 26px;
     font-size: 18px;
     text-align: center;
     color: #666;
     transition: all 0.3s;
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
       font-size: 22px;
       padding: 8px 0;
     }
   }

   .bar-item-current {
     position: relative;

     .show {
       position: absolute;
       right: -16px;
       top: 0px;
       font-size: 15px !important;
       opacity: 0;
       text-align: center;
       color: #666;
     }

     .bar-item-hover {
       position: absolute;
       left: 32px;
       top: 15px;
       min-width: 80px;
       margin-top: -50% !important;
       border: 1px solid #ccc;
       padding: 8px;
       background: #eee;
       font-size: 14px;
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

   .bar-up span {
     font-size: 23px;
     transition: all 0.3s;
   }

   .bar-item span {
     font-size: 20px;
   }

   .show {
     opacity: 1;
   }

 }

 @media screen and (max-width: 998px) {
   .read-left {
     display: none;
   }
 }
</style>