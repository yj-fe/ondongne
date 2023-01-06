import React, { useState, useEffect } from 'react'
import maindata from 'assets/data/maindata'
import { ReactComponent as StarIcon } from "assets/main/ratestar.svg";
import * as L from 'components/commonUi/Layout';
import * as T from 'components/commonUi/Text';
import {LastChanceContent,LastChanceDiv,ContentDate,ContentImg,ContentMarket,ContentProduct,ContentStyle,LastChanceTop,ContentTitle,Discount,DiscountStyle,Price,RateStyle,Star,Number,FinalPrice} from './MainBestProductStyle'


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
        <L.FlexRows _content='space-between' _items='center' _padding='0px 20px 0px 0px'>
          <T.Text _size={18} _weight={700} _color='black'>My단골 인기 상품</T.Text>
          <T.Text _size={14} _weight={500} _color='blue'>전체 보기</T.Text>
        </L.FlexRows>
        <LastChanceDiv>
        <L.FlexRowsCP>
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
            </L.FlexRowsCP>
            <L.FlexRowsCP>
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
          </L.FlexRowsCP>
        </LastChanceDiv>



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