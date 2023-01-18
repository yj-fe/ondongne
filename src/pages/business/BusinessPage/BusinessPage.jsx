import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';

import maindata from 'assets/data/maindata'

import BusinessHeader from 'components/Buisness/Header/BusinessHeader'
import { ReactComponent as Right } from "assets/main/right.svg";
import { ReactComponent as OrderIcon } from "assets/icons/business/neworder.svg";
import { ReactComponent as Pickup } from "assets/icons/business/pickup.svg";
import { ReactComponent as NewReview } from "assets/icons/business/newreview.svg";
import { ReactComponent as StarIcon } from "assets/main/ratestar.svg";
import { ReactComponent as Floating } from "assets/icons/business/floating.svg";
import { ReactComponent as FloatingPush } from "assets/icons/business/floatingpush.svg";
import { ReactComponent as Coupon } from "assets/icons/business/Coupon.svg";
import { ReactComponent as Trans } from "assets/icons/business/Trans.svg";
import { ReactComponent as Product } from "assets/icons/business/Product.svg";
import { ReactComponent as Order } from "assets/icons/business/Order.svg";

import { MoreNavBody, MoreContainer, MoreDiv, FooterText, Logo } from 'pages/main/MorePage/MorePageStyle'
import { TermsDiv, TermsTitle, TermsIconStyle } from 'pages/service/TermsPage/TermsPageStyle'
import { TitleText, InfoCard, InfoIconStyle, CardCount, CardText, Footer, InfoDiv, FloatingContentDiv, FloatingContentTitle, FloatingContentIcon, FloatingToggleDiv, CardTextDiv, CouponDiv, CouponInfoDiv, DownloadDiv, DownloadText, DownloadCount, DownloadCountTextB, DownloadCountTextN, MyBestProductContent, FloatingDiv, FooterDiv, CouponCard, CouponTitleDiv, CouponBadge, CouponTitleText, CouponTitleInfoDiv, FloatingDivT } from './BusinessPageStyle'
import { ContentDate, ContentImg, ContentMarket, ContentProduct, ContentStyle, ContentTitle, Discount, DiscountStyle, Price, FinalPrice, RateStyle, Star, Number } from 'components/Main/Main/MainBestCollection/MainBestCollectionStyle'
import { getBizMember } from 'service/biz';
import { useSelector } from 'react-redux';

import * as L from 'components/commonUi/Layout';
import * as T from 'components/commonUi/Text';

import Layout from 'components/layout/Layout/Layout';
import { FooterLogo } from 'components/commonUi/Icon';
import { Grid } from 'swiper';
import FooterLayout from 'components/layout/Footer/Footer';

