import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Avatar from 'assets/common/avatar.png'
import { ReactComponent as Delete } from "assets/main/delete.svg";
import { ReactComponent as Minus } from "assets/main/cart/minus.svg";
import { ReactComponent as Plus } from "assets/main/cart/plus.svg";
import { CarContentDiv, CarProfiletDiv, CartContainer, CartDiv, ProductInfo, ProductInfoText, ProductTitle, ProductTitleDiv, ProfileImg, ProfileName, ButtonText, CountAddDiv, DeleteStyle, ContentProductDiv, CountText, CoundAddNum, CountAddIconStyle, ContentCountDiv, ContentButton, CartEmptyDiv, CartEmptyTextDiv, CartEmptyText, } from './CartPageStyle'
import ModalDelete from 'components/Main/Cart/ModalDelete/ModalDelete';
import Layout from 'components/layout/Layout/Layout';
import * as L from 'components/commonUi/Layout';
import { useSelector } from 'react-redux';
import { cartCountUpdate, cartDelete, carts } from 'service/cart';
import LoadingBar from 'components/commonUi/LoadingBar';
import { groupBy, isEmptyObj, numberFormat } from 'utils/utils';
import { totalPrice } from 'utils/utils';
const IMGURL = 'https://ondongne-bucket.s3.ap-northeast-2.amazonaws.com/store/';


function CartPage({ }) {
  const navigate = useNavigate()
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  const [loading, setLoading] = useState(false);
  const [list, setList] = useState([]);

  const [modal, setModal] = useState(false);
  const [deleteCartId, setDeleteCartId] = useState(0);

  const getCarts = async () => {
    const response = await carts();

    if (response && response.data.data) {
      setList(groupBy(response.data.data, 'storeId'));
    }

    setLoading(false);
  }

  // 상품 개수 변경
  const itemCount = async (item, type) => {
    if (type === -1 && item.count == 1) {
      return;
    }

    const response = await cartCountUpdate(item, type);

    if (response && response.data.data) {
      getCarts();
    }
  }

  // 장바구니 삭제
  const deleteCart = async () => {
    const response = await cartDelete(deleteCartId);

    if (response && response.data.data) {
      setDeleteCartId(0);
      getCarts();
      setModal(false);
    }
  }

  // 총 가격
  const storeTotalPrice = (values) => {
    let price = 0;
    values.map(item =>
      price += (Number(item.itemPrice) * item.count) - Number(item.itemPrice) * item.count * (Number(item.itemSalePercent) / 100)
    );
    return price;
  }

  // 주문페이지 이동
  const orderRoute = (item) => {
    const orderData = [];
    item.forEach(i => orderData.push({
      id: i.itemId,
      count: i.count
    }));

    return navigate('/order/new', { state: { data: orderData, toBack: "/cart" } })
  }

  useEffect(() => {
    if (isAuthenticated) {
      setLoading(true);
      getCarts();
    }
  }, [isAuthenticated])

  return (
    <div>
      <Layout
        title="장바구니"
        bell={false}
        cart={false}
        onBackClick={() => navigate("/")}
      >
        <L.Container >
          <L.Contents _padding='0px' _bg='#F5F5F5'>

            {/* =================== 로딩 =================== */}
            {
              loading && <LoadingBar />
            }

            {/* ============ 장바구니에 담긴 상품이 없을때 ============ */}
            {
              !loading &&
              isEmptyObj(list) &&
              <L.Contents _padding='80px 20px' _height='calc(100vh - 68px)'>
                <CartEmptyText>장바구니에 담긴 상품이 없습니다.</CartEmptyText>
              </L.Contents>
            }

            {/* ============ 장바구니에 담긴 상품이 있을때 ============ */}
            {
              !loading &&
              !isEmptyObj(list) &&
              Object.values(list).map((newList, i) => (
                <CartContainer
                  key={i}
                >
                  <CartDiv>
                    <CarProfiletDiv>
                      <ProfileImg src={newList[0].storeProfile ? IMGURL + newList[0].storeProfile : Avatar} />
                      <ProfileName>{newList[0].storeName}</ProfileName>
                    </CarProfiletDiv>
                    {
                      newList.map(item => (
                        <CarContentDiv key={item.cartId}>
                          <ContentProductDiv>
                            <ProductTitleDiv>
                              <ProductTitle>{item.itemName}</ProductTitle>
                              <DeleteStyle
                                type='button'
                                onClick={() => {
                                  setDeleteCartId(item.cartId);
                                  setModal(true)
                                }}
                              >
                                <Delete />
                              </DeleteStyle>
                            </ProductTitleDiv>
                            <ProductInfo>
                              <ProductInfoText>기본: {totalPrice(Number(item.itemPrice) * item.count, item.itemSalePercent)}원</ProductInfoText>
                            </ProductInfo>
                          </ContentProductDiv>
                          <ContentCountDiv>
                            <CountText>수량 선택</CountText>
                            <CountAddDiv>
                              <CountAddIconStyle
                                onClick={() => itemCount(item, -1)}
                              >
                                <Minus />
                              </CountAddIconStyle>
                              <CoundAddNum>{item.count}</CoundAddNum>
                              <CountAddIconStyle
                                onClick={() => itemCount(item, 1)}
                              >
                                <Plus />
                              </CountAddIconStyle>
                            </CountAddDiv>
                          </ContentCountDiv>
                        </CarContentDiv>
                      ))
                    }
                    <ContentButton
                      onClick={() => orderRoute(newList)}
                    >
                      <ButtonText>{numberFormat(storeTotalPrice(newList))}원 주문</ButtonText>
                    </ContentButton>
                  </CartDiv>
                </CartContainer>
              ))
            }

            {
              modal &&
              <ModalDelete
                PropsModal={() => setModal(false)}
                PropsWithdrwal={deleteCart}
                closeText="취소"
                buttonText="삭제"
                titleText="상품을 장바구니에서 삭제하시겠습니까?"
              />
            }

          </L.Contents>
        </L.Container>
      </Layout>
    </div>
  )
}

export default CartPage