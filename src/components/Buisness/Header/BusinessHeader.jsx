import React from 'react'
import MainLogo from "../../../assets/images/Logonew.png";
import { ReactComponent as News } from "../../../assets/news.svg";

import {NavContainer,MainNavDiv,LogoImg,Icon,NewsStyle} from '../../Main/Main/MainNav/MainNavStyle'

function BusinessHeader() {

  return (
    <MainNavDiv>
      <NavContainer>

      <LogoImg src={MainLogo} />

      <Icon>
        <NewsStyle>
        <News/>
        </NewsStyle>
      </Icon>
      </NavContainer>
    </MainNavDiv>
  )
}

export default BusinessHeader