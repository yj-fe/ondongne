import React from 'react'
import LoginHeader from '../../components/Login/LoginHeader'
import SignupRequest from '../../components/signup/signupRequest/SignupRequest';
import Agreement from '../../components/signup/agreement/Agreement';
import SignupInfo from '../../components/signup/signupInfo/SignupInfo';

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