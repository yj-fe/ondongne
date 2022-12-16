import React from 'react'
import {useNavigate} from 'react-router-dom'
import styled from 'styled-components'
import MainLogo from "../../assets/logos.png";
import { ReactComponent as News } from "../../assets/news.svg";
import { ReactComponent as Cart } from "../../assets/main/nav/cart.svg";
import { ReactComponent as Pin } from "../../assets/pin.svg";
import { ReactComponent as ArrowDown } from "../../assets/Arrow-Down.svg";

const MainNavDiv = styled.div`
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
const NavContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  @media only screen and (max-width: 728px) {
    left: auto;
  } 
`
const MainLocation = styled.div`
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
const PinStyle = styled.div`
  width: 20px;
  height: 20px;
`
const LocationText = styled.p`
  font-weight: 500;
  font-size: 15px;
  color: #424242;
  margin-right: 2px;
`
const ArrowStyle = styled.div`
  width: 20px;
  height: 20px;
  margin-bottom: 5px;
`
const LogoImg = styled.img`
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
const Icon = styled.div`
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
const NewsStyle = styled.svg`
  width: 24px;
  height: 24px;
`
const CartStyle = styled.svg`
  width: 24px;
  height: 24px;
`

function MainNav() {
  const navigate = useNavigate()

  return (
    <MainNavDiv>
      <NavContainer>
      <MainLocation>
        <PinStyle>
          <Pin/>
        </PinStyle>
        <LocationText>서울특별시 가양동</LocationText>
        <ArrowStyle>
          <ArrowDown/>
        </ArrowStyle>
      </MainLocation>

      <LogoImg src={MainLogo} />

      <Icon>
        <NewsStyle>
        <News/>
        </NewsStyle>
        <CartStyle
          onClick={() => {
            navigate("cart");
          }}
        >
          <Cart/>
        </CartStyle>
      </Icon>
      </NavContainer>
    </MainNavDiv>
  )
}

export default MainNav