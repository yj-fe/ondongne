import React, {useRef} from 'react'
import * as L from 'components/commonUi/Layout';
import { Text } from 'components/commonUi/Text'
import { Body, Container, Content, Btn } from '../Modal/Modal'
import CoachModalSlideSwiper from './CoachModalSlideSwiper'

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import Img1 from 'assets/images/CoachModal/slide1.png'
import Img2 from 'assets/images/CoachModal/slide2.png'
import Img3 from 'assets/images/CoachModal/slide3.png'
import Img4 from 'assets/images/CoachModal/slide4.png'

// import required modules
import { Pagination } from "swiper";
import { SwiperDiv, SwiperTextDiv, SwiperTitle, SwiperText, SwiperSlideImg, navigation } from '../Swiper/Swiper';



function CoachModalSlide({setAgreementModal, neverWatch}) {

  const slideRef = useRef(null);




  return (
    <Body>
      <Container>
        <Content _padding='80px 0px' _paddingmedia='10px 0px'>
          <Swiper
            style={{
              "--swiper-pagination-color": "#0B806F",
            }}
            spaceBetween={0}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
            ref={slideRef}
            loop={true}
          >
            <SwiperSlide
            ><Slide1 /></SwiperSlide>
            <SwiperSlide><Slide2 /></SwiperSlide>
            <SwiperSlide><Slide3 /></SwiperSlide>
            <SwiperSlide><Slide4 /></SwiperSlide>
          </Swiper>
          <L.FlexCols _gap={26}>
            <Btn
              _marginleft='5%'
              _width='90%'
            onClick={()=> {slideRef.current.swiper.slideNext()}}
            >다음</Btn>
            <Text 
              onClick={neverWatch} 
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
function Slide1() {
  return (
    <div>
      <SwiperDiv _gap='0px' _height='498px'>
        <SwiperTextDiv _height='84px'>
          <SwiperTitle>1. 알림/장바구니</SwiperTitle>
          <SwiperText><p>새로운 정보와 장바구니에 저장한 상품을</p><p>확인해 보실 수 있어요.</p></SwiperText>
        </SwiperTextDiv>
        <SwiperSlideImg src={Img1} />
      </SwiperDiv>
    </div>
  )
}
function Slide2() {
  return (
    <div>
      <SwiperDiv _gap='0px' _height='498px'>
        <SwiperTextDiv>
          <SwiperTitle>2. 공동구매</SwiperTitle>
          <SwiperText><p>동네 주민들과 함께 다양한 상품을</p><p>저렴하게 공동구매해 보세요.</p></SwiperText>
        </SwiperTextDiv>
        <SwiperSlideImg src={Img2} />
      </SwiperDiv>
    </div>
  )
}
function Slide3() {
  return (
    <div>
      <SwiperDiv _gap='0px' _height='498px'>
        <SwiperTextDiv>
          <SwiperTitle>3. 단골가게</SwiperTitle>
          <SwiperText><p>회원가입하고 단골가게를 등록해 보세요.</p><p>우리 동네 상품정보를 빠르게 받아보실 수 있어요.</p></SwiperText>
        </SwiperTextDiv>
        <SwiperSlideImg src={Img3} />
      </SwiperDiv>
    </div>
  )
}
function Slide4() {
  return (
    <div>
      <SwiperDiv _gap='0px' _height='498px'>
        <SwiperTextDiv>
          <SwiperTitle>4. 더 보기</SwiperTitle>
          <SwiperText><p>쉽게 회원 가입하실 수 있고</p><p>다양한 정보를 확인해 보실 수 있어요.</p></SwiperText>
        </SwiperTextDiv>
        <SwiperSlideImg src={Img4} />
      </SwiperDiv>
    </div>
  )
}
export default CoachModalSlide


