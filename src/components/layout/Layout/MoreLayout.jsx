import React, { useState } from 'react'
import { ModalBody, ModalButton, ModalDiv1, ModalDiv2, ModalOutside, ModalTitle } from 'components/Main/More/ModalPageStyle'
import * as T from 'components/commonUi/Text';
import * as L from 'components/commonUi/Layout';
import { Check } from 'components/commonUi/Icon';
import { ImgSizeLayout } from '../Img/ImgSizeLayout';
import Review from 'assets/images/Review.png'
import { sortFormatter } from 'utils/utils';


function MoreLayout({ PropsModal }) {


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

export function FilterLayout({ PropsModal, data, setData }) {

  const filters = ['all', 'normal', 'group'];

  const clickHandler = (filter) => {
    setData(filter);
    PropsModal();
  }

  return (
    <div>
      <ModalOutside>
        <ModalBody>
          <ModalDiv1>상품 필터</ModalDiv1>
          <L.Contents _padding='16px 20px' >
            <L.FlexCols _gap={32}>

              {
                filters.map((filter, index) => (
                  <L.FlexRows key={index} _content='space-between' _items='center'>
                    <T.Text
                      _weight={filter === data ? 600 : 400}
                      _size={15}
                      _color={filter === data ? "green800" : "gray700"}
                      onClick={() => clickHandler(filter)}
                    >{sortFormatter(filter)}</T.Text>
                    {
                      filter === data && <Check />
                    }
                  </L.FlexRows>
                ))
              }
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

export function SortLayout({ CloseModal, data, setData }) {

  const sorts = ['create', 'order', 'review', 'newstore'];

  const clickHandler = (sort) => {
    setData(sort);
    CloseModal();
  }

  return (
    <div>
      <ModalOutside
      >
        <ModalBody>
          <ModalDiv1>정렬</ModalDiv1>
          <L.Contents _padding='16px 20px' >
            <L.FlexCols _gap={32}>

              {
                sorts.map((sort, index) => (
                  <L.FlexRows key={index} _content='space-between' _items='center'>
                    <T.Text
                      _weight={sort === data ? 600 : 400}
                      _size={15}
                      _color={sort === data ? "green800" : "gray700"}
                      onClick={() => clickHandler(sort)}
                    >{sortFormatter(sort)}</T.Text>
                    {
                      sort === data && <Check />
                    }
                  </L.FlexRows>
                ))
              }
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

export function SearchSortLayout({ CloseModal, data, setData }) {

  const sorts = ['create', 'order', 'review', 'like'];

  const clickHandler = (sort) => {
    setData(sort);
    CloseModal();
  }

  return (
    <div>
      <ModalOutside
      >
        <ModalBody>
          <ModalDiv1>정렬</ModalDiv1>
          <L.Contents _padding='16px 20px' >
            <L.FlexCols _gap={32}>

              {
                sorts.map((sort, index) => (
                  <L.FlexRows key={index} _content='space-between' _items='center'>
                    <T.Text
                      _weight={sort === data ? 600 : 400}
                      _size={15}
                      _color={sort === data ? "green800" : "gray700"}
                      onClick={() => clickHandler(sort)}
                    >{sortFormatter(sort)}</T.Text>
                    {
                      sort === data && <Check />
                    }
                  </L.FlexRows>
                ))
              }
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

export function ReviewLayout({ CloseModal }) {
  return (
    <div>
      <ModalOutside
      >
        <ModalBody>
          <ModalDiv1>

            <L.Contents _padding='16px 20px' _gap={32}>
              <L.FlexCols _gap={32}>
                <L.FlexRows _content='center' >
                  <ImgSizeLayout src={Review} />
                </L.FlexRows>

                <L.FlexCols >
                  <T.Text _align='center' _weight={700} _size={20} _color="gray900" >리뷰 작성 완료!</T.Text>
                  <T.Text _align='center' _weight={400} _size={15} _color="gray600" >리뷰를 남겨주셔서 감사합니다.</T.Text>
                </L.FlexCols>
              </L.FlexCols>
            </L.Contents>
          </ModalDiv1>
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