import React from 'react'
import styled from 'styled-components'
import { Text } from 'components/commonUi/Text'
import SwiperPage from '../Swiper/Swiper'
import { Close } from 'components/commonUi/Icon'



function Modal({ setAgreementModal, closeModel }) {

  const goToMore = () => {
    // 더보기>비즈회원신청>약관동의토글이동
    closeModel();
    setAgreementModal(true);
  }
  return (
    <Body>
      <Container>
        <Header onClick={closeModel}>
          <Close />
          {/* <Text onClick={closeModel} _align={'right'} _size={14} _weight={400} _color={'gray600'}>건너뛰기</Text> */}
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
  /* width: 100%; */
  width: ${props => props._width || '100%'};
  height: ${props => props._height || '100vh'};
  /* height: 100%; */
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 9999;
  /* overflow: hidden; */
`
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${props => props._items || 'flex-start'};
  justify-content: ${props => props._content};
  padding: 0px;
  width: ${props => props._width || '390px'};
  height: ${props => props._height || '766px'};
  border-radius: ${props => props._br || '12px'};
  background: #FFFFFF;
  @media screen and (max-width: 450px) {
    width: 100%;
    height: 100%;
    border-radius: 0px;
  }
  @media screen and (max-height: 720px) {
    overflow-y: scroll;
    overflow-x: hidden;
  }
`
export const Header = styled.div`
  width: 100%;
  height: 60px;
  padding: 20px;
  text-align: right;
`
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: ${props => props._padding || '40px 20px'};
  gap: ${props => props._gap || '12px'};
  width: 100%;
  height: ${props => props._height || '906px'};
  @media screen and (max-height: 720px) {
    padding: ${props => props._paddingmedia};
  }
`
export const Btn = styled.div`
  margin-left: ${props => props._marginleft};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 24px;
  gap: 4px;
  width: ${props => props._width || '100%'};
  height: 56px;
  background: #0B806F;
  border-radius: 4px;
  font-weight: 600;
  font-size: 18px;
  color: #FFFFFF;
`
