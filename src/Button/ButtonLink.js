import React from 'react'
import cx from 'classnames'
import * as s from './styles'
import styled from 'styled-components'

const Element = s.Button.withComponent('a').extend`
  pointer-events: ${props => props.disabled ? 'none' : 'default'};
`

const Component = ({ href, children, ...props }) => {
  let className = cx('button', 'button--link', props.className)

  return (
    <Element {...props} href={href} className={className}>
      {children}
    </Element>
  )
}

Component.displayName = 'Link Button'
Component.defaultProps = {
  href: 'http://github.com'
}

export default Component
