import React, { useState } from 'react'
import * as L from 'components/commonUi/Layout';
import * as T from 'components/commonUi/Text';
import * as B from 'components/commonUi/Button';
import HeaderSearch from 'components/layout/Header/HeaderSearch';
import LayoutSearch from 'components/layout/Layout/LayoutSearch';
import MainCategory from 'components/Main/Main/MainCategory/MainCategory';
import MainBestCollection from 'components/Main/Main/MainBestCollection/MainBestCollection';
import { ImgSizeLayout, RelativDiv, AbsoluteDiv } from 'components/layout/Img/ImgSizeLayout';
import maindata from 'assets/data/maindata'
import { CartC, Star } from 'components/commonUi/Icon';



function SearchDetailPage() {
  let [item] = useState(maindata)

  return (
    <div>
      <LayoutSearch>
        <L.Container>
          <L.Contents _padding='0px'>
            <MainCategory/>
          </L.Contents>
          <L.Contents  _padding='20px' >
          <L.FlexCols>
            <L.FlexRows _content='space-between'>
              <T.Text  _weight={700} _size={18} _color="black">우리동네 인기 추천</T.Text>
              <T.Text  _weight={500} _size={14} _color="blue">전체 보기</T.Text>
            </L.FlexRows>
            <L.FlexRows _height='300px'>
              <L.FlexCols _width='150px' _gap={12}>
                <BestCollectionCard item={item[0]}/>
                <BestCollectionCard item={item[1]}/>
                <BestCollectionCard item={item[2]}/>
                <BestCollectionCard item={item[3]}/>
              </L.FlexCols>
            </L.FlexRows>
            <L.FlexRows _height='300px'>
              <L.FlexCols _width='150px' _gap={12}>
                <BestCollectionCard item={item[4]}/>
                <BestCollectionCard item={item[5]}/>
                <BestCollectionCard item={item[6]}/>
                <BestCollectionCard item={item[7]}/>
              </L.FlexCols>
            </L.FlexRows>
          </L.FlexCols>
          </L.Contents>
        </L.Container>
      </LayoutSearch>
    </div>
  )
}

function BestCollectionCard(props){



  return(
    <div>
        <RelativDiv>
          <AbsoluteDiv>
            <CartC/>
          </AbsoluteDiv>
          <ImgSizeLayout _width={150} _height={150} _bdr={6} src={props.item.img} />
        </RelativDiv>
        <L.FlexCols _gap={1} _width='150px'>
          <B.Badge _weight={700} _bg='red100' _color='red500' _size='12px'>{props.item.countdown}</B.Badge>
          <T.Text  _weight={500} _size={12} _color="gray600">{props.item.market}</T.Text>
          <T.Text  _weight={400} _size={14} _color="gray900">{props.item.title}</T.Text>
          <L.FlexRows _gap={1} _padding={0} _items='center' >
            <T.Text  _size={15} _weight={600} _color='red'>{props.item.discount}</T.Text>
            <T.Text  _size={13} _weight={400} _color='gray500'>{props.item.price}</T.Text>
          </L.FlexRows>
          <L.FlexRows _gap={1}>
            <T.Text  _size={16} _weight={600} _color='gray900'>{props.item.finalprice}</T.Text>
          </L.FlexRows>
          <L.FlexRows _gap={1}>
            <Star/>
            <T.Text  _size={11} _weight={400} _color='gray800'>(4.5)</T.Text>
          </L.FlexRows>
        </L.FlexCols>
    </div>
  )
}

export default SearchDetailPage