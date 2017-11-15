import React from 'react'
import cx from 'classnames'
import * as s from './styles'
import styled from 'styled-components'

const Element = s.Button.withComponent('div').extend`
  display: inline-flex;
  padding-right: 0;
`

const Label = s.Label.withComponent('span');

const Component = ({ label, children, color, ...props }) => {
  let className = cx('button', 'button--with-label', props.className)

  return (
    <Element color={color} {...props} className={className}>
      {children}
      <Label color={color} isInverted>{label}</Label>
    </Element>
  )
}

Component.displayName = 'Button with label'
Component.defaultProps = {
  label: '0'
}

export default Component
