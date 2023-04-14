import styled from "styled-components";

export const ImgSizeLayout = styled.img`
    border-radius: ${(props) => props._bdr}px;
    width: ${(props) => props._width}px;
    height: ${(props) => props._height}px;
    object-fit: ${(props) => props._object || ""};
    overflow: hidden;
    background-repeat: no-repeat;
`;

export const ImgSizeH = styled.img`
    overflow: hidden;
    object-fit: cover;
    background-repeat: no-repeat;
    border-radius: 6px;
    width: 216px;
    height: 216px;
    @media screen and (max-width: 678px) {
        width: 187px;
        height: 187px;
    }
    @media screen and (max-width: 578px) {
        width: 167px;
        height: 167px;
    }
    @media screen and (max-width: 360px) {
        width: 150px;
        height: 150px;
    }
    @media screen and (max-width: 340px) {
        width: 130px;
        height: 130px;
    }
`;

export const Imgauto = styled.img`
    border-radius: ${(props) => props._bdr}px;
    width: ${(props) => props._width || "100%"};
    height: ${(props) => props._height || "auto"};
`;
export const ImgPer = styled.img`
    border-radius: ${(props) => props._bdr}px;
    width: ${(props) => props._width || "100%"};
    height: ${(props) => props._height || "390px"};
`;

export const RelativDiv = styled.div`
    border-radius: ${(props) => props._bdr}px;
    width: ${(props) => props._width || "100%"};
    height: ${(props) => props._height || "auto"};
    position: relative;
    margin: 0;
    padding: 0;
    @media screen and (max-width: 370px) {
        width: ${(props) => props._widthmedia};
    }
`;
export const RelativDivS = styled.div`
    border-radius: ${(props) => props._bdr}px;
    width: 100%;
    height: ${(props) => props._height}px;
    position: relative;
    margin: 0px 28px 0px 0px;
    padding: 0;
`;
export const AbsoluteDiv = styled.div`
    border-radius: ${(props) => props._bdr}px;
    width: ${(props) => props._width}px;
    height: ${(props) => props._height}px;
    display: flex;
    position: absolute;
    left: ${(props) => props._left};
    right: ${(props) => props._right || "0%"};
    bottom: ${(props) => props._bottom || "0%"};
    top: ${(props) => props._top || ""};
    margin: 0;
    padding: ${(props) => props._pd};
    /* padding: 18px 12px; */
    z-index: ${(props) => props._z || "999"};
    @media screen and (max-width: 370px) {
        right: ${(props) => props._rightmedia};
    }
`;

export const CenterAbsDiv = styled.div`
    position: absolute;
    top: ${(props) => props._top || "50%"};
    left: 50%;
    transform: translate(-50%, -50%);
`;

export const AbsoluteDivGrid = styled.div`
    border-radius: ${(props) => props._bdr}px;
    width: "100%";
    height: ${(props) => props._height}px;
    display: flex;
    position: absolute;
    right: -3%;
    bottom: -10px;
    margin: 0;
    padding: 18px 12px;
    z-index: 99;
    @media screen and (max-width: 678px) {
        right: 12%;
    }
    @media screen and (max-width: 660px) {
        right: 10%;
    }
    @media screen and (max-width: 645px) {
        right: 7%;
    }
    @media screen and (max-width: 625px) {
        right: 3%;
    }
    @media screen and (max-width: 615px) {
        right: 0%;
    }
    @media screen and (max-width: 590px) {
        right: -2%;
    }
    @media screen and (max-width: 535px) {
        right: 27%;
    }
    @media screen and (max-width: 500px) {
        right: 22%;
    }
    @media screen and (max-width: 485px) {
        right: 20%;
    }
    @media screen and (max-width: 465px) {
        right: 16%;
    }
    @media screen and (max-width: 455px) {
        right: 13%;
    }
    @media screen and (max-width: 435px) {
        right: 10%;
    }
    @media screen and (max-width: 425px) {
        right: 8%;
    }
    @media screen and (max-width: 415px) {
        right: 7%;
    }
    @media screen and (max-width: 410px) {
        right: 5%;
    }
    @media screen and (max-width: 400px) {
        right: 2%;
    }
    @media screen and (max-width: 395px) {
        right: 0%;
    }
    @media screen and (max-width: 390px) {
        right: -2%;
    }
    @media screen and (max-width: 380px) {
        right: -4%;
    }
    @media screen and (max-width: 360px) {
        right: 1%;
    }
    @media screen and (max-width: 356px) {
        right: -1%;
    }
    @media screen and (max-width: 347px) {
        right: -3%;
    }
    @media screen and (max-width: 343px) {
        right: -3%;
    }
    @media screen and (max-width: 340px) {
        right: 10%;
    }
    @media screen and (max-width: 336px) {
        right: 6%;
    }
    @media screen and (max-width: 329px) {
        right: 3%;
    }
    @media screen and (max-width: 315px) {
        right: 1%;
    }
    @media screen and (max-width: 308px) {
        right: -2%;
    }
    @media screen and (max-width: 303px) {
        right: -4%;
    }
`;
export const AbsoluteDivS = styled.div`
    border-radius: ${(props) => props._bdr}px;
    width: ${(props) => props._width}px;
    height: ${(props) => props._height}px;
    display: flex;
    position: absolute;
    align-items: center;
    right: 0%;
    bottom: 0%;
    margin: 0;
    padding: 10px 0px;
`;
export const AbsoluteTopDiv = styled.div`
    border-radius: ${(props) => props._bdr}px;
    width: ${(props) => props._width}px;
    height: ${(props) => props._height}px;
    display: flex;
    position: absolute;
    left: ${(props) => props._left || "70px"};
    top: ${(props) => props._top || "-10px"};
    bottom: 0%;
    margin: 0;
    z-index: ${(props) => props._zi || 998};
`;
export const OverlayDiv = styled.div`
    border-radius: ${(props) => props._bdr}px;
    width: ${(props) => props._width}px;
    height: ${(props) => props._height}px;
    display: flex;
    position: absolute;
    flex-direction: row;
    margin: 0;
    padding: 0;
`;
