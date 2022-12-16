import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as EyeOn } from "../../assets/login/Eyeon.svg";
import { ReactComponent as EyeOff } from "../../assets/login/Eyeoff.svg";
import ModalPage from "./ModalPage";
import ModalError from "./ModalError.jsx";






let RequestTextStyle = styled.p`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 0px;
  gap: 8px;
  /* width: 648px; */
  /* height: 60px; */
  /* flex: none; */

  @media only screen and (max-width: 390px) {
    width: 100%;
  }
`;
let RequestText = styled.p`
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  color: #212121;
`;
let RequestInfo = styled.p`
  font-weight: 300;
  font-size: 14px;
  line-height: 20px;
  color: #424242;
`;
let RequesInputForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  width: 648px;
  /* height: 112px; */
  margin-top: 40px;

  @media only screen and (max-width: 390px) {
    width: 100%;
  }
`;
const RequestInputDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 12px;
  width: 648px;
  /* height: 48px; */

  @media only screen and (max-width: 390px) {
    width: 100%;
  }
`
const PwdContainer = styled.div`
  box-sizing: border-box;
  /* align-items: center; */
  width: 100%;
  /* width: 648px; */
  height: 48px;
  border-bottom: 1px solid #e0e0e0;
  padding: 12px;

  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #bdbdbd;

  @media only screen and (max-width: 390px) {
    width: 100%;
  }
`;
const PwdInput = styled.input`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #bdbdbd;
  outline: none;
  &::-ms-reveal {
   display: none;
  }
`;
const EyeOffStyle = styled.div`
  float: right;
`;
const ResetButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 4px;
  margin-top: 24px;
  gap: 4px;
  font-weight: 700;
  font-size: 16px;
  width: 100%;
  height: 52px;

  background: ${ props => props.color  ? "#0B806F" : "#e0e0e0"};
  color: #FFFFFF;
  border-radius: 4px;
`
















function PwdReset() {



  let [password, setPassword] = useState('');
  let [passwordCheck, setPasswordCheck] = useState('');
  let [active, setActive] = useState(false);
  let [disabled, setDisabled] = useState(true);

  let [error, setError] = useState(false)
  
  let [showPassword, setShowPassword] = useState(false);
  let [showPasswordCheck, setShowPasswordCheck] = useState(false);
  
  let [modal, setModal] = useState(false);
  let [modalError, setModalError] = useState(false)

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const onChangePasswordCheck = (e) => {
    setPasswordCheck(e.target.value);
  };


  const togglePassWordPut = () => {
    /* e.preventDefault() */
    setShowPassword(!showPassword);
  };

  const togglePassWordCheck = () => {
    /* e.preventDefault() */
    setShowPasswordCheck(!showPasswordCheck);
  };

  const ErrorCheck = () => {
    if (password.length > 7 && password === passwordCheck){
      setModal(true)
    } else if(password !== passwordCheck){
      console.log('password <> passwordCheck');
      setError(true)
    } else {
      setModalError(true)
    }
  }
  const ActiveButton = () => {
    if (password && passwordCheck.length >= 5){
      setActive(true);
      setDisabled(false);
    }
  }















  return (
    <div>
      <RequestTextStyle>
          <RequestText>비밀번호 재 설정</RequestText>
          <RequestInfo>
            영문, 숫자, 특수문자 조합으로 8자 이상 입력해주세요.
          </RequestInfo>
        </RequestTextStyle>

        <RequesInputForm>
              <RequestInputDiv direction="column">
                <PwdContainer>
                  <PwdInput
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="새 비밀번호"
                    // onKeyUp={acctiveSignup}
                    onChange={onChangePassword}
                    onKeyUp={ActiveButton}
                  />
                  <EyeOffStyle onClick={togglePassWordPut}>
                    {showPassword ? <EyeOn /> : <EyeOff />}
                  </EyeOffStyle>
                </PwdContainer>
                <PwdContainer>
                  <PwdInput
                    id="passwordCheck"
                    name="passwordCheck"
                    type={showPasswordCheck ? "text" : "password"}
                    placeholder="새 비밀번호 확인"
                    // onKeyUp={acctiveSignup}
                    onChange={onChangePasswordCheck}
                    onKeyUp={ActiveButton}
                  />
                  <EyeOffStyle onClick={togglePassWordCheck}>
                    {showPasswordCheck ? <EyeOn /> : <EyeOff />}
                  </EyeOffStyle>
                </PwdContainer>
              </RequestInputDiv>
            <ResetButton
              type="button" 
              onClick={ErrorCheck}
              // onClick={()=>{goToLogin(); errorCheck();}}
              // onClick={ErrorCheck}
              color={active}
              disabled={disabled}
            >
              비밀번호 변경
            </ResetButton>
        </RequesInputForm>

  {modal === true ? <ModalPage modaltext1="비밀번호 설정이 완료되었습니다."  modaltext2="로그인 후 이용해주세요." modalbutton="확인"/> : null}
  {modalError === true ? <ModalError errortext1="비밀번호는 영문, 숫자, 특수문자 조합으로" errortext2="8자 이상 입력해주세요." errorbutton="확인"/> : null}


    </div>
  )
}




export default PwdReset