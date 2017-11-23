import React from 'react'
import { withTheme } from 'utils'
import { storiesOf } from '@storybook/react'
import Header from '.'
import Navigation from '../Navigation'

storiesOf('Header', module).add('default', withTheme(() => {
  return (
    <div>
      <Header>
        <Navigation items={['services', 'cases', 'careers', 'blog', 'contact']} />
      </Header>
    </div>
  )
}))
