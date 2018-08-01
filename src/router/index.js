import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import MainPart from '@/components/MainPart'
import child1 from '@/components/child1'
import child2 from '@/components/child2'
import Param from '@/components/param'
import Error from '@/components/error'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/MainPart',
      components: {
        default: MainPart,
        left: child1,
        right: child2 }
    },
    {
      path: '/MainPartReverse',
      components: {
        default: MainPart,
        left: child2,
        right: child1 }
    },
    {
      path: '/params/:newsId(\\d+)/:newsTitle',
      component: Param
    },
    {
      path: '/gohome',
      redirect: '/',
      alias: '/goback'
    },
    {
      path: '*',
      component: Error
    }
  ]
})
