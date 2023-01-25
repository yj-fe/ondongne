import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router';
import PropTypes from 'prop-types'

import { S } from './LayoutStyle';
import MainNav from 'components/Main/Main/MainNav/MainNav';
import { useSelector } from 'react-redux';
import FloatingUi from 'components/commonUi/Floating/FloatingUi';

const LayoutMain = (props) => {
  const auth = useSelector(state => state.auth);

  return (
    <S.Wrapper>
      <MainNav />
      {/* <Header {...props}/> */}
      {/* <Header {...props} itemtitle={itemtitle}/> */}
      <S.Main as="main">
        {/* parent component로 사용할 때: Outlet */}
        {/* { <Outlet /> } */}
        {props.children}
        {
          auth.bizId && <FloatingUi />
        }
      </S.Main>
    </S.Wrapper>
  )
};

LayoutMain.props = {
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

export default LayoutMain;