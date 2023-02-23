import React, { useRef, useState } from "react";
import * as L from "components/commonUi/Layout";
import { Text } from "components/commonUi/Text";
import { Body, Container, Content, Btn } from "../Modal/BizSignupModal";
import CoachModalSlideSwiper from "./CoachModalSlideSwiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import Img1 from "assets/images/CoachModal/slide1.png";
import Img2 from "assets/images/CoachModal/slide2.png";
import Img3 from "assets/images/CoachModal/slide3.png";
import Img4 from "assets/images/CoachModal/slide4.png";

// import required modules
import { Pagination } from "swiper";
import {
    SwiperDiv,
    SwiperTextDiv,
    SwiperTitle,
    SwiperText,
    SwiperSlideImg,
    navigation,
} from "../Swiper/Swiper";
import { SimpleClose } from "components/commonUi/Icon";

function CoachModalSlide({ neverWatch, closeModal }) {
    const slideRef = useRef(null);
    const [status, setStatus] = useState(false);

    return (
        <Body>
            <Container style={{ position: "relative" }}>
                <Content _padding="48px 0px" _paddingmedia="10px 0px">
                    <L.Child
                        _top={"15px"}
                        _right={"15px"}
                        _zIdx={999}
                        onClick={closeModal}
                    >
                        <SimpleClose />
                    </L.Child>
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
                        onSlideChange={(swiperCore) => {
                            const { activeIndex } = swiperCore;

                            if (activeIndex === 4) {
                                setStatus(true);
                            }
                        }}
                    >
                        <SwiperSlide>
                            <Slide1 />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Slide2 />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Slide3 />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Slide4 />
                        </SwiperSlide>
                    </Swiper>
                    <L.FlexCols _gap={26}>
                        <Btn
                            _marginleft="5%"
                            _width="90%"
                            onClick={
                                status
                                    ? closeModal
                                    : () => slideRef.current.swiper.slideNext()
                            }
                        >
                            <Text _color="white" _size={16}>
                                {status ? "시작하기" : "다음"}
                            </Text>
                        </Btn>
                        <Text
                            onClick={neverWatch}
                            _align={"center"}
                            _size={14}
                            _color={"gray600"}
                        >
                            다시보지 않기
                        </Text>
                    </L.FlexCols>
                </Content>
            </Container>
        </Body>
    );
}

function Slide1() {
    return (
        <div>
            <SwiperDiv _gap="0px" _height="498px">
                <SwiperTextDiv _height="84px">
                    <SwiperTitle>보다 더 간편하게</SwiperTitle>
                    <SwiperText>
                        <p>이제 힘들게 돌아다니지 않아도</p>
                        <p>우리동네 상점/상품을 쉽게 확인하실 수 있어요.</p>
                    </SwiperText>
                </SwiperTextDiv>
                <SwiperSlideImg _width="245px" _height="218px" src={Img1} />
            </SwiperDiv>
        </div>
    );
}
function Slide2() {
    return (
        <div>
            <SwiperDiv _gap="0px" _height="498px">
                <SwiperTextDiv>
                    <SwiperTitle>공동구매로 저렴하게</SwiperTitle>
                    <SwiperText>
                        <p>
                            온동네마켓에 상품을 등록하고 빠르게 홍보해서 제품을
                        </p>
                        <p>공동구매로 저렴하게 공구할 수 있어요.</p>
                    </SwiperText>
                </SwiperTextDiv>
                <SwiperSlideImg _width="245px" _height="218px" src={Img2} />
            </SwiperDiv>
        </div>
    );
}
function Slide3() {
    return (
        <div>
            <SwiperDiv _gap="0px" _height="498px">
                <SwiperTextDiv>
                    <SwiperTitle>쉽고 빠른 상품등록</SwiperTitle>
                    <SwiperText>
                        <p>회원가입하고 단골가게를 등록해 보세요.</p>
                        <p>판매해보세요.</p>
                    </SwiperText>
                </SwiperTextDiv>
                <SwiperSlideImg _width="245px" _height="218px" src={Img3} />
            </SwiperDiv>
        </div>
    );
}
function Slide4() {
    return (
        <div>
            <SwiperDiv _gap="0px" _height="498px">
                <SwiperTextDiv>
                    <SwiperTitle>홍보는 무료! 매출은 쑥쑥!</SwiperTitle>
                    <SwiperText>
                        <p>
                            비즈계정으로 전환하여 나만의 상점을 만들어 보세요.
                        </p>
                    </SwiperText>
                </SwiperTextDiv>
                <SwiperSlideImg
                    _margintop="122px"
                    _width="308px"
                    _height="168px"
                    src={Img4}
                />
            </SwiperDiv>
        </div>
    );
}
export default CoachModalSlide;
