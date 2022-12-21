import React from 'react'
import {useNavigate} from 'react-router-dom'
import MainLogo from "../../../../assets/images/Logonew.png";
import { ReactComponent as News } from "../../../../assets/news.svg";
import { ReactComponent as Cart } from "../../../../assets/main/nav/cart.svg";
import { ReactComponent as Pin } from "../../../../assets/main/pin.svg";
import { ReactComponent as ArrowDown } from "../../../../assets/login/Arrow-Down.svg";

import {MainLocation,NavContainer,MainNavDiv,PinStyle,LocationText,ArrowStyle,LogoImg,Icon,NewsStyle,CartStyle} from './MainNavStyle'

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