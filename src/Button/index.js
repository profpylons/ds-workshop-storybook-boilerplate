import React from 'react'
import cx from 'classnames'
import * as s from './styles'

import ButtonSimple from './ButtonSimple';
import ButtonLink from './ButtonLink';
import ButtonLabel from './ButtonLabel';

const Component = ({ href, label, children, ...props }) => {
  let className = cx('button', props.className)

  if (href) {
    return <ButtonLink href={href} {...props}>{children}</ButtonLink>;
  } else if (label) {
    return <ButtonLabel label={label} {...props}>{children}</ButtonLabel>;
  } else {
    return <ButtonSimple {...props}>{children}</ButtonSimple>;
  }

}

Component.displayName = 'Button'
Component.defaultProps = {
  color: 'white'
}

export default Component
