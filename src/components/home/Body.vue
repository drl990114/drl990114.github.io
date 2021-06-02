 <template>
  <div class="home-body">
    <BodyHeadline />
    <BodyClass />
    <BodyIntroduction />
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";
import BodyHeadline from "./BodyHeadline.vue";
import BodyClass from "./BodyClass.vue";
import BodyIntroduction from "./BodyIntroduction.vue";

export default {
  name: "Body",
  components: {
    BodyHeadline,
    BodyClass,
    BodyIntroduction,
  },
};
</script>

<style lang="scss">
.home-body {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: flex-start;
  height: 90%;
  width: 100%;
}
</style>
