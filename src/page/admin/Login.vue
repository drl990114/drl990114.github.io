<template>
  <div id="login">
    <div class="image"></div>
    <h1 style="font-size: 18px">博客后台管理</h1>
    <from>
      <div class="login-from">
        <span>账号：</span>
        <input />
      </div>
      <div class="login-from">
        <span>密码：</span>
        <input />
      </div>
    </from>
    <button class="login-btn" @click="handleBtn">登录</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "login",
  setup() {
    const router = useRouter();
    const handleBtn = () => {
      router.push({
        path: "/welcome",
      });
    };

    return { handleBtn };
  },
});
</script>

<style scoped>
#login {
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 45%);
  width: 460px;
  height: 270px;
  padding: 20px;
  border-radius: 2px;
  box-shadow: 2px 2px 4px #e2e2e2;
  background: #f3f3f3;;
  padding: 20px;
  border-radius: 12px;
  color: #4a75b5;
  font-family: Georgia, serif;
}
#login h1 {
  font-weight: bolder;
  font-size: 24px !important;
  color: #4a75b5;
  text-align: center;
  line-height: 36px;
}
#login input {
  min-width: 300px;
  height: 25px;
  margin: 40px 0 0 0;
  opacity: 0.6;
  padding: 8px 12px;
  border-radius: 4px;
  border: 1px solid #ccc;
  color: #666;
  font-size: 14px;
  outline: none;
}
#login .login-from {
  margin: 0 auto;
  transform: translateX(-11px);
}
#login .login-from span {
  font-size: 16px;
}
#login .login-btn {
  cursor: pointer;
  margin: 30px;
  width: 80px;
  height: 37px;
  display: inline-block;
  background-color: #ffffff;
  color: #4a75b5;
  border: 1px solid #ccc;
  padding: 10px 24px;
  border-radius: 4px;
  transition: all 0.3s;
  line-height: 15px;
}
</style>
