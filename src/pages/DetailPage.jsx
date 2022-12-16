import React, { useState } from 'react'
import { useLocation, useParams } from "react-router-dom";
import styled from 'styled-components'
import MainHeader from '../components/Main/MainHeader'
import data from '../assets/data/detailtest'
import { ReactComponent as StarIcon } from "../assets/main/ratestar.svg";
import { ReactComponent as StarIcon2 } from "../assets/main/ratestar2.svg";
import { ReactComponent as Reviewstar } from "../assets/main/reviewstar.svg";
import { ReactComponent as ReviewLike } from "../assets/main/reviewlike.svg";
import { ReactComponent as ReviewLike0 } from "../assets/main/reviewlikedisable.svg";
import { ReactComponent as Flag } from "../assets/main/flag.svg";
import { ReactComponent as More } from "../assets/main/moreverti.svg";
import { ReactComponent as Filter } from "../assets/main/filter.svg";
import Image from '../assets/main/shine.png'
import ReviewImg from '../assets/main/reviewimg.png'
import Avatar from '../assets/common/avatar.png'
import ModalMorePage from '../components/Main/ModalMorePage'



const DetailBody = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #cccccc;
  flex-direction: column;
  padding-bottom: 56px;
`
const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #6e6868;
  width: 728px;
  height: auto;
  padding: 0;

  > div {
    /* max-width: 728px; */
    width: 100%;

    @media only screen and (max-width: 728px) { 
      width: 100%;
    }
  }
`
const DetailImg = styled.img`
  width: 728px;
  height: 390px;
`
const DetailMarketDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px 20px;
  gap: 12px;
  background: #FFFFFF;
  width: 728px;
  height: 217px;
`
const DetailMarketInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 688px;
  height: 42px;
`
const MarketProfile = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 12px;

  width: 160px;
  height: 42px;
`
const ProfileImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`
const ProfileName = styled.div``
const MarketName = styled.div`
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #212121;
`
const MarketLocation = styled.div`
  font-weight: 400;
  font-size: 13px;
  line-height: 18px;
  color: #757575;
`
const MarketIcon = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: 0px;
  gap: 16px;

  width: 72px;
  height: 46px;
`
const FlagStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 4px;

  width: 32px;
  height: 46px;
`
const IconStyle = styled.div`
  display: flex;
  justify-content: center;
  width: 24px;
  height: 24px;
`
const MoreStyle = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 2px;
  width: 24px;
  height: 24px;
`
const FlagText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 400;
  font-size: 12px;
  color: #212121;
`
const Line = styled.div`
  width: 100%;
  height: 1px;
  background: #F5F5F5;
`
const DetailMarketTitle = styled.div`
  
`
const MarketTitle = styled.div`
  width: 688px;
  height: 26px;
  font-weight: 500;
  font-size: 18px;
  line-height: 26px;
  color: #212121;
`
const RateStyle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 4px;
  margin-top: 5px;
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
const DiscountStyle = styled.p`
  display: flex;
  flex-direction: row;
  gap: 4px;
  margin-top: 17px;
`
const Discount = styled.p`
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #ED2A2A;
`
const Price = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-decoration-line: line-through;
  color: #9E9E9E;
`
const FinalPrice = styled.p`
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #212121;
`
const DetailTabDiv = styled.div`
  height: auto;
  
`
const TabButtonStyle = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  width: 728px;
  height: 40px;
  background: #FFFFFF;
  border-bottom: 1px solid #EEEEEE;
`
const DetailTabInfo = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 20px;
  gap: 4px;
  width: 364px;
  height: 40px;
  border-bottom: 2px solid ${ props => props.infocolor  ? "#0B806F" : "#BDBDBD"};;
  /* border-bottom: 2px solid #0B806F; */

  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: ${ props => props.infocolor  ? "#0B806F" : "#BDBDBD"};;
  /* color: #0B806F; */
`
const DetailTabReview = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 20px;
  gap: 4px;
  border-bottom: 2px solid ${ props => props.reviewcolor  ? "#0B806F" : "#BDBDBD"};;
  width: 364px;
  height: 40px;

  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: ${ props => props.reviewcolor  ? "#0B806F" : "#BDBDBD"};;
  /* color: #BDBDBD; */
`
const TabContentStyle = styled.div`
  
`

