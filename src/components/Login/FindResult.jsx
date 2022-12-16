import React from 'react'
import { useNavigate, Link } from 'react-router-dom'
import styled from 'styled-components'
import LoginPage from '../../pages/LoginPage'


let RequestTextStyle = styled.p`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 8px;
  width: 648px;
  height: 60px;
  flex: none;
  margin-bottom: 40px;

  @media only screen and (max-width: 390px) {
    width: 350px;
  }
`
let RequestText = styled.div`
  /* width: 648px; */
  height: 32px;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  color: #212121;
  flex: none;
  align-self: stretch;
  flex-grow: 0;
`
let RequestInfo = styled.p`
  /* width: 648px; */
  height: 20px;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 300;
  font-size: 15px;
  line-height: 20px;
  color: #424242;
  flex: none;
  align-self: stretch;
  flex-grow: 0;
`
const RequestFindEmail = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 24px;
  gap: 8px;
  width: 648px;
  height: 96px;
  background: #FFFFFF;
  border: 1px solid #E0E0E0;
  border-radius: 4px;
  flex: none;
  margin-bottom: 40px;

  @media only screen and (max-width: 390px) {
    width: 350px;
  }
`
const RequestFindEmailText = styled.p`
  height: 20px;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 300;
  font-size: 15px;
  line-height: 20px;
  /* identical to box height, or 133% */


  /* Gray/900 */

  color: #212121;
`
const RequestButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 12px;

  width: 648px;
  height: 52px;

  @media only screen and (max-width: 390px) {
    width: 350px;
  }
`
const RequestButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 4px;
  gap: 4px;
  width: 318px;
  height: 52px;
  background: #0B806F;
  border-radius: 4px;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: #FFFFFF;
`
const RequestButtonDisable = styled.button`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 4px;
  gap: 4px;
  width: 318px;
  height: 52px;
  background: #FFFFFF;
  border: 1px solid #EEEEEE;
  border-radius: 4px;
  font-weight: 600;
  font-size: 16px;
  color: #424242;
`








function FindResult() {
  let navigate = useNavigate()

  let email = "abcd@naver.com"
  let date = "2022. 01. 01"







  return (
    <div>
        <RequestTextStyle>
          <RequestText>이메일 찾기 결과</RequestText>
          <RequestInfo>회원님의 가입 정보는 아래 내용과 같습니다.</RequestInfo>
        </RequestTextStyle>
        <RequestFindEmail>
          <RequestFindEmailText>이메일 : {email}</RequestFindEmailText>
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