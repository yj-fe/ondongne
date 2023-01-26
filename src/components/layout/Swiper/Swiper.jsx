import React from 'react'
import "./styles.css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import styled from 'styled-components';
import Img1 from '.././../../assets/images/business/image1.png'

// import required modules
import { Pagination } from "swiper";

function SwiperPage() {

  const SlideImages = [
    // require(<Slide1/>),
    // require(<Slide1/>),
    // require(<Slide1/>),
    // require('../../../assets/images/business/image1.png'),
    // require('../../../assets/images/business/image1.png'),
    // require('../../../assets/images/business/image1.png'),
  ];

  return (
    <div>

      <Swiper
        spaceBetween={0}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><Slide1 /></SwiperSlide>
        <SwiperSlide><Slide1 /></SwiperSlide>
        <SwiperSlide><Slide1 /></SwiperSlide>
        <SwiperSlide><Slide1 /></SwiperSlide>
        {/* {SlideImages.map((index) => <SwiperSlide><SwiperSlideImg src={index.default} width='100%'/></SwiperSlide>)} */}
        {/* {SlideImages.map((index) => <SwiperSlide><SwiperSlideImg src={index.default} width='100%'/></SwiperSlide>)} */}
      </Swiper>

    </div>
  )
}

function Slide1() {
  return (
    <div>
      <SwiperDiv>
        <SwiperTextDiv>
          <SwiperTitle>1. 나만의 상점을 한곳에서</SwiperTitle>
          <SwiperText><p>내 동네 상품이라면 어디든지</p><p>상점 신청을 무료로 진행해 보세요.</p></SwiperText>
        </SwiperTextDiv>
        <SwiperSlideImg src={Img1} />
      </SwiperDiv>
    </div>
  )
}




export default SwiperPage

export const SwiperDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 390px;
  height: 100%;
  gap: 40px;
  text-align: center;
  `
export const SwiperTextDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 12px;
  width: 100%;
  height: auto;
`
export const SwiperTitle = styled.p`
  font-weight: 600;
  font-size: 24px;
  color: #212121;
`
export const SwiperText = styled.p`
  font-weight: 400;
  font-size: 15px;
  text-align: center;
  color: #757575;
`
export const SwiperSlideImg = styled.img`
  display: block;
  width: 350px;
  height: 287px;
  object-fit: cover;
  margin-top: 50px;
  margin-bottom: 80px;
`