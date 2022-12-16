import React, { useState } from 'react'
import styled from 'styled-components'
import ErrorToggle from './ErrorToggle'



const RequestToggleBody = styled.div`
`
const RequestToggleForm = styled.form`
`
const RequestToggleDiv = styled.div`
  box-sizing: border-box;
  flex-direction: row;
  width: 648px;
  height: 48px;
  border-bottom: 1px solid #e0e0e0;
  /* border-bottom: 1px solid ${props => props.errorPwd ? "#D32F2F" :"#e0e0e0"}; */
  padding: 12px;

  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #bdbdbd;

  @media only screen and (max-width: 390px) {
    width: 100%;
  }
`
const RequestToggleInput = styled.input`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #212121;
  outline: none;
  &::-ms-reveal {
   display: none;
  }
`
const RequestToggleCount = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #1565C0;
  float: right;
`
const RequestToggleButton = styled.button`
  width: 648px;
  height: 52px;
  background: ${props=>props.active ? "#0B806F" : "#E0E0E0"};
  /* background: #E0E0E0; */
  border-radius: 4px;
  text-align: center;
  color: #FFFFFF;
  margin-top: 24px;

  @media only screen and (max-width: 390px) {
    width: 100%;
  }
`
const RequestToggleTextStyle = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 400;
  font-size: 14px;
  color: #424242;
  gap: 4px;
  margin-top: 40px;
`
const RequestToggleText = styled.p``
const RequestToggleTextLink = styled.p`
  font-weight: 700;
  text-decoration: underline;
  text-underline-position: under;
`












function RequestToggle() {



  const [authNum, setAuthNum] = useState(false);






  const Resend = () => {

  }





  return (
    <div>
      <RequestToggleBody>
        <RequestToggleForm>
          <RequestToggleDiv>
            <RequestToggleInput
              id="password"
              name="password"
              placeholder="인증번호 입력"
              // onKeyUp={acctiveLogin}
              // onChange={onChangePassword}
              // authNum={true}
              // authNum={authNum}
            />
            <RequestToggleCount>00:00</RequestToggleCount>
          </RequestToggleDiv>
          {authNum && <ErrorToggle errormessage="인증번호가 일치하지 않습니다."/>}

          <RequestToggleButton>인증확인</RequestToggleButton>
          <RequestToggleTextStyle>
            <RequestToggleText>인증번호를 못받으셨나요?</RequestToggleText>
            <RequestToggleTextLink onClick={Resend}>인증번호 재전송</RequestToggleTextLink>
          </RequestToggleTextStyle>
        </RequestToggleForm>
      </RequestToggleBody>
    </div>
  )
}

export default RequestToggle