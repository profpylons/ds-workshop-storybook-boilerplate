import React from 'react'
import cx from 'classnames'
import * as s from './styles'

const Component = ({ as = 'input', name, ...props }) => {
  const className = cx(`Search fa fa-${name}`, props.className)
  const Element = s.Search.withComponent(as)

  return (
    <div>
      <Element {...props} className={className} />
    </div>
  )
}

Component.displayName = 'Search'
Component.defaultProps = {
  size: 'normal'
}

export default Component
