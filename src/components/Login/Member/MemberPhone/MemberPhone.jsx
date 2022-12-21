import React, {useState, useEffect} from 'react'
import {AlertText,Input,InputForm,ChangeButton,PhoneToggleInput,PhoneToggleInputForm,RequestButton,PhoneRequestForm,PhoneRequestInput,AuthTimerStyle,PhoneRequestButton} from './MemberPhoneStyle'
import MemberPhoneToggle from './MemberPhoneToggle/MemberPhoneToggle'

function MemberPhone() {
  const [phonevalue,setPhonevalue] = useState('01012345678')
  
  const [showPhoneToggle,setShowPhoneToggle] = useState(true)
  // const [showPhoneRequestToggle, setShowPhoneRequestToggle] = useState(false)
  return (
    <div>
      { showPhoneToggle ? <PhoneResetToggle phonevalue={phonevalue} setShowPhoneToggle={setShowPhoneToggle}/> : <PhoneToggle/> }
    </div>
  )
}
// 1. 전화번호 변경전
function PhoneResetToggle ({setShowPhoneToggle, phonevalue}){

  return(
    <div>
      <InputForm>
        <Input
          value={phonevalue}
          disabled
        />
        <ChangeButton onClick={()=>{setShowPhoneToggle(false)}}>변경</ChangeButton>
      </InputForm>
    </div>
  )
}
// 2. 전화번호 인증 토글
function PhoneToggle ({}){
  const [showPhoneRequestToggle,setShowPhoneRequestToggle] = useState(false)
  const [phonenumber,setPhoneNumber] = useState('')
  const [showAlert,setShowAlert] = useState(false)
  const KeyAlert = () => {
    if(phonenumber.length === 0){
      setShowAlert(true)
    }
  }
  console.log(showAlert);
  console.log(phonenumber);
  return(
    <div>
      <PhoneToggleInputForm>
        <PhoneToggleInput
          id='phonenumber'
          type="number"
          value={phonenumber}
          onChange={e=> setPhoneNumber(e.target.value)}
          placeholder='-를 제외한 휴대폰번호 입력'
          onKeyUp={KeyAlert}

        />
        <RequestButton
          onClick={()=>setShowPhoneRequestToggle(true)}
          >인증요청</RequestButton>
      </PhoneToggleInputForm>
          {showAlert && <AlertToggle/>}
      { showPhoneRequestToggle && <MemberPhoneToggle />}
    </div>
  )
}

function AlertToggle(){
  return(
    <div>
      <AlertText>변경하실 전화번호를 입력해 주세요.</AlertText>
    </div>
  )
}

export default MemberPhone