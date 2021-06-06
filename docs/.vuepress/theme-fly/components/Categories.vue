 <template>
  <div class="categories">
    <div class="cate-wraper post">
      <div class="cate-header text-info">
        <div>
          <span>类别:</span>
          <div class="cate-list">
            <a href="/blog/categories/JavaScript/">JavaScript</a>
            <a href="/blog/categories/杂物间/">杂物间</a>
            <a href="/blog/categories/剪贴板/">剪贴板</a>
            <a href="/blog/categories/网络交互/">网络交互</a>

            <a
              href="/blog/categories/苹果/"
              class="cate-header_on"
              onclick="return!1"
              >苹果</a
            >
          </div>
        </div>
      </div>
      <div class="cate-detail response-overflow">
        <a href="/blog/archives/2016/" class="archive-year"
          ><strong>2016 年</strong></a
        >
        <ul>
          <li>
            <a
              href="/blog/2016/04/06/operation-not-permitted-problem-in-linux-or-unix-system/"
              >Unix/Linux 系统中的 Operation Not Permitted 问题 </a
            ><span
              >(2016/04/06 · 标签:<a
                class="article-tag-link"
                href="/blog/tags/Operation-Not-Permitted/"
                >Operation Not Permitted</a
              >
              ·<span
                class="ds-thread-count disqus-comment-count cy_cmt_count"
                data-thread-key="operation-not-permitted-problem-in-linux-or-unix-system"
                data-disqus-identifier="operation-not-permitted-problem-in-linux-or-unix-system"
                id="sourceId::operation-not-permitted-problem-in-linux-or-unix-system"
              ></span
              >)</span
            >
          </li>
        </ul>
        <a href="/blog/archives/2015/" class="archive-year"
          ><strong>2015 年</strong></a
        >
        <ul>
          <li>
            <a href="/blog/2015/03/30/autojump-in-mac/"
              >Mac下的效率工具autojump </a
            ><span
              >(2015/03/30 · 标签:<a
                class="article-tag-link"
                href="/blog/tags/autojump/"
                >autojump</a
              >,
              <a class="article-tag-link" href="/blog/tags/mac/">mac</a> ·<span
                class="ds-thread-count disqus-comment-count cy_cmt_count"
                data-thread-key="autojump-in-mac"
                data-disqus-identifier="autojump-in-mac"
                id="sourceId::autojump-in-mac"
              ></span
              >)</span
            >
          </li>
        </ul>
      </div>
    </div>
    <LeftNav />
    {{ archivePages }}
  </div>
</template>
<script>
import LeftNav from "./LeftNav.vue";
import { getTimeLines } from "../util";
export default {
  components: { LeftNav },
  computed: {
    archivePages() {
      const res = getTimeLines(this.$site.pages);
      console.log(res);
      return this.$themeConfig.author;
    },
  },
};
</script>
 <style lang="stylus">
 .categories {
   padding: 70px 40px 30px;
   font-size: 14px;

   .share-article {
     margin: 40px 0;

     .share-box {
       line-height: 55px;
     }
   }
   .cate-wraper h2 {
    font-size: 28px;
    margin-bottom: 20px;
    color: #333;
}
 }
</style>