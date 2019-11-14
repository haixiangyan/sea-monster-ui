import * as React from 'react'
import './icon.scss'
import './importIcons'

interface IconProps {
  name?: string
}

const Icon: React.FunctionComponent<IconProps> = (props) => {
  return (
    <svg className="sm-icon">
      <use xlinkHref={`#${props.name}`}/>
    </svg>
  )
}

export default Icon
