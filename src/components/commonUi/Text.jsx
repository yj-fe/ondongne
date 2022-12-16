import styled from "styled-components";

export const Text = styled.p`
    font-size: ${props => props._size || 16}px;
    font-weight: ${props => props._weight || 400};
    color: ${props => props.theme.color[props._color || 'gray900']};
    line-height: ${props => props._line || 1.5};
    white-space: pre-wrap;
    text-align: ${props => props._align || 'left'};
`;