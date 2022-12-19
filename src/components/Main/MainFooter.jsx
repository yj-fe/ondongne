import React from 'react'
import styled from 'styled-components'
import { Link, useNavigate } from 'react-router-dom';
import { ReactComponent as Home } from "../../assets/Home.svg";
import { ReactComponent as Search } from "../../assets/Search.svg";
import { ReactComponent as Market } from "../../assets/Market.svg";
import { ReactComponent as Order } from "../../assets/Order.svg";
import { ReactComponent as More } from "../../assets/More.svg";


const MainFooterDiv = styled.div`
  position: absolute;
  display: fixed;
  justify-content: center;
  justify-items: center;
  align-items: center;
  padding: 0px;
  gap: 4px;
  

  height: 56px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  background: #FFFFFF;
  @media only screen and (max-width: 728px) { 
    width: 100%;
  }
`
const FooterNav = styled.div`
  box-sizing: border-box;
  width: 728px;
  height: 56px;
  border-top: 1px solid #F5F5F5;
  display: flex;
  flex-direction: row;
  justify-items: center;
  justify-content: space-between;
  align-items: center;
  padding-left: 69px;
  padding-right: 69px;

  @media only screen and (max-width: 728px) { 
    width: 100%;
    padding-left: 35px;
    padding-right: 35px;
  }
`
const NavIcon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 4px;
  width: 24px;
  height: 40px;

`




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
        <Link to="/order/new/:id" style={{ textDecoration: 'none' }}>
          <Order />
        </Link>
        </NavIcon>
        <NavIcon
          onClick={() => {
            navigate("more");
          }}
        >
          <More />
        </NavIcon>
      </FooterNav>
    </MainFooterDiv>
  )
}

export default MainFooter