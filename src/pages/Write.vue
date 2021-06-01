<template>
  <div id="write">
    <div class="write-header">
      <a href="http://snippets.barretlee.com">
        <h1>Write MarkDown</h1>
      </a>
      <button @click="isShowDialog = true">提交</button>
    </div>
    <v-md-editor v-model="text" height="90vh"></v-md-editor>

    <Model
      v-model:isShowDialog="isShowDialog"
      title="设置标题"
      :showCloseIcon="true"
      @beforeClose="beforeClose"
      :mask="true"
      :clickMaskClose="true"
    >
      <!-- 要与组件的具名插槽对应 -->
      <template v-slot:header> 文章设置 </template>
      <template v-slot:body> 默认插槽 </template>
      <!-- 要与子组件的插槽对应 -->
      <template v-slot:footer>
        <button size="small" @click="isShowDialog = false">取消</button>
        <button type="primary" size="small" @click="isShowDialog = false">
          确认
        </button>
      </template>
    </Model>
  </div>
</template>
<script lang="ts">
import { ref, defineComponent } from "vue";
import Model from "../components/model.vue";
export default defineComponent({
  components: {
    Model,
  },
  data() {
    return {
      isShowDialog: false,
      // footer:"footer"
    };
  },
  methods: {
    // 关闭前的回调
    beforeClose(flag: boolean) {
      this.isShowDialog = flag;
    },
  },
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
  margin: 23px 20px 0 0;
  cursor: pointer;
  width: 80px;
  height: 27px;
  background-color: #ffffff;
  color: #4a75b5;
  border: 1px solid #4a75b5;
  padding: auto 12px;
  border-radius: 4px;
  transition: all 0.3s;
}
#write pre {
  text-align: left !important;
}
</style>
