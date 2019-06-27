<template>
  <div class="m-chckbox--container" :class="[classes]">
    <div class="m-chckbox--group" 
      :style="mainStyle + sizeStyles"
      @click="toggle"
    >
      <div v-if="checkboxState">
        <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" viewBox="0 0 24 24">
          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
        </svg>
      </div>
      <div 
        class="m-chckbox--ripple"
        :style="rippleSizeStyles"
        v-ripple 
      >
        <input type="checkbox"
          :id="id || uniqueId"
          :name="name"
          :value="value"
          :disabled="disabled"
          :required="required"
          :color="color"
          :checked="checkboxState"
        >
      </div>
    </div>
    <label
      :style="fontSizeStyles"
      class="m-chckbox--label"
      :for="id || uniqueId"
    >
      <slot/>
    </label>
  </div>  
</template>

<script>
import ripple from './ripple'

export default {
  name: 'Checkbox',
  directives: {
    ripple
  },
  model: {
    prop: 'model',
    event: 'change'
  },
  props: {
    id: {
      type: String,
      default: undefined
    },
    model: {
      type: String | Array,
      default: undefined
    },
    checked: Boolean,
    value: String,
    name: String,
    required: Boolean,
    disabled: Boolean,
    color: String,
    size: Number,
    fontSize: Number
  },
  data: () => ({
    uniqueId: ''
  }),
  computed: {
    checkboxState() {
      if (this.model === undefined) return this.checked
      if (Array.isArray(this.model)) return this.model.indexOf(this.value) !== -1
      return this.model
    },
    classes() {
      return {
        'disabled': this.disabled,
        'active': this.checkboxState
      }
    },
    mainStyle() {
      return this.checkboxState
        ? this.color && `background-color: ${this.color}; border-color: ${this.color};`
        : ''
    },
    sizeStyles() {
      return this.size
        ? `width: ${this.size}px; height: ${this.size}px; `
        : ''
    },
    rippleSizeStyles() {
      return this.size
        ? `width: ${this.size + 28}px; height: ${this.size + 28}px;`
        : ''
    },
    fontSizeStyles() {
      return this.fontSize
        ? `font-size: ${this.fontSize}px`
        : ''
    }
  },
  methods: {
    toggle() {
      if(this.disabled) return

      let value = this.model

      if (Array.isArray(value)) {
        const i = value.indexOf(this.value)

        if (i === -1) value.push(this.value)
        else value.splice(i, 1)
      } 
      else value = !this.checkboxState

      this.$emit('change', value)
    },

    genId() {
      if (this.id === undefined || typeof String) {
        this.uniqueId = `m-checkbox--${Math.random().toString(36).substring(2,10)}`
      }
      else {
        this.uniqueId = this.id
      }
    }
  },
  watch: {
    checked(v) {
      if (v !== this.checkboxState) this.toggle()
    }
  },
  mounted() {
    this.genId()

    if (this.checked && !this.checkboxState) {
      this.toggle()
    }
  }
}
</script>

<style lang="stylus">
$base= #009688
$size= 20px
$default-check-color= #fff

.__ripple
  &__container
    color: inherit
    border-radius: inherit
    position: absolute
    width: 100%
    height: 100%
    left: 0
    top: 0
    overflow: hidden
    z-index: 0
    pointer-events: none
    contain: strict
  &__animation
    color: inherit
    position: absolute
    top: 0
    left: 0
    border-radius: 50%
    background: currentColor
    opacity: 0
    transition: .4s cubic-bezier(0.0, 0.0, 0.2, 1)
    pointer-events: none
    overflow: hidden
    will-change: transform, opacity
    &--enter
      transition: none
    &--visible
      opacity: .15

.m-chckbox
  &--container
    box-sizing: border-box
    display: inline-flex
    position: relative
    margin: 1rem 0
    margin-right: 1rem
    width: 100%
    line-height: $size
    cursor: pointer
    align-items center
  &--ripple
    box-sizing border-box
    z-index: 1
    position: absolute
    width: 48px
    height: 48px
    top: 50%
    left: 50%
    transform: translate(-50%, -50%)
    border-radius: 50%
  &--label
    position: relative
    padding-left: 1rem
    cursor: pointer
  &--group
    box-sizing border-box
    position: relative
    border-radius: 2px
    border: 2px solid rgba(0,0,0,.54)
    height: $size
    width: $size
    transition: .4s cubic-bezier(.25,.8,.25,1) 
    input[type=checkbox]
      position: absolute
      -webkit-appearance: none
      appearance: none
      left: -999rem

.m-chckbox--container.active
  .m-chckbox--group
    background-color: $base
    border-color: $base

.m-chckbox--container.disabled
  cursor: not-allowed
  .m-chckbox--group
    opacity: .14
  .m-chckbox--label
    opacity: .24
    cursor: not-allowed

</style>
