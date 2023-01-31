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
  itemName='itemName',
  description='description',
  title='',
  img='',
  // itemtitle,
  // description= '',
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
    
// kakao공유
  const KaKaoShareButton = () => {
    if (window.Kakao) {
      const kakao = window.Kakao
      // 중복 초기화를 막기 위해 isInitialized()로 SDK 초기화 여부를 판단
      if (!kakao.isInitialized()) {
        // kakao.init(params.key)
        kakao.init('fdc50dd3a91aebdea8c00271a6e1f5a3')
      }
      // console.log(kakao.isInitialized());
      kakao.Share.createDefaultButton({
        container: '#kakao-sharing',
        objectType: 'feed',
        content: {
          title: itemName,
          description: description,
          imageUrl: img,
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
        installTalk: true,
    });
  }
}
  
  return (
    <div>
      <ModalOutside
      onClick={ShowShareModal}  
      >
        <ModalShareBody>
          <ModalDiv1>공유하기</ModalDiv1>
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
                  id="kakao-sharing"
                  onClick={() => KaKaoShareButton({itemName, description, img})}
                >
                  <div>
                    <Kakao/>
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