import React, { useState, useEffect } from 'react'
import maindata from '../../../../assets/data/maindata'
import { ReactComponent as StarIcon } from "../../../../assets/main/ratestar.svg";

import {LastChanceBody,LastChanceContent,LastChanceDiv,TopAll,TopTitle,ContentDate,ContentImg,ContentMarket,ContentProduct,ContentStyle,LastChanceTop,ContentTitle,Discount,DiscountStyle,Price,RateStyle,Star,Number,FinalPrice} from './MainBestProductStyle'


function MainBestProduct() {
  let [item] = useState(maindata)
  // const [showCount, setShowCount] = useState()

  // const ShowCountDown =()=>{
  //   if({item[i].countdown}===null){
  //     setShowCount(false)
  //   }
  // }

  return (
    <div>
      <LastChanceBody>
        <LastChanceTop>
          <TopTitle>My단골 인기 상품</TopTitle>
          <TopAll>전체 보기</TopAll>
        </LastChanceTop>

        <LastChanceDiv>
          <LastChanceContent>
            {
              item.map((a, i)=>{
                if(i%2 === 0){
                return(
                  <LastChanceCard item={item[i]} i={i}/>
                  )
                }
              })
            }
          </LastChanceContent>
          <LastChanceContent>
            {
              item.map((a, i)=>{
                if(i%2 === 1){
                return(
                  <LastChanceCard item={item[i]} i={i}/>
                  )
                }
              })
            }
          </LastChanceContent>
        </LastChanceDiv>
      </LastChanceBody>



    </div>
  )
}

function LastChanceCard(props){
  return(
  <div>
    <ContentProduct>
      <ContentImg src={props.item.img}/>
      <ContentStyle>
        <ContentDate >{props.item.countdown}</ContentDate>
        <ContentMarket>{props.item.market}</ContentMarket>
        <ContentTitle>{props.item.title}</ContentTitle>
        <DiscountStyle>
          <Discount>{props.item.discount}</Discount>
          <Price>{props.item.price}</Price>
        </DiscountStyle>
        <FinalPrice>{props.item.finalprice}</FinalPrice>
        <RateStyle>
          <Star><StarIcon/></Star>
          <Number>(4.5)</Number>
        </RateStyle>
      </ContentStyle>
    </ContentProduct>
  </div>
  )
}

export default MainBestProduct