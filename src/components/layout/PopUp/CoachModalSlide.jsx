import React, { useRef, useState } from "react";
import * as L from "components/commonUi/Layout";
import { Text } from "components/commonUi/Text";
import { Body, Container, Content, Btn } from "../../BizSignup/BizSignupModal";
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
                                {status ? "????????????" : "??????"}
                            </Text>
                        </Btn>
                        <Text
                            onClick={neverWatch}
                            _align={"center"}
                            _size={14}
                            _color={"gray600"}
                        >
                            ???????????? ??????
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
                    <SwiperTitle>?????? ??? ????????????</SwiperTitle>
                    <SwiperText>
                        <p>?????? ????????? ??????????????? ?????????</p>
                        <p>???????????? ??????/????????? ?????? ???????????? ??? ?????????.</p>
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
                    <SwiperTitle>??????????????? ????????????</SwiperTitle>
                    <SwiperText>
                        <p>
                            ?????????????????? ????????? ???????????? ????????? ???????????? ?????????
                        </p>
                        <p>??????????????? ???????????? ????????? ??? ?????????.</p>
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
                    <SwiperTitle>?????? ?????? ????????????</SwiperTitle>
                    <SwiperText>
                        <p>?????????????????? ??????????????? ????????? ?????????.</p>
                        <p>??????????????????.</p>
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
                    <SwiperTitle>????????? ??????! ????????? ??????!</SwiperTitle>
                    <SwiperText>
                        <p>
                            ?????????????????? ???????????? ????????? ????????? ????????? ?????????.
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
