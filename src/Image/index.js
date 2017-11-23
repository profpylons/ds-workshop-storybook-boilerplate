import React from 'react'
import cx from 'classnames'
import * as s from './styles'

const Component = ({ src, alt, ...props }) => {
  const className = cx('image__element', props.className)
  const classNameContainer = cx('image', props.className)
  const Element = s.Image.withComponent('img')

  return (
    <s.Wrapper className={classNameContainer}>
      <Element {...props} src={src} alt={alt} className={className} />
    </s.Wrapper>
  )
}

Component.displayName = 'Image'
Component.defaultProps = {
}

export default Component
