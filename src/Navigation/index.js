import React from 'react'
import { string } from 'prop-types'
import cx from 'classnames'
import * as s from './styles'

const Component = (props) => {
  const className = cx(`navigation`, props.className)
  return (
      <s.Navigation {...props} className={className}>
        {props.items.map((item, index) => {
          return <s.NavigationItem key={index}><a className={item.active ? 'active' : ''} href={item.link}>{item.text}</a></s.NavigationItem>
        })}
      </s.Navigation>
  )
}

Component.displayName = 'Navigation'

export default Component
