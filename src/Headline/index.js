import React from 'react'
import { string } from 'prop-types'
import cx from 'classnames'
import * as s from './styles'

const Component = (props) => {
  const className = cx(`headline`, props.className)
  return (
    <s.Headline {...props} className={className} />
  )
}

Component.displayName = 'Headline'

export default Component
