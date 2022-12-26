import styled from "styled-components";

export const ImgSizeLayout = styled.img`
    border-radius: ${props => props.bdr}px;
    width: ${props => props._width}px;
    height: ${props => props._height}px;
`;