import { FlexCols } from 'components/commonUi/Layout';
import React, { useState } from 'react'
import {ModalBody,TextDiv,ButtonClose,ButtonDelete,ModalOutside} from './ModalDeleteStyle'



function ModalDelete({titleText2, PropsModal, PropsWithdrwal, closeText, titleText, buttonText}) {

  return (
    <div>
      <ModalOutside>
        <ModalBody>
          <FlexCols  _gap={20}>
            <FlexCols _gap='0px'>
              <TextDiv>{titleText}</TextDiv>
              <TextDiv>{titleText2}</TextDiv>
            </FlexCols>
            <FlexCols _gap={12}>
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
              </FlexCols>
            </FlexCols>
        </ModalBody>
      </ModalOutside>
    </div>
  )
}

export default ModalDelete