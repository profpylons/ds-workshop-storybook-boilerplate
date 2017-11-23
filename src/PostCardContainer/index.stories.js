import React from 'react'
import { withTheme } from 'utils'
import { storiesOf } from '@storybook/react'
import PostCardContainer from '.'
import PostCard from './../PostCard/.'
import Headline from './../Headline/.'
import Author from './../Author/.'

storiesOf('PostCardContainer', module).add('default', withTheme(() => {
  return (
    <div>
      <PostCardContainer>
        <PostCard><div>Item 1</div></PostCard>
        <PostCard>
          <Headline>This is head line</Headline>
          <Author>Author</Author>
        </PostCard>
        <PostCard><p>Item3</p></PostCard>
      
      </PostCardContainer>
    </div>
  )
}))