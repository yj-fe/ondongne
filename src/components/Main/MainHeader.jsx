import React from 'react'
import styled from 'styled-components'
import { ReactComponent as Arrow } from "../../assets/Arrow.svg";
import { ReactComponent as News } from "../../assets/news.svg";
import { ReactComponent as Cart } from "../../assets/main/nav/cart.svg";
import { useNavigate } from 'react-router-dom'


const MainHeaderDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  position: fixed;
  height: 60px;
  left: 0px;
  right: 0px;
  top: 0px;
  background: #ffffff;
  border-bottom: 1px solid #eeeeee;
  
  @media only screen and (max-width: 728px) {
    filter: drop-shadow(0px 3px 12px rgba(0, 0, 0, 0.06));
  }
`;
const LoginNavDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  justify-items: flex-start;
  height: 60px;
  width: 728px;
  padding-left: 10px;
  padding-right: 10px;
  
  @media only screen and (max-width: 728px) {

  }
`;
const TitleStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  flex-direction: row;
  justify-items: flex-start;
  gap: 16px;
`
const BackStyle = styled.svg`
  display: flex;
  width: 24px;
  height: 24px;
  padding-top: 2px;

  @media only screen and (max-width: 728px) {
    width: 100%;
  }
`;
const LoginNavTitle = styled.div`
  display: flex;
  /* position: absolute; */
  font-weight: 600;
  font-size: 18px;
  color: #212121;
  @media only screen and (max-width: 728px) {
    width: 100%;
  }
`;
const IconStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  justify-items: flex-start;
  gap: 16px;
`
const NewsStyle = styled.div``
const CartStyle = styled.div``


function MainHeader({title}) {
  const navigate = useNavigate()

  return (
    <MainHeaderDiv>
      <LoginNavDiv>
        <TitleStyle>
          <BackStyle onClick={()=>{ navigate(-1)}}>
            <Arrow />
          </BackStyle>
          <LoginNavTitle>{title}</LoginNavTitle>
        </TitleStyle>

        <IconStyle>
          <NewsStyle>
            <News/>
          </NewsStyle>
          <CartStyle
            onClick={() => {
              navigate("cart");
            }}
          >
            <Cart/>
          </CartStyle>
        </IconStyle>
      </LoginNavDiv>
    </MainHeaderDiv>
  )
}

export default MainHeader

