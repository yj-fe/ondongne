import React from 'react'
import styled from 'styled-components';
import { ReactComponent as Back } from "../../assets/Arrow-Left.svg";
import { useNavigate } from 'react-router-dom'


const LoginNavDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  position: fixed;
  height: 60px;
  left: 0px;
  right: 0px;
  top: 0px;
  background: #ffffff;
  border-bottom: 1px solid #eeeeee;

  @media only screen and (max-width: 390px) {
    filter: drop-shadow(0px 3px 12px rgba(0, 0, 0, 0.06));
  }
`;
const BackStyle = styled.svg`
  position: absolute;
  left: 31%;
  top: calc(50% - 20px / 2);

  @media only screen and (max-width: 390px) {
    left: 5%;
  }
`;
const LoginNavTitle = styled.div`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  color: #212121;
`;



function LoginHeader({title}) {
  const navigate = useNavigate()

  return (
    <LoginNavDiv>
      <BackStyle onClick={()=>{ navigate(-1)}}>
        <Back />
      </BackStyle>
      <LoginNavTitle>{title}</LoginNavTitle>
    </LoginNavDiv>
  )
}

export default LoginHeader
