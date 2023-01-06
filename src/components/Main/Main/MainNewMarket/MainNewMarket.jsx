import React, { useState, useEffect } from 'react'
import newmarket from 'assets/data/newmarket'
import { ReactComponent as StarIcon } from "assets/main/ratestar.svg";
import * as L from 'components/commonUi/Layout';
import * as T from 'components/commonUi/Text';
import {NewMarketContent,NewMarketDiv,ContentDiv,ContentImg,ContentImgBadge,ContentImgDiv,ContentInfo,ContentMarket,ContentMarketImg,ContentProduct,ContentStyle,ContentTextStyle} from './MainNewMarketStyle'


function MainNewMarket() {
  let [item] = useState(newmarket)

  return (
    <div>
        <L.FlexRows _content='space-between' _items='center' _padding='0px 20px 32px 0px'>
          <T.Text _size={18} _weight={700} _color='black'>우리동네 신규 입점</T.Text>
          <T.Text _size={14} _weight={500} _color='blue'>전체 보기</T.Text>
        </L.FlexRows>
        <NewMarketDiv>
        <L.FlexRowsCP>
          <NewMarketContent>
          {
            item.map((a, i)=>{
              // if(i%2 === 0){
                return(
                  <NewMarketCard item={item[i]} i={i}/>
                  )
                // }
              })
            }
            </NewMarketContent>
            </L.FlexRowsCP>
            <L.FlexRowsCP>
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
            </L.FlexRowsCP>
        </NewMarketDiv>



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