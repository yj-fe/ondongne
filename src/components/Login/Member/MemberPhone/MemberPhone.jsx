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
  const [showAlert1,setShowAlert1] = useState(true)
  const [showAlert2,setShowAlert2] = useState(false)
  const KeyAlert = () => {
    if(phonenumber.length >= 1){
      setShowAlert1(false)
    }if(phonenumber.length < 10){
      setShowAlert2(true)
    }if(phonenumber.length >= 10){
      setShowAlert2(false)
    }
  }
  console.log(showAlert1);
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
          {showAlert1 && <AlertToggle1/>}
          {showAlert2 && <AlertToggle2/>}
      { showPhoneRequestToggle && <MemberPhoneToggle />}
    </div>
  )
}

function AlertToggle1(){
  return(
    <div>
      <AlertText>변경하실 전화번호를 입력해 주세요.</AlertText>
    </div>
  )
}
function AlertToggle2(){
  return(
    <div>
      <AlertText>잘못된 번호입니다. 다시 확인해 주세요.</AlertText>
    </div>
  )
}

export default MemberPhone