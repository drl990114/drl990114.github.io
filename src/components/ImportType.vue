  
<template>
  <p>import type should be removed without side-effect</p>
</template>

<script setup lang="ts">
import type { LeftBar } from '../../dep-import-type/deep'
const msg: LeftBar = {}
</script>