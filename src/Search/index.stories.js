import React from 'react'
import { withTheme } from 'utils'
import { storiesOf } from '@storybook/react'
import Search from '.'
import Box from '../Box'

storiesOf('Search', module)
  .add('simple usage', withTheme(() => {
    return (
      <div>
        <Box>
          <Search name='star' color='black' />
          <Search name='star' color='gray' />
          <Search name='github' color='primary' hasBorder />
          <Search name='gift' color='success' />
          <Search name='bug' color='danger' />
        </Box>
      </div>
    )
  }))
  .add('with icon', withTheme(() => {
    return (
      <div>
        <Box>
          <Search name='search' color='white' icon='https://sc5.io/wp-content/themes/sc5/dist/images/icons/icon-search.svg' />
        </Box>
      </div>
    )
  }))
