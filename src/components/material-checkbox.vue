<template>
	<div class="checkbox-container" :class="[classes]">
		<label class="checkbox_label"
      :for="id || uniqueId">
      <slot></slot>
    </label>
		<div class="checkbox-group">
			<input type="checkbox"
        :id="id || uniqueId"
        :name="name"
        :value="value"
        :disabled="disabled"
        :required="required"
        :color="color"

        :checked="checkboxState"
        @change="toggle()"

        :style="checkboxState ? color && `background-color: ${color}; border-color: ${color};` : null"
      >
		</div>
	</div>  
</template>

<script>
export default {
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
    color: String
  },
  data() {
    return {
      uniqueId: ''
    }
  },
  computed: {
    checkboxState() {
      if (this.model === undefined)
        return this.checked

      if (Array.isArray(this.model))
        return this.model.indexOf(this.value) !== -1

      return this.model
    },
    classes() {
      return {
        'checkbox-disabled': this.disabled,
        'checkbox-active': this.checkboxState
      }
    }
  },
  methods: {
    toggle() {
      if(this.disabled) return

      let value = this.model

      if (Array.isArray(value)) {
        value = value.slice()
        const i = value.indexOf(this.value)

        if (i === -1)
          value.push(this.value)
        else 
          value.splice(i, 1)
      } 
      else 
        value = !this.checkboxState

      this.$emit('change', value)
    },

    genId() {
      if (this.id === undefined || typeof String)
        this.uniqueId = `m-checkbox--${Math.random().toString(36).substring(2,10)}`
      else
        this.uniqueId = this.id
    }
  },
  watch: {
    checked(newVal) {
      if (newVal !== this.checkboxState)
        this.toggle()
    }
  },
  mounted() {
    this.genId()

    if (this.checked && !this.checkboxState) {
      this.toggle();
    }
  }
  
}
</script>

<style lang="scss">
$base: #009688;
$size: 1.125em;

.checkbox-container{
  box-sizing: border-box;
	position: relative;
	display: flex;
	margin: 1rem 0;
	width: 100%;
	line-height: $size;

  .checkbox_label{
    position: relative;
    margin-left: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
    order: 1;
    cursor: pointer;
  }
  
  .checkbox-group{
    display: flex;
    position: relative;
    > input[type=checkbox]{
      margin: 0; padding: 0;
      position: relative;
      height: $size;
      width: $size;
      font-size: inherit;
      -webkit-appearance: none;
      -moz-appearance: none;
      -ms-appearance: none;
      -o-appearance: none;
      appearance: none;
      background: #fff;
      border: 2px solid #000;
      border-radius: 2px;
      opacity: .54;
      transition: cubic-bezier(.1, .1, 1, .1) .12s;
      transition-property: border-color, opacity, background-color;
      &:focus {
        outline: none;
      }	
      &:checked{
        border-color: $base;
        background-color: $base;
        opacity: 1;
      }

			&:before, &:after{
				content: '';
				position: absolute;
				width: $size; height: $size;
				background-color: #fff;
				opacity: 1;
				transition: transform .25s ease;
				transform-origin: 0 0;
				top: -2px;
				left: -2px;
			}
			&:before{
				transform: translate(.28em, .435em) rotate(45deg) scale(.3,.1);
			}
			&:after {
				transform: translate(0.96em, 0.351em) rotate(135deg) scale(0.58, 0.1);
			}
			&:not(:checked):before {
				transform: translate(.505em,.455em) rotate(45deg) scale(.1,.1);
			}
			&:not(:checked):after {
				transform: translate(.575em,.525em) rotate(135deg) scale(.1,.1);
			}
    }
  }
}

.checkbox-disabled{
  .checkbox-group > input[type=checkbox]{
    opacity: .24;
  }
  .checkbox_label{
    opacity: .24;
  }
}
</style>
