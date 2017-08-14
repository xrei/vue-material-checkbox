import Vue from 'vue'
import App from './App.vue'

import checkbox from '../../src/main'

Vue.use(checkbox)

new Vue({
  el: '#app',
  render: h => h(App),
})