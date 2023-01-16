import React, { useRef } from "react";
import PropTypes from 'prop-types'
import { useNavigate } from "react-router-dom";
import { ModalButton, ModalDiv1, ModalDiv3, ModalDiv4, ModalOutside, ModalShareBody, ModalTitle, ModalTitle2, TextArea } from 'components/Main/More/ModalPageStyle';
import * as L from 'components/commonUi/Layout';
import * as T from 'components/commonUi/Text';
import { Kakao } from './Icon';
import { ImgSizeLayout } from 'components/layout/Img/ImgSizeLayout';
import Link from 'assets/images/link.png'





const ModalShare= ({
  title='title',
  // desc1='desc1',
  // desc2='desc2',
  ShowShareModal,
  ...props
})=> {
  const navigate = useNavigate();
  //   const handleCloseClick = (e) => {
    //     e.preventDefault();
    //     if(props.onCloseClick) {
      //         props.onCloseClick();
      //     } else {
        //         navigate(props.backPath || -1);
        //     }
        // };
        

  const copyLinkRef = React.useRef()

const copyUrl = (e) => {
  if (!document.queryCommandSupported("copy")) {
  	return alert("복사 기능이 지원되지 않는 브라우저입니다.");
  }

  copyLinkRef.current.select();
  document.execCommand('copy');
  e.target.focus();
}
        



  return (
    <div>
      <ModalOutside>
        <ModalShareBody>
          <ModalDiv1>{title}</ModalDiv1>
            <ModalDiv4>
            {/* 링크복사 */}
              <ModalDiv3
                onClick={copyUrl} 
                // onClick={copyLinkUrl()}
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
    </div>
  )
}
ModalShare.propTypes = {
  title: PropTypes.string,
  // desc1: PropTypes.string,
  // desc2: PropTypes.string,
  onCloseClick: PropTypes.func,
}

export default ModalShare