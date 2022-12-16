import React, { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components'
import maindata from '../../assets/data/maindata'
import { ReactComponent as StarIcon } from "../../assets/main/ratestar.svg";
import DetailPage from '../../pages/DetailPage';

const LastChanceBody = styled.div`
  padding: 20px;
  gap: 32px;
  width: 728px;
  height: 762px;
  background: #FFFFFF;
`
const LastChanceTop = styled.div`
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
const LastChanceDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 32px;
`
const LastChanceContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding-top: 32px;
  gap: 16px;
  width: 814px;
  height: 316px;
`
const ContentProduct = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 12px;
  width: 150px;
  height: 316px;
`
const ContentImg = styled.img`
  width: 150px;
  height: 150px;
  background:  #D9D9D9;
  border-radius: 6px;
`
const ContentStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`
const ContentMarket = styled.p`
font-weight: 500;
font-size: 12px;
line-height: 18px;
color: #757575;
`
const ContentDate = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 2px 6px;
  gap: 4px;
  width: 110px;
  height: 22px;
  background: #FDECEE;
  border-radius: 2px;
  font-weight: 700;
  font-size: 12px;
  line-height: 18px;
  color: #ED4F62;
  margin-bottom: 4px;
`
const ContentTitle = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #212121;
`
const DiscountStyle = styled.p`
  display: flex;
  flex-direction: row;
  gap: 4px;
  margin-top: 4px;
`
const Discount = styled.p`
  font-weight: 600;
  font-size: 15px;
  line-height: 20px;
  color: #ED2A2A;
`
const Price = styled.p`
  font-weight: 400;
  font-size: 13px;
  line-height: 20px;
  text-decoration-line: line-through;
  color: #9E9E9E;
`
const FinalPrice = styled.p`
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #212121;
`
const RateStyle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 4px;
  margin-top: 4px;
  width: 108px;
  height: 18px;
`
const Star = styled.div`
  flex-direction: row;
  width: 80px;
  height: 16px;
`
const Number = styled.p`
  flex-direction: row;
  font-weight: 400;
  font-size: 11px;
  line-height: 18px;
  color: #424242;
`


function MainLastChance() {
  let [item] = useState(maindata)

  return (
    <div>
      <LastChanceBody>
        <LastChanceTop>
          <TopTitle>공동구매 마지막 찬스</TopTitle>
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
        {/* <Routes>
          <Route path='/detail/:id' element={<DetailPage item={item}/>}/>
        </Routes> */}
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