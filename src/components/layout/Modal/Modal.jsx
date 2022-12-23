import React from 'react'
import styled from 'styled-components'
import { Text } from '../../commonUi/Text'
import SwiperPage from '../Swiper/Swiper'



function Modal() {

  const goToMore=()=>{
    // 더보기>비즈회원신청>약관동의토글이동
  }
  return (
    <div>
      <Body>
        <Container>
          <Header
          ><Text onClick={goToMore} _align={'right'} _size={14} _weight={400} _color={'gray600'}>건너뛰기</Text></Header>
          <Content>
            <SwiperPage/>
            <Btn
              onClick={goToMore}
            >시작하기</Btn>
          </Content>
        </Container>
      </Body>
    </div>
  )
}

export default Modal


export const Body = styled.div`
  background: rgba(0, 0, 0, 0.6);
  width: 100wh;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
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
`
const Header = styled.div`
  width: 390px;
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
  width: 390px;
  height: 706px;
`
const Btn = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 24px;
  gap: 4px;
  width: 350px;
  height: 56px;
  background: #0B806F;
  border-radius: 4px;
  font-weight: 600;
  font-size: 18px;
  color: #FFFFFF;
`
