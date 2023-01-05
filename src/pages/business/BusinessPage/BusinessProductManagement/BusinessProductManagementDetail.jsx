import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { ReactComponent as StarIcon } from "assets/main/ratestar.svg";
import { ReactComponent as StarIcon2 } from "assets/main/ratestar2.svg";
import { ReactComponent as Reviewstar } from "assets/main/reviewstar.svg";
import { ReactComponent as ReviewLike } from "assets/main/reviewlike.svg";
import { ReactComponent as ReviewLike0 } from "assets/main/reviewlikedisable.svg";
import { ReactComponent as Flag } from "assets/main/flag.svg";
import { ReactComponent as More } from "assets/main/moreverti.svg";
import { ReactComponent as Filter } from "assets/main/filter.svg";
import Image from 'assets/main/shine.png'
import ReviewImg from 'assets/main/reviewimg.png'
import Avatar from 'assets/common/avatar.png'
import { DetailBody, DetailButtonDiv, DetailButtonStyle, DetailContainer, DetailMarketDiv, DetailMarketInfo, DetailMarketTitle, DetailTabDiv, DetailTabInfo, DetailTabReview, Discount, MarketComments, TabBody, TabButtonStyle, TabContentStyle, TabInfoContent, TabInfoContentText, TabInfoContentTitle, TabInfoType, TabReviewType, TypeLabel, TypeLabelInfo, TypeTextStyle, RateStyle, ReviewLikeButton, ReviewDate, MarketCommentsStyle, MarketDate, MarketId, MarketIdDiv, MarketReviewDiv, MarketTitle, MenuFilterDiv, MenuFilterIcon, Price, ProfileDiv, ProfileTextDiv, FinalPrice, Line, Star, Number, Comments, CouponLabel, CouponLabelInfo1, CouponLabelInfo2, CouponLabelInfoDiv, CouponTextStyle, ReviewContentDiv, UploadImg, DiscountStyle, ButtonStyle, ReviewRateDiv, ReviewRateStyle, ReviewStar, ReviewNum, MenuQuantity, ReviewId, ReviewLikeStyle, ReviewLikeText, ReviewLikeFrame, ReviewListStyle, ReviewMenu, MenuFilterText, ReviewProfileImg, ReviewProfileStyle, ReviewContentProfile } from 'pages/main/DetailsPage/DetailsPageStyle'
import Layout from 'components/layout/Layout/Layout';
import { ImgSizeLayout } from 'components/layout/Img/ImgSizeLayout';

import * as L from 'components/commonUi/Layout';
import * as T from 'components/commonUi/Text';
import { getBizItemDetails } from 'service/item';
import StarRate from 'components/commonUi/StarRate';
import { numberFormat, totalPrice } from 'utils/utils';
import HTMLReactParser from 'html-react-parser';

function BusinessProductManagementDetail() {

  const { id } = useParams();
  const navigate = useNavigate();
  const auth = useSelector(state => state.auth);
  const [item, setItem] = useState({});
  const [detailTab, setDetailTab] = useState(0);
  const [loading, setLoading] = useState(false);

  const getItem = async () => {
    const response = await getBizItemDetails(id);
    const { data } = response.data;
    setItem(data);
    setLoading(true);
  }

  useEffect(() => {
    if (auth.isAuthenticated) getItem();
  }, [auth]);

  return (
    <div>
      {loading &&
        <Layout
          title={item.storeName}
          cart={false}
          bell={false}
          onBackClick={() => navigate(-1)}
        >
          <DetailBody>
            <DetailContainer>
              <ImgSizeLayout src={item.images[0]} _height={390} _width={728} />

              <DetailMarketDiv>
                <DetailMarketInfo>
                  <L.FlexRows _content="space-between" _items="center" _gap={12}>
                    <L.FlexRows >
                      <ImgSizeLayout _width={40} _height={40} _bdr={50} src={item.profile} />
                      <L.FlexCols _padding={0} _gap={4}>
                        <T.Text _weight={600} _size={18} _color="gray900">{item.storeName}</T.Text>
                        <T.Text _weight={400} _size={14} _color="gray800">{item.storeAddress}</T.Text>
                      </L.FlexCols>
                    </L.FlexRows>

                    {/* <L.FlexRows _padding={0} _gap={16} _items="center" _width={64}>
                      <Flag />
                      <button
                        type='button'
                      >
                        <More />
                      </button>
                    </L.FlexRows> */}
                  </L.FlexRows>
                </DetailMarketInfo>

                <Line />

                <DetailMarketTitle>
                  <MarketTitle>{item.name}</MarketTitle>
                  <RateStyle>
                    <StarRate rate={item.rating} />
                    <Number>({item.rating})</Number>
                  </RateStyle>
                  <DiscountStyle>
                    <Discount>{item.salePercent}%</Discount>
                    <Price>{numberFormat(item.price)}원</Price>
                  </DiscountStyle>
                  <FinalPrice>{totalPrice(item.price, item.salePercent)}원</FinalPrice>
                </DetailMarketTitle>
              </DetailMarketDiv>




              <DetailTabDiv>
                <TabButtonStyle>
                  <DetailTabInfo
                    onClick={() => setDetailTab(0)}
                    infocolor={detailTab === 0}
                  >
                    상세정보
                  </DetailTabInfo>
                  <DetailTabReview
                    onClick={() => setDetailTab(1)}
                    reviewcolor={detailTab === 1}
                  >
                    상품리뷰
                  </DetailTabReview>
                </TabButtonStyle>
                <TabContentStyle>
                  <TabContent detailTab={detailTab} item={item} />
                </TabContentStyle>
              </DetailTabDiv>


            </DetailContainer>

            <ButtonStyle>
              <DetailButtonDiv>
                <DetailButtonStyle
                  onClick={() => navigate(`/business/edit/${id}`)}
                >수정하기</DetailButtonStyle>
              </DetailButtonDiv>
            </ButtonStyle>
          </DetailBody>


        </Layout>
      }
    </div>
  )
}





