<template>
<div class="read">
  <h1>read</h1>
  <LeftBar/>
</div>

</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
import LeftBar from '../components/read/LeftBar.vue'
export default defineComponent({
  name: 'Read',
  components:{
    LeftBar
  }
})
</script>

<style scoped>
.read{
    max-width: 800px;
    padding-left: 40px;
    margin: auto;
    word-break: break-all;
    word-wrap: break-word;
}
</style>
