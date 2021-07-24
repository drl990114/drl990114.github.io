 <template>
  <div class="labBackground">
    <div class="labPage"></div>
  </div>
</template>
<script>
export default {
  name: "Lab",
};
</script>
 <style lang="stylus">
 .labBackground {
   width: 100vw;
   height: 100vh;
   background: #fff;
   background-image: linear-gradient(#fff 14px, transparent 0), linear-gradient(90deg, black ,.5px, transparent 0);
   background-size: 10px 15px, 15px 15px;
   font: 13px 'HelveticaNeue', Helvetica, Arial, sans-serif;
   line-height: 1.4;
   color: #666;
 }
</style>