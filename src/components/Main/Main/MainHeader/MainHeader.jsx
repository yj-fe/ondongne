import React from 'react'
import { ReactComponent as Arrow } from "assets/Arrow.svg";
import { ReactComponent as News } from "assets/news.svg";
import { ReactComponent as Cart } from "assets/main/nav/cart.svg";
import { Link, useNavigate } from 'react-router-dom'

import { MainHeaderDiv, LoginNavDiv, TitleStyle, BackStyle, LoginNavTitle, IconStyle, NewsStyle, CartStyle, } from './MainHeaderStyle'

function MainHeader({ title }) {
  const navigate = useNavigate()

  return (
    <MainHeaderDiv>
      <LoginNavDiv>
        <TitleStyle>
          <BackStyle onClick={() => { navigate(-1) }}>
            <Arrow />
          </BackStyle>
          <LoginNavTitle>{title}</LoginNavTitle>
        </TitleStyle>

        <IconStyle>
          <NewsStyle>
            <News />
          </NewsStyle>
          <Link to="/cart" >
            <CartStyle>
              <Cart />
            </CartStyle>
          </Link>
        </IconStyle>
      </LoginNavDiv>
    </MainHeaderDiv>
  )
}

export default MainHeader

