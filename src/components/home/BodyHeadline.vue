 <template>
  <div class="home-headlines">
    <div class="home-headlines-article">
      <h1>
        <router-link to="/read">不恋过往</router-link>
      </h1>
      <p itemprop="description">
        依稀还记得，5
        岁的我就进入了小学学堂，比好多孩子都早了一年，因此后来不管是上大学还是走进社会，我都是同届年龄最小的那搓人，也一直觉得自己是最年轻的，这种感觉在内心驻留了许久，直到最近，才发现，自己已...
        <a href="/blog/2020/11/29/year-2020/"
          >阅读全文 <font aria-hidden="true">»</font></a
        >
      </p>
      <span
        >Posted by <a href="/about/">Barret李靖</a> at
        <a href="/blog/categories/undefined/"></a> on <time>2020-11-29</time>
        <a href="/blog/2020/11/29/year-2020/#comments"
          ><b
            class="ds-thread-count disqus-comment-count cy_cmt_count"
            data-thread-key="year-2020"
            data-disqus-identifier="year-2020"
            id="sourceId::year-2020"
          ></b></a
      ></span>
    </div>
    <BodyNear />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BodyNear from "./BodyNear.vue";
export default defineComponent({
  components: {
    BodyNear,
  },
  setup() {},
});
</script>

 <style scoped>
.home-headlines {
  border-radius: 2px;
}
.home-headlines-article {
  min-height: 180px;
  background: #f3f3f3;
  box-shadow: 2px 2px 4px #e2e2e2;
  padding: 20px;
}
.home-headlines h1 {
  font-size: 22px;
  margin: 8px 0;
  font-weight: 400;
}
.home-headlines p {
  font-size: 15px;
  line-height: 30px;
  padding-bottom: 15px;
  margin-bottom: 15px;
  border-bottom: 1px dashed #ccc;
}
.home-headlines span {
  float: right;
  font-size: 14px;
  color: #999;
}
</style>