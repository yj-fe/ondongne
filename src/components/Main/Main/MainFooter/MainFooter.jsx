import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { ReactComponent as Home } from "assets/main/Home.svg";
import { ReactComponent as Search } from "assets/main/Search.svg";
import { ReactComponent as Market } from "assets/main/Market.svg";
import { ReactComponent as Order } from "assets/main/Order.svg";
import { ReactComponent as More } from "assets/main/More.svg";

import {MainFooterDiv,FooterNav,NavIcon,} from './MainFooterStyle'




function MainFooter() {
  const navigate = useNavigate()

  return (
    <MainFooterDiv>
      <FooterNav>
        <NavIcon>
          <Home />
        </NavIcon>
        <NavIcon>
          <Search />
        </NavIcon>
        <NavIcon>
          <Market />
        </NavIcon>

        <NavIcon
        >
        <Link to="/order/all" style={{ textDecoration: 'none' }}>
          <Order />
        </Link>
        </NavIcon>

        <NavIcon
        >
          <Link to="/more" style={{ textDecoration: 'none' }}>
            <More />
          </Link>
        </NavIcon>
      </FooterNav>
    </MainFooterDiv>
  )
}

export default MainFooter