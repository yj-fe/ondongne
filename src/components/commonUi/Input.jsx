import styled from "styled-components";

export const TextInput = styled.input`
    width: ${props => props._width? props._width + 'px' : '100%'};
    height: ${props => props._height ||  44}px;
    padding: 12px 16px;
    border-width: ${props => props._border || 1}px;
    border-radius: 4px;
    border-style: solid;
    border-color: ${props => props.theme.color.gray200};
    background-color: ${props => props.theme.color.gray50};

    &:placeholder {
        color: ${props => props.theme.color.gray400};
    }
`;
