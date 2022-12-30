import React, { useState } from 'react'
import * as L from 'components/commonUi/Layout';
import * as T from 'components/commonUi/Text';
import Layout from 'components/layout/Layout/Layout';




import { useLocation, useNavigate, useParams } from "react-router-dom";
import data from 'assets/data/detailtest'
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
import { DetailBody, DetailButtonDiv, DetailButtonStyle, DetailContainer, DetailImg, DetailMarketDiv, DetailMarketInfo, DetailMarketTitle, DetailTabDiv, DetailTabInfo, DetailTabReview, Discount, MarketComments, TabBody, TabButtonStyle, TabContentStyle, TabInfoContent, TabInfoContentText, TabInfoContentTitle, TabInfoType, TabReviewType, TypeLabel, TypeLabelInfo, TypeTextStyle, RateStyle, ReviewLikeButton, ReviewDate, MarketCommentsStyle, MarketDate, MarketIcon, MarketId, MarketIdDiv, MarketLocation, MarketName, MarketProfile, MarketReviewDiv, MarketTitle, MenuFilterDiv, MenuFilterIcon, Price, ProfileDiv, ProfileImg, ProfileName, ProfileTextDiv, MoreStyle, FinalPrice, FlagStyle, FlagText, IconStyle, Line, Star, Number, Comments, CouponLabel, CouponLabelInfo1, CouponLabelInfo2, CouponLabelInfoDiv, CouponTextStyle, ReviewContentDiv, UploadImg, DiscountStyle, ButtonStyle, ReviewRateDiv, ReviewRateStyle, ReviewStar, ReviewNum, MenuQuantity, ReviewId, ReviewLikeStyle, ReviewLikeText, ReviewLikeFrame, ReviewListStyle, ReviewMenu, MenuFilterText, ReviewProfileImg, ReviewProfileStyle, ReviewContentProfile } from './DetailsPageStyle'
import MainHeader from 'components/Main/Main/BasicHeader/BasicHeader';
import ModalMorePage from 'components/Main/More/ModalMorePage'
import { useSelector } from 'react-redux';
import Confirm from 'components/commonUi/Confirm';
import { Cart } from 'components/commonUi/Icon';
import { ImgSizeLayout } from 'components/layout/Img/ImgSizeLayout';




