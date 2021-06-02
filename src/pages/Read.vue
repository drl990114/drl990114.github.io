<template>
<div class="read">
  <LeftBar/>
 <v-md-preview :text="text"></v-md-preview>
  <v-md-editor :value="text" mode="preview"></v-md-editor>
</div>
</template>

<script setup>
import { ref, defineComponent,defineAsyncComponent } from 'vue'
import LeftBar from '../components/read/leftbar.vue'
</script>

<style lang="scss">
.read{
    max-width: 800px;
    padding-left: 40px;
    margin: auto;
    word-break: break-all;
    word-wrap: break-word;
}
</style>

