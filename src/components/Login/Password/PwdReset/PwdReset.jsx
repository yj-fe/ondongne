import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ReactComponent as EyeOn } from "../../../../assets/login/Eyeon.svg";
import { ReactComponent as EyeOff } from "../../../../assets/login/Eyeoff.svg";
import ModalPage from "../../ModalPage";
import ModalError from "../../ModalError.jsx";
import { RequestTextStyle, RequestText, RequestInfo, RequesInputForm, RequestInputDiv, PwdContainer, PwdInput, EyeOffStyle, ResetButton } from './PwdResetStyle'



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