<template>
<div class="read">
  <LeftBar/>
 <v-md-preview :text="text"></v-md-preview>
  <v-md-editor :value="text" mode="preview"></v-md-editor>
</div>
</template>

<script setup>
import { ref, defineComponent,defineAsyncComponent } from 'vue'
const LeftBar = defineAsyncComponent(() =>
  import('../components/read/leftbar.vue').then((mod) => mod.default)
)
function load(file) {
  return defineAsyncComponent(() => import(`../components/${file}.vue`))
}
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
