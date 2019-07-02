import Vue from 'vue'
import App from './App.vue'

// import { globalCheckbox } from '../../src/main'
// global scope installation
// Vue.use(globalCheckbox)

new Vue({
  el: '#app',
  render: h => h(App),
})