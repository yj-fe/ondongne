import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ReactComponent as News } from "assets/news.svg";
import { ReactComponent as Cart } from "assets/main/nav/cart.svg";
import { ReactComponent as Pin } from "assets/main/pin.svg";
import { ReactComponent as ArrowDown } from "assets/login/Arrow-Down.svg";

import { MainLocation, NavContainer, MainNavDiv, PinStyle, LocationText, ArrowStyle, LogoImg, Icon, NewsStyle, CartStyle, LogoBox } from './MainNavStyle'
import { useSelector } from 'react-redux';
import { Logo } from 'components/commonUi/Icon';

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
          <Logo/>
        </LogoBox>

        <Icon>
          {/* 일반알림 */}
            <NewsStyle
              onClick={() => {
                navigate("member/news");
              }}>
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