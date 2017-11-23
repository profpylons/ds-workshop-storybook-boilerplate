import React from 'react'
import cx from 'classnames'
import * as s from './styles'

const Element = s.Select.withComponent('select')

const Component = ({ children, ...props }) => {
  let className = cx('select', props.className)

  return (
    <Element {...props} className={className}>
      {children}
    </Element>
  )
}

Component.displayName = 'Select'

export default Component
