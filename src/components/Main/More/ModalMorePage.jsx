import React from 'react'
import { ModalBody, ModalButton, ModalDiv1, ModalDiv2, ModalOutside, ModalTitle } from './ModalPageStyle'

function ModalPage({ PropsModal, report }) {
  return (
    <ModalOutside>
      <ModalBody>
        <ModalDiv1>더보기</ModalDiv1>
        <ModalDiv2>
          <ModalTitle>전화문의</ModalTitle>
          <ModalTitle onClick={report}>신고하기</ModalTitle>
          {/* <ModalTitle>채팅문의</ModalTitle> */}
          {/* <ModalTitle>공유하기</ModalTitle> */}
        </ModalDiv2>
        <ModalButton
          type="button"
          onClick={PropsModal}
        >
          닫기
        </ModalButton>
      </ModalBody>
    </ModalOutside>
  )
}

export default ModalPage

