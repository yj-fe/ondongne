import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";

export const SwiperWapper = styled(Swiper)`
    width: 100% !important;
    overflow: hidden !important;
`;

export const Slide = styled(SwiperSlide)`
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

export const CouponDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 20px;
    width: 100%;
    height: 140px;
    background: #2dac9e;
    border-radius: 8px;
`;

export const CouponInfo = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    gap: 8px;

    @media screen and (max-width: 500px) {
        flex-wrap: wrap;
    }
`;

export const CouponSubDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 24px;
    gap: 8px;
    background: #ffffff;
    border: 1px solid #eeeeee;
    border-radius: 8px;
    flex-wrap: wrap;
    width: 100%;
    max-width: 336px;
    height: 54px;
    @media screen and (max-width: 500px) {
        max-width: 100%;
    }
`;
