import React from 'react'
import { withTheme } from 'utils'
import { storiesOf } from '@storybook/react'
import Header from '.'
import Navigation from '../Navigation'

storiesOf('Header', module).add('default', withTheme(() => {
  return (
    <div>
      <Header>
        <Navigation items={[
          {text: 'services', link: 'services', active: false},
          {text: 'cases', link: 'cases', active: false},
          {text: 'careers', link: 'careers', active: false},
          {text: 'blog', link: 'blog', active: true},
          {text: 'contact', link: 'contact', active: false},
        ]} />
      </Header>
    </div>
  )
}))
