<template>
<div class="showdata">
  <Header/>
  <Body/>
</div>

</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
import Header from '../components/showdata/header.vue'
import Body from '../components/showdata/body.vue'
export default defineComponent({
  name: 'ShowData',
  components:{
      Header,
      Body
  }
})
</script>

<style scoped>
.showdata{
    width:100% ;
    margin: auto;
    word-break: break-all;
    word-wrap: break-word;
}
</style>
