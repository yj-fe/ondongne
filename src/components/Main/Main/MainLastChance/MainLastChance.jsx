import React, { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom';
import maindata from 'assets/data/maindata'
import * as L from 'components/commonUi/Layout';
import * as T from 'components/commonUi/Text';
import { ReactComponent as StarIcon } from "assets/main/ratestar.svg";

import {LastChanceBody,LastChanceContent,LastChanceDiv,LastChanceTop,ContentDate,ContentImg,Price,Discount,ContentMarket,ContentProduct,RateStyle,TopAll,TopTitle,ContentStyle,ContentTitle,Star,Number,DiscountStyle,FinalPrice} from './MainLastChanceStyle'


function MainLastChance() {
  let [item] = useState(maindata)

  return (
    <div>
        <L.FlexRows _content='space-between' _items='center' _padding='0px 20px 0px 0px'>
          <T.Text _size={18} _weight={700} _color='black'>공동구매 마지막 찬스</T.Text>
          <T.Text _size={14} _weight={500} _color='blue'>전체 보기</T.Text>
        </L.FlexRows>

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
        {/* <Routes>
          <Route path='/detail/:id' element={<DetailsPage item={item}/>}/>
        </Routes> */}



    </div>
  )
}

function LastChanceCard(props){
  return(
  <div>
    <ContentProduct>
      <ContentImg src={props.item.img}/>
      <ContentStyle>
        <ContentDate>{props.item.countdown}</ContentDate>
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

export default MainLastChance