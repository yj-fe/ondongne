import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import detailtest from '../../../../assets/data/detailtest'

import {MainBestCouponBody,MainBestCouponContent,MainBestCouponTop,TopAll,TopTitle,ContentCoupon,ContentCouponDiv,ContentDrive,ContentImg,ContentMarket,ContentPick,ContentProduct} from './MainProductTestStyle'


function MainProductTest() {
  let [item] = useState(detailtest)

  return (
    <div>
      <MainBestCouponBody>
        <MainBestCouponTop>
          <TopTitle>우리동네 인기 상품</TopTitle>
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