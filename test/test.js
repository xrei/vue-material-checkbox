import { mount } from '@vue/test-utils'
import Checkbox from '../src/main'

describe('Checkbox', () => {
  const wrapper = mount(Checkbox)

  it('should be checked with checked attr', () => {
    const wrapper = mount(Checkbox, {
      attrs: {
        checked: true
      }
    })
    expect(wrapper.vm.$props.checked).toBe(true)
  })
  
})