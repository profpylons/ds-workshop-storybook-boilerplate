import React from 'react'
import { withTheme } from 'utils'
import { storiesOf } from '@storybook/react'
import PostCardContainer from '.'
import PostCard from './../PostCard/.'

storiesOf('PostCardContainer', module).add('default', withTheme(() => {
  return (
    <div>
      <PostCardContainer>
        <PostCard>Item 1</PostCard>
        <PostCard><h2>Item 2</h2></PostCard>
        <PostCard><p>Item3</p></PostCard>
      
      </PostCardContainer>
    </div>
  )
}))