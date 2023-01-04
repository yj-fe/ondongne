import React, { useState } from 'react'
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

function CartPage({}) {
  const navigate = useNavigate()
  const [modal, setModal] = useState(false);




  const ShowDeleteModal = () => {
    setModal(!modal);
  }
  const PropsModal = () => {
    setModal(!modal);
  }



  return (
    <div>
      <Layout
        title="리뷰 작성"
        bell={false}
        cart={false}
        onBackClick={() => navigate(-1)}
      >
        <L.Container >
          <L.Contents _padding='0px'>

{/* ============ 장바구니에 담긴 상품이 없을때 ============ */}
          {/* <L.Contents _padding='80px 20px' _height='100vh'>
            <CartEmptyText>장바구니에 담긴 상품이 없습니다.</CartEmptyText>        
          </L.Contents> */}

{/* ============ 장바구니에 담긴 상품이 있을때 ============ */}
        <CartContainer>
          <CartDiv>
            <CarProfiletDiv>
              <ProfileImg src={Avatar}/>
              <ProfileName>인싸과일</ProfileName>
            </CarProfiletDiv>
            <CarContentDiv>
              <ContentProductDiv>
                <ProductTitleDiv>
                  <ProductTitle>샤인머스켓 500g</ProductTitle>
                  <DeleteStyle
                    type='button'
                    onClick={ShowDeleteModal}
                  >
                    <Delete/>
                  </DeleteStyle>
                </ProductTitleDiv>
                <ProductInfo>
                  <ProductInfoText>기본: 18,000원</ProductInfoText>
                  <ProductInfoText>배달팁: 2,000원</ProductInfoText>
                </ProductInfo>
              </ContentProductDiv>
              <ContentCountDiv>
                <CountText>수량 선택</CountText>
                <CountAddDiv>
                  <CountAddIconStyle><Minus/></CountAddIconStyle>
                  <CoundAddNum>1</CoundAddNum>
                  <CountAddIconStyle><Plus/></CountAddIconStyle>
                </CountAddDiv>
              </ContentCountDiv>
              <ContentButton>
                <ButtonText>20,000원 주문</ButtonText>
              </ContentButton>
            </CarContentDiv>
          </CartDiv>
        </CartContainer>

        <CartContainer>
          <CartDiv>
            <CarProfiletDiv>
              <ProfileImg src={Avatar}/>
              <ProfileName>가양정육점</ProfileName>
            </CarProfiletDiv>
            <CarContentDiv>
              <ContentProductDiv>
                <ProductTitleDiv>
                  <ProductTitle>삼겹살 1kg</ProductTitle>
                  <DeleteStyle
                    type='button'
                    onClick={ShowDeleteModal}
                  >
                    <Delete/>
                  </DeleteStyle>
                </ProductTitleDiv>
                <ProductInfo>
                  <ProductInfoText>기본: 15,000원</ProductInfoText>
                  <ProductInfoText>추가 선택: 1,000원</ProductInfoText>
                  <ProductInfoText>배달팁: 2,000원</ProductInfoText>
                </ProductInfo>
              </ContentProductDiv>
              <ContentCountDiv>
                <CountText>수량 선택</CountText>
                <CountAddDiv>
                  <CountAddIconStyle><Minus/></CountAddIconStyle>
                  <CoundAddNum>2</CoundAddNum>
                  <CountAddIconStyle><Plus/></CountAddIconStyle>                </CountAddDiv>
              </ContentCountDiv>
              <ContentButton>
                <ButtonText>18,000원 주문</ButtonText>
              </ContentButton>
            </CarContentDiv>
          </CartDiv>
        </CartContainer>

      
      {modal && <ModalDelete PropsModal={PropsModal} closeText="취소" buttonText="삭제" titleText="상품을 장바구니에서 삭제하시겠습니까?"/>}
        
          </L.Contents>
        </L.Container>
      </Layout>
    </div>
  )
}

export default CartPage