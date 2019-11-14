import * as React from 'react'
import ReactDOM from 'react-dom'

import Icon from './Icon/Icon'

const fn: React.MouseEventHandler = (e) => {
  console.log(e.target)
}

ReactDOM.render(
  <div>
    <Icon onClick={fn} name="close"/>
    <Icon name="down"/>
  </div> ,
  document.querySelector('#root')
)
