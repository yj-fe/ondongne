import styled from 'styled-components'
import { FloatingDivMain } from 'pages/business/BusinessPage/BusinessPageStyle';
export const MainNavBody = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #F5F5F5;
  flex-direction: column;
  gap: 8px;
  padding-bottom: 56px;
`
export const Body = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* background: #F5F5F5; */
  gap: 8px;
  min-height: 100vh;
  height: auto;
  width: 100%;
`

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 728px;
  height: auto;
  padding: 0;

  > div {
    /* max-width: 728px; */
    width: 100%;

    @media only screen and (max-width: 728px) { 
      width: 100%;
    }
  }
`
export const Img = styled.img`
  margin-top: ${props => props._margint || '60px'};
  width: 100%;
  height: auto;  
`
export const Logo = styled.img`
  width: 72px;
  height: 32px;
`
export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 728px;
  height: 156px;
  padding: 20px;
  gap: 12px;
  
  > div {
    max-width: 728px;
    width: 100%;

    @media only screen and (max-width: 728px) { 
      width: 100vw;
    }
  }
`
export const FooterText = styled.div`
  font-weight: 500;
  font-size: 11px;
  line-height: 18px;
  color: #BDBDBD;
`
export const FooterStyle = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  z-index: 999
`