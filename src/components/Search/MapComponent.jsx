import MapMarker from 'components/Search/MapMarker'
import React, { useEffect } from 'react'
import * as L from 'components/commonUi/Layout';
import * as T from 'components/commonUi/Text';
import * as B from 'components/commonUi/Button';
import { ModalBody, ModalDiv1, ModalOutside } from 'components/Main/More/ModalPageStyle';
import { Close } from 'components/commonUi/Icon';
import Img from 'assets/images/marketdetail.png';
import { ImgCollect } from 'components/Buisness/BusinessManagement/BusinessManagementTabStyle';
import StarRate from 'components/commonUi/StarRate';
import { useState } from 'react';
import { numberFormat } from 'utils/utils';
import { CursorDiv } from 'components/Common/LayoutPageStyle';

function MapComponent({ items }) {
  const [modal, setModal] = useState(false)

  // 모달-스크롤하단고정
  useEffect(() => {
    if (modal) {
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    }
  }, [modal]);

  return (
    <CursorDiv>
      <L.FlexCols _gap='0px' _padding='0px'>
        <L.Scroll _height='calc(100vh - 117px)'>
          <L.FlexRows _padding='100px'>

            {/*===== 지도마커 예시 =====*/}
            {
              items.map((item, i) => (
                <L.Zindex
                  _width='150px' _height='60px'
                  onClick={() => setModal(true)}
                >
                  <MapMarker
                    name={item.name}
                    category={item.category}
                    list={item.list}
                    marketnum={item.marketnum}
                    newMarket={item.newStatus}
                  />
                </L.Zindex>
              ))
            }


          </L.FlexRows>
          {/*===== 업체정보모달 =====*/}
          {modal && <Modal setModal={setModal} item={items} />}

        </L.Scroll>
      </L.FlexCols>

    </CursorDiv>
  )
}

// 업체정보 모달
function Modal({ setModal, item }) {

  return (
    <ModalBody >
      <ModalDiv1 _shadow='0px 0px 16px  rgba(0, 0, 0, 0.06)' _pd='0px 20px' _height='56px'>
        <L.FlexRows _padding='0px 20px' _content='space-between'>
          <L.FlexRows _content='center' _transform='translateX(10px)'>
            <T.Text _size={16} _weight={600}>업체 정보</T.Text>
          </L.FlexRows>
          <L.FlexRows
            _width='auto' _content='right'
            onClick={() => setModal(false)}
          >
            <Close />
          </L.FlexRows>
        </L.FlexRows>
      </ModalDiv1>
      <L.Contents _padding='8px 20px 16px 20px'>
        <L.FlexRows _content='row' >
          <ImgCollect src={Img} />
          <L.FlexCols _gap={2} _width='calc(100% - 100px)'>
            <L.FlexRows _gap='0px' _width='200px'>
              <T.TextCut _weight={600} _size={17} _color="gray900">{item.name}</T.TextCut>
            </L.FlexRows>
            <L.FlexRows _content='flex-start' _items='center' _gap={2}>
              <StarRate rate={item.reviewRate} />
              <T.Text _weight={500} _size={13} _color="gray900" _align='center'>{item.reviewRate}</T.Text>
            </L.FlexRows>
            <L.FlexRows>
              <T.Text _weight={400} _size={13} _color="gray800" _align='center'>
                최소주문 {item.orderMinPrice ? numberFormat(item.orderMinPrice) : 0}원,
              </T.Text>
              <T.Text _weight={400} _size={13} _color="gray800" _align='center'>
                배달 {item.deliveryPrice ? numberFormat(item.deliveryPrice) : 0}원
              </T.Text>
            </L.FlexRows>
            <L.FlexRows>
              {item.newStatus && <B.Badge _color='white' _bg='green500'>신규 입점</B.Badge>}
              {item.couponStatus && <B.Badge _color='green600' _bg='green50'>쿠폰</B.Badge>}
              {
                item.recetiveType && item.recetiveType.split(',').map((r, i) => (
                  <React.Fragment key={i}>
                    <B.Badge>{r}가능</B.Badge>
                  </React.Fragment>
                ))
              }
            </L.FlexRows>
          </L.FlexCols>
        </L.FlexRows>
      </L.Contents>
    </ModalBody>
  )
}
export default MapComponent