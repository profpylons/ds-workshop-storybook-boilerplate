import styled, { css } from 'styled-components'

const hasBorder = ({ hasBorder }) => {
  if (!hasBorder) return
  return css`
    border: 10px solid red;
  `
}
export const Image = styled.div`
  ${hasBorder}
  position: absolute;
  min-height: 100%;
  min-width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export const Wrapper = styled.div`
  padding-top: ${ 9/16 * 100}%;
  position: relative;
  overflow: hidden;
`