import React, { useRef } from "react";
import * as T from "components/commonUi/Text";
import { Badge } from "components/commonUi/Button";
import Moment from "react-moment";
import "moment/locale/ko";
import "swiper/css";
import "swiper/css/pagination";
import * as S from "./styles";
import SwiperCore, { Pagination, Autoplay } from "swiper"; // 추가

SwiperCore.use([Pagination, Autoplay]); // 추가

const CouponList = ({ list, setCurrentIndex }) => {
  const slideRef = useRef(null);
  return (
    <S.SwiperWapper
      ref={slideRef}
      spaceBetween={0}
      onSlideChange={(swiperCore) => setCurrentIndex(swiperCore.activeIndex)}
    >
      {list.map((item, i) => (
        <S.Slide key={i}>
          <S.CouponDiv>
            <div>
              <Badge
                _letspace="0.07em"
                _weight={600}
                _bg="green50"
                _bdr="4px"
                _color="green700"
                _size="12px"
              >
                발행중
              </Badge>
              <T.Text _weight="600" _size="18px" _line="26px" _color="white">
                {item.coupon}
              </T.Text>
            </div>
            <div>
              <T.Text _weight="400" _size="13" _line="18px" _color="white">
                <Moment format="YY.MM.DD">{item.endDate}</Moment> 까지
              </T.Text>
              <T.Text _weight="400" _size="13" _line="18px" _color="white">
                방문결제 시 현장 할인
              </T.Text>
            </div>
          </S.CouponDiv>

          <S.CouponInfo>
            <S.CouponSubDiv>
              <T.Text _weight={600} _size={18}>
                쿠폰 다운로드 수
              </T.Text>
              <T.Text _weight={600} _size={18}>
                <T.Text as="span" _weight={600} _size={18}>
                  {item.downloadCount}
                </T.Text>
                건
              </T.Text>
            </S.CouponSubDiv>
            <S.CouponSubDiv>
              <T.Text _weight={600} _size={18}>
                쿠폰 사용 수
              </T.Text>
              <T.Text _weight={600} _size={18}>
                <T.Text as="span" _weight={600} _size={18}>
                  {item.useCount}
                </T.Text>
                건
              </T.Text>
            </S.CouponSubDiv>
          </S.CouponInfo>
        </S.Slide>
      ))}
    </S.SwiperWapper>
  );
};

export default CouponList;
