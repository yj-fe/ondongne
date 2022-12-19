import React from 'react'
import LoginHeader from '../../../components/Login/Common/LoginHeader/LoginHeader';
import SignupRequest from '../../../components/Login/Signup/signuprequest/SignupRequest';
import Agreement from '../../../components/Login/Signup/agreement/Agreement';
import SignupInfo from '../../../components/Login/Signup/signupinfo/SignupInfo';


function SignupPage() {
  return (
    <div>
      <LoginHeader title="회원가입"/>
        <SignupRequest/>
        <Agreement/>
        <SignupInfo/>
    </div>
  )
}

export default SignupPage