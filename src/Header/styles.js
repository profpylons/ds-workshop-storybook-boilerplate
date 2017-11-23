import styled, { css } from 'styled-components'
import { withColor, withSize } from 'styled-utils'

export const Header = styled.div`
  font-family: ${p => p.theme.fonts.primary};
  padding: ${p => p.padding};
  position: relative;

  ${withColor}
  ${withSize}
`
export const HeaderContainer = styled.div`
  height: 100px;
  margin: 0;
  padding: 50px 0;
  width: 100%;
`
export const Logo = styled.div`
  background: transparent url(https://sc5.io/wp-content/themes/sc5/dist/images/sc5logo-fill-red.svg) no-repeat;
  height: 35px;
  margin-left: 50px;
`