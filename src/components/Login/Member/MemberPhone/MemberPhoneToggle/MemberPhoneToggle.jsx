import React, {useState, useEffect} from 'react'
import SimpleConfirm from 'components/commonUi/SimpleConfirm';
import {PhoneRequestForm,PhoneRequestInput,PhoneRequestButton,AuthTimerStyle,} from './MemberPhoneToggleStyle'


function MemberPhoneToggle() {
  const [authTime, setAuthTime] = useState(-1);
  const [authnumber, setAuthnumber] = useState('');
  const [buttonColor, setButtonColor] = useState(false)
  const [confirm, setConfirm] = useState(null)

  const openConfirm = () => {
    return setConfirm({
      contents: "전화번호 변경이 완료되었습니다.",
      confirmText: "확인",
      onConfirmClick: () => setConfirm(null),
    })
  }
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
        onClick={openConfirm}
        color={buttonColor}
      >
        인증 확인
      </PhoneRequestButton>
      {
        confirm &&
        <SimpleConfirm
          contents={confirm.contents}
          confirmText={confirm.confirmText}
          onConfirmClick={confirm.onConfirmClick}
          warn={confirm.warn}
          active={confirm.active}
        />
      }
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