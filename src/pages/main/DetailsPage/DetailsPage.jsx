import React, { useState } from 'react'
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
import { DetailButtonDiv, DetailButtonStyle, DetailImg, DetailTabInfo, DetailTabReview, MarketComments, TabInfoContentText, TabInfoContentTitle, TypeLabel, TypeLabelInfo, TypeTextStyle, ReviewLikeButton, ReviewDate, MarketCommentsStyle, MarketDate, MarketIcon, MarketId, MarketIdDiv, MarketReviewDiv, Price, ProfileDiv, ProfileTextDiv, MoreStyle, FlagStyle, FlagText, IconStyle, Line, Comments, CouponLabel, CouponLabelInfo1, CouponLabelInfo2, CouponLabelInfoDiv, CouponTextStyle, ReviewContentDiv, UploadImg, ButtonStyle, ReviewId, ReviewLikeStyle, ReviewLikeText, ReviewLikeFrame, ReviewProfileImg, ReviewProfileStyle, ReviewContentProfile, OrderToggleBox } from './DetailsPageStyle'
import ModalMorePage from 'components/Main/More/ModalMorePage'
import Layout from 'components/layout/Layout/Layout';
import { useSelector } from 'react-redux';
import Confirm from 'components/commonUi/Confirm';
import { ArrowBottom, Cart, MinusB, PlusB } from 'components/commonUi/Icon';
import * as L from 'components/commonUi/Layout';
import * as T from 'components/commonUi/Text';
import { ImgPer, ImgSize100, ImgSizeLayout } from 'components/layout/Img/ImgSizeLayout';
import { Badge, LayerTextButton } from 'components/commonUi/Button';

