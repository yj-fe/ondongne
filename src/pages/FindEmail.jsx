import React from 'react'
import styled from 'styled-components'
import EmailRequest from '../components/Login/EmailRequest'
import FindResult from '../components/Login/FindResult'
import LoginHeader from '../components/Login/LoginHeader'


let EmailBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 32px 40px 0;
  margin-top: 60px;
  gap: 40px;
  background: #FFFFFF;

  @media only screen and (max-width: 728px) {
    width: 100%;
  }
`

function FindEmail() {
  return (
    <div>
      <LoginHeader title="이메일 찾기"/>
      <EmailBody>
        <EmailRequest/>
        {/* <FindResult/> */}

      </EmailBody>
    </div>
  )
}

export default FindEmail