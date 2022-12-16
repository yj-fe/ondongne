import React, { useState , useEffect } from "react";
import styled from "styled-components";
import ToggleDetail from "./ToggleDetail";



const RequestTextStyle = styled.p`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 0px;
  gap: 8px;

  @media only screen and (max-width: 390px) {
    width: 100%;
  }
`;
const RequestText = styled.p`
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  color: #212121;
`;
const RequestInfo = styled.p`
  font-weight: 300;
  font-size: 14px;
  line-height: 20px;
  color: #424242;
`;
const RequesInputForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  width: 648px;
  height: 112px;
  margin-top: 40px;

  @media only screen and (max-width: 390px) {
    width: 100%;
  }
`;
const Input = styled.input`
  box-sizing: border-box;
  width: 648px;
  height: 48px;
  background: #ffffff;
  border-bottom: 1px solid #e0e0e0;
  padding: 12px;

  font-weight: 400;
  font-size: 16px;

  color: #bdbdbd;
  &:focus {
    outline: none;
    border-bottom: 1px solid #616161;
    color: #212121;
  }

  @media only screen and (max-width: 390px) {
    width: 100%;
  }
`;
const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  gap: 12px;
  width: 648px;
  height: 48px;

  @media only screen and (max-width: 390px) {
    width: 100%;
  }
`
const RequesInput = styled.input`
  box-sizing: border-box;
  width: 546px;
  height: 48px;
  background: #ffffff;
  border-bottom: 1px solid #e0e0e0;
  flex: none;
  padding: 12px;

  font-weight: 400;
  font-size: 16px;

  color: #bdbdbd;
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
`;
const RequestButton = styled.button`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 14px 16px;
  gap: 4px;
  width: 90px;
  height: 48px;
  background: #ffffff;
  border: 1px solid #eeeeee;
  border-radius: 4px;
  flex: none;

  font-weight: 400;
  font-size: 14px;
  line-height: 20px;

  color: #212121;
`;



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