const ButtonStyle = styled.div`
  position: fixed;
  bottom: 0;
  justify-items: center;
  width: 100%;
  width: 728px;
  height: 70px;
`
const DetailButtonDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 4px 20px;
  gap: 8px;
  width: 728px;
  height: 70px;
  background: #FFFFFF;
  box-shadow: 0px -3px 16px rgba(0, 0, 0, 0.08);
`
const DetailButtonStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 688px;

  height: 48px;
  bottom: 0;
  background: #0B806F;
  border-radius: 4px;

  font-weight: 700;
  font-size: 18px;
  line-height: 26px;
  color: #FFFFFF;
`


const TabBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 728px;
  height: auto;
  gap: 1px;
  background: #FFFFFF;
`
const TabInfoType = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 24px 20px;
  gap: 12px;
  width: 728px;
  height: 214px;
`
const TypeTextStyle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 24px;

  width: 688px;
  height: 20px;
`
const TypeLabel = styled.p`
  width: 89px;
  height: 20px;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: #212121;
`
const TypeLabelInfo = styled.p`
  width: 575px;
  height: 20px;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #212121;
`
const CouponTextStyle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 24px;

  width: 688px;
  height: 38px;
`
const CouponLabel = styled.p`
  width: 89px;
  height: 20px;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: #212121;
`
const CouponLabelInfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  width: 575px;
  height: 38px;
`
const CouponLabelInfo1 = styled.p`
  width: 575px;
  height: 20px;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #212121;
`
const CouponLabelInfo2 = styled.p`
  width: 575px;
  height: 20px;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  color: #757575;
`
const TabInfoContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 24px 20px;
  gap: 12px;
`
const TabInfoContentTitle = styled.div`
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: #212121;
`
const TabInfoContentText = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #212121;
  padding: 0;
  gap: 0;
`
const TabReviewType = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px 20px;
  width: 728px;
  height: auto;
  background: #FFFFFF;
`
const ReviewRateStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px 0px;
  gap: 4px;
  width: 688px;
  height: 102px;
`
const ReviewListStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  width: 688px;
  height: auto;
`
const ReviewMenu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px;
  gap: 12px;
  width: 688px;
  height: 20px;
  margin-bottom: 12px;
`
const MenuQuantity = styled.p`
  font-weight: 400;
  font-size: 15px;
  line-height: 20px;
  color: #212121;
`
const MenuFilterDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 4px;
  width: 61px;
  height: 20px;
`
const MenuFilterText = styled.div`
  font-weight: 400;
  font-size: 13px;
  line-height: 18px;
  color: #212121;
`
const MenuFilterIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
`
const ReviewRateDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 4px;

  width: 688px;
  height: 28px;
`
const ReviewStar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 4px;

  width: 156px;
  height: 28px;
`
const ReviewNum = styled.div`
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  text-align: center;
`
const ReviewContentDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px 0px;
  gap: 16px;
  width: 688px;
  height: auto;
`
const ReviewContentProfile = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px;
  gap: 8px;

  width: 688px;
  height: 42px;
`
const ReviewProfileStyle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
`
const ReportText = styled.p`
  padding-top: 0;
  font-weight: 400;
  font-size: 12px;
  color: #BDBDBD;`
const UploadImg = styled.img`
  width: 688px;
  height: 350px;
  border-radius: 4px;
`
const Comments = styled.p`
  width: 688px;
  height: auto;
  font-weight: 400;
  font-size: 15px;
  line-height: 20px;
  color: #424242;
`
const ReviewLikeStyle = styled.div`
  width: 109px;
  height: 34px;
`
const ReviewLikeFrame = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 7px 11px;
  gap: 5px;
  width: 109px;
  height: 34px;
  border: 1px solid ${props => props.color ? "#0B806F" : "#F5F5F5"};
  /* border: 1px solid #0B806F; */
  border-radius: 99px;
`
const ReviewLikeButton = styled.div`
  width: 17px;
  height: 17px;
