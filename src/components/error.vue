<template>
<div id="main">{{msg}}</div>
</template>
<script>
export default {
  name: 'error',
  data () {
    return {
      msg: 'aya~ page is missing'
    }
  }
}
</script>
<style scoped>
  #main{
    width:200px;
    margin:50px auto;
  }
</style>
