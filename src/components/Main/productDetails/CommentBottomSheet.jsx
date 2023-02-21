import React, { useState } from 'react'
import styled from "styled-components";

function CommentBottomSheet({ active, closeModal, update, remove, isMe, report }) {

  if (active) {

    return (
      <ModalOutside>
        <ModalBody>
          <ModalDiv1>더보기</ModalDiv1>
          <ModalDiv2>
            {
              isMe &&
              <>
                <ModalTitle onClick={() => {
                  update();
                  closeModal();
                }}>
                  수정하기
                </ModalTitle>
                <ModalTitle
                  onClick={remove}
                >
                  삭제하기
                </ModalTitle>
              </>
            }
            <ModalTitle onClick={report}>신고하기</ModalTitle>
          </ModalDiv2>
          <ModalButton
            type="button"
            onClick={closeModal}
          >
            닫기
          </ModalButton>
        </ModalBody>
      </ModalOutside>
    )
  }
}

const ModalOutside = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  z-index: 9999;
`
const ModalBody = styled.div`
  left: 50%;
  width: 100%;
  max-width: ${props => props.theme.breakpoint.tablet}px;
  transform: translateX(-50%);
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

  height: auto;

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
  height: auto;
  background: #FFFFFF;
  width: 728px;
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

  width: 100%;
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

  width: 100%;
  height: 56px;
  background: #FFFFFF;
  border-top: 1px solid #EEEEEE;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #212121;
`

export default CommentBottomSheet