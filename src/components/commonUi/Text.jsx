import styled from "styled-components";

export const TextCut = styled.p`
    font-size: ${(props) => props._size || 16}px;
    font-weight: ${(props) => props._weight || 400};
    color: ${(props) => props.theme.color[props._color || "gray900"]};
    line-height: ${(props) => props._line || 1.5};
    white-space: pre-wrap;
    text-align: ${(props) => props._align || "left"};
    text-decoration: ${(props) => props._decoration || "none"};
    width: ${(props) => props._width || "auto"};
    min-width: ${(props) => props._minWidth || "auto"};
    text-overflow: ellipsis;
    overflow: ${(props) => props._over};
    white-space: ${(props) => props._wspace};
    /* text-overflow: ellipsis " [..]"; */
    /* overflow: hidden; */
    /* white-space: nowrap; */
`;
export const Text = styled.p`
    font-size: ${(props) => props._size || 16}px;
    font-weight: ${(props) => props._weight || 400};
    color: ${(props) => props.theme.color[props._color || "gray900"]};
    line-height: ${(props) => props._line || 1.5};
    white-space: pre-wrap;
    text-align: ${(props) => props._align || "left"};
    text-decoration: ${(props) => props._decoration || "none"};
    width: ${(props) => props._width || "auto"};
    min-width: ${(props) => props._minWidth || "auto"};
    margin-top: ${(props) => props._margintop};
    cursor: ${(props) => props._cursor};
    font-family: "Pretendard";
`;
export const TextMedia = styled.p`
    font-size: ${(props) => props._size || 16}px;
    font-weight: ${(props) => props._weight || 400};
    color: ${(props) => props.theme.color[props._color || "gray900"]};
    line-height: ${(props) => props._line || 1.5};
    white-space: pre-wrap;
    text-align: ${(props) => props._align || "left"};
    text-decoration: ${(props) => props._decoration || "none"};
    width: ${(props) => props._width || "auto"};
    min-width: ${(props) => props._minWidth || "auto"};
    @media screen and (max-width: 675px) {
        width: 150px;
    }
    @media screen and (max-width: 360px) {
        width: 150px;
    }
    @media screen and (max-width: 340px) {
        width: 130px;
    }
`;

export const SoldoutText = styled.p`
    position: absolute;
    top: 0;
    z-index: 997;
    background: rgba(0, 0, 0, 0.6);
    width: ${(props) => props._width || 216}px;
    height: ${(props) => props._height || 216}px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 6px;
    font-size: 20px;
    font-weight: 600;
    color: #ffffff;
    line-height: 1.5;
    white-space: pre-wrap;
    text-align: left;
    -webkit-text-decoration: none;
    text-decoration: none;
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
