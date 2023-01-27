import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { DetailButtonDiv, DetailButtonStyle, DetailTabInfo, DetailTabReview, MarketComments, TabInfoContentText, TabInfoContentTitle, TypeLabel, TypeLabelInfo, TypeTextStyle, ReviewLikeButton, ReviewDate, MarketCommentsStyle, MarketDate, MarketIcon, MarketId, MarketIdDiv, MarketReviewDiv, Price, ProfileDiv, ProfileTextDiv, MoreStyle, FlagStyle, FlagText, IconStyle, Line, Comments, CouponLabel, CouponLabelInfo1, CouponLabelInfo2, CouponLabelInfoDiv, CouponTextStyle, ReviewContentDiv, UploadImg, ButtonStyle, ReviewId, ReviewLikeStyle, ReviewLikeText, ReviewLikeFrame, ReviewProfileImg, ReviewProfileStyle, ReviewContentProfile, OrderToggleBox } from './DetailsPageStyle'
import ModalMorePage from 'components/Main/More/ModalMorePage'
import Layout from 'components/layout/Layout/Layout';
import { useSelector } from 'react-redux';
import Confirm from 'components/commonUi/Confirm';
import { ArrowBottom, Cart, MinusB, PlusB } from 'components/commonUi/Icon';
import * as L from 'components/commonUi/Layout';
import * as T from 'components/commonUi/Text';
import * as I from 'components/commonUi/Input';
import { ImgPer, ImgSize100, ImgSizeLayout } from 'components/layout/Img/ImgSizeLayout';
import { Badge, LayerTextButton } from 'components/commonUi/Button';
import { getItemDetails } from 'service/item';
import StoreLike from 'components/commonUi/StoreLike';
import { numberFormat, totalPrice } from 'utils/utils';
import ProductTimer from 'components/commonUi/ProductTimer';
import StarRate from 'components/commonUi/StarRate';
import HTMLReactParser from 'html-react-parser';
import ProductCart from 'components/Main/Cart/ProductCart';
import ProductComments from 'components/Main/productDetails/ProductComments';
import { useDispatch } from 'react-redux';
import { orderActions } from 'store/slices/order';
import { ImgBanner } from 'components/Buisness/BusinessManagement/BusinessManagementTabStyle';
import ProductReview from 'components/Main/productDetails/ProductReview';
import Alert from 'components/commonUi/Alert';
const IMGURL = "https://ondongne-bucket.s3.ap-northeast-2.amazonaws.com/item/";
const STOREURL = "https://ondongne-bucket.s3.ap-northeast-2.amazonaws.com/store/";


