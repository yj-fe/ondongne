import React from "react";
import { ReactComponent as Trans } from "assets/icons/business/Trans.svg";
import * as I from "./icon/Icon";
import { useLocation } from "react-router-dom";
import {
    FloatingLink,
    FloatingContentTitle,
    FloatingToggleDiv,
} from "pages/business/BusinessPage/BusinessPageStyle";
import { useSelector } from "react-redux";

export default function FloatingToggle({ active }) {
    const auth = useSelector((state) => state.auth);
    if (!active) return <></>;
    return auth.isAuthenticated ? <Auth /> : <UnAuth />;
}

const Auth = () => {
    const location = useLocation();
    return (
        <FloatingToggleDiv>
            {location.pathname.includes("business") ? (
                <>
                    <Floating
                        icon={<I.Coupon />}
                        to="/business/coupon/upload"
                        title="쿠폰 발행"
                    />
                    <Floating
                        icon={<I.Store />}
                        to="/business/coupon/upload"
                        title="상점 소식 등록"
                    />
                    <Floating
                        icon={<I.Product />}
                        to="/business/upload"
                        title="상품 등록"
                    />
                    <Floating icon={<Trans />} to="/" title="일반 전환" />
                </>
            ) : (
                <>
                    <Floating
                        icon={<I.Voc />}
                        to="/service/voc"
                        title="의견/건의"
                    />
                    <Floating
                        icon={<Trans />}
                        to="/business"
                        title="비즈 전환"
                    />
                </>
            )}
        </FloatingToggleDiv>
    );
};

const UnAuth = () => {
    return (
        <FloatingToggleDiv>
            <Floating icon={<I.Login />} to="/login" title="로그인" />
            <Floating icon={<I.Join />} to="/login/signup" title="회원가입" />
        </FloatingToggleDiv>
    );
};

const Floating = ({ icon, to, title }) => {
    return (
        <FloatingLink to={to}>
            {icon}
            <FloatingContentTitle>{title}</FloatingContentTitle>
        </FloatingLink>
    );
};
