import styled from 'styled-components'
import * as Common from 'components/commonUi/Layout';

export const S = {
    Header: styled.header`
        cursor: default;
        z-index: 30;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%; 
        height: 60px;
        background: #FFF;
        border-bottom: 1px solid ${props => props.theme.color.gray200};

        @media(${props => props.theme.media.tablet}) {
            border-bottom: ${props => props._bbot ||'0'};
        }
    `,
    Inner: styled(Common.Inner)`
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 16px;
    `,
    Block: styled.div`
        display: flex;
        gap: 20px;
        align-items: center;
    `,
    UtilBtn: styled.button`
        display: flex;
        justify-content: center;
        align-items: center;
        width: ${props => props._width || '24px'};
        height: ${props => props._height || '24px'};
        padding: 0;
        @media screen and (min-width : 501px) {
            display: ${props => props._displaymedia};
        }
    `,
    SearchUtilBtn: styled.button`
        display: flex;
        justify-content: center;
        align-items: center;
        width: 24px;
        height: 24px;
        padding: 0;
    
        @media(${props => props.theme.media.tablet}) {
            display: none;
        }
    `,
    Title: styled.h1`
        font-size: 18px;
        font-weight: 600;
    `
};