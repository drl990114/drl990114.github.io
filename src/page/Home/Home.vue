<template>
  <div class="home">
    <Header />
    <Body />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "../../components/home/Header.vue";
import Body from "../../components/home/index.vue";
export default defineComponent({
  name: "Home",
  components: {
    Header,
    Body,
  },
});
</script>

<style scoped>

.home {
  display: flex;
  flex-direction: column;
  justify-items: center;
  position: relative;
  height: 100%;
  width: 100%;
  text-align: left;
}
</style>
