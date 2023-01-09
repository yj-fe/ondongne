import React, { useState } from 'react'
import { useNavigate, useParams } from "react-router-dom";

import {ModalBody,ModalButton,ModalDiv1,ModalDiv2,ModalOutside,ModalTitle} from './ModalPageStyle'



function ModalPage({PropsModal}) {
  const navigate = useNavigate();

  return (
    <div>
      <ModalOutside>
        <ModalBody>
          <ModalDiv1>더보기</ModalDiv1>
          <ModalDiv2>
            {/* <ModalTitle>채팅문의</ModalTitle> */}
            <ModalTitle>전화문의</ModalTitle>
            {/* <ModalTitle>공유하기</ModalTitle> */}
            {/* <ModalTitle>신고하기</ModalTitle> */}
          </ModalDiv2>
          <ModalButton
            type="button"
            onClick={PropsModal}
          >
          닫기
          </ModalButton>
        </ModalBody>
      </ModalOutside>
    </div>
  )
}

export default ModalPage