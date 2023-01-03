import React, { useState, useEffect } from 'react'
import bestcoupon from 'assets/data/bestcoupon'
import newmarket from 'assets/data/newmarket'
import * as L from 'components/commonUi/Layout';
import * as T from 'components/commonUi/Text';

import {MainBestCouponBody,MainBestCouponContent,MainBestCouponTop,TopAll,TopTitle,ContentCoupon,ContentCouponDiv,ContentDrive,ContentImg,ContentMarket,ContentPick,ContentProduct} from './MainBestCouponStyle'


function MainBestCoupon() {
  let [item] = useState(newmarket)

  return (
    <div>
        <L.FlexRows _content='space-between' _items='center' _padding='0px 20px 0px 0px'>
          <T.Text _size={18} _weight={700} _color='black'>우리동네 인기 쿠폰</T.Text>
          <T.Text _size={14} _weight={500} _color='blue'>전체 보기</T.Text>
        </L.FlexRows>

        <MainBestCouponContent>
          {
            item.map((a, i)=>{
              return(
                <BestCouponCard item={item[i]} i={i}/>
                )
            })
          }
        </MainBestCouponContent>



    </div>
  )
}

function BestCouponCard(props){
  return(
  <div>
    <ContentProduct>
      <ContentImg src={props.item.img}/>
      <ContentMarket>{props.item.market}</ContentMarket>
      <ContentCouponDiv>
        <ContentCoupon>쿠폰</ContentCoupon>
        <ContentDrive>배달가능</ContentDrive>
        <ContentPick>픽업가능</ContentPick>
      </ContentCouponDiv>
    </ContentProduct>
  </div>
  )
}

export default MainBestCoupon