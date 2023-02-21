import React from 'react'
import { useNavigate } from 'react-router-dom'
import {RequestButton,RequestButtonContainer,RequestFindEmail,RequestFindEmailText,RequestButtonDisable} from './FindResultStyle'
import { EmailRequestBody, RequestInfo, RequestText, RequestTextStyle } from '../EmailRequest/EmailRequestStyle';


function FindResult({data}) {
  let navigate = useNavigate()
  const [date, time] = data.date.split('T')

  return (
    <div>
      <EmailRequestBody>
        <RequestTextStyle>
          <RequestText>이메일 찾기 결과</RequestText>
          <RequestInfo>회원님의 가입 정보는 아래 내용과 같습니다.</RequestInfo>
        </RequestTextStyle>
        <RequestFindEmail>
          <RequestFindEmailText>이메일 : {data.email}</RequestFindEmailText>
          <RequestFindEmailText>가입일 : {date}</RequestFindEmailText>
        </RequestFindEmail>  
        <RequestButtonContainer>
          <RequestButton onClick={()=>{navigate("/login")}}>로그인 하기</RequestButton>
          <RequestButtonDisable onClick={()=>{navigate("/login/find/password")}}>비밀번호 찾기</RequestButtonDisable>
        </RequestButtonContainer>
      </EmailRequestBody>
    </div>
  )
}


export default FindResult;