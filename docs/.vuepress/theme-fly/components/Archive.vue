 <template>
  <div class="archive">
    <LeftNav />
  </div>
</template>
<script>
import  LeftNav  from "./LeftNav.vue";
export default {
  components: { LeftNav },
  computed: {
    introduction() {
      return this.$themeConfig.introduction;
    },
    avatarUrl() {
      return this.$themeConfig.avatar;
    },
    author() {
      return this.$themeConfig.author;
    },
  },
};
</script>
 <style lang="stylus"></style>