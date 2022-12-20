import React, { useState } from 'react'
import { useNavigate, useParams } from "react-router-dom";

import {ModalBody,TextDiv,ButtonClose,ButtonDelete,ButtonDiv,ModalOutside} from './ModalDeleteStyle'


function ModalDelete({PropsModal, PropsWithdrwal, closeText, titleText, buttonText}) {
  const navigate = useNavigate();

  return (
    <div>
      <ModalOutside>
        <ModalBody>
          <TextDiv>{titleText}</TextDiv>
          <ButtonDiv>
            <ButtonDelete
              type="button"
              onClick={PropsWithdrwal}
            >
            {buttonText}
            {/* 삭제 */}
            </ButtonDelete>

            <ButtonClose
              type="button"
              onClick={PropsModal}
            >
            {closeText}
            {/* 취소 */}
            </ButtonClose>
          </ButtonDiv>
        </ModalBody>
      </ModalOutside>
    </div>
  )
}

export default ModalDelete