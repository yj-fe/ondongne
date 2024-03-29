import React from "react";
import { ReactComponent as Trans } from "assets/icons/business/Trans.svg";
import * as I from "./icon/Icon";
import { useLocation, useNavigate } from "react-router-dom";
import {
    FloatingLink,
    FloatingContentTitle,
    FloatingToggleDiv,
    FloatingBox,
} from "pages/business/BusinessPage/BusinessPageStyle";
import { useSelector } from "react-redux";

export default function FloatingToggle({ active, bizMember }) {
    const auth = useSelector((state) => state.auth);
    if (!active) return <></>;
    return auth.isAuthenticated ? <Auth bizMember={bizMember} /> : <UnAuth />;
}

const Auth = ({ bizMember }) => {
    const location = useLocation();
    return (
        <FloatingToggleDiv>
            {location.pathname.includes("business") ? (
                <>
                    <FloatingBox>
                        <Floating
                            icon={<I.MyStore />}
                            to="/business/management"
                            title="내 상점 이동"
                        />
                        <Floating
                            icon={<I.Store />}
                            to="/business/coupon/upload"
                            state={{ type: "normal" }}
                            title="상점 소식"
                        />
                        <Floating
                            icon={<I.Coupon />}
                            to="/business/coupon/upload"
                            state={{ type: "coupon" }}
                            title="쿠폰 등록"
                        />
                        <Floating
                            icon={<I.Time />}
                            to="/business/timesale/upload"
                            title="타임세일 등록"
                        />
                        <Floating
                            icon={<I.Product />}
                            to="/business/upload"
                            title="상품 등록"
                        />
                    </FloatingBox>
                    <FloatingBox>
                        <Floating icon={<Trans />} to="/" title="구매자 전환" />
                    </FloatingBox>
                </>
            ) : (
                <>
                    <FloatingBox>
                        <Floating
                            icon={<I.Service />}
                            to="/service"
                            title="고객센터"
                        />
                        <Floating
                            icon={<I.Voc />}
                            to="/service/voc"
                            title="상품 제안 하기"
                            state={{ type: "상품 제안" }}
                        />
                        <Floating
                            icon={<I.CouponUpload />}
                            to="/member/coupon"
                            title="내 쿠폰함"
                        />
                    </FloatingBox>
                    <FloatingBox>
                        <FloatingLink onClick={bizMember}>
                            <Trans />
                            <FloatingContentTitle>
                                사장님 전환
                            </FloatingContentTitle>
                        </FloatingLink>
                    </FloatingBox>
                </>
            )}
        </FloatingToggleDiv>
    );
};

const UnAuth = () => {
    return (
        <FloatingToggleDiv>
            <FloatingBox>
                <Floating icon={<I.Login />} to="/login" title="로그인" />
                <Floating
                    icon={<I.Join />}
                    to="/login/signup"
                    title="회원가입"
                />
            </FloatingBox>
        </FloatingToggleDiv>
    );
};

const Floating = ({ icon, to, title, state = null }) => {
    const navigate = useNavigate();

    const router = () => {
        if (state !== null) {
            return navigate(to, { state });
        }

        return navigate(to);
    };

    return (
        <FloatingLink onClick={router}>
            {icon}
            <FloatingContentTitle>{title}</FloatingContentTitle>
        </FloatingLink>
    );
};
