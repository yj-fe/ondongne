import React from 'react'
import { InputForm, RequesInput, RequesInputForm, RequestButton, RequestInfo, RequestText, RequestTextStyle, SignupBody } from './SignupRequestStyle'

function SignupRequest() {
  return (
    <div>
      <SignupBody>
        <RequestTextStyle>
          <RequestText>온동네마켓 회원가입</RequestText>
          <RequestInfo>회원가입을 위해 휴대폰 번호를 인증해 주세요.</RequestInfo>
        </RequestTextStyle>
        <InputForm>
          <RequesInputForm>
            <RequesInput
              id='phone'
              name='phone'
              type='number'
              placeholder='-를 제외한 휴대폰번호 입력'
              outline='none'
              // onChange={onChangeInput}
              >
            </RequesInput>
            <RequestButton
              type='button'
              // onClick={}
            >
              인증요청
            </RequestButton>
          </RequesInputForm>
          {/* <TimeOut/> */}
        </InputForm>
      </SignupBody>
    </div>
  )
}

export default SignupRequest