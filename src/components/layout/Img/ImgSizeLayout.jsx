import styled from "styled-components";

export const ImgSizeLayout = styled.img`
    border-radius: ${props => props._bdr}px;
    width: ${props => props._width}px;
    height: ${props => props._height}px;
`;
export const RelativDiv = styled.div`
    border-radius: ${props => props._bdr}px;
    width: ${props => props._width}px;
    height: ${props => props._height}px;
    position: relative;
    margin: 0;
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
export const AbsoluteTopDiv = styled.div`
    border-radius: ${props => props._bdr}px;
    width: ${props => props._width}px;
    height: ${props => props._height}px;
    display: flex;
    position: absolute;
    left: 70px;
    top: -10px;
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

