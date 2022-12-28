import SimpleConfirm from 'components/commonUi/SimpleConfirm'
import React, {useState, useEffect} from 'react'
import { sendSMS } from 'service/common'
import {AlertText,Input,InputForm,ChangeButton,PhoneToggleInput,PhoneToggleInputForm,RequestButton,PhoneRequestForm,PhoneRequestInput,AuthTimerStyle,PhoneRequestButton} from './MemberPhoneStyle'
import MemberPhoneToggle from './MemberPhoneToggle/MemberPhoneToggle'
import { memberPhoneChange } from 'service/member';

function MemberPhone({phone, getMemberProfile}) { 
  
  const [toggle, setToggle] = useState(true)

  return (
    <div>
      { toggle ? <PhoneResetToggle phone={phone} setToggle={setToggle}/> : <PhoneToggle getMemberProfile={getMemberProfile} setToggle={setToggle}/> }
    </div>
  )
}
// 1. 전화번호 변경전
function PhoneResetToggle ({setToggle, phone}){

  return(
    <div>
      <InputForm>
        <Input
          value={phone}
          disabled
        />
        <ChangeButton onClick={()=>setToggle(false)}>변경</ChangeButton>
      </InputForm>
    </div>
  )
}
// 2. 전화번호 인증 토글
function PhoneToggle ({getMemberProfile, setToggle}){
  const [confirm, setConfirm] = useState(null);
  const [toggle02, setToggle02] = useState(false);
  const [phone, setPhone] = useState('');
  const [authCode, setAuthCode] = useState('');
  const [error, setError] = useState('');

  const phoneValidation = () => {
    const regExp = /^01(?:0|1|[6-9])(?:\d{3}|\d{4})\d{4}$/;
    return regExp.test(phone);
  }

  // 인증번호 발송
  const smsHandler = async () => {
    if (phone === '') {
      return setConfirm({
        contents: "전화번호를 입력해주세요.",
        confirmText: "확인",
        onConfirmClick: () => {setConfirm(null)}
      })
    }

    const response = await sendSMS(phone);
    const {data, message, code} = response.data;

    if(data) {
      setAuthCode(data);
      return setConfirm({
        contents: "인증번호가 발송되었습니다.",
        confirmText: "확인",
        onConfirmClick: () => {
          setConfirm(null)
          setToggle02(true)
        }
      })
    }
  }

  // 휴대폰 번호 변경
  const phoneChange = async () => {
    const response = await memberPhoneChange(phone)
    const {data, message, code} = response.data;

    if(code === '500') {
      return setConfirm({
        contents: message,
        confirmText: "확인",
        onConfirmClick: () => {
          setToggle(true);
          setConfirm(null)
        }
      })

    }

    if(data) {
      return setConfirm({
        contents: message,
        confirmText: "확인",
        onConfirmClick: () => {
          setPhone('');
          setAuthCode('');
          setToggle(true);
          setConfirm(null);
          getMemberProfile();
        }
      })
    }
  }

  // 전화번호 체크
  useEffect(() => {
    console.log(phone)
    if(phone.length === 0) {
      return setError('변경하실 전화번호를 입력해 주세요.')
    }

    if(!phoneValidation(phone)) {
      setError('잘못된 번호입니다. 다시 확인해 주세요.')
    } else {
      setError('')
    }

  }, [phone])
    
  return(
    <div>
      <PhoneToggleInputForm>
        <PhoneToggleInput
          id='phone'
          type="number"
          value={phone}
          onChange={e=> setPhone(e.target.value)}
          placeholder='-를 제외한 휴대폰번호 입력'
        />
        <RequestButton
          type='button'
          onClick={smsHandler}
          >인증요청</RequestButton>
      </PhoneToggleInputForm>
      { error && <AlertText>{error}</AlertText>}
      { 
        toggle02 && 
          <MemberPhoneToggle 
            setToggle={()=>setToggle02(false)}
            authCode={authCode} 
            setAuthCode={setAuthCode}
            phoneChange={phoneChange}/>
      }
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

export default MemberPhone