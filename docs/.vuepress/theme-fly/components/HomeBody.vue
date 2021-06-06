 <template>
  <div class="home-body">
    <HomeBodyLeft />
    <div class="rightbar">
      <HomeBodyClass />
      <Introduction />
    </div>
  </div>
</template>

<script>
import HomeBodyLeft from "./HomeBodyLeft.vue";
import HomeBodyClass from "./HomeBodyClass.vue";
import Introduction from "./Introduction.vue";

export default {
  name: "HomeBody",
  components: {
    HomeBodyLeft,
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
