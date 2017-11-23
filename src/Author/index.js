import React from 'react'
import { string } from 'prop-types'
import cx from 'classnames'
import * as s from './styles'

const Component = (props) => {
  const className = cx(`author`, props.className)
  return (
    <s.Author {...props} className={className} />
  )
}

Component.displayName = 'Author'

export default Component