function BusinessPage() {
  const navigate = useNavigate();
  const [item] = useState(maindata)
  const auth = useSelector(state => state.auth);
  const [floating, setFloating] = useState(false)

  // 비즈 회원 체크
  const bizMember = async () => {
    const response = await getBizMember();
    const { data } = response.data;

    if (!data || !data.bizStatus) {
      return navigate("/")
    }
  }

  useEffect(() => {
    if (auth.isAuthenticated) bizMember()
  }, [auth])

  return (
    <div>
      <BusinessHeader />
      <Layout>

        <L.Container>
        {/* ==================== 가게 정보 ==================== */}
          <L.Contents>
            <TitleText>가게 정보</TitleText>
                <L.GridTwo>
                  <InfoCard>
                    <OrderIcon/>
                    <CardTextDiv>
                      <CardText>신규 주문</CardText>
                      <CardCount>0 건</CardCount>
                    </CardTextDiv>
                  </InfoCard>
                  <InfoCard>
                    <InfoIconStyle><Pickup /></InfoIconStyle>
                    <CardTextDiv>
                      <CardText>배달/픽업</CardText>
                      <CardCount>0 건</CardCount>
                    </CardTextDiv>
                  </InfoCard>
                  <InfoCard>
                    <InfoIconStyle><NewReview /></InfoIconStyle>
                    <CardTextDiv>
                      <CardText>신규 리뷰</CardText>
                      <CardCount>0 건</CardCount>
                    </CardTextDiv>
                  </InfoCard>
                </L.GridTwo>
              {/* <InfoCard>
                <InfoIconStyle><OrderIcon /></InfoIconStyle>
                <CardTextDiv>
                  <CardText>신규 주문</CardText>
                  <CardCount>0 건</CardCount>
                </CardTextDiv>
              </InfoCard>
              <InfoCard>
                <InfoIconStyle><Pickup /></InfoIconStyle>
                <CardTextDiv>
                  <CardText>배달/픽업</CardText>
                  <CardCount>0 건</CardCount>
                </CardTextDiv>
              </InfoCard>
              <InfoCard>
                <InfoIconStyle><NewReview /></InfoIconStyle>
                <CardTextDiv>
                  <CardText>신규 리뷰</CardText>
                  <CardCount>0 건</CardCount>
                </CardTextDiv>
              </InfoCard> */}
              {/* </L.FlexRowsWrapMedia> */}
          </L.Contents>

        </L.Container>


        {/* ==================== 2차개발 - 발행한 쿠폰 ==================== */}
        {/* <L.Container>
          <L.Contents>
            <TitleText>발행한 쿠폰</TitleText>
            <CouponDiv> */}
              {/* ========== 쿠폰배너생성시 뜨는 예시 ======= */}
              {/* <CouponCard>
                <CouponTitleDiv>
                  <CouponBadge>발행중</CouponBadge>
                  <CouponTitleText>고객감사 할인 쿠폰</CouponTitleText>
                </CouponTitleDiv>
                <CouponTitleInfoDiv>
                <p>22.01.16 까지</p>
                <p>방문결제 시 현장 할인</p>
                </CouponTitleInfoDiv>
              </CouponCard>

              <CouponInfoDiv>
                <L.FlexRowsWrap>
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
                </L.FlexRowsWrap>
              </CouponInfoDiv>
            </CouponDiv>
          </L.Contents>
        </L.Container> */}

        {/* ==================== 내 상점 인기상품 ==================== */}
        <L.Container>
          <L.Contents>
            <TitleText>내 상점 인기상품</TitleText>

            {/* <EmptyDiv>
              <EmptyText>아직 등록된 상품이 없습니다.</EmptyText>
              <EmptyButton>
                <EmptyButtonText>상품 관리</EmptyButtonText>
                <EmptyButtonIcon><Right/></EmptyButtonIcon>
              </EmptyButton>
            </EmptyDiv> */}
            <L.FlexRowsCP>
            <MyBestProductContent
            // onClick={()=>{navigate(`/item/${}`, { state: {item}})}}
            >
            
              {
                item.map((a, i) => {
                    return (
                      <MyBestProductCard item={item[i]} i={i} />
                    )
                  // }
                })
              }
            </MyBestProductContent>
            </L.FlexRowsCP>
            {/* item있으면 ? <MyBestProductContent/> : <EmptyDiv/>  */}
          </L.Contents>
        </L.Container>

        {/* ==================== 비즈 정보 관리 ==================== */}
        <L.Container>
          <L.Contents>
              <Link to="/business/management">
            <TermsDiv>
              <TermsTitle>비즈 정보 관리</TermsTitle>
                <TermsIconStyle><Right /></TermsIconStyle>
            </TermsDiv>
              </Link>
              <Link to="/business/product">
            <TermsDiv>
              <TermsTitle>상품 관리</TermsTitle>
                <TermsIconStyle><Right /></TermsIconStyle>
            </TermsDiv>
              </Link>
              <Link to="/business/order">
            <TermsDiv>
              <TermsTitle>주문 관리</TermsTitle>
                <TermsIconStyle><Right /></TermsIconStyle>
            </TermsDiv>
              </Link>
              <Link to="/business/review">
            <TermsDiv>
              <TermsTitle>리뷰 관리</TermsTitle>
                <TermsIconStyle><Right /></TermsIconStyle>
            </TermsDiv>
              </Link>
              {/* <Link to="">
            <TermsDiv>
              <TermsTitle>정산 관리</TermsTitle>
                <TermsIconStyle><Right /></TermsIconStyle>
            </TermsDiv>
              </Link> */}
              {/* 2차개발-상점 소식 관리 */}
              {/* <Link to="">
                <TermsDiv>
                  <TermsTitle>상점 소식 관리</TermsTitle>
                    <TermsIconStyle><Right /></TermsIconStyle>
                </TermsDiv>
              </Link> */}
          </L.Contents>
        </L.Container>

        <L.Inner>
          <FooterLayout />
        </L.Inner>

          <FloatingDivT
            onClick={() => setFloating(!floating)}
          >
            {floating && <FloatingToggle />}
            {floating ? <FloatingPush /> : <Floating />}
          </FloatingDivT>
        </Layout>


    </div>
  )
}

function MyBestProductCard(props) {
  return (
    <div>
      <ContentProduct>
        <ContentImg src={props.item.img} />
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
            <Star><StarIcon /></Star>
            <Number>(4.5)</Number>
          </RateStyle>
        </ContentStyle>
      </ContentProduct>
    </div>
  )
}
function FloatingToggle(props) {
  return (
    <div>
      <FloatingToggleDiv>
        <FloatingContentDiv>
          <FloatingContentIcon><Product /></FloatingContentIcon>
          <Link to="/business/upload">
            <FloatingContentTitle>상품 등록</FloatingContentTitle>
          </Link>
        </FloatingContentDiv>
        <FloatingContentDiv>
          <FloatingContentIcon><Order /></FloatingContentIcon>
          <FloatingContentTitle>소식 등록</FloatingContentTitle>
        </FloatingContentDiv>
        {/* <FloatingContentDiv>
          <FloatingContentIcon><Coupon /></FloatingContentIcon>
          <Link to="/business/coupon">
            <FloatingContentTitle>쿠폰 등록</FloatingContentTitle>
          </Link>
        </FloatingContentDiv> */}
        <FloatingContentDiv>
          <FloatingContentIcon><Trans /></FloatingContentIcon>
          <Link to="/">
            <FloatingContentTitle>일반 전환</FloatingContentTitle>
          </Link>
        </FloatingContentDiv>
      </FloatingToggleDiv>
    </div>
  )
}

export default BusinessPage