function DetailsPageT(props) {


  const [detailTab, setDetailTab] = useState(0)
  // let [item] = useState(data)
  // let {id} = useParams()
  const [modal, setModal] = useState(false);
  const navigate = useNavigate();
  const auth = useSelector(state => state.auth);
  const [confirm, setConfirm] = useState(false);

  // const{ 
  //   state: {
  //     product: {id, title, img, price },
  //   },
  // } = useLocation();


  const ShowMoreModal = () => {
    setModal(!modal);
  }
  const PropsModal = () => {
    setModal(!modal);
  }

  const paymentsOrder = () => {
    console.log(auth)
    if(auth.isAuthenticated) {
      navigate('/order/new/:id')
    } else {
      setConfirm(true)
    }
  }




  return (
    <div>


      <Layout
        title="아재의 과일"
        bell={false}
        cart={false}
        onBackClick={() => navigate(-1)}
      >
        <L.Container >

          <L.Contents _padding='0px'>
            <L.FlexCols >
              <DetailImg src={Image} />

              <L.FlexCols >
                <L.FlexRows _content='space-between' _items='center' _padding=' 16px 20px'>
                  <L.FlexRows _width='150px' _content='left'>
                    <ImgSizeLayout  _bdr={50} _width={40} _height={40} src={Image} />
                    <L.FlexCols _gap={1}>
                      <T.Text _size={16} _weight={500} _color='gray900' >아재의 과일</T.Text>
                      <T.Text _size={13} _weight={400} _color='gray600' >김포 풍무동</T.Text>
                    </L.FlexCols>
                  </L.FlexRows>
                  <L.FlexRows _width='72px'>
                    <L.FlexCols _content='center'>
                      <Flag />
                      <T.Text _size={12} _weight={400} _color='gray900' >단골찜</T.Text>
                    </L.FlexCols>
                    <More />

                  </L.FlexRows>

                </L.FlexRows>

                <Line/>

                <L.FlexCols>
                  
                </L.FlexCols>

              </L.FlexCols>



            </L.FlexCols>
          </L.Contents>
        </L.Container>
      </Layout>
              


      <DetailBody>
        <DetailContainer>








          {/* <DetailMarketDiv>
            <DetailMarketInfo>
              <MarketProfile>
                <ProfileImg src={props.item[id].img}/>
                <ProfileName>
                  <MarketName>{props.item[id].title}</MarketName>
                  <MarketLocation>{props.item[id].location}</MarketLocation>
                </ProfileName>
              </MarketProfile>

              <MarketIcon>
                <IconStyle>
                  <Flag/>
                </IconStyle>
                <IconStyle>
                  <More/>
                </IconStyle>
              </MarketIcon>
            </DetailMarketInfo>

            <Line/>

            <DetailMarketTitle>
              <MarketTitle>{props.item[id].title}</MarketTitle>
              <RateStyle>
                <Star><StarIcon/></Star>
                <Number>(4.5)</Number>
              </RateStyle>
              <DiscountStyle>
                <Discount>{props.item[id].discount}</Discount>
                <Price>{props.item[id].price}</Price>
              </DiscountStyle>
              <FinalPrice>{props.item[id].finalprice}</FinalPrice>
            </DetailMarketTitle>
          </DetailMarketDiv> */}

          <DetailMarketDiv>
            <DetailMarketInfo>
              <MarketProfile>
                <ProfileImg src={Image} />
                <ProfileName>
                  <MarketName>아재의 과일</MarketName>
                  <MarketLocation>김포 풍무동</MarketLocation>
                </ProfileName>
              </MarketProfile>

              <MarketIcon>
                <FlagStyle>
                  <IconStyle>
                    <Flag />
                  </IconStyle>
                  <FlagText>단골찜</FlagText>
                </FlagStyle>
                <MoreStyle
                  type='button'
                  onClick={ShowMoreModal}
                >
                  <More />
                </MoreStyle>
              </MarketIcon>
            </DetailMarketInfo>

            <Line />

            <DetailMarketTitle>
              <MarketTitle>송이송이 달달 상큼 샤인머스켓 1송이 + 딸기 300g 증정</MarketTitle>
              <RateStyle>
                <Star><StarIcon /></Star>
                <Number>(4.5)</Number>
              </RateStyle>
              <DiscountStyle>
                <Discount>40%</Discount>
                <Price>25,200원</Price>
              </DiscountStyle>
              <FinalPrice>18,000원</FinalPrice>
            </DetailMarketTitle>
          </DetailMarketDiv>








          <DetailTabDiv>

            <TabButtonStyle>
              <DetailTabInfo
                onClick={() => { setDetailTab(0); }}
                infocolor={detailTab === 0}
              >
                상세정보
              </DetailTabInfo>
              <DetailTabReview
                onClick={() => { setDetailTab(1); }}
                reviewcolor={detailTab === 1}
              >
                상품리뷰
              </DetailTabReview>
            </TabButtonStyle>

            <TabContentStyle>
              <TabContent detailTab={detailTab} />
            </TabContentStyle>


          </DetailTabDiv>





        </DetailContainer>
        
        <ButtonStyle>
        {/* <Cart/> */}
          <DetailButtonDiv>
            <DetailButtonStyle onClick={paymentsOrder}>구매하기</DetailButtonStyle>
          </DetailButtonDiv>
        </ButtonStyle>
      </DetailBody>
      {modal && <ModalMorePage PropsModal={PropsModal} />}
      {
        confirm &&
        <Confirm
            contents="로그인 후 이용가능합니다. 로그인 페이지로 이동하시겠습니까?"
            confirmText="네"
            cancelText="아니오"
            onConfirmClick={() => {navigate('/login')}}
            onCancelClick={() => {
              setConfirm(false)
            }}
        />
      }


    </div>
  )
}





