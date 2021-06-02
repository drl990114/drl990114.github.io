<template>
  <!-- 打开弹框的动画 -->
  <transition name="animation">
    <div
      class="dialogBox"
      :class="{ isShowMask: mask == true }"
      v-show="isShowDialog"
      @click="clickMaskCloseFn"
    >
      <div class="dialogBoxContent" @click.stop>
        <div class="headhead">
          <!-- 这样写可以做到若有传递过来的title就用传递过来的title
          若有传递过来的插槽，就以插槽的为准 -->
          <slot name="header">
            <span>{{ title }}</span>
          </slot>
          <i class="el-icon-close" @click="close" v-show="showCloseIcon"> </i>
        </div>
        <div class="bodybody">
          <!-- 内容区我们使用默认插槽 -->
          <slot name="body"></slot>
        </div>
        <div class="footfoot">
          <!-- 底部使用命名插槽 -->
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "Model",
  props: {
    // 控制是否展示或隐藏对话框
    isShowDialog: {
      type: Boolean,
      default: false,
    },
    // 父组件传过来的标题值
    title: {
      type: String,
      default: "",
    },
    // 是否显示关闭小图标
    showCloseIcon: {
      type: Boolean,
      default: true,
    },
    // 是否开启背景遮罩层
    mask: {
      type: Boolean,
      default: true,
    },
    // 是否点击遮罩层mask关闭弹出框
    clickMaskClose: {
      type: Boolean,
      default: false,
      require: true,
    },
  },
  data() {
    return {};
  },
  methods: {
    // 关闭弹出框
    close() {
      this.$emit("beforeClose", false);
    },
    // 点击遮罩层关闭弹框
    clickMaskCloseFn() {
      if (this.clickMaskClose == true) {
        this.$emit("beforeClose", false);
      } else {
        /* 这里要控制一下冒泡事件，注意第十行使用@click.stop
           不控制冒泡的话，点击内容区也会导致弹出框关闭*/
        return;
      }
    },
  },
};
</script>

<style lang="scss">
.dialogBox {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;

  button {
    margin: 0 10px;
    cursor: pointer;
    width: 80px;
    height: 37px;
    display: inline-block;
    background-color: #ffffff;
    color: #4a75b5;
    border: 1px solid #4a75b5;
    padding: 10px 24px;
    border-radius: 4px;
    transition: all 0.3s;
    line-height: 15px;
  }
  .dialogBoxContent {
    width: 600px;
    height: 400px;
    border: 2px solid #e9e9e9;
    border-radius: 10px;
    background: #f3f3f3;
  }
  .headhead {
    width: 100%;
    height: 60px;
    line-height: 60px;
    border-bottom: 1px solid #e9e9e9;
    box-sizing: border-box;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    span {
      font-size: 24px;
    }
    i {
      font-size: 24px;
      cursor: pointer;
    }
  }
  .bodybody {
    width: 100%;
    height: calc(100% - 120px);
  }
  .footfoot {
    width: 100%;
    height: 60px;
    line-height: 60px;
    box-sizing: border-box;
    border-top: 1px solid #e9e9e9;
    padding: 0 20px;
    text-align: right;
  }

  .isShowMask {
    background-color: rgba(0, 0, 0, 0.3);
  }
  .animation-enter,
  .animation-leave-to {
    opacity: 0;
  }
  .animation-enter-active,
  .animation-leave-active {
    transition: opacity 0.3s;
  }
}
</style>