function DetailsPage(props) {


  const [detailTab, setDetailTab] = useState(0)
  // let [item] = useState(data)
  // let {id} = useParams()
  const [modal, setModal] = useState(false);
  const [orderToggle, setOrderToggle] = useState(false);
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

  const openOrderToggle = () => {
    setOrderToggle(true);
  }
  const closeOrderToggle = () => {
    setOrderToggle(false);
  }



  return (
    <div>

      <Layout
        title="아재의 과일"
        bell={false}
        cart={true}
        onBackClick={() => navigate(-1)}
      >
        <L.Container >

          <L.Contents _padding='0px 0px 60px 0px'>
            <L.FlexCols >
              <ImgPer src={Image} />

              <L.FlexCols >
                <L.FlexRows _content='space-between' _items='center' _padding=' 16px 20px'>
                  <L.FlexRows _width='150px' _content='left'>
                    <ImgSizeLayout  _bdr={50} _width={40} _height={40} src={Image} />
                    <L.FlexCols _gap={1}>
                      <T.Text _size={16} _weight={500} _color='gray900' >아재의 과일</T.Text>
                      <T.Text _size={13} _weight={400} _color='gray600' >김포 풍무동</T.Text>
                    </L.FlexCols>
                  </L.FlexRows>
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

                </L.FlexRows>

                <Line/>
                <L.Contents _padding='16px 20px'>
                  <L.FlexRows _gap={12} _items='flex-start'>
                    <L.FlexCols _gap={16}>
                      <L.FlexCols _gap={4}>
                        <Badge _width='95px' _height ='22px' _bg='red100' _size='12px' _color='red500' _weight={700}>1일 11시간 59분</Badge>
                        <T.Text _size={18} _weight={500} _color='gray900' >송이송이 달달 상큼 샤인머스켓 1송이 + 딸기 300g 증정</T.Text>
                        <L.FlexRows _gap={4} _items='center'>
                          <StarIcon/>
                          <T.Text _size={11} _weight={400} _color='gray800' >(4.5)</T.Text>
                        </L.FlexRows>
                      </L.FlexCols>
                      <L.FlexCols _gap={4}>
                        <L.FlexRows _gap={4} _items='center'>
                          <T.Text _size={16} _weight={600} _color='red' >40%</T.Text>
                          <Price>25,200원</Price>
                        </L.FlexRows>
                        <T.Text _size={20} _weight={600} _color='gray900' >18,000원</T.Text>
                      </L.FlexCols>
                    </L.FlexCols>
                    <Badge _fdir='column' _width='115px' _height ='74px' _bg='gray50' _padding='16px'>
                      <T.Text _size={12} _weight={400} _color='gray600' >최소 주문량</T.Text>
                      <T.Text _size={16} _weight={600} _color='gray800' >10/100개</T.Text>
                    </Badge>
                  </L.FlexRows>
                </L.Contents>
              </L.FlexCols>

          {/* <DetailImg src={props.item[id].img}/> */}
          {/* <DetailMarketDiv>
            <DetailMarketInfo>
              <MarketProfile>
                <ProfileImg src={props.item[id].img}/>
                <ProfileName>
                  <MarketName>{props.item[id].title}</MarketName>
                  <MarketLocation>{props.item[id].location}</MarketLocation>
                </ProfileName>
              </MarketProfile>

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


              <L.FlexRows _content='center' _items='center' _gap='0px' _height='40px'>
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
              </L.FlexRows>

              <L.Contents _content='center' _items='center' _gap='0px' _padding='16px 20px'>
                <TabContent detailTab={detailTab} />
              </L.Contents>

        
              <ButtonStyle>
              {orderToggle && <OrderToggle closeOrderToggle={closeOrderToggle}/>}
                <DetailButtonDiv>
                  <LayerTextButton _padding='0px' _width='48px'>
                    <Cart/>
                  </LayerTextButton>
                  <DetailButtonStyle onClick={()=>{paymentsOrder(); openOrderToggle();}}>구매하기</DetailButtonStyle>
                </DetailButtonDiv>
              </ButtonStyle>


          </L.FlexCols>
        </L.Contents>
      </L.Container>
    </Layout>
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
      <L.FlexCols>
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
            <CouponLabelInfo2>상점(스토어) > 소식을 확인해 주세요.</CouponLabelInfo2>
          </CouponLabelInfoDiv>
        </CouponTextStyle>
      </L.FlexCols>
      <Line />
      <L.FlexCols>
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
    </L.FlexCols>
    </div>,

    //=====================상품리뷰=====================
    <div>
      <L.FlexCols _gap='0px'>
        <L.FlexCols _gap={4} _padding='20px 0px'>
          <L.FlexRows _gap={4} _content='center' _items='center'>
            <StarIcon2 />
          </L.FlexRows>
          <L.FlexRows _gap={4} _content='center' _items='center'>
            <T.Text _size={20} _weight={500} _color='gray900' >4.5</T.Text>
            <T.Text _size={20} _weight={500} _color='gray400' >/ 5</T.Text>
          </L.FlexRows>
        </L.FlexCols>

        <L.FlexCols _gap={12} _padding='0px'>
          <L.FlexRows _content='space-between' _items='center'>
            <L.FlexRows  _content='left' _items='center' _gap={4}>
              <T.Text _size={15} _weight={400} _color='gray900' >총 리뷰</T.Text>
              <T.Text _size={15} _weight={400} _color='gray900' >3</T.Text>
              <T.Text _size={15} _weight={400} _color='gray900' >건</T.Text>
            </L.FlexRows>
            <L.FlexRows  _content='right' _items='center' _gap={4}>
              <T.Text _size={13} _weight={400} _color='gray900' >최신 순</T.Text>
              <Filter />
            </L.FlexRows>
          </L.FlexRows>

            <Line />

            {/* =======Review1====== */}
            <L.FlexRows _content='space-between' _items='center'>
              <L.FlexRows>
                <ReviewProfileImg src={Avatar} />
                <L.FlexCols _gap={4}>
                  <L.FlexRows _items='center' _content='left'>
                    <T.Text _size={16} _weight={600}>과일싹쓸이</T.Text>
                    <ReviewDate>2일 전</ReviewDate>
                  </L.FlexRows>
                  <L.FlexRows _gap={8}  _items='center' _content='left'>
                    <Reviewstar />
                  </L.FlexRows>
                </L.FlexCols>
              </L.FlexRows>
              <L.FlexRows _width='50px'>
                <T.Text _size={12} _color='gray400'>신고하기</T.Text>
              </L.FlexRows>
            </L.FlexRows>

            <UploadImg src={ReviewImg} />
              <Comments>맛있습니다~</Comments>
              <ReviewLikeStyle>
                <ReviewLikeFrame color={true}>
                  <ReviewLikeButton><ReviewLike /></ReviewLikeButton>
                  <ReviewLikeText color={true}>도움돼요!</ReviewLikeText>
                  <ReviewLikeText color={true}>1</ReviewLikeText>
                </ReviewLikeFrame>
              </ReviewLikeStyle>
            {/* =======Review2====== */}
            <L.FlexRows _content='space-between' _items='center'>
              <L.FlexRows>
                <ReviewProfileImg src={Avatar} />
                <L.FlexCols _gap={4}>
                  <L.FlexRows _items='center' _content='left'>
                    <T.Text _size={16} _weight={600}>우리동네</T.Text>
                    <ReviewDate>2일 전</ReviewDate>
                  </L.FlexRows>
                  <L.FlexRows _gap={8}  _items='center' _content='left'>
                    <Reviewstar />
                  </L.FlexRows>
                </L.FlexCols>
              </L.FlexRows>
              <L.FlexRows _width='50px'>
                <T.Text _size={12} _color='gray400'>신고하기</T.Text>
              </L.FlexRows>
            </L.FlexRows>
            <Comments>담에 또 먹을래요~~~~~~~~</Comments>
            <ReviewLikeStyle>
              <ReviewLikeFrame color={false}>
                <ReviewLikeButton><ReviewLike0 /></ReviewLikeButton>
                <ReviewLikeText color={false}>도움돼요!</ReviewLikeText>
                <ReviewLikeText color={false}>0</ReviewLikeText>
              </ReviewLikeFrame>
            </ReviewLikeStyle>

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
            <L.FlexRows _content='space-between' _items='center'>
              <L.FlexRows>
                <ReviewProfileImg src={Avatar} />
                <L.FlexCols _gap={4}>
                  <L.FlexRows _items='center' _content='left'>
                    <T.Text _size={16} _weight={600}>아이덴잇</T.Text>
                    <ReviewDate>22.11.30</ReviewDate>
                  </L.FlexRows>
                  <L.FlexRows _gap={8}  _items='center' _content='left'>
                    <Reviewstar />
                  </L.FlexRows>
                </L.FlexCols>
              </L.FlexRows>
              <L.FlexRows _width='50px'>
                <T.Text _size={12} _color='gray400'>신고하기</T.Text>
              </L.FlexRows>
            </L.FlexRows>
            
            <Comments>싱싱하고 맛있어요</Comments>
            <ReviewLikeStyle>
              <ReviewLikeFrame color={false}>
                <ReviewLikeButton><ReviewLike0 /></ReviewLikeButton>
                <ReviewLikeText color={false}>도움돼요!</ReviewLikeText>
                <ReviewLikeText color={false}>0</ReviewLikeText>
              </ReviewLikeFrame>
            </ReviewLikeStyle>



        </L.FlexCols>
      </L.FlexCols>
    </div>
  ][props.detailTab]
}


function OrderToggle(props){
  return(
    <div>
      <OrderToggleBox>
      <L.FlexCols _gap='0px' _padding='16px 20px'>
        <button
          type='button'
          onClick={props.closeOrderToggle}
        >
          <L.FlexRows _content='center' _gap='0px' _items='center'>
            <ArrowBottom/>
          </L.FlexRows>
        </button>
        <L.FlexRows _height='56px' _content='space-between' _gap={16} _items='center' _padding='12px 0px'>
          <T.Text _size={16} _weight={500} _color='gray800' >수량 선택</T.Text>
          <L.FlexRows _content='right' _gap={12} _items='center' _width='112px'>
            <MinusB/>
            <T.Text _weight={500}>1</T.Text>
            <PlusB/>
          </L.FlexRows>
        </L.FlexRows>
        <L.FlexRows _height='56px' _content='space-between' _gap={16} _items='center' _padding='12px 0px'>
          <T.Text _size={16} _weight={500} _color='gray800' >상품 금액</T.Text>
          <T.Text _size={16} _weight={600} _color='gray800' >270,000 원</T.Text>
        </L.FlexRows>


      </L.FlexCols>
      </OrderToggleBox>
    </div>
  )
}

export default DetailsPage