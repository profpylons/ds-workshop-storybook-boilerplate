import styled, { css } from 'styled-components'
import { withColor, withSize } from 'styled-utils'

export const Header = styled.div`
  font-family: ${p => p.theme.fonts.primary};
  border-radius: ${p => p.theme.sizes.radius};
  box-shadow: ${p => p.theme.shadows.normal};
  padding: ${p => p.padding};
  position: relative;

  &:not(:last-child) {
    margin-bottom: 0.6rem;
  }

  ${withColor}
  ${withSize}
`
export const HeaderContainer = styled.div`
  height: 200px;
  margin: 0;
  padding: 50px;
  width: 100%;
`
export const Logo = styled.div`
  background: transparent url(https://sc5.io/wp-content/themes/sc5/dist/images/sc5logo-fill-red.svg) no-repeat;
  height: 20px;
`