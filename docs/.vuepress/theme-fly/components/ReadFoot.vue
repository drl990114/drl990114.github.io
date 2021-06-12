 <template>
  <div class="read-foot"></div>
</template>
<script>
export default {
  name: "ReadFoot",
  computed: {
    themeConfigs() {
      return this.$themeConfig;
    },
  },
};
</script>
 <style lang="stylus">
 .read-foot {
   height: 410px;
   background: #3f3f3f;
   overflow: hidden;
   z-index: 1000px;
 }

 </style>