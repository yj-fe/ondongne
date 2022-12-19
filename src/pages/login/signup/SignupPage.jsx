import React, { useState } from 'react'
import LoginHeader from './../../../components/Login/Common/LoginHeader/LoginHeader';
import SignupRequest from './../../../components/Login/Signup/signuprequest/SignupRequest';
import Agreement from './../../../components/Login/Signup/agreement/Agreement';
import SignupInfo from './../../../components/Login/Signup/signupinfo/SignupInfo';


function SignupPage() {

  const [data, setData] = useState({
    phone: '',
    phoneAuthStatus: false,
    email: '',
    password: '',
    nickname: '',
    policy01: false,
    policy02: false,
    policy03: false,
    policy04: false,
  })
  const [depth01, setDepth01] = useState(true)
  const [depth02, setDepth02] = useState(false)
  const [depth03, setDepth03] = useState(false)

  // 뎁스 이동 핸들러
  const depthHandler = (type) => {
    switch(type) {
      case 1: 
        setDepth01(false)
        setDepth02(true)
        break;
      case 2: 
        setDepth02(false)
        setDepth03(true)
        break;
    }
  }

  return (
    <div>
      <LoginHeader title="회원가입" />
      {depth01 && <SignupRequest setData={setData} depthHandler={() => depthHandler(1)}/>}
      {depth02 && <Agreement setData={setData} depthHandler={() => depthHandler(2)}/>}
      {depth03 && <SignupInfo setData={setData} data={data}/>}
    </div>
  )
}

export default SignupPage