import VueCheckbox from './material-checkbox.vue'

export function globalChecbox(Vue) {
  if (globalChecbox.installed) return
	globalChecbox.installed = true
  Vue.component('Checkbox', VueCheckbox)
}

const plugin = {
	install: globalChecbox
}

// Auto-install
let gv = null
if (typeof window !== 'undefined') {
	gv = window.Vue
} else if (typeof global !== 'undefined') {
	gv = global.Vue
}
if (gv) {
	gv.use(plugin)
}

export default VueCheckbox