import React from 'react'

import Select from './Select';

const Component = ({ label, children, ...props }) => {

  if (label) {
    return <Select label={label} {...props}>{children}</Select>;
  } else {
    return <Select {...props}>{children}</Select>;
  }

}

Component.displayName = 'Select'
Component.defaultProps = {
  color: 'white'
}

export default Component
