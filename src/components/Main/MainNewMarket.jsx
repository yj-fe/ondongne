import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import newmarket from '../../assets/data/newmarket'
import { ReactComponent as StarIcon } from "../../assets/main/ratestar.svg";

const NewMarketBody = styled.div`
  padding: 20px;
  gap: 32px;
  width: 728px;
  height: 594px;
  background: #FFFFFF;
`
const NewMarketTop = styled.div`
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
const NewMarketDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 32px;
  width: 688px;
  height: 496px;
`
const NewMarketContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding-top: 32px;
  gap: 16px;
  width: 688px;
  height: 232px;
`
const ContentProduct = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  width: 280px;
  height: 232px;

  border-radius: 6px;
`
const ContentImgDiv = styled.div`
  margin: 0;
  padding: 0;
  width: 280px;
  height: 160px;
  border-radius: 6px 6px 0px 0px;
  position: relative;
`
const ContentImgBadge = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 2px 6px;
  gap: 4px;

  position: absolute;
  width: 53px;
  height: 22px;
  left: 14px;
  top: 12px;

  background: rgba(16, 157, 140, 0.8);
  border-radius: 2px;

  font-weight: 500;
  font-size: 11px;
  color: #FFFFFF;
`
const ContentImg = styled.img`
  width: 280px;
  height: 160px;
  border-radius: 6px 6px 0px 0px;
`
const ContentStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px;
  /* gap: 24px; */
  width: 280px;
  height: 72px;
  background: #FFFFFF;
  border: 1px solid #EEEEEE;
  border-radius: 0px 0px 6px 6px;
`
const ContentMarket = styled.p`
  font-weight: 600;
  font-size: 15px;
  line-height: 20px;
  color: #212121;
`
const ContentDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 8px;
  height: 40px;
`
const ContentMarketImg = styled.img`
  width: 38px;
  height: 38px;
  border-radius: 50%;
`
const ContentTextStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  height: 40px;
`
const ContentInfo = styled.p`
  font-weight: 400;
  font-size: 13px;
  line-height: 20px;
  /* identical to box height, or 154% */


  /* Gray/600 */

  color: #757575;
`


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