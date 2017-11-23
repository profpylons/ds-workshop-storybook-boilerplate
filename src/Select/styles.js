import styled from 'styled-components'


export const Select = styled.select`
  font-family: ${p => p.theme.fonts.primary};
  border-radius: ${p => p.theme.sizes.radius};
  padding: ${p => p.padding};
  position: relative;
  border: none;
  font-size: 14px;
  padding: 5px;
  width: 268px;
  background-color: rgba(211,211,211,0.15);
  background: url(https://sc5.io/wp-content/themes/sc5/dist/images/icons/icon-arrow-small.svg) no-repeat right center;

  appearance: none;
  padding: 1rem;
`



// .styled-select select {
//    background: transparent;
//    border: none;
//    font-size: 14px;
//    height: 29px;
//    padding: 5px;  If you add too much padding here, the options won't show in IE
//    width: 268px;
// }

// .styled-select.slate {
//    background: url(http://i62.tinypic.com/2e3ybe1.jpg) no-repeat right center;
//    height: 34px;
//    width: 240px;
// }

