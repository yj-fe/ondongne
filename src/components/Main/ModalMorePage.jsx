import React, { useState } from 'react'
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";





const ModalOutside = styled.body`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
`
const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  bottom: 0;
  position: absolute;
`
const ModalDiv1 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 4px;
  gap: 4px;

  width: 728px;
  height: 44px;

  background: #FFFFFF;
  border-radius: 20px 20px 0px 0px;
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;

  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: #212121;
`
const ModalDiv2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;

  width: 728px;
  height: auto;
  background: #FFFFFF;
`
const ModalTitle = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #424242;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px 24px;
  gap: 4px;

  width: 728px;
  height: 56px;

  background: #FFFFFF;
  border-radius: 0px;
`
const ModalButton = styled.button`
  box-sizing: border-box;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px 20px;
  gap: 4px;

  width: 728px;
  height: 56px;
  background: #FFFFFF;
  border-top: 1px solid #EEEEEE;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #212121;
`




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
            <ModalTitle>공유하기</ModalTitle>
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