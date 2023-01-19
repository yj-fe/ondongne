import React, { useState } from 'react';
import { Outlet } from 'react-router';
import PropTypes from 'prop-types'

import Header from '../Header/Header';

import { S } from './LayoutStyle';
import { ReactComponent as Trans } from "assets/icons/business/Trans.svg";
import { Coupon, Floating, FloatingPush, Order, Product } from 'components/commonUi/Icon';
import { Link } from 'react-router-dom';
import { FloatingContentDiv, FloatingContentTitle, FloatingDivT, FloatingToggleDiv } from 'pages/business/BusinessPage/BusinessPageStyle';

const LayoutBiz = (props) => {
    const [floating, setFloating] = useState(false)
    return (
        <S.Wrapper>
            <Header {...props}/>
            {/* <Header {...props} itemtitle={itemtitle}/> */}
            <S.Main as="main">
                {/* parent component로 사용할 때: Outlet */}
                {/* { <Outlet /> } */}
                {props.children}
                <FloatingDivT
                    onClick={() => setFloating(!floating)}
                >
                    {floating && <FloatingToggle />}
                    {floating ? <FloatingPush /> : <Floating />}
                </FloatingDivT>
            </S.Main>
        </S.Wrapper>
    )
};

function FloatingToggle(props) {
    return (
      <div>
        <FloatingToggleDiv>
          <FloatingContentDiv>
            <Product />
            <Link to="/business/upload">
              <FloatingContentTitle>상품 등록</FloatingContentTitle>
            </Link>
          </FloatingContentDiv>
          {/* <FloatingContentDiv>
            <Order />
            <Link to="/business/coupon">
            <FloatingContentTitle>소식 등록</FloatingContentTitle>
            </Link>
          </FloatingContentDiv> */}
          {/* <FloatingContentDiv>
            <Coupon />
            <Link to="/business/coupon">
              <FloatingContentTitle>쿠폰 등록</FloatingContentTitle>
            </Link>
          </FloatingContentDiv> */}
          <FloatingContentDiv>
            <Trans/>
            <Link to="/">
              <FloatingContentTitle>
                일반 전환
              </FloatingContentTitle>
            </Link>
          </FloatingContentDiv>
        </FloatingToggleDiv>
      </div>
    )
  }

LayoutBiz.props = {
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

export default LayoutBiz;