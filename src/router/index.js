import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login'
import Diary from '@/views/Diary'
import Register from '@/views/Register'

import store from '../store'
import firebase from 'firebase'
Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/diary',
      name: 'Diary',
      component: Diary
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    }
  ]
})
router.beforeEach((to, from, next) => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      store.state.userUid = user.uid
      if (router.currentRoute.name === 'login') next('Diary')
    } else {
    }
  })
  to.matched.some(record => record.meta.requiresAuth)
  if (!store.state.login === false) next()
  else next()
})
export default router
