<template>
  <div class="welcome">
    <h1>Welcome</h1>
    <div class="nav">
      <router-link
        class="link"
        v-for="item in navList"
        :key="item"
        :to="item.link"
        >{{ item.name }}</router-link
      >
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { navigationList } from "../utils/list";

export default defineComponent({
  name: "Welcome",
  data() {
    return { navList: navigationList };
  },
});
</script>

<style scoped>
.welcome {
  width: 100%;
  margin: 0 auto;
}
.nav {
  width: 40%;
  margin: 20px auto;
  padding: 40px 30px;
  background: #ecf0f3;
  border-radius: 20px;
  font-size: 1.5rem;
  box-shadow: -6px -6px 20px rgba(255, 255, 255, 1),
    6px 6px 20px rgba(0, 0, 0, 0.1);
}
.link {
  margin: 4px;
}
</style>
