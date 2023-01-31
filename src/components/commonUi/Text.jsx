import styled from "styled-components";

export const TextCut = styled.p`
    font-size: ${props => props._size || 16}px;
    font-weight: ${props => props._weight || 400};
    color: ${props => props.theme.color[props._color || 'gray900']};
    line-height: ${props => props._line || 1.5};
    white-space: pre-wrap;
    text-align: ${props => props._align || 'left'};
    text-decoration: ${props => props._decoration || 'none'};
    width: ${props => props._width || 'auto'};
    min-width: ${props => props._minWidth || 'auto'};
    text-overflow: ellipsis;
    /* text-overflow: ellipsis " [..]"; */
    /* overflow: hidden; */
/* white-space: nowrap; */
`;
export const Text = styled.p`
    font-size: ${props => props._size || 16}px;
    font-weight: ${props => props._weight || 400};
    color: ${props => props.theme.color[props._color || 'gray900']};
    line-height: ${props => props._line || 1.5};
    white-space: pre-wrap;
    text-align: ${props => props._align || 'left'};
    text-decoration: ${props => props._decoration || 'none'};
    width: ${props => props._width || 'auto'};
    min-width: ${props => props._minWidth || 'auto'};
    margin-top: ${props => props._margintop};
    cursor: ${props => props._cursor};
`;
export const TextMedia = styled.p`
    font-size: ${props => props._size || 16}px;
    font-weight: ${props => props._weight || 400};
    color: ${props => props.theme.color[props._color || 'gray900']};
    line-height: ${props => props._line || 1.5};
    white-space: pre-wrap;
    text-align: ${props => props._align || 'left'};
    text-decoration: ${props => props._decoration || 'none'};
    width: ${props => props._width || 'auto'};
    min-width: ${props => props._minWidth || 'auto'};
    @media screen and (max-width : 675px) {
        width: 170px;
    }
`;

export const SoldoutText = styled.p`
    position: absolute;
    top: 0;
    z-index: 9999;
    background: rgba(0, 0, 0, 0.6);
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 6px;
    font-size: 20px;
    font-weight: 600;
    color: #FFFFFF;
    line-height: 1.5;
    white-space: pre-wrap;
    text-align: left;
    -webkit-text-decoration: none;
    text-decoration: none;
`