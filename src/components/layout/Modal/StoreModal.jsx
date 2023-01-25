import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import Img1 from '.././../../assets/images/business/image1.png'



function StoreModal() {

  const navigate = useNavigate();

  return (
    <Body>
      <Container>
        <Content>
          <SwiperDiv>
            <SwiperTextDiv>
              <SwiperTitle>비즈회원 승인 완료!</SwiperTitle>
              <SwiperText><p><p>비즈 회원으로 승인되었습니다.</p>상점과 사업자 정보를 등록해주세요.</p></SwiperText>
            </SwiperTextDiv>
            <SwiperSlideImg src={Img1} />
          </SwiperDiv>
          <Btn
            onClick={() => navigate("/business/management")}
          >상점 게시</Btn>
        </Content>
      </Container>
    </Body>
  )
}

export default StoreModal;


export const Body = styled.div`
  background: rgba(0, 0, 0, 0.6);
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 9999;
`
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  width: 390px;
  height: 600px;
  border-radius: 12px;
  background: #FFFFFF;
  @media screen and (max-width: 450px) {
    width: 100%;
    height: 100%;
    border-radius: 0px;
  }
`
const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 40px 20px;
  gap: 12px;
  width: 100%;
  height: 100%;
`
const Btn = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 24px;
  gap: 4px;
  width: 100%;
  height: 56px;
  background: #0B806F;
  border-radius: 4px;
  font-weight: 600;
  font-size: 18px;
  color: #FFFFFF;
`
const SwiperDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 390px;
  height: 100%;
  gap: 20px;
  text-align: center;
  `
const SwiperTextDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 12px;
  width: 100%;
  height: auto;
`
const SwiperTitle = styled.p`
  font-weight: 600;
  font-size: 24px;
  color: #212121;
`
const SwiperText = styled.p`
  font-weight: 400;
  font-size: 15px;
  text-align: center;
  color: #757575;
`
const SwiperSlideImg = styled.img`
  display: block;
  width: 350px;
  height: 287px;
  object-fit: cover;
`