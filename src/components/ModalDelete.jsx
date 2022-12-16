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
  align-items: center;
  padding: 28px 24px;
  gap: 32px;

  position: absolute;
  width: 350px;
  height: 216px;
  left: 785px;
  top: 432px;

  background: #FFFFFF;
  border-radius: 20px;
`
const TextDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 12px;
  width: 302px;
  height: 24px;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #212121;
`
const ButtonDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 8px;
  width: 302px;
  height: 104px;
`
const ButtonDelete = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 8px 4px;
  gap: 4px;
  width: 302px;
  height: 48px;
  background: #D32F2F;
  border-radius: 4px;
  font-weight: 600;
  font-size: 16px;
  text-align: center;
  color: #FFFFFF;

`
const ButtonClose = styled.button`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 8px 4px;
  gap: 4px;
  width: 302px;
  height: 48px;
  background: #FFFFFF;
  border: 1px solid #EEEEEE;
  border-radius: 4px;
  font-weight: 600;
  font-size: 16px;
  text-align: center;
  color: #212121;
`




function ModalDelete({PropsModal}) {
  const navigate = useNavigate();

  return (
    <div>
      <ModalOutside>
        <ModalBody>
          <TextDiv>상품을 장바구니에서 삭제하시겠습니까?</TextDiv>
          <ButtonDiv>
            <ButtonDelete
              type="button"
              onClick={PropsModal}
            >
            삭제
            </ButtonDelete>

            <ButtonClose
              type="button"
              onClick={PropsModal}
            >
            취소
            </ButtonClose>
          </ButtonDiv>
        </ModalBody>
      </ModalOutside>
    </div>
  )
}

export default ModalDelete