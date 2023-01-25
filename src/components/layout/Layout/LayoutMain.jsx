import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router';
import PropTypes from 'prop-types'

import Header from '../Header/Header';

import { S } from './LayoutStyle';
import MainNav from 'components/Main/Main/MainNav/MainNav';
import { FloatingContentDiv, FloatingContentTitle, FloatingDivMain, FloatingToggleDiv } from 'pages/business/BusinessPage/BusinessPageStyle';
import { getBizMember } from 'service/biz';
import { useSelector } from 'react-redux';
import { Coupon, Floating, FloatingPush, Order, Product } from 'components/commonUi/Icon';
import { Link } from 'react-router-dom';
import { ReactComponent as Trans } from "assets/icons/business/Trans.svg";




const LayoutMain = (props) => {
    const [biz, setBiz] = useState(false)
    const [floating, setFloating] = useState(false)
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    const auth = useSelector(state => state.auth);

// 비즈 회원 체크
  const bizMember = async () => {
    const response = await getBizMember();
    const { data } = response.data;
    if (data.bizStatus){
      setBiz(true)
    }
  }
  useEffect(() => {
    if (auth.isAuthenticated) bizMember()
  }, [auth])

    return (
        <S.Wrapper>
            <MainNav/>
            {/* <Header {...props}/> */}
            {/* <Header {...props} itemtitle={itemtitle}/> */}
            <S.Main as="main">
                {/* parent component로 사용할 때: Outlet */}
                {/* { <Outlet /> } */}
                {props.children}
            </S.Main>
                {
                    biz
                    &&
                    <FloatingDivMain
                        onClick={() => setFloating(!floating)}
                    >
                        {floating && <FloatingToggle />}
                        {floating ? <FloatingPush /> : <Floating />}
                    </FloatingDivMain>
                    

                }
        </S.Wrapper>
    )
};


export function FloatingToggle(props) {
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
          </FloatingContentDiv>
          <FloatingContentDiv>
            <Coupon />
            <Link to="/business/coupon">
              <FloatingContentTitle>쿠폰 등록</FloatingContentTitle>
            </Link>
          </FloatingContentDiv> */}
          <FloatingContentDiv>
            <Trans />
            <Link to="/business">
              <FloatingContentTitle>
                비즈 전환
              </FloatingContentTitle>
            </Link>
          </FloatingContentDiv>
        </FloatingToggleDiv>
      </div>
    )
  }


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