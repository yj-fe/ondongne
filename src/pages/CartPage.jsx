import React, { useState } from 'react'
import styled from 'styled-components'
import BasicHeader from '../components/Main/BasicHeader'
import ModalDelete from '../components/Main/ModalDelete'
import Avatar from '../assets/common/avatar.png'
import { ReactComponent as Delete } from "../assets/main/delete.svg";
import { ReactComponent as Minus } from "../assets/main/cart/minus.svg";
import { ReactComponent as Plus } from "../assets/main/cart/plus.svg";


const CartBody = styled.div`
  display: flex;
  align-items: center;
  /* justify-content: center; */
  background: #cccccc;
  flex-direction: column;
  padding-bottom: 56px;
  height: 100vh;
  margin-top: 60px;
  gap: 8px;
`
const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #6e6868;
  width: 728px;
  height: auto;
  > div {
    /* max-width: 728px; */
    width: 100%;

    @media only screen and (max-width: 728px) { 
      width: 100%;
    }
  }
`
const CartEmptyDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 80px 20px;
  gap: 4px;
  height: 100vh;
  margin-top: 60px;
  background: #ffffff;
`
const CartEmptyTextDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 80px;
`
const CartEmptyText = styled.p`
  font-weight: 300;
  font-size: 15px;
  line-height: 20px;
  text-align: center;
  color: #757575;
`
const CartDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  width: 728px;
  height: auto;
`
const CarProfiletDiv = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px 20px;
  gap: 8px;
  width: 728px;
  height: 64px;
  background: #FFFFFF;
  border-bottom: 1px solid #EEEEEE;
`
const ProfileImg = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
`
const ProfileName = styled.p`
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height, or 150% */

  text-align: center;

  /* Gray/900 */

  color: #212121;
`
const CarContentDiv = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 20px 24px;
gap: 20px;
width: 728px;
height: auto;
background: #FFFFFF;
`
const ContentProductDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 16px;
  width: 680px;
  height: auto;
`
const ProductTitleDiv = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 24px;
  width: 680px;
  height: 26px;
`
const DeleteStyle = styled.div`
  width: 20px;
  height: 20px;
`
const ProductTitle = styled.p`
  font-weight: 600;
  font-size: 18px;
  color: #212121;
`
const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 4px;
  width: 680px;
`
const ProductInfoText = styled.p`
  font-weight: 400;
  font-size: 16px;
  color: #757575;
`
const ContentCountDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px;
  gap: 16px;

  width: 680px;
  height: 32px;
`
const CountText = styled.p`
  font-weight: 600;
  font-size: 16px;
  color: #212121;
`
const CountAddDiv = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 8px;
  width: 88px;
  height: 32px;
  border: 1px solid #EEEEEE;
  border-radius: 4px;
`
const CountAddIconStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
`
const CoundAddNum = styled.p`
  font-weight: 500;
  font-size: 16px;
  color: #424242;
`
const ContentButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 4px;
  width: 680px;
  height: 48px;
  background: #0B806F;
  border-radius: 4px;
`
const ButtonText = styled.p`
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #FFFFFF;
`
function CartPage() {

  let [modal, setModal] = useState(false);




  const ShowDeleteModal = () => {
    setModal(!modal);
  }
  const PropsModal = () => {
    setModal(!modal);
  }



  return (
    <div>
      <BasicHeader title="장바구니"/>

      <CartBody>

{/* ============ 장바구니에 담긴 상품이 없을때 ============ */}
        {/* <CartContainer>
          <CartEmptyDiv>     
          <CartEmptyTextDiv>    
            <CartEmptyText>장바구니에 담긴 상품이 없습니다.</CartEmptyText>        
          </CartEmptyTextDiv>        
          </CartEmptyDiv>          
        </CartContainer> */}

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

      </CartBody>
      {modal && <ModalDelete PropsModal={PropsModal} />}

    </div>
  )
}

export default CartPage