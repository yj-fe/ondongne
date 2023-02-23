import React, { useState, useRef } from "react";
import { getBanners } from "service/main";
import { SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper"; // 추가
import "swiper/css";
import "swiper/css/pagination";
import * as S from "./styles";
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import LoadingBar from "components/commonUi/LoadingBar";

SwiperCore.use([Navigation, Pagination, Autoplay]); // 추가

/*
 *  배너
 */
const MainBanner = () => {
    const navigate = useNavigate();
    const slideRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const { data, isLoading } = useQuery(["banners"], getBanners, {
        staleTime: 30000,
        refetchOnWindowFocus: false,
    });

    return (
        <>
            {isLoading && <LoadingBar />}
            {!isLoading && data && data.length > 0 && (
                <S.Container>
                    <S.SwiperWapper
                        ref={slideRef}
                        spaceBetween={0}
                        navigation
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 3000 }}
                        style={{
                            "--swiper-pagination-color": "#0B806F",
                        }}
                        onSlideChange={(swiperCore) =>
                            setCurrentIndex(swiperCore.activeIndex)
                        }
                    >
                        {data.map((b, i) => (
                            <SwiperSlide key={i}>
                                <S.Banner
                                    src={b.banner}
                                    onClick={() => navigate(b.route)}
                                />
                            </SwiperSlide>
                        ))}
                    </S.SwiperWapper>
                    <S.CurrentNumberBox>
                        <span>{currentIndex + 1}</span>
                        <span>/{data.length}</span>
                    </S.CurrentNumberBox>
                </S.Container>
            )}
        </>
    );
};

export default MainBanner;
