import styled from "styled-components";
import Search from 'assets/icons/utils/Search.svg';


export const TextInput = styled.input`
    width: ${props => props._width? props._width + 'px' : '100%'};
    height: ${props => props._height ||  44}px;
    padding: 12px 16px;
    border-width: ${props => props._border || 1}px;
    border-radius: 4px;
    border-style: solid;
    border-color: ${props => props._borcolor || '#EEEEEE'};
    background-color: ${props => props._boccolor || '#FAFAFA'};
    font-weight: 400;
    font-size: 15px;
    line-height: 20px;
    align-self: start;
    &::placeholder {
        color: ${props => props.theme.color.gray400};
    }
`;
export const CouponTitleInput = styled.input`
    width: '100%';
    height: 56px;
    padding: 16px;
    border-style: solid;
    background-color:'#FFFFFF';
    border-bottom: 1px solid #EEEEEE;
    font-weight: 400;
    font-size: 16px;
    font-family: 'Pretendard';
    font-style: normal;
    &::placeholder {
        color: ${props => props.theme.color.gray400};
    }
`;

export const SearchInput = styled.input`
    width: ${props => props._width? props._width + 'px' : '100%'};
    height: ${props => props._height ||  44}px;
    padding: 12px 16px;
    margin: 0px 16px;
    border-width: ${props => props._border || 1}px;
    border-radius: 4px;
    border-style: solid;
    border-color: ${props => props._borcolor || '#EEEEEE'};
    background-color: ${props => props._boccolor || '#F5F5F5'};
    font-weight: 500;
    font-size: 15px;
    font-family: 'Pretendard';
    font-style: normal;
    position: relative;

    &::placeholder {
        color: ${props => props.theme.color.gray400};
    }
    &::after {
        content: '';
        width: 24px;
        height: 24px;
        background-image: url(${Search}) no-repeat;
        position: absolute;
    }
`;
