import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import SelectProfile from '@/pages/home/SelectProfile'
import KidProfile from '@/pages/home/KidProfile'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path:'/selectProfile',
      name:'profile',
      component: SelectProfile
    },
    {
      path:'/kidProfile',
      name:'kidprofile',
      component:KidProfile
    }
  ]
})
