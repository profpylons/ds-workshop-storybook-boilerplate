import React from 'react'
import cx from 'classnames'
import * as s from './styles'

const Element = s.Button.withComponent('button')

const Component = ({ children, ...props }) => {
  let className = cx('button', props.className)

  return (
    <Element {...props} className={className}>
      {children}
    </Element>
  )
}

Component.displayName = 'Simple Button'

export default Component
