<template>
  <div id="login">
    <Header style="opacity: 0.3" />
    <form class="login-from">
      <div>
        <span>账号：</span>
        <input />
      </div>
      <div>
        <span>密码：</span>
        <input />
      </div>
    </form>
    <button class="login-btn" @click="handleBtn">登录</button>
  </div>
</template>

<script>
import Header from "../components/showdata/header.vue";
import { useRouter } from "vue-router";
export default {
  components: {
    Header,
  },
  setup() {
    console.log("setup");
    const router = useRouter();
    const handleBtn = () => {
      console.log(1);
      router.push({
        path: "/write",
      });
    };
    return {
      handleBtn: handleBtn,
    };
  },
};
</script>

<style lang="scss">
#login {
  overflow: hidden;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 45%);
  width: 460px;
  height: 270px;
  padding: 20px;
  box-shadow: 2px 2px 4px #e2e2e2;
  background: #f3f3f3;
  padding: 20px;
  border-radius: 12px;
  color: #4a75b5;
  font-family: Georgia, serif;
  h1 {
    font-weight: bolder;
    font-size: 24px !important;
    color: #fff;
    text-align: center;
    line-height: 36px;
  }
  input {
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
  .login-from {
    display: inline-block;
    margin: 50px 0 0 0;
    transform: translateX(-11px);
  }
  .login-from span {
    font-size: 16px;
  }
  .login-btn {
    cursor: pointer;
    margin: 30px;
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
}
</style>
