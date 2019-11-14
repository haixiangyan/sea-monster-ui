import * as React from 'react'
import classes from '../helpers/classes'
import './icon.scss'
import './importIcons'

interface IconProps extends React.SVGAttributes<SVGElement | SVGUseElement> {
  name?: string
}

const Icon: React.FunctionComponent<IconProps> = (props) => {
  const {className, ...restProps} = props
  return (
    <svg className={classes('sm-icon', className)} {...restProps}>
      <use xlinkHref={`#${props.name}`}/>
    </svg>
  )
}

export default Icon
