import React from 'react'
import { shallow } from 'enzyme'
import Test from './Test'

describe('Test', () => {
  it('should run', () => {
    let wrapper = shallow(<Test />)

    expect(wrapper.find('h1').exists()).toBe(true)
  })
})
