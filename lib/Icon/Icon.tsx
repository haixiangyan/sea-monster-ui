import * as React from 'react'
import './icon.scss'
import './importIcons'

interface IconProps {
  name?: string
  onClick?: () => void
}

const Icon: React.FunctionComponent<IconProps> = (props) => {
  return (
    <svg className="sm-icon" onClick={props.onClick}>
      <use xlinkHref={`#${props.name}`}/>
    </svg>
  )
}

export default Icon
