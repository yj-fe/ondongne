import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ReactComponent as News } from "assets/news.svg";
import { ReactComponent as Cart } from "assets/main/nav/cart.svg";
import { ReactComponent as Pin } from "assets/main/pin.svg";
import { ReactComponent as ArrowDown } from "assets/login/Arrow-Down.svg";

import { MainLocation, NavContainer, MainNavDiv, PinStyle, LocationText, ArrowStyle, LogoImg, Icon, NewsStyle, CartStyle, LogoBox } from './MainNavStyle'
import { useSelector } from 'react-redux';
import { Logo } from 'components/commonUi/Icon';
import { ShepherdBox } from 'components/commonUi/Box';

function MainNav() {
  const navigate = useNavigate();
  const localState = useSelector(state => state.local);

  return (
    <MainNavDiv>
      <NavContainer _paddingmedia='0px'>
        <MainLocation
          onClick={() => navigate('/member/location')}
          >
          <ShepherdBox 
            className="shepherd-first"
            _display='flex' _gap='2px' _pdlef='0px' _height='44px'
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
          </ShepherdBox>
        </MainLocation>

        <LogoBox>
          <Logo/>
        </LogoBox>

        <Icon
        >
          <ShepherdBox 
            className="shepherd-second"
            _display='flex' _gap='20px' _pdlef='0px' _height='44px' _mbottom='6px'
          >
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
          </ShepherdBox>
        </Icon>
      </NavContainer>
    </MainNavDiv>
  )
}

export default MainNav