function TabContent(props) {
  return [

    //=====================상세정보=====================
    <div>
      <TabBody>
        <TabInfoType>
          <TypeTextStyle>
            <TypeLabel>구매 형태</TypeLabel>
            <TypeLabelInfo>공동구매</TypeLabelInfo>
          </TypeTextStyle>
          <TypeTextStyle>
            <TypeLabel>카테고리</TypeLabel>
            <TypeLabelInfo>야채/과일</TypeLabelInfo>
          </TypeTextStyle>
          <TypeTextStyle>
            <TypeLabel>배달/주문금액</TypeLabel>
            <TypeLabelInfo>배달비 2,000원, 최소주문 10,000원</TypeLabelInfo>
          </TypeTextStyle>
          <TypeTextStyle>
            <TypeLabel>배달/픽업</TypeLabel>
            <TypeLabelInfo>배달 가능, 픽업 가능</TypeLabelInfo>
          </TypeTextStyle>
          <CouponTextStyle>
            <CouponLabel>쿠폰</CouponLabel>
            <CouponLabelInfoDiv>
              <CouponLabelInfo1>해당 상점에 쿠폰이 있습니다.</CouponLabelInfo1>
              <CouponLabelInfo2>해당 상점에 쿠폰이 있습니다.</CouponLabelInfo2>
            </CouponLabelInfoDiv>
          </CouponTextStyle>

        </TabInfoType>
      </TabBody>
      <Line />
      <TabBody>
        <TabInfoContent>
          <TabInfoContentTitle>상품 정보</TabInfoContentTitle>
          <TabInfoContentText>
            <p>과일 행사 안내(10.20)</p>
            <p>샤인머스켓 한송이를 마진 낮게 잡고 알뜰 구매하실 수 있도록 할인 판매 합니다.</p>
            <br />
            <p>* 발주 방법</p>
            <p>장바구니에 담아 결제까지 앱에서 한번에</p>
            <br />
            <p>*수령 방법</p>
            <p>직접배달, 수령 선택에 따라 진행합니다.</p>
            <p>수령 시 앱에서 구매 이력을 보여 주세요~</p>
            <br />
            <p>* 구매자 특별 혜택</p>
            <p>직접 수령을 통해 방문 주시면</p>
            <p>특별한 서비스를 드려요~</p>
            <br />
            <p>많은 방문 부탁드립니다.</p>
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
              <ReviewStar><StarIcon2 /></ReviewStar>
            </ReviewRateDiv>
            <ReviewRateDiv>
              <ReviewNum color="#212121">4.5</ReviewNum>
              <ReviewNum color="#BDBDBD">/ 5</ReviewNum>
            </ReviewRateDiv>
          </ReviewRateStyle>


          <ReviewListStyle>

            <ReviewMenu>
              <MenuQuantity>총 리뷰 3 건</MenuQuantity>
              <MenuFilterDiv>
                <MenuFilterText>최신 순</MenuFilterText>
                <MenuFilterIcon><Filter /></MenuFilterIcon>
              </MenuFilterDiv>
            </ReviewMenu>

            <Line />

            {/* =======Review1====== */}
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
            {/* =======Review2====== */}
            <ReviewContentDiv>
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
                </ReviewProfileStyle>
                {/* <ReportText>신고하기</ReportText> */}
              </ReviewContentProfile>
              {/* <UploadImg src={ReviewImg}/> */}
              <Comments>담에 또 먹을래요~~~~~~~~</Comments>
              <ReviewLikeStyle>
                <ReviewLikeFrame color={false}>
                  <ReviewLikeButton><ReviewLike0 /></ReviewLikeButton>
                  <ReviewLikeText color={false}>도움돼요!</ReviewLikeText>
                  <ReviewLikeText color={false}>0</ReviewLikeText>
                </ReviewLikeFrame>
              </ReviewLikeStyle>
            </ReviewContentDiv>

            {/* =======MarketReview====== */}
            <MarketReviewDiv>
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
            </MarketReviewDiv>
            {/* =======Review3====== */}
            <ReviewContentDiv>
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
                </ReviewProfileStyle>
                {/* <ReportText>신고하기</ReportText> */}
              </ReviewContentProfile>
              {/* <UploadImg src={ReviewImg}/> */}
              <Comments>싱싱하고 맛있어요</Comments>
              <ReviewLikeStyle>
                <ReviewLikeFrame color={false}>
                  <ReviewLikeButton><ReviewLike0 /></ReviewLikeButton>
                  <ReviewLikeText color={false}>도움돼요!</ReviewLikeText>
                  <ReviewLikeText color={false}>0</ReviewLikeText>
                </ReviewLikeFrame>
              </ReviewLikeStyle>
            </ReviewContentDiv>



          </ReviewListStyle>
        </TabReviewType>
      </TabBody>
    </div>
  ][props.detailTab]
}

export default DetailsPageT