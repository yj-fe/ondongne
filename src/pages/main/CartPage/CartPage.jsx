import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import BasicHeader from 'components/Main/Main/BasicHeader/BasicHeader'
import Avatar from 'assets/common/avatar.png'
import { ReactComponent as Delete } from "assets/main/delete.svg";
import { ReactComponent as Minus } from "assets/main/cart/minus.svg";
import { ReactComponent as Plus } from "assets/main/cart/plus.svg";
import {CarContentDiv,CarProfiletDiv,CartBody,CartContainer,CartDiv,ProductInfo,ProductInfoText,ProductTitle,ProductTitleDiv,ProfileImg,ProfileName,ButtonText,CountAddDiv,DeleteStyle,ContentProductDiv,CountText,CoundAddNum,CountAddIconStyle,ContentCountDiv,ContentButton, CartEmptyDiv, CartEmptyTextDiv, CartEmptyText,} from './CartPageStyle'
import ModalDelete from 'components/Main/Cart/ModalDelete/ModalDelete';
import Layout from 'components/layout/Layout/Layout';
import * as L from 'components/commonUi/Layout';
import * as T from 'components/commonUi/Text';
import { useSelector } from 'react-redux';
import { cartCountUpdate, cartDelete, carts } from 'service/cart';
import LoadingBar from 'components/commonUi/LoadingBar';
import { groupBy, isEmptyObj, numberFormat } from 'utils/utils';
const IMGURL = 'https://ondongne-bucket.s3.ap-northeast-2.amazonaws.com/store/';


function CartPage({}) {
  const navigate = useNavigate()
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  const [loading, setLoading] = useState(false);
  const [list, setList] = useState([]);
  
  const [modal, setModal] = useState(false);
  const [deleteCartId, setDeleteCartId] = useState(0);

  const getCarts = async () => {
    const response = await carts();
        
    if(response && response.data.data) {
      setList(groupBy(response.data.data, 'storeId'));
    }

    setLoading(false);
  }

  // 상품 개수 변경
  const itemCount = async (item, type) => {
    if(type === -1 && item.count == 1) {
      return;
    }

    const response = await cartCountUpdate(item, type);

    if(response && response.data.data) {
      getCarts();
    }
  }

  // 장바구니 삭제
  const deleteCart = async () => {
      const response = await cartDelete(deleteCartId);
      
      if(response && response.data.data) {
        setDeleteCartId(0);
        getCarts();
        setModal(false);
      }
  }

  // 총 가격
  const storeTotalPrice = (values) => {
    let price = 0;
    values.map(item => price += Number(item.itemPrice * item.count));

    return price+Number(values[0].deliveryPrice);
  }

  useEffect(() => {
    if(isAuthenticated) {
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
        onBackClick={() => navigate(-1)}
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
              <L.Contents _padding='80px 20px' _height='100vh'>
                <CartEmptyText>장바구니에 담긴 상품이 없습니다.</CartEmptyText>        
              </L.Contents>
            }

            {/* ============ 장바구니에 담긴 상품이 있을때 ============ */}
            {
              !loading &&
              !isEmptyObj(list) &&
              Object.values(list).map((values, i) => (
                <CartContainer
                    key={i}
                  >
                    <CartDiv>
                      <CarProfiletDiv>
                        <ProfileImg src={values[0].storeProfile ? IMGURL+values[0].storeProfile : Avatar}/>
                        <ProfileName>{values[0].storeName}</ProfileName>
                      </CarProfiletDiv>
                      {
                        values.map(item => (
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
                                  <Delete/>
                                </DeleteStyle>
                              </ProductTitleDiv>
                              <ProductInfo>
                                <ProductInfoText>기본: {numberFormat(item.itemPrice)}원</ProductInfoText>
                                <ProductInfoText>배달팁: {numberFormat(item.deliveryPrice)}원</ProductInfoText>
                              </ProductInfo>
                            </ContentProductDiv>
                            <ContentCountDiv>
                              <CountText>수량 선택</CountText>
                              <CountAddDiv>
                                <CountAddIconStyle
                                  onClick={() => itemCount(item, -1)}
                                >
                                  <Minus/>
                                </CountAddIconStyle>
                                <CoundAddNum>{item.count}</CoundAddNum>
                                <CountAddIconStyle
                                  onClick={() => itemCount(item, 1)}
                                >
                                  <Plus/>
                                </CountAddIconStyle>
                              </CountAddDiv>
                            </ContentCountDiv>
                          </CarContentDiv>
                        ))
                      }
                    <ContentButton>
                      <ButtonText>{numberFormat(storeTotalPrice(values))}원 주문</ButtonText>
                    </ContentButton>
                  </CartDiv>     
                </CartContainer>
              ))
            }
        
            {
              modal && 
              <ModalDelete 
                PropsModal={()=>setModal(false)} 
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