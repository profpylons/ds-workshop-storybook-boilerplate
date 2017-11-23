import React from 'react'
import { withTheme } from 'utils'
import { storiesOf } from '@storybook/react'
import Headline from '.'

storiesOf('Headline', module).add('default', withTheme(() => {
  return (
    <div>
      <Headline>Some text in box</Headline>
    </div>
  )
}))