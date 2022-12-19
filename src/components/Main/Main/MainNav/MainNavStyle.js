import styled from 'styled-components'
export const MainNavDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  position: fixed;
  z-index: 30;
  height: 60px;
  left: 0px;
  right: 0px;
  top: 0px;
  background: #FFFFFF;
  border-bottom: 1px solid #EEEEEE;

  @media only screen and (max-width: 728px) {
    width: 100%;
  } 
`
export const NavContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  @media only screen and (max-width: 728px) {
    left: auto;
  } 
`
export const MainLocation = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-items: center;
  flex-direction: row;
  width: 220px;
  height: 20px;
  left: 32%;
  gap: 2px;
  
  @media only screen and (max-width: 800px) {
    left: 5%;
  } 
`
export const PinStyle = styled.div`
  width: 20px;
  height: 20px;
`
export const LocationText = styled.p`
  font-weight: 500;
  font-size: 15px;
  color: #424242;
  margin-right: 2px;
`
export const ArrowStyle = styled.div`
  width: 20px;
  height: 20px;
  margin-bottom: 5px;
`
export const LogoImg = styled.img`
  width: 72px;
  height: 32px;
  display: flex;
  justify-content: center;
  justify-items: center;
  align-items: center;

  @media only screen and (max-width: 1100px) {
    display: none;
  } 
`;
export const Icon = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-items: center;
  flex-direction: row;
  right: 32%;
  gap: 20px;
  padding-top: 7px;
  @media only screen and (max-width: 800px) {
    right: 5%;
  } 
`
export const NewsStyle = styled.svg`
  width: 24px;
  height: 24px;
`
export const CartStyle = styled.svg`
  width: 24px;
  height: 24px;
`