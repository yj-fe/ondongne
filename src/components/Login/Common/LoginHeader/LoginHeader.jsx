import React from 'react'
import { ReactComponent as Back } from "assets/login/Arrow-Left.svg";
import { useNavigate } from 'react-router-dom'
import { LoginNavDiv, LoginNavTitle, Inner, UtilBtn } from "./LoginHeaderStyle";


function LoginHeader({title}) {
  const navigate = useNavigate()

  return (
    <LoginNavDiv as="header">
      <Inner>
        <UtilBtn onClick={()=>{ navigate(-1)}}>
          <Back />
        </UtilBtn>
      <LoginNavTitle>{title}</LoginNavTitle>
      </Inner>
    </LoginNavDiv>
  )
}

export default LoginHeader
