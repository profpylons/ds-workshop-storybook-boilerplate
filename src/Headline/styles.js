import styled, { css } from 'styled-components'

export const Headline = styled.div`
    font-size: ${p => p.theme.sizes.font.large};
    color: ${p => p.theme.palettes.black[0]};
    padding: 0.6rem;
    flex: 1 1 auto;
`;