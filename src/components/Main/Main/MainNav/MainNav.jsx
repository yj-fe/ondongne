import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import MainLogo from "assets/images/Logonew.png";
import { ReactComponent as News } from "assets/news.svg";
import { ReactComponent as Cart } from "assets/main/nav/cart.svg";
import { ReactComponent as Pin } from "assets/main/pin.svg";
import { ReactComponent as ArrowDown } from "assets/login/Arrow-Down.svg";

import { MainLocation, NavContainer, MainNavDiv, PinStyle, LocationText, ArrowStyle, LogoImg, Icon, NewsStyle, CartStyle, LogoBox } from './MainNavStyle'
import { useSelector } from 'react-redux';

function MainNav() {
  const navigate = useNavigate();
  const localState = useSelector(state => state.local);

  return (
    <MainNavDiv>
      <NavContainer>
        <MainLocation
          onClick={() => navigate('/member/location')}
        >
          <PinStyle>
            <Pin />
          </PinStyle>
          <LocationText>
            {localState.address}
          </LocationText>
          <ArrowStyle>
            <ArrowDown />
          </ArrowStyle>
        </MainLocation>

        <LogoBox>
          <LogoImg src={MainLogo} />
        </LogoBox>

        <Icon>
          <NewsStyle>
            <News />
          </NewsStyle>
          <CartStyle
            onClick={() => {
              navigate("cart");
            }}
          >
            <Cart />
          </CartStyle>
        </Icon>
      </NavContainer>
    </MainNavDiv>
  )
}

export default MainNav