import React, { useState, useEffect, useCallback } from 'react'

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
import CoachModalSlide from 'components/layout/PopUp/CoachModalSlide'

  // 다시보지않기
  import { useCookies } from 'react-cookie'; 
  import moment from 'moment';	
import PopUp from 'components/layout/PopUp/PopUp'

function MainPage() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [alert, setAlert] = useState(null);
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const auth = useSelector(state => state.auth);
  const [coachmark, setCoachmark] = useState(true);
  // 다시보지않기
  const COOKIE_COACH_KEY = 'coachNeverWatch'; 
  const COOKIE_POPUP_KEY = 'popupNeverWatch'; 
  const [cookiesCoach, setCookieCoach] = useCookies([COOKIE_COACH_KEY]);
  const [cookiesPopup, setCookiePopup] = useCookies([COOKIE_POPUP_KEY]);

  const [depth01, setDepth01] = useState(true)
  const [depth02, setDepth02] = useState(false)
  // const [depth03, setDepth03] = useState(false)

  // 뎁스 이동 핸들러
  const depthHandler = (type) => {
    switch (type) {
      case 1:
        setDepth01(false)
        setDepth02(true)
        break;
      case 2:
        setDepth02(false)
        // setDepth03(true)
        break;
    }
  }

  // 코치마크 닫으면 스크롤 가능
  const openScroll = useCallback(() => {
    document.body.style.removeProperty('overflow');
  }, []);

  
  // 다시보지않기
  const handleNeverWatchCoach = () => {
    const decade = moment(); 	
    decade.add(365, 'd'); 	
    setCookieCoach(COOKIE_COACH_KEY, 'true', {
      path: '/',	
      expires: decade.toDate(),	
    });
  };
  const handleNeverWatchPopup = () => {
    const decade2 = moment(); 	
    decade2.add(365, 'd'); 	
    setCookiePopup(COOKIE_POPUP_KEY, 'true', {
      path: '/',	
      expires: decade2.toDate(),	
    });
  };

  
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

  // 뒷배경 스크롤 막기
  // useEffect(() => {
  //   if (depth01 || depth02 === true) {
  //     document.body.style.overflow = 'hidden';
  //   }
  // }, [depth01, depth02])
  useEffect(() => {
    if (depth01  === true) {
      document.body.style.overflow = 'hidden';
    }
  }, [depth01])
  useEffect(() => {
    if ( depth02 === true) {
      document.body.style.overflow = 'hidden';
    }
  }, [depth02])

console.log(depth01);
console.log(depth02);

  return (
    <div>
      {/* { depth01 &&
       cookiesCoach[COOKIE_COACH_KEY] ? null : 
       <CoachModalSlide
         neverWatch={() => {handleNeverWatchCoach(); openScroll();}}
         depthHandler={() => depthHandler(1)}
        />
      }
      { depth02 &&
        cookiesPopup[COOKIE_POPUP_KEY] ? null : 
        <PopUp
          closeModel={() => {depthHandler(2); openScroll();}}
          neverWatch={() => {handleNeverWatchPopup(); openScroll();}}
          // depthHandler={() => depthHandler(2)}
        />
      } */}
      {/* {depth03 &&} */}
      {/* {
        cookiesCoach[COOKIE_COACH_KEY] ? null : 
        <CoachModalSlide
          neverWatch={() => {handleNeverWatchCoach(); openScroll(); setCookiePopup(true);}}
        />
      } */}
      {/* {
        cookiesPopup[COOKIE_POPUP_KEY] ? null : 
        <PopUp
          
          neverWatch={() => {setCookiePopup(false); handleNeverWatchPopup(); openScroll(); }}
        />
      } */}
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