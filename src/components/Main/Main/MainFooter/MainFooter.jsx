import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ReactComponent as Home } from "assets/main/Home.svg";
import { ReactComponent as Search } from "assets/main/Search.svg";
import { ReactComponent as Market } from "assets/main/Market.svg";
import { ReactComponent as Order } from "assets/main/Order.svg";
import { ReactComponent as More } from "assets/main/More.svg";
import { MainFooterDiv, FooterNav, NavIcon, } from './MainFooterStyle'
import Alert from 'components/commonUi/Alert';

function MainFooter() {
  const [alert, setAlert] = useState(false);
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
        <NavIcon>
          {
            isAuthenticated
              ? <Link to="/member/market" style={{ textDecoration: 'none' }}>
                <Market />
              </Link>
              : <div onClick={() => setAlert(true)}>
                <Market />
              </div>
          }
        </NavIcon>

        <NavIcon>
          {
            isAuthenticated
              ? <Link to="/order/all" style={{ textDecoration: 'none' }}>
                <Order />
              </Link>
              : <div onClick={() => setAlert(true)}>
                <Order />
              </div>
          }
        </NavIcon>

        <NavIcon
        >
          <Link to="/more" style={{ textDecoration: 'none' }}>
            <More />
          </Link>
        </NavIcon>
      </FooterNav>
      {alert && (
        <Alert
          contents={'로그인 후 이용가능합니다.'}
          buttonText={'확인'}
          onButtonClick={() => setAlert(false)}
          onOverlayClick={() => setAlert(false)}
        />
      )}
    </MainFooterDiv>
  )
}

export default MainFooter