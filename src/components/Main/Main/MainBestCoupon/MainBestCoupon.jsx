import React, { useState, useEffect } from 'react'
import bestcoupon from '../../../../assets/data/bestcoupon'
import newmarket from '../../../../assets/data/newmarket'

import {MainBestCouponBody,MainBestCouponContent,MainBestCouponTop,TopAll,TopTitle,ContentCoupon,ContentCouponDiv,ContentDrive,ContentImg,ContentMarket,ContentPick,ContentProduct} from './MainBestCouponStyle'


function MainBestCoupon() {
  let [item] = useState(newmarket)

  return (
    <div>
      <MainBestCouponBody>
        <MainBestCouponTop>
          <TopTitle>우리동네 인기 쿠폰</TopTitle>
          <TopAll>전체 보기</TopAll>
        </MainBestCouponTop>

        <MainBestCouponContent>
          {
            item.map((a, i)=>{
              return(
                <BestCouponCard item={item[i]} i={i}/>
                )
            })
          }
        </MainBestCouponContent>
      </MainBestCouponBody>



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