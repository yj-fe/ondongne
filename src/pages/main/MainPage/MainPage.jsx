import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import BannerImg from 'assets/Img.png'
import MainBestCoupon from 'components/Main/Main/MainBestCoupon/MainBestCoupon'
import MainLastChance from 'components/Main/Main/MainLastChance/MainLastChance'
import MainBestProduct from 'components/Main/Main/MainBestProduct/MainBestProduct'
import MainNewMarket from 'components/Main/Main/MainNewMarket/MainNewMarket'
import MainBestCollection from 'components/Main/Main/MainBestCollection/MainBestCollection'
import MainFooter from 'components/Main/Main/MainFooter/MainFooter'
import MainNav from 'components/Main/Main/MainNav/MainNav'
import { MainNavBody, MainContainer, Img, Logo, FooterStyle } from './MainPageStyle'
import MainBanner from 'components/Main/Main/MainBanner/MainBanner';
import MainCategory from 'components/Main/Main/MainCategory/MainCategory';
import MainProductTest from 'components/Main/Main/MainProductTest/MainProductTest';
import FooterLayout from 'components/layout/Footer/Footer';
import * as L from 'components/commonUi/Layout';
import { useSelector } from 'react-redux';


function MainPage() {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
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

          <MainCategory />
        </MainContainer>


        <L.Inner>
          <L.Contents _padding='20px 0px 20px 20px'>
            <MainProductTest />
          </L.Contents>
        </L.Inner>

        {/* 우리동네 인기 쿠폰 */}
        {/* <L.Inner>
          <L.Contents _padding='20px 0px 20px 20px'>
            <MainBestCoupon />
          </L.Contents>
        </L.Inner> */}

        {/* 공동구매 마지막 찬스 */}
        <L.Inner>
          <L.Contents _padding='20px 0px 20px 20px'>
            <MainLastChance />
          </L.Contents>
        </L.Inner>

        {/* My단골 인기 상품 */}
        {
          isAuthenticated &&
          <L.Inner>
            <L.Contents _padding='20px 0px 20px 20px'>
              <MainBestProduct />
            </L.Contents>
          </L.Inner>
        }

        {/* 우리동네 신규 입점 */}
        <L.Inner>
          <L.Contents _padding='20px 0px 20px 20px'>
            <MainNewMarket />
          </L.Contents>
        </L.Inner>

        {/* 우리동네 인기 추천 */}
        <L.Inner>
          <L.Contents _padding='20px 0px 20px 20px'>
            <MainBestCollection />
          </L.Contents>
        </L.Inner>

        <L.Inner>
          <FooterLayout />
        </L.Inner>

      </MainNavBody>


      <FooterStyle>
        <MainFooter />
      </FooterStyle>
    </div>
  )
}

export default MainPage