import React from 'react';
import { Outlet } from 'react-router';
import PropTypes from 'prop-types'

import { S } from './LayoutStyle';
import HeaderSearch from '../Header/HeaderSearch';

const LayoutSearch = (props) => {
    return (
        <S.Wrapper>
            <HeaderSearch {...props}/>
            <S.Main as="main">
                {/* parent component로 사용할 때: Outlet */}
                {/* { <Outlet /> } */}
                { props.children }
            </S.Main>
        </S.Wrapper>
    )
};

LayoutSearch.props = {
    search: PropTypes.bool,
    cart: PropTypes.bool,
    back: PropTypes.bool,
    backArrow: PropTypes.bool,
    onBackClick: PropTypes.func,
    backPath: PropTypes.string
}

export default LayoutSearch;