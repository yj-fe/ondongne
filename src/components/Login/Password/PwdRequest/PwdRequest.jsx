import React, { useState , useEffect } from "react";
import ToggleDetail from "../ToggleDetail/ToggleDetail";
import {RequestTextStyle, RequestText, RequestInfo, RequesInputForm,Input, InputContainer, RequesInput, RequestButton  } from './PwdRequestStyle'


function PwdRequest() {


const [showTogglePwd, setShowTogglePwd] = useState()
console.log(showTogglePwd);

  return (
    <div>
      <RequestTextStyle>
        <RequestText>휴대폰 번호를 인증해주세요.</RequestText>
        <RequestInfo>
          고객님의 정보 보호를 위해 휴대폰 인증을 진행해주세요.
        </RequestInfo>
      </RequestTextStyle>
      <RequesInputForm>
        <Input
          placeholder="이메일 입력"
          id="email"
          name="email"
        />
        <InputContainer>
          <RequesInput
            id="phone"
            name="phone"
            type="number"
            placeholder="-를 제외한 휴대폰번호 입력"
            outline="none"
          ></RequesInput>
          <RequestButton onClick={()=>setShowTogglePwd((s)=>!s)}>인증요청</RequestButton>
        </InputContainer>

      </RequesInputForm>
      {showTogglePwd && <ToggleDetail/>}
    </div>
  )
}



export default PwdRequest