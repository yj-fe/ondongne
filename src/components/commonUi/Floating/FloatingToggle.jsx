import React from "react"
import { ReactComponent as Trans } from "assets/icons/business/Trans.svg";
import { Product } from "../Icon";
import { Link, useLocation } from 'react-router-dom';
import { FloatingContentDiv, FloatingContentTitle, FloatingToggleDiv } from "pages/business/BusinessPage/BusinessPageStyle";

export default function FloatingToggle() {

    const location = useLocation();

    return (
        <FloatingToggleDiv>
            <FloatingContentDiv>
                <Product />
                <Link to="/business/upload">
                    <FloatingContentTitle>상품 등록</FloatingContentTitle>
                </Link>
            </FloatingContentDiv>
            {/* <FloatingContentDiv>
            <Order />
            <Link to="/business/coupon">
            <FloatingContentTitle>소식 등록</FloatingContentTitle>
            </Link>
          </FloatingContentDiv>
          <FloatingContentDiv>
            <Coupon />
            <Link to="/business/coupon">
              <FloatingContentTitle>쿠폰 등록</FloatingContentTitle>
            </Link>
          </FloatingContentDiv> */}
            <FloatingContentDiv>
                <Trans />
                {
                    location.pathname.includes("business")
                        ?
                        <Link to="/">
                            <FloatingContentTitle>
                                일반 전환
                            </FloatingContentTitle>
                        </Link>
                        :
                        <Link to="/business">
                            <FloatingContentTitle>
                                비즈 전환
                            </FloatingContentTitle>
                        </Link>
                }
            </FloatingContentDiv>
        </FloatingToggleDiv>
    )
}