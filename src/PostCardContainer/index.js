import React from 'react'
import { string } from 'prop-types'
import cx from 'classnames'
import * as s from './styles'

const Component = (props) => {
  const className = cx(`postcardcontainer`, props.className)
  return (
    <s.PostCardContainer {...props} className={className} />
  )
}
Component.displayName = 'PostCardContainer'

export default Component