import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';

import maindata from 'assets/data/maindata'

import BusinessHeader from 'components/Buisness/Header/BusinessHeader'
import { ReactComponent as Right } from "assets/main/right.svg";
import { ReactComponent as OrderIcon } from "assets/icons/business/neworder.svg";
import { ReactComponent as Pickup } from "assets/icons/business/pickup.svg";
import { ReactComponent as NewReview } from "assets/icons/business/newreview.svg";
import { MoreNavBody, MoreContainer, MoreDiv, FooterText, Logo } from 'pages/main/MorePage/MorePageStyle'
import { TermsDiv, TermsTitle, TermsIconStyle } from 'pages/service/TermsPage/TermsPageStyle'
import { TitleText, InfoCard, InfoIconStyle, CardCount, CardText, Footer, InfoDiv, FloatingContentDiv, FloatingContentTitle, FloatingContentIcon, FloatingToggleDiv, CardTextDiv, CouponDiv, CouponInfoDiv, DownloadDiv, DownloadText, DownloadCount, DownloadCountTextB, DownloadCountTextN, MyBestProductContent, FloatingDiv, FooterDiv, CouponCard, CouponTitleDiv, CouponBadge, CouponTitleText, CouponTitleInfoDiv, FloatingDivT, EmptyDiv, EmptyText, EmptyButton, EmptyButtonIcon, EmptyButtonText } from './BusinessPageStyle'
import { ContentDate, ContentImg, ContentMarket, ContentProduct, ContentStyle, ContentTitle, Discount, DiscountStyle, Price, FinalPrice, RateStyle, Star, Number } from 'components/Main/Main/MainBestCollection/MainBestCollectionStyle'
import { getDashboard } from 'service/biz';
import { useSelector, useDispatch } from 'react-redux';
import * as L from 'components/commonUi/Layout';
import FooterLayout from 'components/layout/Footer/Footer';
import { authActions } from 'store/slices/auth';
import { ProductCard } from 'components/Main/productDetails/ProductCard';
import StoreModal from 'components/layout/Modal/StoreModal';
import Layout from 'components/layout/Layout/Layout';

function BusinessPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);
  const [modal, setModal] = useState(false);
  const [data, setData] = useState({
    bizId: "",
    storeId: "",
    approvalStatus: false,
    orderCount: "",
    deliveryCount: "",
    reviewCount: "",
    itemList: {},
  });

  // 비즈 회원 체크
  const loadData = async () => {
    const response = await getDashboard();

    if (response && response.data) {
      const { data } = response.data;
      if (!data) {
        return navigate("/", { replace: true, state: { error: "잘못된 접근입니다." } })
      }

      setData(data);
      dispatch(authActions.biz(data));

      // 상점 게시 모달 오픈
      // if (!data.approvalStatus || !data.address) {
      //   setModal(true);
      // }
    }
  }

  useEffect(() => {
    if (auth.isAuthenticated) loadData()
  }, [auth])

  return (
    <>
      <BusinessHeader />
      <Layout>

        <L.Container>
          {/* ==================== 가게 정보 ==================== */}
          <L.Contents>
            <TitleText>가게 정보</TitleText>
            <L.GridTwo>
              <InfoCard>
                <OrderIcon />
                <CardTextDiv>
                  <CardText>신규 주문</CardText>
                  <CardCount>{data.orderCount} 건</CardCount>
                </CardTextDiv>
              </InfoCard>
              <InfoCard>
                <InfoIconStyle><Pickup /></InfoIconStyle>
                <CardTextDiv>
                  <CardText>배달/픽업</CardText>
                  <CardCount>{data.deliveryCount} 건</CardCount>
                </CardTextDiv>
              </InfoCard>
              <InfoCard>
                <InfoIconStyle><NewReview /></InfoIconStyle>
                <CardTextDiv>
                  <CardText>신규 리뷰</CardText>
                  <CardCount>{data.reviewCount} 건</CardCount>
                </CardTextDiv>
              </InfoCard>
            </L.GridTwo>
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
            {
              !data.itemList.items || (data.itemList.items && data.itemList.items.length) === 0 &&
              <EmptyDiv>
                <EmptyText>아직 등록된 상품이 없습니다.</EmptyText>
                <EmptyButton onClick={() => navigate("/business/upload")}>
                  <EmptyButtonText>상품 등록</EmptyButtonText>
                  <EmptyButtonIcon><Right /></EmptyButtonIcon>
                </EmptyButton>
              </EmptyDiv>
            }
            {
              data.itemList.items && data.itemList.items.length > 0 &&
              <L.FlexRowsCP>
                <MyBestProductContent>
                  {
                    data.itemList.items.map((item, index) => (
                      <React.Fragment key={index}>
                        <ProductCard item={item} lastRef={null} width={150} isCart={false} />
                      </React.Fragment>
                    ))
                  }
                </MyBestProductContent>
              </L.FlexRowsCP>
            }
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


      </Layout>
      {
        modal && (
          <StoreModal />
        )
      }
    </>
  )
}


export default BusinessPage