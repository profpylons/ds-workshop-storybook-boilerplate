import styled, { css } from 'styled-components'
import { withColor, withSize } from 'styled-utils'

export const Navigation = styled.div`
  float: right;

  ${withColor}
  ${withSize}
`
export const NavigationItem = styled.div`
float: left;
margin-right: 20px;

${withColor}
${withSize}
`