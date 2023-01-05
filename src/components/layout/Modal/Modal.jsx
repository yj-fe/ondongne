import React from 'react'
import styled from 'styled-components'
import { Text } from 'components/commonUi/Text'
import SwiperPage from '../Swiper/Swiper'



function Modal({setAgreementModal, closeModel}) {

  const goToMore = () => {
    // 더보기>비즈회원신청>약관동의토글이동
    closeModel();
    setAgreementModal(true);
  }
  return (
    <Body>
      <Container>
        <Header>
          <Text onClick={closeModel} _align={'right'} _size={14} _weight={400} _color={'gray600'}>건너뛰기</Text>
        </Header>
        <Content>
          <SwiperPage />
          <Btn
            onClick={goToMore}
          >시작하기</Btn>
        </Content>
      </Container>
    </Body>
  )
}

export default Modal


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
  height: 766px;
  border-radius: 12px;
  background: #FFFFFF;
  @media screen and (max-width: 450px) {
    width: 100%;
    height: 100%;
    border-radius: 0px;
  }
`
const Header = styled.div`
  width: 100%;
  height: 60px;
  padding: 20px;
`
const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 40px 20px;
  gap: 12px;
  width: 100%;
  height: 706px;
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
