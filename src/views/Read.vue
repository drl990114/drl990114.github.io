<template>
<div class="read">
  <LeftBar/>
  sd
 <v-md-preview :text="text"></v-md-preview>
  <v-md-editor :value="text" mode="preview"></v-md-editor>
</div>

</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
import LeftBar from '../components/read/LeftBar.vue'
export default defineComponent({
  name: 'Read',
  components:{
    LeftBar
  },
  data() {
    return {
      text: '## link ',
    };
  },
  setup(){
    const text = ""
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
