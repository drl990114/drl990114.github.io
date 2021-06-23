 <template>
  <div class="home-class">
    <h2>文章分类</h2>
    <ul>
      <li v-for="item in categories" :key="item">
        <router-link :to="'/categories/?name=' + encodeURI(encodeURI(item))">{{
          item
        }}</router-link>
      </li>
      <li><router-link to="/categories/?name=all">更多分类 »</router-link></li>
    </ul>
  </div>
</template>

<script>
import { getCategories } from "../util";
export default {
  computed: {
    categories() {
      let categoriesArr = getCategories(this.$site.pages);
      if (categoriesArr.length && categoriesArr.length >= 10) {
        categoriesArr.length = 10;
      }
      return categoriesArr;
    },
  },
};
</script>

 <style lang="stylus">
 .home-class {
   float: right;
   border: 1px solid #ccc;
   padding: 15px;
   margin-bottom: 25px;

   ul {
     list-style-type: disc;
     margin: 0px;
     font-size: 20px;
     display: block;
     padding-left: 20px;
   }

   li {
     margin-bottom: 5px;
     line-height: 28px;
     font-size: 16px;
   }

   li::marker {
     unicode-bidi: isolate;
     font-variant-numeric: tabular-nums;
     text-transform: none;
     text-indent: 0px !important;
     text-align: start !important;
     text-align-last: start !important;
   }

   h2 {
     font-size: 22px;
     font-weight: 400;
     border-bottom: 1px dashed #ccc;
     width: 100%;
     max-width: 100%;
     line-height: 2;
     margin-bottom: 15px;
   }
 }
</style>