function DetailsPage(props) {

  const location = useLocation();
  const dispatch = useDispatch();
  const { id } = useParams();
  const [item, setItem] = useState({
    address: '',
    deliveryPrice: '',
    description: '',
    endDate: '',
    itemId: '',
    itemImage: '',
    itemName: '',
    itemRating: '',
    category: '',
    likeStatus: '',
    maxCount: '',
    minCount: '',
    orderMinPrice: '',
    price: '',
    recetiveType: '',
    salePercent: '',
    soldoutStatus: '',
    storeId: '',
    storeName: '',
    storeProfile: "",
    type: ""
  });

  const [count, setCount] = useState(1);
  const [detailTab, setDetailTab] = useState(0);

  const [modal, setModal] = useState(false);
  const [orderToggle, setOrderToggle] = useState(false);
  const navigate = useNavigate();
  const auth = useSelector(state => state.auth);
  const [confirm, setConfirm] = useState(false);
  const [alert, setAlert] = useState(false);
  const [btn, setBtn] = useState(true);

  const PropsModal = () => {
    setModal(!modal);
  }

  const paymentsOrder = (type) => {

    const account = totalPrice(item.price, item.salePercent).replaceAll(',', '');

    if (!auth.isAuthenticated) {
      return setConfirm(true)
    }

    if (!orderToggle) return setOrderToggle(true)

    if (orderToggle && type === 0) return;

    if (orderToggle && type === 1) {

      // 최소금액 체크
      if ((Number(account) * count) < Number(item.orderMinPrice)) {
        return setAlert({
          contents: `상점 최소주문 금액은 ${numberFormat(item.orderMinPrice)}입니다.`,
          buttonText: "확인",
          onButtonClick: () => setAlert(false),
          onOverlayClick: () => setAlert(false),
        })
      }

      const data = {
        items: [{ ...item, count, cartId: 0 }],
        to: location.pathname
      };
      dispatch(orderActions.save(data));
      return navigate('/order/new');
    }
  }

  const getItem = async () => {
    const response = await getItemDetails(id);

    if (response.status !== 200) {
      navigate('/');
    }

    if (response && response.data.data) {
      setItem(response.data.data);
    }
  }

  useEffect(() => {
    if (id) {
      getItem();
    }
  }, [id])

  return (
    <div>

      <Layout
        title={item.storeName}
        description={item.storeName}
        img={IMGURL + item.itemImage}
        bell={false}
        cart={true}
        share={true}
        floating={false}
        // more={true}
        onBackClick={() => navigate(-1)}
      >
        <L.Container >
          <L.Contents _padding='0px 0px 60px 0px'>
            <L.FlexCols >
              {
                item.itemImage &&
                // <ImgPer _bdr={0} src={IMGURL + item.itemImage} />
                <ImgBanner _height='390px' _bdr={0} src={IMGURL + item.itemImage} />
              }
              <L.FlexCols >
                <L.FlexRows _content='space-between' _items='center' _padding=' 16px 20px'>
                  <L.FlexRows _content='left' onClick={() => navigate(`/market/detail/${item.storeId}`)}>
                    <ImgSizeLayout _bdr={50} _width={40} _height={40} src={item.storeProfile && STOREURL + item.storeProfile} />
                    <L.FlexCols _gap={1}>
                      <T.Text _size={16} _weight={500} _color='gray900' >{item.storeName}</T.Text>
                      {
                        item.address &&
                        item.address.split(' ').length >= 3 &&
                        <T.Text _size={13} _weight={400} _color='gray600'>
                          {item.address.split(' ')[0]} {item.address.split(' ')[1]} {item.address.split(' ')[2]}
                        </T.Text>
                      }
                    </L.FlexCols>
                  </L.FlexRows>
                  <L.FlexRows _content='right' _gap='0px'>
                    {
                      auth.isAuthenticated &&
                      <StoreLike id={item.storeId} checked={item.likeStatus} onChange={(id) => {
                        setItem({ ...item, likeStatus: !item.likeStatus })
                      }} />
                    }
                  </L.FlexRows>
                </L.FlexRows>

                <Line />
                <L.Contents _padding='16px 20px'>
                  <L.FlexCols _gap={16}>
                    <L.FlexCols _gap={4}>
                      {
                        item.type == 'GROUP' &&
                        !item.soldoutStatus &&
                        <ProductTimer date={item.endDate} />
                      }
                      <T.Text _width='100%' _size={18} _weight={500} _color='gray900' >{item.itemName}</T.Text>
                      <L.FlexRows _items="center" width="16">
                        {
                          item.itemRating !== '' &&
                          <StarRate rate={item.itemRating} />
                        }
                        <T.Text _size={11} _weight={400} _color='gray800'>({item.itemRating})</T.Text>
                      </L.FlexRows>
                    </L.FlexCols>

                    <L.FlexRows _gap={12} _items='flex-end'>
                      <L.FlexCols _gap={4}>

                        {
                          item.salePercent > 0 &&
                          <L.FlexRows _gap={4} _padding={0} _items='center' >
                            <T.Text _size={16} _weight={600} _color='red'>{item.salePercent}%</T.Text>
                            <T.Text _size={16} _weight={400} _color='gray500' _decoration={'line-through'}>{numberFormat(item.price)}원</T.Text>
                          </L.FlexRows>
                        }

                        <T.Text _size={20} _weight={600} _color='gray900'>{totalPrice(item.price, item.salePercent)} 원</T.Text>
                      </L.FlexCols>
                      {
                        item.type == 'GROUP' &&
                        <Badge _fdir='column' _bg='gray100' _padding='8px 16px' _height='auto' _bdr='8px'>
                          <T.Text _align='center' _size={12} _color='gray600' _minWidth={'74px'}>최소 주문량</T.Text>
                          <T.Text _width='76px' _align='center' _size={16} _weight={600} _color='gray800' >{item.minCount}/{item.maxCount}개</T.Text>
                          {/* </L.FlexRows> */}
                        </Badge>
                      }
                    </L.FlexRows>
                  </L.FlexCols>

                </L.Contents>
              </L.FlexCols>

              <L.FlexRows _content='center' _items='center' _gap='0px' _height='40px'>
                <DetailTabInfo
                  onClick={() => { setDetailTab(0); setBtn(true); }}
                  infocolor={detailTab === 0}
                  _bottomsize='7px'
                >
                  상세정보
                </DetailTabInfo>
                <DetailTabReview
                  onClick={() => { setDetailTab(1); setBtn(true); }}
                  reviewcolor={detailTab === 1}
                  _bottomsize='7px'
                >
                  상품리뷰
                </DetailTabReview>
                <DetailTabReview
                  onClick={() => { setDetailTab(2); setBtn(false); }}
                  reviewcolor={detailTab === 2}
                  _bottomsize='7px'
                >
                  댓글문의
                </DetailTabReview>
              </L.FlexRows>

              <L.Contents _content='center' _items='center' _gap='0px' _padding='16px 20px'>
                <TabContent detailTab={detailTab} item={item} />
              </L.Contents>

              {btn
                &&
                <ButtonStyle>
                  {
                    orderToggle &&
                    <OrderToggle
                      closeOrderToggle={() => setOrderToggle(false)}
                      price={item.price}
                      salePercent={item.salePercent}
                      type={item.type}
                      count={count}
                      minCount={item.maxCount - item.minCount}
                      setCount={setCount}
                    />
                  }
                  {
                    item.storeId === auth.storeId
                      ?
                      <DetailButtonDiv>
                        <DetailButtonStyle onClick={() => navigate(`/business/edit/${id}`)}>수정하기</DetailButtonStyle>
                      </DetailButtonDiv>
                      :
                      <DetailButtonDiv>
                        {
                          item.type === 'NORMAL' &&
                          <LayerTextButton
                            type='button'
                            onClick={() => paymentsOrder(0)}
                            _padding='0px' _width='48px'
                          >
                            <ProductCart id={item.itemId} count={count} type={'details'} disabled={!orderToggle} />
                          </LayerTextButton>
                        }
                        <DetailButtonStyle onClick={() => paymentsOrder(1)}>구매하기</DetailButtonStyle>
                      </DetailButtonDiv>
                  }
                </ButtonStyle>
              }


            </L.FlexCols>
          </L.Contents>
        </L.Container>
      </Layout>
      {modal && <ModalMorePage PropsModal={PropsModal} />}
      {
        confirm &&
        <Confirm
          contents={"로그인 후 이용가능합니다.\n로그인 페이지로 이동하시겠습니까?"}
          confirmText="네"
          cancelText="아니오"
          onConfirmClick={() => { navigate('/login') }}
          onCancelClick={() => {
            setConfirm(false)
          }}
        />
      }
      {
        alert &&
        <Alert
          title={alert.title}
          contents={alert.contents}
          buttonText={alert.buttonText}
          onButtonClick={alert.onButtonClick}
          onOverlayClick={alert.onOverlayClick}
        />
      }


    </div>
  )
}


