import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

import maindata from '../../../assets/data/maindata'

import BusinessHeader from '../../../components/Buisness/Header/BusinessHeader'
import { ReactComponent as Right } from "../../../assets/main/right.svg";
import { ReactComponent as OrderIcon } from "../../../assets/icons/business/neworder.svg";
import { ReactComponent as Pickup } from "../../../assets/icons/business/pickup.svg";
import { ReactComponent as NewReview } from "../../../assets/icons/business/newreview.svg";
import FooterImg from '../../../assets/main/footerlogo.svg'
import { ReactComponent as StarIcon } from "../../../assets/main/ratestar.svg";
import { ReactComponent as Floating } from "../../../assets/icons/business/floating.svg";

import {MoreNavBody,MoreContainer,MoreDiv,Footer,FooterText,Logo} from '../../../pages/main/MorePage/MorePageStyle'
import {TermsDiv,TermsTitle,TermsIconStyle} from '../../main/TermsPage/TermsPageStyle'
import {TitleText,InfoCard,InfoIconStyle,CardCount,CardText,InfoDiv,CardTextDiv,CouponDiv,CouponInfoDiv,DownloadDiv,DownloadText,DownloadCount,DownloadCountTextB,DownloadCountTextN,MyBestProductContent,FloatingDiv} from './BusinessPageStyle'
import {ContentDate,ContentImg,ContentMarket,ContentProduct,ContentStyle,ContentTitle,Discount,DiscountStyle,Price,FinalPrice,RateStyle,Star,Number} from '../../../components/Main/Main/MainBestCollection/MainBestCollectionStyle'

function BusinessPage() {
  let [item] = useState(maindata)
  return (
    <div>
      <BusinessHeader/>

      <MoreNavBody>
{/* ==================== 가게 정보 ==================== */}
        <MoreContainer>
          <MoreDiv>
            <TitleText>가게 정보</TitleText>
            <InfoDiv>
              <InfoCard>
                <InfoIconStyle><OrderIcon/></InfoIconStyle>
                <CardTextDiv>
                  <CardText>신규 주문</CardText>
                  <CardCount>0 건</CardCount>
                </CardTextDiv>
              </InfoCard>
              <InfoCard>
                <InfoIconStyle><Pickup/></InfoIconStyle>
                <CardTextDiv>
                  <CardText>배달/픽업</CardText>
                  <CardCount>0 건</CardCount>
                </CardTextDiv>
              </InfoCard>
              <InfoCard>
                <InfoIconStyle><NewReview/></InfoIconStyle>
                <CardTextDiv>
                  <CardText>신규 리뷰</CardText>
                  <CardCount>0 건</CardCount>
                </CardTextDiv>
              </InfoCard>
            </InfoDiv>
          </MoreDiv>
        </MoreContainer>

{/* ==================== 발행한 쿠폰 ==================== */}
        <MoreContainer>
          <MoreDiv>
            <TitleText>발행한 쿠폰</TitleText>
            <CouponDiv>
              
              {/* <CouponCard>
                <CouponTitleDiv>
                  <CouponBadge>발행중</CouponBadge>
                  <CouponTitleText>고객감사 할인 쿠폰</CouponTitleText>
                </CouponTitleDiv>
                <CouponTitleInfoDiv>
                <p>22.01.16 까지</p>
                <p>방문결제 시 현장 할인</p>
                </CouponTitleInfoDiv>
              </CouponCard> */}

              <CouponInfoDiv>
                <DownloadDiv>
                  <DownloadText>쿠폰 다운로드 수</DownloadText>
                  <DownloadCount>
                    <DownloadCountTextB>0</DownloadCountTextB>
                    <DownloadCountTextN>건</DownloadCountTextN>
                  </DownloadCount>
                </DownloadDiv>
                <DownloadDiv>
                  <DownloadText>쿠폰 사용</DownloadText>
                  <DownloadCount>
                    <DownloadCountTextB>0</DownloadCountTextB>
                    <DownloadCountTextN>건</DownloadCountTextN>
                  </DownloadCount>
                </DownloadDiv>
              </CouponInfoDiv>
            </CouponDiv>
          </MoreDiv>
        </MoreContainer>

{/* ==================== 내 상점 인기상품 ==================== */}
        <MoreContainer>
          <MoreDiv>
            <TitleText>내 상점 인기상품</TitleText>

            {/* <EmptyDiv>
              <EmptyText>아직 등록된 상품이 없습니다.</EmptyText>
              <EmptyButton>
                <EmptyButtonText>상품 관리</EmptyButtonText>
                <EmptyButtonIcon><Right/></EmptyButtonIcon>
              </EmptyButton>
            </EmptyDiv> */}
              <MyBestProductContent
                // onClick={()=>{navigate(`/item/${}`, { state: {item}})}}
              >
                {
                  item.map((a, i)=>{
                    if(i%2 === 0){
                    return(
                      <MyBestProductCard item={item[i]} i={i}/>
                      )
                    }
                  })
                }
                </MyBestProductContent>
            {/* ? <Produ : <EmptyDiv/>  */}
          </MoreDiv>
        </MoreContainer>

{/* ==================== 비즈 정보 관리 ==================== */}
        <MoreContainer>
          <MoreDiv>
        <TermsDiv>
            <TermsTitle>비즈 정보 관리</TermsTitle>
            <Link to="">
              <TermsIconStyle><Right/></TermsIconStyle>
            </Link>
          </TermsDiv>
          <TermsDiv>
            <TermsTitle>상품 관리</TermsTitle>
            <Link to="">
              <TermsIconStyle><Right/></TermsIconStyle>
            </Link>
          </TermsDiv>
          <TermsDiv>
            <TermsTitle>주문 관리</TermsTitle>
            <Link to="">
              <TermsIconStyle><Right/></TermsIconStyle>
            </Link>
          </TermsDiv>
          <TermsDiv>
            <TermsTitle>리뷰 관리</TermsTitle>
            <Link to="">
              <TermsIconStyle><Right/></TermsIconStyle>
            </Link>
          </TermsDiv>
          <TermsDiv>
            <TermsTitle>정산 관리</TermsTitle>
            <Link to="">
              <TermsIconStyle><Right/></TermsIconStyle>
            </Link>
          </TermsDiv>
          <TermsDiv>
            <TermsTitle>상점 소식 관리</TermsTitle>
            <Link to="">
              <TermsIconStyle><Right/></TermsIconStyle>
            </Link>
          </TermsDiv>
          </MoreDiv>

          <Footer>
            <Logo src={FooterImg} />
            <FooterText>
              <span>(주)우리동네</span><br />
              <span>대표자: 윤원규 / 사업자등록번호: 893-62-00579 / 통신판매신고: 김포마산-1234</span><br />
              <span>주소: 경기도 김포시 김포한강8로 173-28 108동 103호 / 개인정보관리책임자: 홍길동</span><br />
              <span>고객센터: 123-456-78912 / 이메일문의: example@email.com</span>
            </FooterText>
          </Footer>
        </MoreContainer>

          <FloatingDiv>
            <Floating/>
          </FloatingDiv>
      </MoreNavBody>


    </div>
  )
}
function MyBestProductCard(props){
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
export default BusinessPage