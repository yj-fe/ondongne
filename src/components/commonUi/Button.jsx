import styled from "styled-components";
import arrowBottom from 'assets/icons/arrow/Arrow-Bottom.svg';
import right from 'assets/main/right.svg';
import Calendar from 'assets/icons/utils/Calendar.svg';



export const Button = styled.button`
    width: ${props => props._width || '100%'};
    height: ${props => props._height || 'auto'};
    border-radius: ${props => props._radius || 0}px;
    background-color: ${props => props.theme.color[props._bg || '#FFF']};
    color: ${props => props.theme.color[props._color || 'gray900']};
    font-size: ${props => props._size || 16}px;
    font-weight: ${props => props._weight || 400};
`;

export const LayerOptionButton = styled.button`
    width: 100%;
    padding: 0 16px;
    display: flex;
    gap: 8px;
    height: 48px;
    justify-content: center;
    align-items: center;
    line-height: 1.5;
    border: 1px solid ${props => props.theme.color.gray200};
    border-radius: 4px; 
    font-size: 15px;
    font-weight: 500;

    &::after {
        content: '';
        width: 24px;
        height: 24px;
        background: url(${arrowBottom}) center no-repeat;
        transform: rotate(${props => props.active? 180 : 0}deg);
    }
`;
export const BorderBox = styled.button`
    width: 100%;
    padding: 0 16px;
    display: flex;
    gap: 8px;
    height: 48px;
    justify-content: space-between;
    align-items: center;
    line-height: 1.5;
    border: 1px solid ${props => props.theme.color.gray200};
    border-radius: 4px; 
    font-size: 15px;
    font-weight: 500;

    &::after {
        content: '';
        width: 24px;
        height: 24px;
        background: url(${Calendar}) ;
        transform: rotate(${props => props.active? 180 : 0}deg);
    }
`;


export const CouponButton = styled.button`
    bottom: 57px;
    width: 100%;
    padding: 0 16px;
    position: fixed;
    display: flex;
    gap: 8px;
    height: 48px;
    justify-content: space-between;
    left: 50%;
    width: 100%;
    max-width: ${props => props.theme.breakpoint.tablet}px;
    transform: translateX(-50%);
    align-items: center;
    line-height: 1.5;
    background: #FFFFFF;
    font-size: 15px;
    font-weight: 500;


    &::after {
        content: '';
        width: 24px;
        height: 24px;
        background: url(${right}) center no-repeat;
        transform: rotate(${props => props.active? 180 : 0}deg);
    }
`;
export const LayerTextButton = styled.button`
    width: 100%;
    padding: 0 16px;
    display: flex;
    gap: 8px;
    height: 48px;
    justify-content: ${props=> props._content || 'center'};
    align-items: center;
    line-height: 1.5;
    border: 1px solid ${props => props.theme.color.gray200};
    border-radius: 4px; 
`;

export const FixedActionButton = styled.button`
    z-index: 29;
    position: fixed;
    bottom: 0;
    left: 50%;
    width: 100%;
    max-width: ${props => props.theme.breakpoint.tablet}px;
    height: 56px;
    padding: 0 16px;
    background-color: ${props => props.theme.color.green700};
    color: #FFF;
    transform: translateX(-50%);
    font-size: 18px;
    font-weight: 700;
`;
export const FixedPaddingActionButton = styled.button`
    z-index: 29;
    position: fixed;
    bottom: 24px;
    left: 50%;
    width: 688px;
    max-width: ${props => props.theme.breakpoint.tablet}px;
    height: 56px;
    padding: 0 16px;
    background-color: ${props => props.theme.color.green700};
    border-radius: 4px;
    color: #FFF;
    transform: translateX(-50%);
    font-size: 18px;
    font-weight: 600;
`;
export const FilterButton = styled.button`
    width: 200px;
    height: 36px;
    padding:    5px 8px;
    background-color: ${props => props.theme.color.gray50};
    border: 1px solid #EEEEEE;
    border-radius: 99px;
    color: #FFF;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-size: 13px;
`;
export const Badge = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: ${props => props._padding || '2px 6px'};
    gap: 4px;
    width: fit-content;
    height: ${props => props._height || '22px'};
    background: ${props => props.theme.color[props._bg || 'gray100']};
    border-radius: ${props => props._bdr || '2px'};
    color: ${props => props.theme.color[props._color || 'gray800']};
    font-weight:  ${props => props._weight || 500};
    font-size: ${props => props._size || '11px'};
`;
export const MapListButton = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    z-index: 29;
    position: fixed;
    bottom: 0;
    left: 50%; 
    width: 100%;
    transform: translateX(-50%);
    gap: 8px;
    width: 123px;
    height: 48px;
    bottom: 24px;
    background: ${props => props.theme.color[props._bg || 'green400']};
    border-radius: 99px;
    color: ${props => props.theme.color[props._color || 'white']};
    box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.12);
    font-weight: 700;
    font-size: 16px;
`;