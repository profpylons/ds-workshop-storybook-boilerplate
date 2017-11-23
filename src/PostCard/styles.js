import styled, { css } from 'styled-components'
import { withColor, withSize } from 'styled-utils'


export const PostCard = styled.div`
  position: relative;
  box-sizing: border-box;
  border: 1px solid ${p => p.theme.palettes.gray[2]};
  flex: 1 1 50%;
  max-width: 50%;
  @media screen and (min-width: 40rem) {
    max-width: 33%;
  }

  display: flex;
  flex-direction: column;
`
