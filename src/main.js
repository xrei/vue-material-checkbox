const VueCheckbox = require('./components/material-checkbox.vue')

export default {
  install(Vue) {
    Vue.component('checkbox', VueCheckbox)
  }
}

export { VueCheckbox }