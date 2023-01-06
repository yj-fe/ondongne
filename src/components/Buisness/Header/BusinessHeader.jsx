import React from 'react'
import MainLogo from "assets/images/Logonew.png";
import { ReactComponent as News } from "assets/news.svg";

import {NavContainer,MainNavDiv,LogoImg,Icon,NewsStyle, ImgLogoBox} from 'components/Main/Main/MainNav/MainNavStyle'
import { Link } from 'react-router-dom';

function BusinessHeader() {

  return (
    <MainNavDiv>
      <NavContainer>

        
      <ImgLogoBox>
        <LogoImg src={MainLogo} />
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