`
const ReviewLikeText = styled.p`
  font-weight: 400;
  font-size: 13px;
  line-height: 18px;
  color: ${props => props.color ? "#0B806F" : "#757575"};
`
const ReviewProfileImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`
const ProfileDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`
const ProfileTextDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 8px;
  width: 109px;
  height: 24px;
`
const ReviewId = styled.p`
  font-weight: 600;
  font-size: 16px;
  color: #212121;
`
const ReviewDate = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  color: #9E9E9E;
`
const MarketReviewDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 16px;
  width: 688px;
  height: auto;
`
const MarketCommentsStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px;
  gap: 16px;
  width: 632px;
  height: auto;
  background: #F5F5F5;
  border-radius: 8px;
`
const MarketIdDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 8px;
  width: 100px;
  height: 24px;
`
const MarketId = styled.div`
  font-weight: 600;
  font-size: 16px;
  color: #212121;
`
const MarketDate = styled.div`
  font-weight: 400;
  font-size: 12px;
  color: #9E9E9E;
`
const MarketComments = styled.div`
  font-weight: 400;
  font-size: 15px;
  color: #424242;
`











function DetailPage(props) {


  let [detailTab, setDetailTab] = useState(0)
  // let [item] = useState(data)
  // let {id} = useParams()
  let [modal, setModal] = useState(false);

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




  return (
    <div>
      <MainHeader title="아재의 과일"/>
      {/* <MainHeader title="아재의 과일"/> */}
      <DetailBody>
        <DetailContainer>
          {/* <DetailImg src={props.item[id].img}/> */}
          <DetailImg src={Image}/>








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
                <ProfileImg src={Image}/>
                <ProfileName>
                  <MarketName>아재의 과일</MarketName>
                  <MarketLocation>김포 풍무동</MarketLocation>
                </ProfileName>
              </MarketProfile>

              <MarketIcon>
                <FlagStyle>
                  <IconStyle>
                    <Flag/>
                  </IconStyle>
                  <FlagText>단골찜</FlagText>
                </FlagStyle>
                <MoreStyle
                  type='button'
                  onClick={ShowMoreModal}
                >
                  <More/>
                </MoreStyle>
              </MarketIcon>
            </DetailMarketInfo>

            <Line/>

            <DetailMarketTitle>
              <MarketTitle>송이송이 달달 상큼 샤인머스켓 1송이 + 딸기 300g 증정</MarketTitle>
              <RateStyle>
                <Star><StarIcon/></Star>
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
                onClick={()=>{setDetailTab(0);} }
                infocolor={detailTab===0}
                >
                상세정보
              </DetailTabInfo>
              <DetailTabReview 
                onClick={()=>{setDetailTab(1); }}
                reviewcolor={detailTab===1}
              >
                상품리뷰
              </DetailTabReview>
            </TabButtonStyle>

            <TabContentStyle>
              <TabContent detailTab={detailTab}/>
            </TabContentStyle>


          </DetailTabDiv>





        </DetailContainer>
        <ButtonStyle>
          <DetailButtonDiv>
            <DetailButtonStyle>구매하기</DetailButtonStyle>
          </DetailButtonDiv>
        </ButtonStyle>
      </DetailBody>
      {modal && <ModalMorePage PropsModal={PropsModal} />}



    </div>
  )
}





