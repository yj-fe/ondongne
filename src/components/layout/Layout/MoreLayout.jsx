import React, { useState } from 'react'
import {ModalBody,ModalButton,ModalDiv1,ModalDiv2,ModalOutside,ModalTitle} from 'components/Main/More/ModalPageStyle'
import * as T from 'components/commonUi/Text';
import * as L from 'components/commonUi/Layout';
import { Check } from 'components/commonUi/Icon';



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

export function FilterLayout({PropsModal}) {
  return (
    <div>
      <ModalOutside>
        <ModalBody>
          <ModalDiv1>상품 필터</ModalDiv1>
          <L.Contents _padding='16px 20px' >
            <L.FlexCols _gap={32}>
              <L.FlexRows _content='space-between' _items='center'>
                <T.Text _weight={400} _size={15} _color="green700" >전체</T.Text>
                <Check/>
              </L.FlexRows>
              <T.Text _weight={400} _size={15} _color="gray800" >일반상품</T.Text>
              <T.Text _weight={400} _size={15} _color="gray800" >공동구매 상품</T.Text>
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

export function SortLayout({CloseModal}) {
  return (
    <div>
      <ModalOutside
      >
        <ModalBody>
          <ModalDiv1>정렬</ModalDiv1>
          <L.Contents _padding='16px 20px' >
            <L.FlexCols _gap={32}>
              <L.FlexRows _content='space-between' _items='center'>
                <T.Text _weight={400} _size={15} _color="green700" >기본 순</T.Text>
                <Check/>
              </L.FlexRows>
              <T.Text _weight={400} _size={15} _color="gray800" >주문 많은 순</T.Text>
              <T.Text _weight={400} _size={15} _color="gray800" >리뷰 별점 순</T.Text>
              <T.Text _weight={400} _size={15} _color="gray800" >신규 매장 순</T.Text>
              <T.Text _weight={400} _size={15} _color="gray800" >쿠폰 인기 순</T.Text>
            </L.FlexCols>
          </L.Contents>
          <ModalButton
            type="button"
            onClick={CloseModal}
          >
          닫기
          </ModalButton>
        </ModalBody>
      </ModalOutside>
    </div>
  )
}

export default MoreLayout