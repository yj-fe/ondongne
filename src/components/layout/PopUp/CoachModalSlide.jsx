import React from 'react'
import * as L from 'components/commonUi/Layout';
import { Text } from 'components/commonUi/Text'
import { Body, Container, Content, Btn } from '../Modal/Modal'
import CoachModalSlideSwiper from './CoachModalSlideSwiper'


function CoachModalSlide({setAgreementModal, closeModel}) {

const handleNext = (swiper) => {
  swiper.slideNext()
}

  return (
    <Body>
      <Container>
        <Content>
          <CoachModalSlideSwiper handleNext={handleNext} />
          <L.FlexCols _gap={26}>
            <Btn
              onClick={()=>handleNext()} 
            >다음</Btn>
            <Text 
              onClick={closeModel} 
              _align={'center'} 
              _size={14} 
              _color={'gray600'}
              >
              다시보지 않기
            </Text>
          </L.FlexCols>
        </Content>
      </Container>
    </Body>
  )
}

export default CoachModalSlide


