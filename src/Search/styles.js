import styled, { css } from 'styled-components'
import {
  withSize,
  withColor
} from 'styled-utils'

const hasBorder = ({ hasBorder }) => {
  if (!hasBorder) return
  return css`
    border: 1px solid black;
  `
}

const icon = ({ icon }) => {
  if (!icon) return
  return `
    background: url(${icon}) no-repeat 2px 2px;
    padding-left:30px;
  `
}

export const Search = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  height: 2.5em;
  line-height: 1.5;

  ${withSize}
  ${withColor}
  ${hasBorder}
  ${icon}
`
