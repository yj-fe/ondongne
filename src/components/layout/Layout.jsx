import React from 'react';
import { Outlet } from 'react-router';
import PropTypes from 'prop-types'
import styled from 'styled-components';
import * as Common from '../commonUi/Layout';
import Header from './Header';

const S = {
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

const Layout = (props) => {
    return (
        <S.Wrapper>
            <Header {...props}/>
            <S.Main as="main">
                {/* parent component로 사용할 때: Outlet */}
                {/* { <Outlet /> } */}
                { props.children }
            </S.Main>
        </S.Wrapper>
    )
};

Layout.props = {
    title: PropTypes.string,
    bell: PropTypes.bool,
    cart: PropTypes.bool,
    back: PropTypes.bool,
    backArrow: PropTypes.bool,
    titleCenter: PropTypes.bool,
    onBackClick: PropTypes.func,
    backPath: PropTypes.string
}

export default Layout;