function TabContent(props) {

  console.log(props.item);

  return [

    //=====================상세정보=====================
    <div>
      <L.FlexCols _padding={'0 0 16px 0'}>
        <TypeTextStyle>
          <TypeLabel>구매 형태</TypeLabel>
          <TypeLabelInfo>{props.item.type === 'GROUP' ? '공동구매 상품' : '일반 상품'}</TypeLabelInfo>
        </TypeTextStyle>
        <TypeTextStyle>
          <TypeLabel>카테고리</TypeLabel>
          <TypeLabelInfo>{props.item.category}</TypeLabelInfo>
        </TypeTextStyle>
        <TypeTextStyle>
          <TypeLabel>배달/주문금액</TypeLabel>
          <TypeLabelInfo>배달비 {numberFormat(props.item.deliveryPrice)}원, 최소주문 {numberFormat(props.item.orderMinPrice)}원</TypeLabelInfo>
        </TypeTextStyle>
        <TypeTextStyle>
          <TypeLabel>배달/픽업</TypeLabel>
          <TypeLabelInfo>{props.item.recetiveType} 가능</TypeLabelInfo>
        </TypeTextStyle>
        {/* <CouponTextStyle>
          <CouponLabel>쿠폰</CouponLabel>
          <CouponLabelInfoDiv>
            <CouponLabelInfo1>해당 상점에 쿠폰이 있습니다.</CouponLabelInfo1>
            <CouponLabelInfo2>상점(스토어) {'>'} 소식을 확인해 주세요.</CouponLabelInfo2>
          </CouponLabelInfoDiv>
        </CouponTextStyle> */}
      </L.FlexCols>
      <Line />
      <L.FlexCols _padding={'16px 0 0 0'}>
        <TabInfoContentTitle>상품 정보</TabInfoContentTitle>
        <TabInfoContentText>
          {HTMLReactParser(props.item.description)}
        </TabInfoContentText>
      </L.FlexCols>
    </div>,

    //=====================상품리뷰=====================
    <div>
      <ProductReview id={props.item.itemId} />
    </div>,
    //====================댓글=====================
    <div>
      <ProductComments id={props.item.itemId} />
    </div>
  ][props.detailTab]
}


