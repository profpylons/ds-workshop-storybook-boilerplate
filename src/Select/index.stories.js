import React from 'react'
import { withTheme } from 'utils'
import { storiesOf } from '@storybook/react'
import Select from '.'

storiesOf('Select', module).add('default', withTheme(() => {
  return (
    <div>
      <Select>
        <option>Blue</option>
        <option>Green</option>
        <option>Red</option>
      </Select>

    </div>
  )
}))
