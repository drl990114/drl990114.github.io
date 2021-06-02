<template>
<div class="showdata">
  <Header/>
  <Body/>
</div>

</template>

<script setup>
import { ref, defineComponent } from 'vue'
import Header from '../components/showdata/header.vue'
import Body from '../components/showdata/body.vue'
</script>

<style lang="scss">
.showdata{
    width:100% ;
    margin: auto;
    word-break: break-all;
    word-wrap: break-word;
}
</style>
