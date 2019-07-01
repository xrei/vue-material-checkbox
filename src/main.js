import VueCheckbox from './material-checkbox.vue'

export function install(Vue) {
  if (install.installed) return
	install.installed = true
  Vue.component('Checkbox', VueCheckbox)
}

export default VueCheckbox