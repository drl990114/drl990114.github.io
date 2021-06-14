 <template>
  <div class="about">about
      <LeftNav/>
  </div>
</template>
<script>
import LeftNav from "./LeftNav.vue"
export default {
  name: "About",
  components:{LeftNav},
  computed: {
    themeConfigs() {
      return this.$themeConfig;
    },
  },
};
</script>
 <style lang="stylus">
 .about {
 }

 @media screen and (min-width: 1281px) {
   .about {
     width: 50%;
   }
 }

 @media screen and (min-width: 998px) and (max-width: 1280px) {
   .about {
     width: 60%;
   }
 }

 @media screen and (min-width: 660px) and (max-width: 997px) {
   .about {
     width: 75%;
   }
 }

 @media screen and (max-width: 659px) {
   .about {
     width: 94%;
   }
 }
</style>