function TabContent(props){
  return[

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
      <Line/>
      <TabBody>
        <TabInfoContent>
          <TabInfoContentTitle>상품 정보</TabInfoContentTitle>
          <TabInfoContentText>
          <p>과일 행사 안내(10.20)</p>
          <p>샤인머스켓 한송이를 마진 낮게 잡고 알뜰 구매하실 수 있도록 할인 판매 합니다.</p>
          <br/>
          <p>* 발주 방법</p>
          <p>장바구니에 담아 결제까지 앱에서 한번에</p>
          <br/>
          <p>*수령 방법</p>
          <p>직접배달, 수령 선택에 따라 진행합니다.</p>
          <p>수령 시 앱에서 구매 이력을 보여 주세요~</p>
          <br/>
          <p>* 구매자 특별 혜택</p>
          <p>직접 수령을 통해 방문 주시면</p>
          <p>특별한 서비스를 드려요~</p>
          <br/>
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
              <ReviewStar><StarIcon2/></ReviewStar>
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
                <MenuFilterIcon><Filter/></MenuFilterIcon>
              </MenuFilterDiv>
            </ReviewMenu>

            <Line/>

{/* =======Review1====== */}
            <ReviewContentDiv>
              <ReviewContentProfile>
                <ReviewProfileStyle>
                  <ReviewProfileImg src={Avatar}/>
                  <ProfileDiv>
                    <ProfileTextDiv>
                      <ReviewId>과일싹쓸이</ReviewId>
                      <ReviewDate>2일 전</ReviewDate>
                    </ProfileTextDiv>
                    <div><Reviewstar/></div>
                  </ProfileDiv>
                </ReviewProfileStyle>
                {/* <ReportText>신고하기</ReportText> */}
              </ReviewContentProfile>
              <UploadImg src={ReviewImg}/>
              <Comments>맛있습니다~</Comments>
              <ReviewLikeStyle>
                <ReviewLikeFrame color={true}>
                  <ReviewLikeButton><ReviewLike/></ReviewLikeButton>
                  <ReviewLikeText color={true}>도움돼요!</ReviewLikeText>
                  <ReviewLikeText color={true}>1</ReviewLikeText>
                </ReviewLikeFrame>
              </ReviewLikeStyle>
            </ReviewContentDiv>
{/* =======Review2====== */}
            <ReviewContentDiv>
              <ReviewContentProfile>
                <ReviewProfileStyle>
                  <ReviewProfileImg src={Avatar}/>
                  <ProfileDiv>
                    <ProfileTextDiv>
                      <ReviewId>우리동네</ReviewId>
                      <ReviewDate>2일 전</ReviewDate>
                    </ProfileTextDiv>
                    <div><Reviewstar/></div>
                  </ProfileDiv>
                </ReviewProfileStyle>
                {/* <ReportText>신고하기</ReportText> */}
              </ReviewContentProfile>
              {/* <UploadImg src={ReviewImg}/> */}
              <Comments>담에 또 먹을래요~~~~~~~~</Comments>
              <ReviewLikeStyle>
                <ReviewLikeFrame color={false}>
                  <ReviewLikeButton><ReviewLike0/></ReviewLikeButton>
                  <ReviewLikeText color={false}>도움돼요!</ReviewLikeText>
                  <ReviewLikeText color={false}>0</ReviewLikeText>
                </ReviewLikeFrame>
              </ReviewLikeStyle>
            </ReviewContentDiv>

{/* =======MarketReview====== */}
            <MarketReviewDiv>
              <ReviewProfileImg src={Avatar}/>
              <MarketCommentsStyle>
                <MarketIdDiv>
                  <MarketId>사장님</MarketId>
                  <MarketDate>2일 전</MarketDate>
                </MarketIdDiv>
                <MarketComments>
                  <p>주문해주셔서 감사합니다 우리동네님!</p><br/>
                  <p>더 좋은 상품으로 보답하겠습니다.</p>
                  <p>감사합니다 ^^</p><br/>
                </MarketComments>
              </MarketCommentsStyle>
            </MarketReviewDiv>
{/* =======Review3====== */}
            <ReviewContentDiv>
              <ReviewContentProfile>
                <ReviewProfileStyle>
                  <ReviewProfileImg src={Avatar}/>
                  <ProfileDiv>
                    <ProfileTextDiv>
                      <ReviewId>우리동네</ReviewId>
                      <ReviewDate>2일 전</ReviewDate>
                    </ProfileTextDiv>
                    <div><Reviewstar/></div>
                  </ProfileDiv>
                </ReviewProfileStyle>
                {/* <ReportText>신고하기</ReportText> */}
              </ReviewContentProfile>
              {/* <UploadImg src={ReviewImg}/> */}
              <Comments>싱싱하고 맛있어요</Comments>
              <ReviewLikeStyle>
                <ReviewLikeFrame color={false}>
                  <ReviewLikeButton><ReviewLike0/></ReviewLikeButton>
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

export default DetailPage