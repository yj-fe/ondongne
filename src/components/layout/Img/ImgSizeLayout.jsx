import styled from "styled-components";
import { screen } from '@testing-library/react';

export const ImgSizeLayout = styled.img`
    border-radius: ${props => props._bdr}px;
    width: ${props => props._width}px;
    height: ${props => props._height}px;
    object-fit: ${props => props._object || ''};
`;

export const ImgSizeH = styled.img`
    border-radius: ${props => props._bdr}px;
    width: ${props => props._width || '100%'};
    height: ${props => props._height}px;
    @media screen and (max-width: 450px){
        width: 167px;
        height: 167px;
    }
    @media screen and (max-width: 372px){
        width: 150px;
        height: 150px;
    }
    @media screen and (max-width: 336px){
        width: 130px;
        height: 130px;
    }
`;

export const Imgauto = styled.img`
    border-radius: ${props => props._bdr}px;
    width: ${props => props._width || '100%'};
    height: ${props => props._height || 'auto'};
`;
export const ImgPer = styled.img`
    border-radius: ${props => props._bdr}px;
    width: ${props => props._width || '100%'};
    height: ${props => props._height || '390px'};
`;

export const RelativDiv = styled.div`
    border-radius: ${props => props._bdr}px;
    width: ${props => props._width}px;
    height: ${props => props._height}px;
    position: relative;
    margin: 0;
    padding: 0;
`;
export const RelativDivS = styled.div`
    border-radius: ${props => props._bdr}px;
    width: 100%;
    height: ${props => props._height}px;
    position: relative;
    margin: 0px 28px 0px 0px;
    padding: 0;
`;
export const AbsoluteDiv = styled.div`
    border-radius: ${props => props._bdr}px;
    width: ${props => props._width}px;
    height: ${props => props._height}px;
    display: flex;
    position: absolute;
    right: ${props => props._right || '0%'};
    bottom:${props => props._bottom || '0%'};
    top:${props => props._top || ''};
    margin: 0;
    /* padding: 18px 12px; */
    z-index: 9999;
`;
export const AbsoluteDivGrid = styled.div`
    border-radius: ${props => props._bdr}px;
    width: '100%';
    height: ${props => props._height}px;
    display: flex;
    position: absolute;
    right: 0;
    bottom: -70px;
    margin: 0;
    padding: 18px 12px;
    z-index: 9999;
    @media screen and (max-width:695px) {
        bottom: -35%;
    }
    @media screen and (max-width:685px) {
        bottom: -30%;
    }
    @media screen and (max-width:644px) {
        bottom: -29%;
    }
    @media screen and (max-width:633px) {
        bottom: -27%;
    }
    @media screen and (max-width:620px) {
        bottom: -25%;
    }
    @media screen and (max-width:600px) {
        bottom: -20%;
    }
    @media screen and (max-width:580px) {
        bottom: -17%;
    }
    @media screen and (max-width:570px) {
        bottom: -15%;
    }
    @media screen and (max-width:555px) {
        bottom: -10%;
    }
    @media screen and (max-width:533px) {
        bottom: -7%;
    }
    @media screen and (max-width:500px) {
        bottom: -5%;
    }
    @media screen and (max-width:450px) {
        right: 15%;
    }
    @media screen and (max-width:440px) {
        right: 12%;
    }
    @media screen and (max-width:409px) {
        right: 7%;
    }
    @media screen and (max-width:400px) {
        right: 0;
    }
`;
export const AbsoluteDivS = styled.div`
    border-radius: ${props => props._bdr}px;
    width: ${props => props._width}px;
    height: ${props => props._height}px;
    display: flex;
    position: absolute;
    align-items: center;
    right: 0%;
    bottom: 0%;
    margin: 0;
    padding: 10px 0px;
`;
export const AbsoluteTopDiv = styled.div`
    border-radius: ${props => props._bdr}px;
    width: ${props => props._width}px;
    height: ${props => props._height}px;
    display: flex;
    position: absolute;
    left: ${props => props._left || '70px'};
    top: ${props => props._top || '-10px'};
    bottom: 0%;
    margin: 0;
`;
export const OverlayDiv = styled.div`
    border-radius: ${props => props._bdr}px;
    width: ${props => props._width}px;
    height: ${props => props._height}px;
    display: flex;
    position: absolute;
    flex-direction: row;
    margin: 0;
    padding: 0;
`;

