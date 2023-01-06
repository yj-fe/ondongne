import styled from "styled-components";

export const ImgSizeLayout = styled.img`
    border-radius: ${props => props._bdr}px;
    width: ${props => props._width}px;
    height: ${props => props._height}px;
`;

export const ImgPer = styled.img`
    border-radius: ${props => props._bdr}px;
    width: 100%;
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
    right: 0%;
    bottom: 0%;
    margin: 0;
    padding: 18px 12px;
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
    left: ${props => props._left || '70px' };
    top: ${props => props._top || '-10px' };
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

