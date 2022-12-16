import React from 'react'
import { useNavigate, useParams } from "react-router-dom";
import styled from 'styled-components'
import MainFooter from '../components/Main/MainFooter'
import MainNav from '../components/Main/MainNav'
import MainBanner from '../components/Main/MainBanner'
import MainCategory from '../components/Main/MainCategory'
import MainBestCoupon from '../components/Main/MainBestCoupon'
import MainLastChance from '../components/Main/MainLastChance'
import MainBestProduct from '../components/Main/MainBestProduct'
import MainNewMarket from '../components/Main/MainNewMarket'
import MainBestCollection from '../components/Main/MainBestCollection'
import BannerImg from '../assets/Img.png'
import FooterImg from '../assets/main/footerlogo.svg'


const MainNavBody = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #E0E0E0;
  flex-direction: column;
  gap: 8px;
  padding-bottom: 56px;
`
const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #6e6868;
  width: 728px;
  height: auto;
  padding: 0;

  > div {
    /* max-width: 728px; */
    width: 100%;

    @media only screen and (max-width: 728px) { 
      width: 100%;
    }
  }
`
const Img = styled.img`
  width: 100%;
  height: auto;  
`
const Logo = styled.img`
  width: 72px;
  height: 32px;
`
const Footer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 728px;
  height: 156px;
  padding: 20px;
  gap: 12px;
  
  > div {
    max-width: 728px;
    width: 100%;

    @media only screen and (max-width: 728px) { 
      width: 100vw;
    }
  }
`
const FooterText = styled.div`
  font-weight: 500;
  font-size: 11px;
  line-height: 18px;
  color: #BDBDBD;
`
const FooterStyle = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
`
function MainPage() {
  let navigate = useNavigate()
  return (
    <div>
      <MainNav />

      <MainNavBody
        onClick={() => {
          navigate("detail/:id")}}
      >


        <MainContainer>
          <Img src={BannerImg}></Img>
          {/* <MainBanner/> */}
          <MainCategory/>
        </MainContainer>


        <MainContainer>
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
        </MainContainer>

      <Footer>
        <Logo src={FooterImg}/>
        <FooterText>
          <span>(주)우리동네</span><br/>
          <span>대표자: 윤원규 / 사업자등록번호: 893-62-00579 / 통신판매신고: 김포마산-1234</span><br/>
          <span>주소: 경기도 김포시 김포한강8로 173-28 108동 103호 / 개인정보관리책임자: 홍길동</span><br/>
          <span>고객센터: 123-456-78912 / 이메일문의: example@email.com</span>
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