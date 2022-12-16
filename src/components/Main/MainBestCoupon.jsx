import React from 'react'
import styled from 'styled-components'
import bestcoupon from '../../assets/data/bestcoupon'
import newmarket from '../../assets/data/newmarket'

import { useState, useEffect } from 'react'

const MainBestCouponBody = styled.div`
  padding: 20px;
  gap: 32px;
  width: 728px;
  height: 310px;
  background: #FFFFFF;
`
const MainBestCouponTop = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px;
  gap: 40px;
  width: 688px;
  height: 26px;
`
const TopTitle = styled.p`
  font-weight: 700;
  font-size: 18px;
  line-height: 26px;
  color: #000000;
`
const TopAll = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: #1E88E5;
`
const MainBestCouponContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding-top: 32px;
  gap: 16px;
  width: 688px;
  height: 212px;
`
const ContentProduct = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 12px;
  width: 150px;
  height: 212px;
`
const ContentImg = styled.img`
  width: 150px;
  height: 150px;
  background:  #D9D9D9;
  border-radius: 6px;
`
const ContentMarket = styled.p`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 20px;
  color: #212121;
`
const ContentCouponDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 4px;
  width: 142px;
  height: 22px;
`
const ContentCoupon = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 2px;
  gap: 4px;
  width: 32px;
  height: 22px;
  background: #E1F3F2;
  border-radius: 2px;
  font-weight: 500;
  font-size: 10px;
  line-height: 18px;
  color: #0E907F;
`
const ContentDrive = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 2px;
  gap: 4px;
  width: 51px;
  height: 22px;
  background: #F5F5F5;
  border-radius: 2px;
  font-weight: 500;
  font-size: 10px;
  line-height: 18px;
  color: #424242;
`
const ContentPick = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 2px;
  gap: 4px;
  width: 51px;
  height: 22px;
  background: #F5F5F5;
  border-radius: 2px;
  font-weight: 500;
  font-size: 10px;
  line-height: 18px;
  color: #424242;
`


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