function TabContent({ detailTab, item }) {
  return [

    //=====================상세정보=====================
    <div>
      <TabBody>
        <TabInfoType>
          <TypeTextStyle>
            <TypeLabel>구매 형태</TypeLabel>
            <TypeLabelInfo>{item.type == 'GROUP' ? '공동구매 상품' : '일반상품'}</TypeLabelInfo>
          </TypeTextStyle>
          <TypeTextStyle>
            <TypeLabel>카테고리</TypeLabel>
            <TypeLabelInfo>{item.categories ? item.categories.join(', ') : ''}</TypeLabelInfo>
          </TypeTextStyle>
          <TypeTextStyle>
            <TypeLabel>배달/주문금액</TypeLabel>
            <TypeLabelInfo>배달비 2,000원, 최소주문 10,000원</TypeLabelInfo>
          </TypeTextStyle>
          <TypeTextStyle>
            <TypeLabel>배달/픽업</TypeLabel>
            <TypeLabelInfo>{item.recetiveType ? item.recetiveType.join(', ') : ''} 가능</TypeLabelInfo>
          </TypeTextStyle>
          <CouponTextStyle>
            <CouponLabel>쿠폰</CouponLabel>
            <CouponLabelInfoDiv>
              <CouponLabelInfo1>해당 상점에 쿠폰이 있습니다.</CouponLabelInfo1>
              <CouponLabelInfo2>{`상점(스토어) > 소식을 확인해 주세요.`}</CouponLabelInfo2>
            </CouponLabelInfoDiv>
          </CouponTextStyle>

        </TabInfoType>
      </TabBody>
      <Line />
      <TabBody>
        <TabInfoContent>
          <TabInfoContentTitle>상품 정보</TabInfoContentTitle>
          <TabInfoContentText>
            {HTMLReactParser(item.description)}
          </TabInfoContentText>
        </TabInfoContent>
      </TabBody>
    </div>,

    //=====================상품리뷰=====================
    <div>
      <TabBody>
        <TabReviewType>
          <ReviewRateStyle>
            <ReviewRateDiv>
              <ReviewStar><StarRate rate={item.rating} width={28} /></ReviewStar>
            </ReviewRateDiv>
            <ReviewRateDiv>
              <ReviewNum color="#212121">{item.rating}</ReviewNum>
              <ReviewNum color="#BDBDBD">/ 5</ReviewNum>
            </ReviewRateDiv>
          </ReviewRateStyle>


          <ReviewListStyle>

            <ReviewMenu>
              <MenuQuantity>총 리뷰 {item.reviews.length} 건</MenuQuantity>
              <MenuFilterDiv>
                <MenuFilterText>최신 순</MenuFilterText>
                <MenuFilterIcon><Filter /></MenuFilterIcon>
              </MenuFilterDiv>
            </ReviewMenu>

            <Line />

            {
              item.reviews.length === 0
                ? <L.NoneDataContainer>
                  <T.Text _size={15} _weight={400} _color='gray600'>등록된 상품 리뷰가 없습니다.</T.Text>
                </L.NoneDataContainer>
                : item.reviews.map(review => (
                  <ReviewContentDiv>
                    <ReviewContentProfile>
                      <ReviewProfileStyle>
                        <ReviewProfileImg src={Avatar} />
                        <ProfileDiv>
                          <ProfileTextDiv>
                            <ReviewId>과일싹쓸이</ReviewId>
                            <ReviewDate>2일 전</ReviewDate>
                          </ProfileTextDiv>
                          <div><Reviewstar /></div>
                        </ProfileDiv>
                      </ReviewProfileStyle>
                      {/* <ReportText>신고하기</ReportText> */}
                    </ReviewContentProfile>
                    <UploadImg src={ReviewImg} />
                    <Comments>맛있습니다~</Comments>
                    <ReviewLikeStyle>
                      <ReviewLikeFrame color={true}>
                        <ReviewLikeButton><ReviewLike /></ReviewLikeButton>
                        <ReviewLikeText color={true}>도움돼요!</ReviewLikeText>
                        <ReviewLikeText color={true}>1</ReviewLikeText>
                      </ReviewLikeFrame>
                    </ReviewLikeStyle>
                  </ReviewContentDiv>
                ))
            }

            {/* =======Review1====== */}
            {/* <ReviewContentDiv>
              <ReviewContentProfile>
                <ReviewProfileStyle>
                  <ReviewProfileImg src={Avatar} />
                  <ProfileDiv>
                    <ProfileTextDiv>
                      <ReviewId>과일싹쓸이</ReviewId>
                      <ReviewDate>2일 전</ReviewDate>
                    </ProfileTextDiv>
                    <div><Reviewstar /></div>
                  </ProfileDiv>
                </ReviewProfileStyle> */}
            {/* <ReportText>신고하기</ReportText> */}
            {/* </ReviewContentProfile>
              <UploadImg src={ReviewImg} />
              <Comments>맛있습니다~</Comments>
              <ReviewLikeStyle>
                <ReviewLikeFrame color={true}>
                  <ReviewLikeButton><ReviewLike /></ReviewLikeButton>
                  <ReviewLikeText color={true}>도움돼요!</ReviewLikeText>
                  <ReviewLikeText color={true}>1</ReviewLikeText>
                </ReviewLikeFrame>
              </ReviewLikeStyle>
            </ReviewContentDiv> */}
            {/* =======Review2====== */}
            {/* <ReviewContentDiv>
              <ReviewContentProfile>
                <ReviewProfileStyle>
                  <ReviewProfileImg src={Avatar} />
                  <ProfileDiv>
                    <ProfileTextDiv>
                      <ReviewId>우리동네</ReviewId>
                      <ReviewDate>2일 전</ReviewDate>
                    </ProfileTextDiv>
                    <div><Reviewstar /></div>
                  </ProfileDiv>
                </ReviewProfileStyle> */}
            {/* <ReportText>신고하기</ReportText> */}
            {/* </ReviewContentProfile> */}
            {/* <UploadImg src={ReviewImg}/> */}
            {/* <Comments>담에 또 먹을래요~~~~~~~~</Comments>
              <ReviewLikeStyle>
                <ReviewLikeFrame color={false}>
                  <ReviewLikeButton><ReviewLike0 /></ReviewLikeButton>
                  <ReviewLikeText color={false}>도움돼요!</ReviewLikeText>
                  <ReviewLikeText color={false}>0</ReviewLikeText>
                </ReviewLikeFrame>
              </ReviewLikeStyle>
            </ReviewContentDiv> */}

            {/* =======MarketReview====== */}
            {/* <MarketReviewDiv>
              <ReviewProfileImg src={Avatar} />
              <MarketCommentsStyle>
                <MarketIdDiv>
                  <MarketId>사장님</MarketId>
                  <MarketDate>2일 전</MarketDate>
                </MarketIdDiv>
                <MarketComments>
                  <p>주문해주셔서 감사합니다 우리동네님!</p><br />
                  <p>더 좋은 상품으로 보답하겠습니다.</p>
                  <p>감사합니다 ^^</p><br />
                </MarketComments>
              </MarketCommentsStyle>
            </MarketReviewDiv> */}
            {/* =======Review3====== */}
            {/* <ReviewContentDiv>
              <ReviewContentProfile>
                <ReviewProfileStyle>
                  <ReviewProfileImg src={Avatar} />
                  <ProfileDiv>
                    <ProfileTextDiv>
                      <ReviewId>우리동네</ReviewId>
                      <ReviewDate>2일 전</ReviewDate>
                    </ProfileTextDiv>
                    <div><Reviewstar /></div>
                  </ProfileDiv>
                </ReviewProfileStyle> */}
            {/* <ReportText>신고하기</ReportText> */}
            {/* </ReviewContentProfile> */}
            {/* <UploadImg src={ReviewImg}/> */}
            {/* <Comments>싱싱하고 맛있어요</Comments>
              <ReviewLikeStyle>
                <ReviewLikeFrame color={false}>
                  <ReviewLikeButton><ReviewLike0 /></ReviewLikeButton>
                  <ReviewLikeText color={false}>도움돼요!</ReviewLikeText>
                  <ReviewLikeText color={false}>0</ReviewLikeText>
                </ReviewLikeFrame>
              </ReviewLikeStyle>
            </ReviewContentDiv> */}



          </ReviewListStyle>
        </TabReviewType>
      </TabBody>
    </div>
  ][detailTab]
}

export default BusinessProductManagementDetail