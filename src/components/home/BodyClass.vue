 <template>
  <div class="home-class">
    <h2>文章分类</h2>
    <ul>
      <li><a href="/blog/categories/JavaScript/">JavaScript</a></li>
      <li><a href="/blog/categories/杂物间/">杂物间</a></li>
      <li><a href="/blog/categories/剪贴板/">剪贴板</a></li>
      <li><a href="/blog/categories/网络交互/">网络交互</a></li>
      <li><a href="/blog/categories/随笔/">随笔</a></li>
      <li><a href="/blog/categories/观点和感想/">观点和感想</a></li>
      <li><a href="/blog/categories/前端杂烩/">前端杂烩</a></li>
      <li><a href="/blog/categories/后端杂烩/">后端杂烩</a></li>
      <li><a href="/blog/categories/Linux/">Linux</a></li>
      <li><a href="/blog/categories/工具/">工具</a></li>
      <li><a href="/blog/categories/JavaScript/">更多分类 »</a></li>
    </ul>
  </div>
</template>

 <style scoped>
.home-class {
  display: flex;
  flex-wrap: wrap;
  float: right;
  border: 1px solid #ccc;
  padding: 15px;
  margin-bottom: 30px;
}
.home-class::after{
  
			content:'.';
			display: block;
			clear: both;
			overflow: hidden;
			height: 0;
}
.home-class::before{
  			content:'.';
			display: block;
			clear: both;
			overflow: hidden;
			height: 0;
}
.home-class ul {
  margin: 0px;
  font-size: 20px;
  display: block;
  list-style: none;
  padding-left: 20px;
}
.home-class li {
  margin-bottom: 5px;
  line-height: 28px;
  font-size: 16px;
}
.home-class li::marker {
  unicode-bidi: isolate;
  font-variant-numeric: tabular-nums;
  text-transform: none;
  text-indent: 0px !important;
  text-align: start !important;
  text-align-last: start !important;
}
.home-class h2 {
  font-size: 22px;
  font-weight: 400;
  border-bottom: 1px dashed #ccc;
  width: 100%;
  max-width: 100%;
  line-height: 2;
  margin-bottom: 15px;
}
</style>