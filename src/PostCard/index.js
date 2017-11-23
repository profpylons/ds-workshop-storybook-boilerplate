import React from 'react'
import { string } from 'prop-types'
import cx from 'classnames'
import * as s from './styles'

const Component = (props) => {
  const className = cx(`postcard`, props.className)
  return (
    <s.PostCard {...props} className={className} />
  )
}
Component.displayName = 'PostCard'

export default Component