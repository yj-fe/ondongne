import React, { useState, useEffect } from 'react'
import LoginHeader from 'components/Login/Common/LoginHeader/LoginHeader';
import SignupRequest from 'components/Login/Signup/signuprequest/SignupRequest';
import Agreement from 'components/Login/Signup/agreement/Agreement';
import SignupInfo from 'components/Login/Signup/signupinfo/SignupInfo';
import * as L from 'components/commonUi/Layout';
import { S } from 'components/layout/Layout/LayoutStyle'

function SignupPage() {

  const authData = localStorage.getItem("auth");
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
    provider: '',
    providerId: '',
    isAuth: false,
  })

  const [depth01, setDepth01] = useState(false)
  const [depth02, setDepth02] = useState(true)
  const [depth03, setDepth03] = useState(false)

  // 뎁스 이동 핸들러
  const depthHandler = (type) => {
    switch (type) {
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

  useEffect(() => {
    if (authData) {
      const parasedData = JSON.parse(authData)
      setData({
        ...data,
        email: parasedData.email,
        password: parasedData.providerId,
        nickname: parasedData.name,
        provider: parasedData.provider,
        providerId: parasedData.providerId,
        isAuth: true
      })
    }
  }, [authData]);

  return (
    <S.Wrapper>
      <LoginHeader title="회원가입" to={"/login"} />
      <S.Main>
        <L.Contents _padding='0px' _height='calc(100vh - 68px)'>
          <L.FlexCols _gap='0px'>
            {depth01 && <SignupRequest setData={setData} depthHandler={() => depthHandler(1)} />}
            {depth02 && <Agreement setData={setData} depthHandler={() => depthHandler(2)} />}
            {depth03 && <SignupInfo setData={setData} data={data} />}
          </L.FlexCols>
        </L.Contents>
      </S.Main>
    </S.Wrapper>
  )
}

export default SignupPage