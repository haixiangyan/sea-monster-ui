import * as React from 'react'
import ReactDOM from 'react-dom'

import Icon from './Icon/Icon'

const fn = () => {
  console.log('fn')
}

ReactDOM.render(
  <div>
    <Icon onClick={fn} name="close"/>
    <Icon name="down"/>
  </div> ,
  document.querySelector('#root')
)
