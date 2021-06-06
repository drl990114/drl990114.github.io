 <template>
  <div class="home-body">
    <HomeBodyHeadline />
    <div class="rightbar">
      <HomeBodyClass />
      <Introduction />
    </div>
  </div>
</template>

<script>
import HomeBodyHeadline from "./HomeBodyHeadline.vue";
import HomeBodyClass from "./HomeBodyClass.vue";
import Introduction from "./Introduction.vue";

export default {
  name: "HomeBody",
  components: {
    HomeBodyHeadline,
    HomeBodyClass,
    Introduction,
  },
};
</script>

<style lang="stylus">
.home-body {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: flex-start;
  height: 90%;
  width: 100%;

  .rightbar {
    display: flex;
    flex-direction: column;
  }
}
</style>
