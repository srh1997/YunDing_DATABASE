import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Equip_Merge from '@/components/merge'
import Chess from '@/components/chess'
import Detail from  '@/components/detail'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/equip-merge',
      component:Equip_Merge
    }
    ,{
      path:'/chess',
      component:Chess
    }
    ,{
      path:'/detail',
      component:Detail
    }
  ]
})
