import React, { useState } from 'react'
import { useNavigate, useParams } from "react-router-dom";

import {ModalBody,TextDiv,ButtonClose,ButtonDelete,ButtonDiv,ModalOutside} from './ModalDeleteStyle'


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