 <template>
  <div id="avatar" :style="{ width: sWH }">
    <img :src="$withBase(themeConfigs.avatar)" alt="avatar" />
  </div>
</template>
<script>
export default {
  name: "Avatar",
  props: ["WH"],
  computed: {
    themeConfigs() {
      return this.$themeConfig;
    },
    sWH() {
      return `${this.WH}px`;
    },
  },
};
</script>
 <style lang="stylus">
 #avatar {
   img {
     width: 100%;
     min-height: 100%;
     border-radius: 100%;
     box-shadow: 1px 1px 3px #ccc;
   }
 }
</style>