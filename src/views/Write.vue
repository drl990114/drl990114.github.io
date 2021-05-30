<template>
  <div id="write">
    <div class="write-header">
      <a href="http://snippets.barretlee.com">
        <h1>Write MarkDown</h1>
      </a>
      <button @click="handleSubmit">提交</button>
    </div>
    <v-md-editor v-model="text" height="90vh"></v-md-editor>
  </div>
</template>
<script lang="ts">
import { ref, defineComponent } from "vue";

export default defineComponent({
  setup() {
    const text = ref("");
    const handleSubmit = () => {
      console.log(text);
    };
    return {
      text,
      handleSubmit,
    };
  },
});
</script>


<style>
#write .write-header {
  height: 65px;
  margin-bottom: 10px;
  text-align: left;
  box-shadow: 0 0 12px 2px rgb(0 0 0 / 10%);
  /* background: black; */
}
#write .write-header h1 {
  font-size: 30px;
  line-height: 64px;
  color: #4a75b5;
  margin-left: 30px;
  font-family: fantasy, cursive, consolas;
  display: inline-block;
}
#write .write-header button {
  float: right;
  margin: 20px 20px 0 0;
}
#write pre{
  text-align: left  !important;
}
</style>