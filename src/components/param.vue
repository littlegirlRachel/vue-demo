<template>
  <div>
    <p>{{msg}}</p>
    <div>{{$route.params.newsId}}</div>
    <div>{{$route.params.newsTitle}}</div>
  </div>
</template>

<script>
export default {
  name: 'params',
  data () {
    return {
      msg: 'this is params page'
    }
  },
  beforeRouteEnter: (to, from, next) => {
    console.log('ready to enter router template')
    next()
  },
  beforeRouteLeave: (to, from, next) => {
    console.log('ready to leave router template')
    next()
  }
}
</script>

<style scoped>

</style>
