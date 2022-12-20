import React from 'react'
import { useNavigate } from 'react-router-dom'

import {RequestInfo,RequestText,RequestTextStyle,RequestButton,RequestButtonContainer,RequestFindEmail,RequestFindEmailText,RequestButtonDisable} from './FindResultStyle'


function FindResult({data}) {
  let navigate = useNavigate()
  const [date, time] = data.date.split('T')

  return (
    <div>
        <RequestTextStyle>
          <RequestText>이메일 찾기 결과</RequestText>
          <RequestInfo>회원님의 가입 정보는 아래 내용과 같습니다.</RequestInfo>
        </RequestTextStyle>
        <RequestFindEmail>
          <RequestFindEmailText>이메일 : {data.email}</RequestFindEmailText>
          <RequestFindEmailText>가입일 : {date}</RequestFindEmailText>
        </RequestFindEmail>  
        <RequestButtonContainer>
          <RequestButton onClick={()=>{navigate("/member/login")}}>로그인 하기</RequestButton>
          <RequestButtonDisable onClick={()=>{navigate("/member/login/find/password")}}>비밀번호 찾기</RequestButtonDisable>
        </RequestButtonContainer>
    </div>
  )
}


export default FindResult;