<template>
  <div id="app">
    <router-link to="/">首页</router-link>
    <router-link to="/MainPart">MainPart &nbsp;</router-link>
    <router-link to="/MainPartReverse">MainPartReverse</router-link>
    <router-link to="/params/8899/hello title">params &nbsp;</router-link><br>
    <router-link to="/gohome">goback</router-link>
    <router-link to="/goback">alias apply</router-link>
    <button @click="backToIndex()">回到首页（编程式）</button>
    <button @click="backToLast()">回到上一个（编程式）</button>
    <transition name="fade" mode="out-in">
    <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    backToIndex () {
      this.$router.push('/')
    },
    backToLast () {
      this.$router.go(-1)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.fade-enter {
  opacity:0;
}
.fade-leave{
  opacity:1;
}
.fade-enter-active{
  transition:opacity .5s;
}
.fade-leave-active{
  opacity:0;
  transition:opacity .5s;
}
</style>
