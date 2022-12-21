import React, {useState, useEffect} from 'react'
import {PhoneRequestForm,PhoneRequestInput,PhoneRequestButton,AuthTimerStyle,} from './MemberPhoneToggleStyle'


function MemberPhoneToggle() {
  const [authTime, setAuthTime] = useState(-1);
  const [authnumber, setAuthnumber] = useState('');
  const [buttonColor, setButtonColor] = useState(false)
  const ActiveButton = () => {
    if(authnumber.length > 1){
      setButtonColor(true)
    }else{
      setButtonColor(false)
    }
  }


  return(
    <div>
      <PhoneRequestForm>
        <PhoneRequestInput
          id='authnumber'
          type="number"
          value={authnumber}
          onChange={e=> setAuthnumber(e.target.value)}
          placeholder='인증번호 입력'
          onKeyUp={ActiveButton}
        />
        <AuthTimerStyle>{getFormattedTime(authTime)}</AuthTimerStyle>
        
      </PhoneRequestForm>
      <PhoneRequestButton
        color={buttonColor}
      >
        인증 확인
      </PhoneRequestButton>
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

export default MemberPhoneToggle