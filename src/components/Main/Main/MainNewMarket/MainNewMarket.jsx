import React, { useState, useEffect } from 'react'
import newmarket from '../../../../assets/data/newmarket'
import { ReactComponent as StarIcon } from "../../../../assets/main/ratestar.svg";

import {NewMarketBody,NewMarketContent,NewMarketDiv,NewMarketTop,N,TopAll,TopTitle,ContentDiv,ContentImg,ContentImgBadge,ContentImgDiv,ContentInfo,ContentMarket,ContentMarketImg,ContentProduct,ContentStyle,ContentTextStyle} from './MainNewMarketStyle'


function MainNewMarket() {
  let [item] = useState(newmarket)

  return (
    <div>
      <NewMarketBody>
        <NewMarketTop>
          <TopTitle>우리동네 신규 입점</TopTitle>
          <TopAll>전체 보기</TopAll>
        </NewMarketTop>

        <NewMarketDiv>
          <NewMarketContent>
          {
              item.map((a, i)=>{
                if(i%2 === 0){
                return(
                  <NewMarketCard item={item[i]} i={i}/>
                  )
                }
              })
            }
            </NewMarketContent>
            <NewMarketContent>
            {
              item.map((a, i)=>{
                if(i%2 === 1){
                return(
                  <NewMarketCard item={item[i]} i={i}/>
                  )
                }
              })
            }
          </NewMarketContent>
        </NewMarketDiv>
      </NewMarketBody>



    </div>
  )
}

function NewMarketCard(props){
  return(
  <div>
    <ContentProduct>
      <ContentImgDiv>
        <ContentImgBadge>신규 입점</ContentImgBadge>
        <ContentImg src={props.item.img}/>
      </ContentImgDiv>
      <ContentStyle>
        <ContentDiv>
          <ContentMarketImg src={props.item.img}/>
          <ContentTextStyle>
            <ContentMarket>{props.item.market}</ContentMarket>
            <ContentInfo>{props.item.info}</ContentInfo>
          </ContentTextStyle>
        </ContentDiv>
      </ContentStyle>
    </ContentProduct>
  </div>
  )
}

export default MainNewMarket