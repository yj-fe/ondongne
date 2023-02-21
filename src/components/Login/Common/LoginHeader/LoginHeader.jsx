import React from 'react'
import { ReactComponent as Back } from "assets/login/Arrow-Left.svg";
import { useNavigate } from 'react-router-dom'
import { LoginNavDiv, LoginNavTitle, Inner, UtilBtn } from "./LoginHeaderStyle";


function LoginHeader({ title, to }) {
  const navigate = useNavigate()

  return (
    <LoginNavDiv as="header">
      <Inner>
        <UtilBtn onClick={() => { navigate(to, { replace: true }) }}>
          <Back />
        </UtilBtn>
        <LoginNavTitle>{title}</LoginNavTitle>
      </Inner>
    </LoginNavDiv>
  )
}

export default LoginHeader
