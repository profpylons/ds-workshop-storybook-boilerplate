import React from 'react'
import { withTheme } from 'utils'
import { storiesOf } from '@storybook/react'
import PostCard from '.'

storiesOf('PostCard', module).add('default', withTheme(() => {
  return (
    <div>
      <PostCard>Some text in Post card</PostCard>
    </div>
  )
}))