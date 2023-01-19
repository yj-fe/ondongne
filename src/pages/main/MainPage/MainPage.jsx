import React, { useState, useEffect } from 'react'
import BannerImg from 'assets/Img.png'
import MainBestCoupon from 'components/Main/Main/MainBestCoupon/MainBestCoupon'
import MainLastChance from 'components/Main/Main/MainLastChance/MainLastChance'
import MainBestProduct from 'components/Main/Main/MainBestProduct/MainBestProduct'
import MainNewMarket from 'components/Main/Main/MainNewMarket/MainNewMarket'
import MainBestCollection from 'components/Main/Main/MainBestCollection/MainBestCollection'
import MainFooter from 'components/Main/Main/MainFooter/MainFooter'
import {  Img, FooterStyle } from './MainPageStyle'
import MainCategory from 'components/Main/Main/MainCategory/MainCategory';
import FooterLayout from 'components/layout/Footer/Footer';
import * as L from 'components/commonUi/Layout';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import Alert from 'components/commonUi/Alert'
import { useNavigate } from 'react-router-dom';
import { FloatingContentDiv, FloatingContentTitle, FloatingDivMain, FloatingToggleDiv } from 'pages/business/BusinessPage/BusinessPageStyle'
import { Coupon, Floating, FloatingPush, Order, Product } from 'components/commonUi/Icon'
import { ReactComponent as Trans } from "assets/icons/business/Trans.svg";
import { getBizMember } from 'service/biz';
import LayoutMain from 'components/layout/Layout/LayoutMain'



function MainPage() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [alert, setAlert] = useState(null);
  const [floating, setFloating] = useState(false)
  const [biz, setBiz] = useState(false)
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

  // 비즈 회원 체크
  const bizMember = async () => {
    const response = await getBizMember();
    const { data } = response.data;
    if (data.bizStatus){
      setBiz(true)
    }
    // console.log(biz);
    // console.log(data.bizStatus);
  }
  useEffect(() => {
    if (auth.isAuthenticated) bizMember()
  }, [auth])


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
            </L.Inner>
        {
          biz && 
              <FloatingDivMain
                onClick={() => setFloating(!floating)}
              >
                {floating && <FloatingToggle />}
                {floating ? <FloatingPush /> : <Floating />}
              </FloatingDivMain>
        }
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

export function FloatingToggle(props) {
  return (
    <div>
      <FloatingToggleDiv>
        <FloatingContentDiv>
          <Product />
          <Link to="/business/upload">
            <FloatingContentTitle>상품 등록</FloatingContentTitle>
          </Link>
        </FloatingContentDiv>
        {/* <FloatingContentDiv>
          <Order />
          <Link to="/business/coupon">
          <FloatingContentTitle>소식 등록</FloatingContentTitle>
          </Link>
        </FloatingContentDiv>
        <FloatingContentDiv>
          <Coupon />
          <Link to="/business/coupon">
            <FloatingContentTitle>쿠폰 등록</FloatingContentTitle>
          </Link>
        </FloatingContentDiv> */}
        <FloatingContentDiv>
          <Trans />
          <Link to="/business">
            <FloatingContentTitle>
              비즈 전환
            </FloatingContentTitle>
          </Link>
        </FloatingContentDiv>
      </FloatingToggleDiv>
    </div>
  )
}

export default MainPage