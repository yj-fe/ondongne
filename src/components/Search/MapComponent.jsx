import MapMarker from 'components/Search/MapMarker'
import React from 'react'
import * as L from 'components/commonUi/Layout';
import * as T from 'components/commonUi/Text';
import * as B from 'components/commonUi/Button';
import { ModalBody, ModalDiv1, ModalOutside } from 'components/Main/More/ModalPageStyle';
import { Close } from 'components/commonUi/Icon';
import Img from 'assets/images/marketdetail.png';
import { ImgCollect } from 'components/Buisness/BusinessManagement/BusinessManagementTabStyle';
import StarRate from 'components/commonUi/StarRate';

function MapComponent() {
  return (
    <>
      <L.FlexRows _padding='100px'>
        <MapMarker
          name='투썸플레이스'
          category='식음료'
          list={false}
          marketnum={false}
          newMarket={true}
        />
      </L.FlexRows>
      <Modal/>
    </>
  )
}



// 업체정보 모달
function Modal (){

  return(
    <>
      <ModalBody >
        <ModalDiv1 _shadow='0px 0px 16px  rgba(0, 0, 0, 0.06)' _pd='0px 20px' _height='56px'>
          <L.FlexRows _padding='0px 20px' _content='space-between'>
            <L.FlexRows _content='center' _transform='translateX(10px)'>
              <T.Text _size={16} _weight={600}>업체 정보</T.Text>
            </L.FlexRows>
            <L.FlexRows _width='auto' _content='right'>
              <Close/>
            </L.FlexRows>
          </L.FlexRows>
        </ModalDiv1>
        <L.Contents _padding='8px 20px 16px 20px'>
          {/* <L.FlexRows _content='flex-start'> */}
            {/* <L.FlexCols _gap='2px' _width='calc(100% - 150px)'> */}
            <L.FlexRows _content='row' 
            >
              <ImgCollect  src={Img}  />
              <L.FlexCols _gap={2} _width='calc(100% - 100px)'>
                  <L.FlexRows _gap='0px' _width='200px'>
                    <T.TextCut _weight={600} _size={17} _color="gray900">카페 느릿</T.TextCut>
                  </L.FlexRows>
                  <L.FlexRows _content='flex-start' _items='center' _gap={2}>
                      <StarRate />
                      <T.Text _weight={500} _size={13} _color="gray900" _align='center'>4.5</T.Text>
                  </L.FlexRows>
                  <L.FlexRows>
                      <T.Text _weight={400} _size={13} _color="gray800" _align='center'>
                          최소주문 10,000원,
                      </T.Text>
                      <T.Text _weight={400} _size={13} _color="gray800" _align='center'>
                          배달 2,000원
                      </T.Text>
                  </L.FlexRows>
                  <L.FlexRows>
                      {  <B.Badge _color='white' _bg='green500'>신규 입점</B.Badge>}
                      {  <B.Badge _color='green600' _bg='green50'>쿠폰</B.Badge>}
                      {
                              <React.Fragment >
                                  <B.Badge>픽업가능</B.Badge>
                              </React.Fragment>
                      }
                  </L.FlexRows>
            </L.FlexCols>
            </L.FlexRows>
        </L.Contents>
      </ModalBody>
    </>
  )
}
export default MapComponent