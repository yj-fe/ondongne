import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ReactComponent as Home } from "assets/main/Home.svg";
import { ReactComponent as Search } from "assets/main/Search.svg";
import { ReactComponent as Market } from "assets/main/Market.svg";
import { ReactComponent as Order } from "assets/main/Order.svg";
import { ReactComponent as More } from "assets/main/More.svg";
import { MainFooterDiv, FooterNav, NavIcon, } from './MainFooterStyle'
import Confirm from 'components/commonUi/Confirm';
import { ShepherdBox } from 'components/commonUi/Box';

function MainFooter() {
  const navigate = useNavigate();
  const [confirm, setConfirm] = useState(false);
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  return (
    <MainFooterDiv>
      <FooterNav>
        <NavIcon>
          <Home />
        </NavIcon>
        <NavIcon>
          <Link to="/search" style={{ textDecoration: 'none' }}>
            <Search />
          </Link>
        </NavIcon>
        <ShepherdBox _width='48px'
          className="shepherd-forth"
        >
        <NavIcon
        >
          {
            isAuthenticated
              ? <Link to="/member/market" style={{ textDecoration: 'none' }}>
                <Market />
              </Link>
              : <div onClick={() => setConfirm(true)}>
                <Market />
              </div>
          }
        </NavIcon>
        </ShepherdBox>
        <NavIcon
        >
          {
            isAuthenticated
              ? <Link to="/order/all" style={{ textDecoration: 'none' }}>
                <Order />
              </Link>
              : <div onClick={() => setConfirm(true)}>
                <Order />
              </div>
          }
        </NavIcon>
        <ShepherdBox _width='48px'
          className="shepherd-fifth"
        >
        <NavIcon
        // className="shepherd-fifth"
        >
          <Link to="/more" style={{ textDecoration: 'none' }}>
            <More />
          </Link>
        </NavIcon>
        </ShepherdBox>
      </FooterNav>
      {
        confirm &&
        <Confirm
          contents="로그인 후 이용가능합니다. 로그인 페이지로 이동하시겠습니까?"
          confirmText="네"
          cancelText="아니오"
          onConfirmClick={() => { navigate('/login') }}
          onCancelClick={() => {
            setConfirm(false)
          }}
        />
      }
    </MainFooterDiv>
  )
}

export default MainFooter