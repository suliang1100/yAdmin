import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import './plugins/element.js'
import store from './store'

import '@/styles/index.scss'

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
