import React, { useRef, useState } from "react";
import PropTypes from 'prop-types'
import { useNavigate } from "react-router-dom";
import { ModalButton, ModalDiv1, ModalDiv3, ModalDiv4, ModalOutside, ModalShareBody, ModalTitle, ModalTitle2, TextArea } from 'components/Main/More/ModalPageStyle';
import * as L from 'components/commonUi/Layout';
import * as T from 'components/commonUi/Text';
import { Kakao } from './Icon';
import { ImgSizeLayout } from 'components/layout/Img/ImgSizeLayout';
import Link from 'assets/images/link.png'
import SimpleConfirm from "./SimpleConfirm";


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

  const KEY = process.env.REACT_APP_KAKAO_SDK
  console.log(KEY);
  const KaKaoShareButton = () => {
    if (window.Kakao) {
      const kakao = window.Kakao
      // 중복되는 초기화를 막기 위해 isInitialized()로 SDK 초기화 여부를 판단
      if (!kakao.isInitialized()) {
        kakao.init(KEY)
      }
      console.log(kakao.isInitialized());
      kakao.Share.sendDefault({
        objectType: 'feed',
        content: {
          title: '오늘의 디저트',
          description: '아메리카노, 빵, 케익',
          imageUrl:
            'https://mud-kage.kakao.com/dn/NTmhS/btqfEUdFAUf/FjKzkZsnoeE4o19klTOVI1/openlink_640x640s.jpg',
          link: {
            mobileWebUrl: 'https://developers.kakao.com',
            webUrl: 'https://developers.kakao.com',
          },
        },
        buttons: [
          {
            title: '웹으로 이동',
            link: {
              mobileWebUrl: 'https://developers.kakao.com',
              webUrl: 'https://developers.kakao.com',
            },
          },
          {
            title: '앱으로 이동',
            link: {
              mobileWebUrl: 'https://developers.kakao.com',
              webUrl: 'https://developers.kakao.com',
            },
          },
        ],
    });
    kakao.Share.sendCustom({
      // templateId: ${YOUR_TEMPLATE_ID},
      templateArgs: {
        title: '제목 영역입니다.',
        description: '설명 영역입니다.',
      },
    })
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
                onClick={KaKaoShareButton}
              >
                <div>
                  <Kakao/>
                </div>
                <T.Text _size={16} _width='100%' _align='center'>카카오톡</T.Text>
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