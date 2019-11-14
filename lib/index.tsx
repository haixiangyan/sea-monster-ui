import * as React from 'react'
import ReactDOM from 'react-dom'

import Icon from './Icon/Icon'

const fn: React.MouseEventHandler = (e) => {
  console.log(e.target)
}

ReactDOM.render(
  <div>
    <Icon name="close" onClick={fn} onMouseMove={fn}/>
  </div> ,
  document.querySelector('#root')
)
