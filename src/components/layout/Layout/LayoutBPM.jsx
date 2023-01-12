import React from 'react';
import { Outlet } from 'react-router';
import PropTypes from 'prop-types'

import HeaderBPM from '../Header/HeaderBPM';

import { S } from './LayoutStyle';

const LayoutBPM = (props) => {
    return (
        <S.Wrapper>
            <HeaderBPM {...props} />
            <S.Main as="main">
                {/* parent component로 사용할 때: Outlet */}
                {/* { <Outlet /> } */}
                {props.children}
            </S.Main>
        </S.Wrapper>
    )
};

LayoutBPM.props = {
    title: PropTypes.string,
    search: PropTypes.bool,
    bell: PropTypes.bool,
    cart: PropTypes.bool,
    back: PropTypes.bool,
    backArrow: PropTypes.bool,
    titleCenter: PropTypes.bool,
    onBackClick: PropTypes.func,
    backPath: PropTypes.string
}

export default LayoutBPM;