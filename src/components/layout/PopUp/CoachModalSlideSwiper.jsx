import React from 'react'
// import "./styles.css";
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
import { Btn } from '../Modal/Modal';
import { useState } from 'react';
import { useEffect } from 'react';

function CoachModalSlideSwiper(handleNext) {

  const [next, setNext] = useState(false);

  // const [prevEl, setPrevEl] = useState(null);
  // const [nextEl, setNextEl] = useState(null);

  const nextSlide = (swiper)=> {
    swiper.slideNext()
  }

  // const swiper = new Swiper('.swiper', {
  //   // ...
  //   on: {
  //     init: function () {
  //       console.log('swiper initialized');
  //     },
  //   },
  // });
  
  const SlideImages = [
    // require(<Slide1/>),
    // require(<Slide1/>),
    // require(<Slide1/>),
    // require('../../../assets/images/business/image1.png'),
    // require('../../../assets/images/business/image1.png'),
    // require('../../../assets/images/business/image1.png'),
  ];

  // useEffect(() => {
  //   if (next === true) {
  //     nextSlide()
  //   }
  // }, [next])


  return (
    <div>

      <Swiper
        spaceBetween={0}
        pagination={{
          clickable: true,
        }}
        // navigation={{ prevEl, nextEl }}
        modules={[Pagination]}
        className="mySwiper"
        // handleNext={handleNext}
        onClick={nextSlide}
        // onClick={handleNext}
      >
        <SwiperSlide
        ><Slide1 /></SwiperSlide>
        <SwiperSlide><Slide2 /></SwiperSlide>
        <SwiperSlide><Slide3 /></SwiperSlide>
        <SwiperSlide><Slide4 /></SwiperSlide>
        {/* <Btn
              onClick={()=>{handleNext()}} 
              >다음</Btn> */}

        {/* {SlideImages.map((index) => <SwiperSlide><SwiperSlideImg src={index.default} width='100%'/></SwiperSlide>)} */}
        {/* {SlideImages.map((index) => <SwiperSlide><SwiperSlideImg src={index.default} width='100%'/></SwiperSlide>)} */}
      </Swiper>
      {/* <button ref={(node) => setPrevEl(node)}>prev</button>
      <button ref={(node) => setNextEl(node)}>next</button> */}
    </div>
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


export default CoachModalSlideSwiper

