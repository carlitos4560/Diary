import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login'
import Diary from '@/views/Diary'
import Register from '@/views/Register'

Vue.use(Router)

export default new Router({
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