function OrderToggle({
  closeOrderToggle, count, setCount, type, price, salePercent, minCount
}) {

  const counterHandler = (value) => {
    if (value == -1 && count == 1) {
      return;
    }

    // if (value === 1 && type === 'GROUP' && minCount == count) {
    //   return;
    // }

    setCount(count => count + value)
  }

  return (
    <OrderToggleBox>
      <L.FlexCols _gap='0px' _padding='16px 20px'>
        <button
          type='button'
          onClick={closeOrderToggle}
        >
          <L.FlexRows _content='center' _gap='0px' _items='center'>
            <ArrowBottom />
          </L.FlexRows>
        </button>
        <L.FlexRows _height='56px' _content='space-between' _gap={16} _items='center' _padding='12px 0px'>
          <T.Text _size={16} _weight={500} _color='gray800' >수량 선택</T.Text>
          <L.FlexRows _content='right' _gap='0px' _items='center' _width='120px'>
            <button type='button' onClick={() => counterHandler(-1)}><MinusB /></button>
            <T.Text _align='center' _width='80px' _weight={500}>{numberFormat(count)}</T.Text>
            <button type='button' onClick={() => counterHandler(1)}><PlusB /></button>
          </L.FlexRows>
        </L.FlexRows>
        <L.FlexRows _height='56px' _content='space-between' _gap={16} _items='center' _padding='12px 0px'>
          <T.Text _size={16} _weight={500} _color='gray800' >상품 금액</T.Text>
          <T.Text _size={16} _weight={600} _color='gray800' >{totalPrice(price * count, salePercent)} 원</T.Text>
        </L.FlexRows>
      </L.FlexCols>
    </OrderToggleBox>
  )
}

export default DetailsPage