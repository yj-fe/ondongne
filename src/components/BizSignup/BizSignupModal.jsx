import React from "react";
import styled from "styled-components";
import Overlay from "../layout/Overlay/Overlay";
import Img1 from "../../assets/images/business/image1.png";

function BizSignupModal({ close, next }) {
    return (
        <Overlay onOverlayClick={close}>
            <Container>
                <div>
                    <h1>나만의 상점을 한곳에서</h1>
                    <p>내 동네 상품이라면 어디든지</p>
                    <p>상점 신청을 무료로 진행해 보세요.</p>
                </div>
                <img src={Img1} alt="bizImage" />
                <button type="button" onClick={next}>
                    시작하기
                </button>
            </Container>
        </Overlay>
    );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 0px;
    width: 390px;
    height: 706px;
    background: #ffffff;
    padding: 60px 20px 40px;

    h1 {
        font-weight: 600;
        font-size: 24px;
        line-height: 32px;
        color: #212121;
        margin-bottom: 12px;
    }

    p {
        font-weight: 400;
        font-size: 15px;
        line-height: 20px;
        text-align: center;
        color: #757575;
    }

    img {
        width: 100%;
        max-width: 350px;
        max-height: 287px;
    }

    button {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 56px;
        background: #0b806f;
        font-weight: 600;
        font-size: 18px;
        color: #ffffff;
        border-radius: 4px;
    }

    @media screen and (max-width: 728px) {
        width: 100%;
        height: 100%;
    }

    @media screen and (max-height: 706px) {
        width: 100%;
        height: 100%;
    }
`;

export default BizSignupModal;
