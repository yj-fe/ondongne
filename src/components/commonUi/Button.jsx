import styled from "styled-components";
import arrowBottom from 'assets/icons/arrow/Arrow-Bottom.svg';

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
    padding: 2px 6px;
    gap: 4px;
    width: 53px;
    height: 22px;
    background: ${props => props.theme.color[props._bg || 'gray100']};
    border-radius: 2px;
    color: ${props => props.theme.color[props._color || 'gray800']};
    font-weight: 500;
    font-size: 11px;
`;