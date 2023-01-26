import React from 'react'
import { Text } from 'components/commonUi/Text'
import { Body, Container, Content, Btn } from '../Modal/Modal'
import CoachModalSlideSwiper from './CoachModalSlideSwiper'



function CoachModalSlide({setAgreementModal, closeModel}) {

  const goToMore = () => {
    // 더보기>비즈회원신청>약관동의토글이동
    closeModel();
    setAgreementModal(true);
  }
  return (
    <Body>
      <Container>
        <Content>
          <CoachModalSlideSwiper />
          <Btn
            onClick={goToMore}
          >다음</Btn>
          <Text 
            onClick={closeModel} 
            _align={'center'} 
            _size={14} 
            _color={'gray600'}
          >
            다시보지 않기
          </Text>
        </Content>
      </Container>
    </Body>
  )
}

export default CoachModalSlide


