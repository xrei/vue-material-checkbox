import Vue from 'vue'
import App from './App.vue'

// import { globalChecbox } from '../../src/main'
// global scope installation
// Vue.use(globalChecbox)

new Vue({
  el: '#app',
  render: h => h(App),
})