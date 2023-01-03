import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import detailtest from 'assets/data/detailtest'
import * as L from 'components/commonUi/Layout';
import * as T from 'components/commonUi/Text';
import {MainBestCouponBody,MainBestCouponContent,MainBestCouponTop,TopAll,TopTitle,ContentCoupon,ContentCouponDiv,ContentDrive,ContentImg,ContentMarket,ContentPick,ContentProduct} from './MainProductTestStyle'


function MainProductTest() {
  let [item] = useState(detailtest)

  return (
    <div>
        <L.FlexRows _content='space-between' _items='center' _padding='0px 20px 0px 0px'>
          <T.Text _size={18} _weight={700} _color='black'>우리동네 인기 상품</T.Text>
          <T.Text _size={14} _weight={500} _color='blue'>전체 보기</T.Text>
        </L.FlexRows>

        <MainBestCouponContent>
          <BestCouponCard item={item[0]}/>
        </MainBestCouponContent>


    </div>
  )
}

function BestCouponCard(props){
  return(
  <div>
    <ContentProduct>
      <Link to='/details/:id'>
      <ContentImg src={props.item.img}/>
      <ContentMarket>{props.item.market}</ContentMarket>
      <ContentCouponDiv>
        <ContentDrive>배달가능</ContentDrive>
        <ContentPick>픽업가능</ContentPick>
      </ContentCouponDiv>
      </Link>
    </ContentProduct>
  </div>
  )
}

export default MainProductTest