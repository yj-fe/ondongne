import styled from "styled-components";
import { Search } from "./Icon";


export const TextInput = styled.input`
    width: ${props => props._width? props._width + 'px' : '100%'};
    height: ${props => props._height ||  44}px;
    padding: 12px 16px;
    border-width: ${props => props._border || 1}px;
    border-radius: 4px;
    border-style: solid;
    border-color: ${props => props._borcolor || '#EEEEEE'};
    background-color: ${props => props._boccolor || '#FAFAFA'};

    &:placeholder {
        color: ${props => props.theme.color.gray400};
    }
`;

export const SearchInput = styled.input`
    width: ${props => props._width? props._width + 'px' : '100%'};
    height: ${props => props._height ||  44}px;
    padding: 12px 16px;
    border-width: ${props => props._border || 1}px;
    border-radius: 4px;
    border-style: solid;
    border-color: ${props => props._borcolor || '#EEEEEE'};
    background-color: ${props => props._boccolor || '#F5F5F5'};

    &:placeholder {
        color: ${props => props.theme.color.gray400};
    }
    &::after {
        content: '';
        width: 24px;
        height: 24px;
        background: url(${Search}) center no-repeat;
        transform: rotate(${props => props.active? 180 : 0}deg);
    }
`;
