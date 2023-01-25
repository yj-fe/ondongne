import React, { useState, useEffect } from 'react'
import BannerImg from 'assets/Img.png'
import MainBestCoupon from 'components/Main/Main/MainBestCoupon/MainBestCoupon'
import MainLastChance from 'components/Main/Main/MainLastChance/MainLastChance'
import MainBestProduct from 'components/Main/Main/MainBestProduct/MainBestProduct'
import MainNewMarket from 'components/Main/Main/MainNewMarket/MainNewMarket'
import MainBestCollection from 'components/Main/Main/MainBestCollection/MainBestCollection'
import MainFooter from 'components/Main/Main/MainFooter/MainFooter'
import { Img, FooterStyle } from './MainPageStyle'
import MainCategory from 'components/Main/Main/MainCategory/MainCategory';
import FooterLayout from 'components/layout/Footer/Footer';
import * as L from 'components/commonUi/Layout';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import Alert from 'components/commonUi/Alert'
import { useNavigate } from 'react-router-dom';
import LayoutMain from 'components/layout/Layout/LayoutMain'



function MainPage() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [alert, setAlert] = useState(null);
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const auth = useSelector(state => state.auth);

  useEffect(() => {
    if (state && state.error) {
      return setAlert({
        contents: state.error,
        buttonText: "확인",
        onButtonClick: () => {
          setAlert(false);
          navigate("/");
        },
        onOverlayClick: () => {
          setAlert(false);
          navigate("/");
        },
      });
    }
  }, [state])



  return (
    <div>
      <LayoutMain>
        <L.Container _padding="0px" >
          <L.Container _padding="0px" _gap='0px' >
            <Img _margint='0px' src={BannerImg}></Img>
            <MainCategory />
          </L.Container>

          {/* 우리동네 인기 쿠폰 */}
          {/* <L.Contents _padding='20px 0px 20px 20px'>
              <MainBestCoupon />
            </L.Contents> */}

          {/* 공동구매 마지막 찬스 */}
          <L.Contents _padding='20px 0px 20px 20px'>
            <MainLastChance />
          </L.Contents>


          {/* My단골 인기 상품 */}
          {
            isAuthenticated &&
            <MainBestProduct />
          }

          {/* 우리동네 신규 입점 */}
          <L.Contents _padding='20px 0px 20px 20px'>
            <MainNewMarket />
          </L.Contents>

          {/* 우리동네 인기 추천 */}
          <L.Contents _padding='20px 0px 20px 20px'>
            <MainBestCollection />
          </L.Contents>


          <L.Inner>
            <FooterLayout />
            <L.FlexRows _padding='0px 0px 60px 0px'>
            </L.FlexRows>
          </L.Inner>
        </L.Container>
        <FooterStyle>
          <MainFooter />
        </FooterStyle>
      </LayoutMain>

      {alert && (
        <Alert
          title={alert.title}
          contents={alert.contents}
          buttonText={alert.buttonText}
          onButtonClick={alert.onButtonClick}
          onOverlayClick={alert.onOverlayClick}
        />
      )}
    </div>
  )
}


export default MainPage