import React from 'react'
import { string } from 'prop-types'
import cx from 'classnames'
import * as s from './styles'

const Component = (props) => {
  const className = cx(`header`, props.className)
  return (
    <s.HeaderContainer>
      <s.Logo />
      <s.Header {...props} className={className} />
    </s.HeaderContainer>
  )
}

Component.displayName = 'Header'

export default Component
