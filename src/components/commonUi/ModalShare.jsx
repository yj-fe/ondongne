import React, { useEffect, useRef, useState } from "react";
import PropTypes from 'prop-types'
import { useNavigate } from "react-router-dom";
import { ModalButton, ModalDiv1, ModalDiv3, ModalDiv4, ModalOutside, ModalShareBody, ModalTitle, ModalTitle2, TextArea } from 'components/Main/More/ModalPageStyle';
import * as L from 'components/commonUi/Layout';
import * as T from 'components/commonUi/Text';
import { Kakao } from './Icon';
import { ImgSizeLayout } from 'components/layout/Img/ImgSizeLayout';
import Link from 'assets/images/link.png'
import SimpleConfirm from "./SimpleConfirm";
// import { Helmet } from 'react-helmet'

const ModalShare= ({
  title='title',
  ShowShareModal,
  ...props
})=> {
  const navigate = useNavigate();
        

  
  // 링크복사하기
  const copyLinkRef = React.useRef()
  const copyLinkUrl = (e) => {
    if (!document.queryCommandSupported("copy")) {
      return alert("복사 기능이 지원되지 않는 브라우저입니다.");
    }
    else{
      copyLinkRef.current.select();
      document.execCommand('copy');
      e.target.focus();
      openAlert(true)
    }
  }
  // 링크 성공 Alert        
  const [alert, setAlert] = useState('')
  const openAlert = () => {
    return setAlert({
      contents: "링크가 복사되었습니다.",
      buttonText: "확인",
      onConfirmClick: () => setAlert(null),
    })
  }
// kakao공유
  const params = {
    key: process.env.REACT_APP_KAKAO_SDK,
    id: process.env.YOUR_TEMPLATE_ID
  }
//   const KAKAO_KEY = process.env.REACT_APP_KAKAO_SDK
// Kakao.init(KAKAO_KEY)
  // const useKakaoSDK = () => {
  //   useEffect(() => {
  //     if (typeof window !== 'undefined' && !window.KakaoLoaded) {
  //       window.KakaoLoaded = true;
  //       const script = document.createElement('script');
  //       script.src = '//developers.kakao.com/sdk/js/kakao.min.js';
  // script.onload = () => {
  // window.Kakao.init(params.key);
  // };
  // document.head.appendChild(script);
  // }
  // }, []);
  // };
  // const KEY = process.env.REACT_APP_KAKAO_SDK
  // console.log(KEY);

  // Kakao.init('fdc50dd3a91aebdea8c00271a6e1f5a3');

  // SDK 초기화 판단
  // console.log(Kakao.isInitialized());
  const KaKaoShareButton = () => {
    if (window.Kakao) {
      const kakao = window.Kakao
      // 중복 초기화를 막기 위해 isInitialized()로 SDK 초기화 여부를 판단
      if (!kakao.isInitialized()) {
        // kakao.init(params.key)
        kakao.init('fdc50dd3a91aebdea8c00271a6e1f5a3')
      }
      console.log(kakao.isInitialized());
      kakao.Share.sendDefault({
        objectType: 'feed',
        content: {
          title: 'title',
          description: 'description',
          imageUrl:
          'http://k.kakaocdn.net/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png',
          link: {
          // [플랫폼] 에서 등록한 사이트 도메인과 일치해야 함
            mobileWebUrl: 'https://ondongnemarket.com',
            webUrl: 'https://ondongnemarket.com',
          },
        },
        buttons: [
          {
            title: '자세히보기',
            link: {
              mobileWebUrl: 'https://ondongnemarket.com',
              webUrl: 'https://ondongnemarket.com',
            },
          },
        ],
        // installTalk: true,
    });
  }
}
  
  return (
    <div>
      <ModalOutside>
        <ModalShareBody>
          <ModalDiv1>{title}</ModalDiv1>
            <ModalDiv4>
            {/* 링크복사 */}
              <ModalDiv3
                onClick={copyLinkUrl} 
              >
                <form>
                  <TextArea
                    ref={copyLinkRef}
                    value={window.location.href}
                  />
                </form>
                <div>
                  <ImgSizeLayout _width={52} _height={52} src={Link}/>
                </div>
                <T.Text _size={16} _width='100%' _align='center'>링크복사</T.Text>
              </ModalDiv3>
            {/* 카카오톡 공유 */}
              <ModalDiv3
              >
                <button
                type="button"
                onClick={KaKaoShareButton}
                // onClick={() => KaKaoShareButton()}
                >

                
                      {/* <Helmet>
        <script src="https://developers.kakao.com/sdk/js/kakao.js"></script>
      </Helmet> */}
                <div>
                  <Kakao/>
                  {/* <img src={`${process.env.PUBLIC_URL}/assets/KakaoLogo.png`} alt={"Kakao Logo"} /> */}
                  {/* {
                    window.kakao.Share.sendDefault({
                    objectType: 'feed',
                    content: {
                    title,
                    // description,
                    // imageUrl,
                    // imageWidth: SHARE_KAKAO_OG_WIDTH,
                    // imageHeight: SHARE_KAKAO_OG_HEIGHT,
                    link: {
                    webUrl: '…',
                    mobileWebUrl: '…',
                    },
                    },
                    })
                    } */}
                </div>
                <T.Text _size={16} _width='100%' _align='center'>카카오톡</T.Text>
                </button>
              </ModalDiv3>
            </ModalDiv4>
          <ModalButton
            type="button"
            onClick={ShowShareModal}  
          >
          닫기
          </ModalButton>
        </ModalShareBody>
      </ModalOutside>
      {
        alert &&
        <SimpleConfirm
          contents={alert.contents}
          onConfirmClick={alert.onConfirmClick}
        />
      }
    </div>
  )
}
ModalShare.propTypes = {
  title: PropTypes.string,
  onCloseClick: PropTypes.func,
}

export default ModalShare