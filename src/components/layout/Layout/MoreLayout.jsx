import React, { useState } from 'react'
import {ModalBody,ModalButton,ModalDiv1,ModalDiv2,ModalOutside,ModalTitle} from 'components/Main/More/ModalPageStyle'
import * as T from 'components/commonUi/Text';
import * as L from 'components/commonUi/Layout';



function MoreLayout({PropsModal}) {


  return (
    <div>
      <ModalOutside>
        <ModalBody>
          <ModalDiv1>더보기</ModalDiv1>
          <L.Contents _padding='16px 20px' >
            <L.FlexCols _gap={32}>
              <T.Text _weight={400} _size={16} _color="gray800" >게시글 수정</T.Text>
              <T.Text _weight={400} _size={16} _color="error" >게시글 삭제</T.Text>
            </L.FlexCols>
          </L.Contents>
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

export default MoreLayout