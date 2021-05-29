 <template>
  <div class="home-body">
    <BodyHeadline />
    <BodyClass />
    <div class="body-foot" aria-hidden="true">
      <a class="page_editor" href="/admin/#/" target="_blank">🙈</a>
      <span
        >©2013-2021
        <small
          ><a href="http://www.miitbeian.gov.cn/" about="_blank"
            >湘ICP备14007107号-1</a
          ></small
        ></span
      >
      本站由 <a href="/">Barret李靖</a> 纯手工打造 |
      <a href="/about#contact">联系方式</a> | 总热度：<em
        id="busuanzi_value_site_pv"
        >1634282</em> | <router-link to="/login">站长管理</router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";
import BodyHeadline from "./BodyHeadline.vue";
import BodyClass from "./BodyClass.vue";

export default {
  name: "Read",
  components: {
    BodyHeadline,
    BodyClass,
  },
};
</script>

<style scoped>
.home-body {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: flex-start;
  height: 90%;
  width: 100%;
}
.body-foot {
  width: 100%;
  margin-top: 25px;
  padding-bottom: 10px;
  color: #aaa;
  text-align: right;
  border-top: 1px solid #666;
  padding-top: 10px;
  font-size: 14px;
  padding-right: 20px;
  position: relative;
}
.body-foot small {
    display: inline-block;
    margin-right: 8px;
}
</style>
