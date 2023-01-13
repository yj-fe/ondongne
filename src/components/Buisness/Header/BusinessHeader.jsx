import React from 'react'
import { ReactComponent as News } from "assets/news.svg";

import {NavContainer,MainNavDiv,LogoImg,Icon,NewsStyle, ImgLogoBox} from 'components/Main/Main/MainNav/MainNavStyle'
import { Link } from 'react-router-dom';
import { Logo } from 'components/commonUi/Icon';

function BusinessHeader() {

  return (
    <MainNavDiv>
      <NavContainer>

        
      <ImgLogoBox>
        <Logo/>
      </ImgLogoBox>

        <Link to='/business/news'>
          <NewsStyle>
            <News/>
          </NewsStyle>
        </Link>
      </NavContainer>
    </MainNavDiv>
  )
}

export default BusinessHeader