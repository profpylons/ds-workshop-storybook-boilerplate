import React from 'react'
import cx from 'classnames'
import * as s from './styles'

const Component = ({ children, ...props }) => {
  let className = cx('button', props.className)
  let Element = s.Button.withComponent('button')

  return (
    <Element {...props} className={className}>
      {children}
    </Element>
  )
}

Component.displayName = 'Simple Button'

export default Component
