import React, { useState, useEffect } from 'react'
import {useNavigate} from 'react-router-dom'
import maindata from '../../../../assets/data/maindata'
import { ReactComponent as StarIcon } from "../../../../assets/main/ratestar.svg";
import {LastChanceBody,LastChanceContent,LastChanceDiv,LastChanceTop,TopAll,TopTitle,ContentDate,ContentImg,ContentMarket,ContentProduct,ContentStyle,ContentTitle,Discount,DiscountStyle,Price,FinalPrice,RateStyle,Star,Number} from './MainBestCollectionStyle'



function MainBestCollection() {
  let [item] = useState(maindata)
  const navigate = useNavigate()
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
          <TopTitle>우리동네 인기 추천</TopTitle>
          <TopAll>전체 보기</TopAll>
        </LastChanceTop>

        <LastChanceDiv>
          <LastChanceContent
            // onClick={()=>{navigate(`/item/${}`, { state: {item}})}}
          >
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

export default MainBestCollection