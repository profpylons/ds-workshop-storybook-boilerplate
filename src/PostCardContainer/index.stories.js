import React from 'react'
import { withTheme } from 'utils'
import { storiesOf } from '@storybook/react'
import PostCardContainer from '.'
import PostCard from './../PostCard/.'
import Headline from './../Headline/.'
import Author from './../Author/.'
import Image from './../Image/.'

storiesOf('PostCardContainer', module).add('default', withTheme(() => {
  return (
    <div>
      <PostCardContainer>
        <PostCard><div>Item 1</div></PostCard>
        <PostCard>
          <Image src='https://laughingsquid.com/wp-content/uploads/lightning-cat-20100422-160026.jpg' alt='some alt text' />
          <Headline>This is head line</Headline>
          <Author>Author</Author>
        </PostCard>
        <PostCard><p>Item3</p></PostCard>
      
      </PostCardContainer>
    </div>
  )
}))