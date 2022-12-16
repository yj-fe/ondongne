import React from 'react'
import styled from 'styled-components'



let SignupBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 32px 40px 0;
  gap: 40px;
  position: absolute;
  left: 596px;
  right: 596px;
  top: 60px;
  background: #ffffff;

  @media only screen and (max-width: 390px) {
    top: 104px;
    padding: 40px 20px;
    gap: 40px;
    left: 0px;
    right: 0px;
    width: 390px;
  }
`
let RequestTextStyle = styled.p`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 8px;
  width: 648px;
  height: 60px;
  flex: none;

  @media only screen and (max-width: 390px) {
    width: 350px;
  }
`
let RequestText = styled.p`
  width: 648px;
  height: 32px;
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  color: #212121;
  flex: none;
  align-self: stretch;
  flex-grow: 0;
`
let RequestInfo = styled.p`
  width: 648px;
  height: 20px;
  font-weight: 300;
  font-size: 15px;
  line-height: 20px;
  color: #424242;
  flex: none;
  align-self: stretch;
  flex-grow: 0;
`
let InputForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 12px;
  width: 648px;
  margin-top: 40px;

  @media only screen and (max-width: 390px) {
    width: 350px;
  }
`
let RequesInputForm = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  gap: 12px;
  width: 648px;
  height: 48px;

  @media only screen and (max-width: 390px) {
    width: 350px;
  }
`
let RequesInput = styled.input`
  display: flex;
  flex-direction: row;

  box-sizing: border-box;
  width: 546px;
  height: 48px;
  background: #FFFFFF;
  border-bottom: 1px solid #E0E0E0;
  flex: none;
  padding: 12px;

  font-weight: 400;
  font-size: 16px;

  color: #BDBDBD;
  &:focus {
    outline: none;
    border-bottom: 1px solid #616161;
    color: #212121;
  }
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  @media only screen and (max-width: 390px) {
    width: 255px;
  }
`
let RequestButton = styled.button`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 14px 16px;
  gap: 4px;
  width: 90px;
  height: 48px;
  background: #FFFFFF;
  border: 1px solid #EEEEEE;
  border-radius: 4px;
  flex: none;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #212121;
`





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


function ToggleRequest(){
  return(
    <div>
      
    </div>
  )
}

export default SignupRequest