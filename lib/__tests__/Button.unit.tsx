import * as React from 'react'
import renderer from 'react-test-renderer'
import Button from '../Button/Button'

describe('Button', () => {
  it('is a div', () => {
    const tree = renderer.create(<Button/>).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
