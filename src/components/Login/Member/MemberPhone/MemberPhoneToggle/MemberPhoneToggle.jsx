import React, {useState, useEffect} from 'react'
import SimpleConfirm from 'components/commonUi/SimpleConfirm';
import {PhoneRequestForm,PhoneRequestInput,PhoneRequestButton,AuthTimerStyle,} from './MemberPhoneToggleStyle'

function MemberPhoneToggle({setToggle, authCode, setAuthCode, phoneChange}) {
  const AUTH_SECONDS = 180;
  const [authTime, setAuthTime] = useState(-1);
  const [authnumber, setAuthnumber] = useState('');
  const [buttonColor, setButtonColor] = useState(false)
  const [confirm, setConfirm] = useState(null)
  const [authInterval, setAuthInterval] = useState(null);

  const openConfirm = () => {

    if(authnumber !== authCode) {
      return setConfirm({
        contents: '인증번호가 틀렸습니다.\n다시 한번 확인해주세요.',
        confirmText: "확인",
        onConfirmClick: () => setConfirm(null),
      })
    } 

    phoneChange();
  }

  const ActiveButton = () => {
    if(authnumber.length > 1){
      setButtonColor(true)
    }else{
      setButtonColor(false)
    }
  }

  // 타이머 설정
  useEffect(() => {
    // authcode 지정되었을 때 timeout 시작
    if (authCode.length > 0) {
      setAuthTime(AUTH_SECONDS);
      setAuthInterval(setInterval(function () {
        setAuthTime(authTime => authTime - 1);
      }, 1000));
    } else {
      // authcode 없을 때 timeout 초기화
      setAuthTime(-1);
      if (authInterval) {
        clearInterval(authInterval);
        setAuthInterval(null);
      }
    }

    return () => {
      if (authInterval) clearInterval(authInterval);
    }
  }, [authCode]);

  // timeout 처리
  useEffect(() => {
    if (authTime == 0) {
      return setConfirm({
        contents: '인증시간이 초과하였습니다. 다시 시도해 주세요.',
        confirmText: "확인",
        onConfirmClick: () => {
          setAuthCode('');
          setToggle();
          setConfirm(null);
        },
      })
    }
  }, [authTime]);

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
        type='button'
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