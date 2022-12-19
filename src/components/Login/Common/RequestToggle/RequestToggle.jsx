import React, { useState } from 'react'
import ErrorToggle from '../ErrorToggle/ErrorToggle'

import {RequestToggleBody, RequestToggleForm, RequestToggleDiv, RequestToggleInput, RequestToggleCount, RequestToggleButton, RequestToggleText, RequestToggleTextLink, RequestToggleTextStyle } from './RequestToggleStyle'













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