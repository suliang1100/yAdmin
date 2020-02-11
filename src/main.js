import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import './plugins/element.js'

import '@/styles/index.scss'

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
