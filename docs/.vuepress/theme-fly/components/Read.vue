<template>
  <div>
    <h1>read</h1>
  <div >{{consoleLog}}</div>
  <Content/>
  </div>
</template>

<script>
export default {
  name: "Read",
  computed:{
    consoleLog(){
      console.log(this.$site)
      console.log(this.$page)
    }
  }
}
</script>

<style>
label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
