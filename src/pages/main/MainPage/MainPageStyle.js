import styled from 'styled-components'
export const Img = styled.img`
  margin-top: ${props => props._margint || '60px'};
  width: 100%;
  height: auto;  
`
export const FooterStyle = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  z-index: 999
`