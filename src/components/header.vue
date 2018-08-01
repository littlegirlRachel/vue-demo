<template>
  <ul id="header">
    <li v-for="value in object">{{value}}</li>
  </ul>
</template>

<script>
    export default {
        name: "header"
    }
    new Vue({
      el  :'#header',
      data:{
        object:{
          index  :'首页',
          news   :'清华新闻',
          summary:'学校概况',
          depart :'院系设置',
          teacher :'师资队伍',
          education:'教学教育'
        }
      }
    })
</script>

<style scoped>

#header {
  border-top:2px solid #666;
}
  #header li{
    height :40px;
    padding: 2px 5px;
  }
</style>
