import styled from "styled-components";
import { Swiper } from 'swiper/react';

export const Container = styled.div`
  position: relative;
`;

export const SwiperWapper = styled(Swiper)`
  	width: 100% !important;
	max-width: 728px !important;
	height: 180px !important;
	overflow: hidden !important;
`;

export const Banner = styled.img`
	background-image: url("");
	position: relative;
	overflow: hidden;
	width: 100%;
	height: 180px;
	object-fit: cover;
	background-repeat: no-repeat;
`;

export const CurrentNumberBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 2px 12px;
  z-index: 999;
  position: absolute;
  width: 43px;
  height: 22px;
  right: 16px;
  bottom: 12px;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 99px;
  & span {
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    color: #ffffff;
  }

  & span:last-child {
    color: #BDBDBD;
  }
`;