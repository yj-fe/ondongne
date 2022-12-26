import React from 'react'
import styled from 'styled-components';
import { ReactComponent as Back } from "assets/login/Arrow-Left.svg";
import { useNavigate } from 'react-router-dom'
import { LoginNavDiv, BackStyle, LoginNavTitle } from "./LoginHeaderStyle";





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
