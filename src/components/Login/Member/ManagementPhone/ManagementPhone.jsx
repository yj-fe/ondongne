import React, {useState, useEffect} from 'react'

import {} from './ManagementPhoneStyle'

function ManagementPhone() {
  const [showPhoneToggle,setShowPhoneToggle] = useState(true)
  const [showPhoneRequestToggle,setShowPhoneRequestToggle] = useState(false)

  return(
    <div>
      <InputForm>
        <Input
          value={phonevalue}
          disabled
        />
        <ChangeButton onClick={()=>{setShowPhoneToggle(false)}}>변경</ChangeButton>
      </InputForm>
{ showPhoneToggle ? <PhoneResetToggle phonevalue={phonevalue} setShowPhoneToggle={setShowPhoneToggle}/> : <PhoneToggle/> }
{ showPhoneRequestToggle && <PhoneRequestToggle setShowPhoneRequestToggle={setShowPhoneRequestToggle}/>}

    </div>
  )
}


// 전화번호 변경전
// 전화번호 인증 토글
function PhoneToggle ({setShowPhoneRequestToggle}){
  const [showPhoneRequestToggle,setShowPhoneRequestToggle] = useState(false)

  return(
    <div>
      <PhoneToggleInputForm>
        <PhoneToggleInput
          placeholder='-를 제외한 휴대폰번호 입력'
        />
        <RequestButton
          onClick={()=>setShowPhoneRequestToggle(true)}
        >인증요청</RequestButton>
      </PhoneToggleInputForm>
      {/* { showPhoneRequestToggle && <PhoneRequestToggle />} */}
    </div>
  )
}
// 전화번호 인증번호 토글
function PhoneRequestToggle ({setShowPhoneRequestToggle}){
  const [authTime, setAuthTime] = useState(-1);
  return(
    <div>
      <PhoneRequestForm>
        <PhoneRequestInput
          placeholder='인증번호 입력'
        />
        <AuthTimerStyle>{getFormattedTime(authTime)}</AuthTimerStyle>
        
      </PhoneRequestForm>
      <PhoneRequestButton>인증 확인</PhoneRequestButton>
    </div>
  )
}
/* ==============================
    180 => 3: 00 문자열 반환
  ============================== */
  function getFormattedTime(seconds) {
    const m = Math.floor(seconds / 60);
    const s = (seconds - (m * 60)) + '';
  
    return `${m}:${s.length < 2 ? '0' + s : s}`;
  };

export default ManagementPhone