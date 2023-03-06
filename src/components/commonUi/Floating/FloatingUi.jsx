import React, { useState } from "react";
import { getBizMember } from "service/biz";
import { Floating, FloatingPush } from "components/commonUi/Icon";
import FloatingToggle from "./FloatingToggle";
import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import "./Floating.css";
import Alert from "components/commonUi/Alert";
import BizSignupForm from "components/BizSignup/BizSignupForm";

const FloatingDiv = styled.div`
    bottom: ${(props) => props._bottom};
    left: calc(50% + 280px);
    z-index: 99;
    position: fixed;
    @media screen and (max-width: 728px) {
        right: 15px;
        left: auto;
    }
`;

const FloatingUi = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [active, setActive] = useState(false);
    const [alert, setAlert] = useState(false);
    const [bizModal, setBizModal] = useState(false);

    const bizMember = async () => {
        const response = await getBizMember();
        const { data } = response.data;

        // 비즈 신청하기
        if (!data) {
            return setBizModal(true);
        }

        // 비즈 심사 대기 중
        if (data.bizStatus === 0) {
            return setAlert({
                title: "비즈 심사 대기 중입니다.",
                contents:
                    "관리자 검토 후 2영업일 이내로\n승인 처리 예정입니다.\n승인이 완료되면 알림으로 알려드립니다.",
                buttonText: "확인",
                onButtonClick: () => setAlert(false),
                onOverlayClick: () => setAlert(false),
            });
        }

        // 비즈 심사 반려
        if (data.bizStatus === -1) {
            return setAlert({
                title: "심사가 반려되었습니다.",
                contents: "자세한 내용은 1:1문의를 이용해주세요.",
                buttonText: "확인",
                onButtonClick: () => setAlert(false),
                onOverlayClick: () => setAlert(false),
            });
        }

        // 비즈 홈
        if (data.bizStatus === 1) {
            return navigate("/business");
        }
    };

    return (
        <>
            <FloatingDiv
                _bottom={location.pathname === "/" ? "70px" : "15px"}
                onClick={() => setActive(!active)}
            >
                <FloatingToggle
                    active={active}
                    bizMember={bizMember}
                    reset={() => setBizModal(false)}
                />
                {active ? (
                    <FloatingPush />
                ) : (
                    <div className="shepherd-biz">
                        <Floating />
                    </div>
                )}
            </FloatingDiv>

            {alert && (
                <Alert
                    title={alert.title}
                    contents={alert.contents}
                    buttonText={alert.buttonText}
                    onButtonClick={alert.onButtonClick}
                    onOverlayClick={alert.onOverlayClick}
                />
            )}
            {/* ============= 비즈회원 가입 모달창 ============= */}
            {bizModal && <BizSignupForm close={() => setBizModal(false)} />}
        </>
    );
};

export default FloatingUi;
