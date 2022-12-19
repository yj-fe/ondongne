import React from 'react'
import EmailRequest from '../../../components/Login/Email/EmailRequest'
import FindResult from '../../../components/Login/Email/FindResult'
import LoginHeader from '../../../components/Login/Common/LoginHeader/LoginHeader'
import {EmailBody} from './FindEmailStyle'



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