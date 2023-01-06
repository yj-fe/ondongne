import React, { useState } from 'react'
import * as L from 'components/commonUi/Layout';
import * as T from 'components/commonUi/Text';
import { CartC, Down, Star } from 'components/commonUi/Icon';
import maindata from 'assets/data/maindata'
import { AbsoluteDiv, ImgPer, ImgSizeLayout, RelativDiv } from 'components/layout/Img/ImgSizeLayout';
import { ModalBody, ModalButton, ModalDiv1, ModalDiv2, ModalOutside, ModalTitle } from '../More/ModalPageStyle';
import ProductTimer from 'components/commonUi/ProductTimer';
import { numberFormat, totalPrice } from 'utils/utils';
import StarRate from 'components/commonUi/StarRate';

function MarketDetailProduct() {
  let [items] = useState(maindata)
  const [modal, setModal] = useState(false);


  const ShowMoreModal = () => {
    setModal(!modal);
  }
  const PropsModal = () => {
    setModal(!modal);
  }

  return (
    <div>
      <L.Container>
        <L.Contents>
          <L.FlexCols _gap={16}>
            <L.FlexRows _gap={4} _content='flex-end'>
              <T.Text _size={13} _weight={400} _color='gray900'>주문 많은 순</T.Text>
              <button
                type='button'
                onClick={ShowMoreModal}
              >
                <Down />
              </button>
            </L.FlexRows>
            <L.FlexRows _gap={20} _padding={0}>
              {
                items.map((item, idx) => (
                  <MarketProductCard item={item} />
                ))
              }
            </L.FlexRows>
            {/* <L.FlexRows _gap={20} _padding={0}>
              <MarketProductCard item={item[0]} />
              <MarketProductCard item={item[1]} />
              <MarketProductCard item={item[2]} />
            </L.FlexRows>
            <L.FlexRows _gap={20} _padding={0}>
              <MarketProductCard item={item[3]} />
              <MarketProductCard item={item[4]} />
              <MarketProductCard item={item[5]} />
            </L.FlexRows> */}
          </L.FlexCols>


        </L.Contents>
      </L.Container>
      {modal && <ModalFilter PropsModal={PropsModal} />}
    </div>
  )
}

export function ProductCard({ item }) {
  return (
    <L.FlexCols _gap={12} _padding={0} _width='216px' >

      <RelativDiv>
        <AbsoluteDiv>
          <CartC />
        </AbsoluteDiv>
        {
          !item.soldoutStatus
            ? <ImgSizeLayout _width={216} _height={216} _bdr={6} src={item.thumbnail} />
            : <div style={{ position: 'relative' }}>
              <ImgSizeLayout _width={216} _height={216} _bdr={6} src={item.thumbnail} />
              <T.SoldoutText _size={20} _weight={600} _color='white'>판매완료</T.SoldoutText>
            </div>
        }
      </RelativDiv>

      <L.FlexCols _gap={4} _padding={0} >
        {
          item.type == 'GROUP' &&
          !item.soldoutStatus &&
          <ProductTimer date={item.endDate} />
        }
        <T.Text _size={14} _weight={400} _color='gray900'>{item.name}</T.Text>
        {
          item.salePercent > 0 &&
          <L.FlexRows _gap={4} _padding={0} _items='center' >
            <T.Text _size={15} _weight={600} _color='red'>{item.salePercent}%</T.Text>
            <T.Text _size={13} _weight={400} _color='gray500' _decoration={'line-through'}>{numberFormat(item.price)}원</T.Text>
          </L.FlexRows>
        }
        <L.FlexRows>
          <T.Text _size={16} _weight={600} _color='gray900'>{totalPrice(item.price, item.salePercent)} 원</T.Text>
        </L.FlexRows>
        <L.FlexRows>
          <StarRate rate={item.reviewRate} />
          <T.Text _size={11} _weight={400} _color='gray800'>({item.reviewRate})</T.Text>
        </L.FlexRows>

      </L.FlexCols>
    </L.FlexCols>
  )

}


export function MarketProductCard(props) {
  return (
    // <div style={{width: 'calc(50% - 10px)'}}>
    <div >

      <L.FlexCols _gap={12} _padding={0} _width='216px'>
        <RelativDiv>
          <AbsoluteDiv>
            <CartC />
          </AbsoluteDiv>
          <ImgSizeLayout _width={216} _height={216} _bdr={6} src={props.item.img} />
        </RelativDiv>

        <L.FlexCols _gap={4} _padding={0} >
          <T.Text _size={14} _weight={400} _color='gray900'>{props.item.title}</T.Text>
          <L.FlexRows _gap={4} _padding={0} _items='center' >
            <T.Text _size={15} _weight={600} _color='red'>{props.item.discount}</T.Text>
            <T.Text _size={13} _weight={400} _color='gray500'>{props.item.price}</T.Text>
          </L.FlexRows>
          <L.FlexRows>
            <T.Text _size={16} _weight={600} _color='gray900'>{props.item.finalprice}</T.Text>
          </L.FlexRows>
          <L.FlexRows>
            <Star />
            <T.Text _size={11} _weight={400} _color='gray800'>(4.5)</T.Text>
          </L.FlexRows>
        </L.FlexCols>

      </L.FlexCols>


      {/* <L.CateCols _gap={12} _padding={0} _width='216px'>

      <RelativDiv>
        <AbsoluteDiv>
          <CartC/>
        </AbsoluteDiv>
        <ImgPer _width={216} _height={216} _bdr={6} src={props.item.img}/>
      </RelativDiv>

      <L.FlexCols _gap={4} _padding={0} >
        <T.Text _size={14} _weight={400} _color='gray900'>{props.item.title}</T.Text>
        <L.FlexRows _gap={4} _padding={0} _items='center' >
          <T.Text  _size={15} _weight={600} _color='red'>{props.item.discount}</T.Text>
          <T.Text  _size={13} _weight={400} _color='gray500'>{props.item.price}</T.Text>
        </L.FlexRows>
        <L.FlexRows>
          <T.Text  _size={16} _weight={600} _color='gray900'>{props.item.finalprice}</T.Text>
        </L.FlexRows>
        <L.FlexRows>
          <Star/>
          <T.Text  _size={11} _weight={400} _color='gray800'>(4.5)</T.Text>
        </L.FlexRows>
      </L.FlexCols>
      
    </L.CateCols> */}
    </div>
  )
}

export function ModalFilter(props) {
  return (
    <div>
      <ModalOutside>
        <ModalBody>
          <ModalDiv1>정렬</ModalDiv1>
          <ModalDiv2>
            <ModalTitle>기본 순</ModalTitle>
            <ModalTitle>주문 많은 순</ModalTitle>
            <ModalTitle>리뷰 별점 순</ModalTitle>
          </ModalDiv2>
        </ModalBody>
      </ModalOutside>
    </div>
  )
}

export default MarketDetailProduct