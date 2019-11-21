// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import * as firebase from 'firebase'

Vue.config.productionTip = false
const configOptions = {
  apiKey: 'AIzaSyCg6LyzFnpOet4BhhuNaBy4_R7CpiUSlSg',
  authDomain: 'diary-63e88.firebaseapp.com',
  databaseURL: 'https://diary-63e88.firebaseio.com',
  projectId: 'diary-63e88',
  storageBucket: 'diary-63e88.appspot.com',
  messagingSenderId: '144287298873',
  appId: '1:144287298873:web:720826fd8f244237cee4e8',
  measurementId: 'G-ZH0T3D45J9'
}

firebase.initializeApp(configOptions)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
