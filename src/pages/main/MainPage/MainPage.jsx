import React, { useEffect } from 'react'
import { useNavigate, useParams } from "react-router-dom";
import styled from 'styled-components'
import BannerImg from '../../../assets/Img.png'
import FooterImg from '../../../assets/main/footerlogo.svg'
import MainBestCoupon from '../../../components/Main/Main/MainBestCoupon/MainBestCoupon'
import MainLastChance from '../../../components/Main/Main/MainLastChance/MainLastChance'
import MainBestProduct from '../../../components/Main/Main/MainBestProduct/MainBestProduct'
import MainNewMarket from '../../../components/Main/Main/MainNewMarket/MainNewMarket'
import MainBestCollection from '../../../components/Main/Main/MainBestCollection/MainBestCollection'
import MainFooter from '../../../components/Main/Main/MainFooter/MainFooter'
import MainNav from '../../../components/Main/Main/MainNav/MainNav'
import {MainNavBody, MainContainer, Footer, Img, Logo, FooterStyle, FooterText} from './MainPageStyle'
import MainBanner from '../../../components/Main/Main/MainBanner/MainBanner';
import MainCategory from '../../../components/Main/Main/MainCategory/MainCategory';
import MainProductTest from '../../../components/Main/Main/MainProductTest/MainProductTest';

function MainPage() {
  const navigate = useNavigate()

  return (
    <div>
      <MainNav />

      <MainNavBody
        // onClick={() => {
        //   navigate("detail/:id")}}
      >
        <MainContainer>
          <Img src={BannerImg}></Img>
          {/* <MainBanner/> */}
          <MainCategory/>
        </MainContainer>


        <MainContainer>
          <MainProductTest/>
        </MainContainer>


        {/* <MainContainer>
          <MainBestCoupon/>
        </MainContainer>


        <MainContainer>
          <MainLastChance/>
        </MainContainer>


        <MainContainer>
          <MainBestProduct/>
        </MainContainer>


        <MainContainer>
          <MainNewMarket/>
        </MainContainer>

        <MainContainer>
          <MainBestCollection/>
        </MainContainer> */}

      <Footer>
        <Logo  src={FooterImg}/>
        <FooterText>
          <span>하이퍼로컬리티</span><br/>
          {/* <span>대표자: 윤원규 / 사업자등록번호: 893-62-00579 / 통신판매신고: 김포마산-1234</span><br/> */}
          <span>대표자: 윤원규 / 사업자등록번호: 893-62-00579</span><br/>
          <span>주소: 경기도 김포시 김포한강8로 173-28 108동 103호 / 개인정보관리책임자: 윤원규</span><br/>
          <span>고객센터: 010-2481-2002 / 이메일문의: pay.hyperlocality@gmail.com</span>
        </FooterText>
      </Footer>
      </MainNavBody>



      <FooterStyle>

      <MainFooter/>
      </FooterStyle>
    </div>
  )
}

export default MainPage