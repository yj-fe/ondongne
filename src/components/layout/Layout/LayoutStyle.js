import styled from 'styled-components';
import * as Common from 'components/commonUi/Layout';
export const S = {
    Wrapper: styled.div`
        z-index: 10;
        position: relative;
        width: 100%;
        min-height: 100vh;
        height: auto;
        background-color: ${props => props.theme.color.gray100};
    `,
    Main: styled(Common.Inner)`
        z-index: 20;
        background-color: transparent;
        padding-top: 60px;
        min-height: 100vh;
    `
};