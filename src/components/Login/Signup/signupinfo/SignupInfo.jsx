import React, { useEffect, useState } from "react";
import { ReactComponent as EyeOn } from "../../../../assets/login/Eyeon.svg";
import { ReactComponent as EyeOff } from "../../../../assets/login/Eyeoff.svg";
import ModalPage from "../../../Login/ModalPage";
import {SignupBody, RequestTextStyle, RequestText, EyeOffStyle, PwdInput, PwdContainer, RequestButton, RequestInput, RequestInputDiv, RequestInfo, RequesInputContainer, RequestInputForm, RequesInputTitle, SignupButton } from './SignupInfoStyle';

function SignupInfo() {

  const [email, setEmail] = useState('');
  let [password, setPassword] = useState('');
  let [passwordCheck, setPasswordCheck] = useState('');
  let [active, setActive] = useState(false);
  let [disabled, setDisabled] = useState(true);
  let [modal, setModal] = useState(false);



  const onEmailChange = (e) => {
    setEmail(e.currentTarget.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const onChangePasswordCheck = (e) => {
    setPasswordCheck(e.target.value);
  };

  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordCheck, setShowPasswordCheck] = useState(false);

  const togglePassWordPut = () => {
    /* e.preventDefault() */
    setShowPassword(!showPassword);
  };

  const togglePassWordCheck = () => {
    /* e.preventDefault() */
    setShowPasswordCheck(!showPasswordCheck);
  };

  const goToLogin = () => {
    // api
    alert('api request');

    // success
    console.log('goToLogin');
    
    // fail

  } 
  // const acctiveSignup = () => {
  //   if (중복체크모두 true && password === passwordCheck ) {
  //     setActive(true)
  //   }else{
  //     setActive(false)
  //   }
  // };

  useEffect(() => {
    setActive(email.length > 0);
  }, [email])

  // const ActiveButton = () => {
  //   if (이메일,비번,닉네임 성공){
  //     setActive(true);
  //     setDisabled(false);
  //   }else{}
  // }

  return (
    <div>
      <SignupBody>
        <RequestTextStyle>
          <RequestText>회원 정보 입력</RequestText>
          <RequestInfo>회원가입 시 필요한 회원정보를 모두 입력해 주세요.</RequestInfo>
        </RequestTextStyle>
        <RequesInputContainer>
          <RequestInputForm>
            <RequesInputTitle>이메일</RequesInputTitle>
            <RequestInputDiv direction="row">
              <RequestInput
                id='email '
                name='email'
                type='text'
                placeholder='이메일 입력'
                outline='none'
                value={email}
                onChange={onEmailChange}
              >
              </RequestInput>
              <RequestButton
                type="button"
                // onClick={이메일중복확인}
              >
                중복확인
              </RequestButton>
            </RequestInputDiv>
          </RequestInputForm>
          <RequestInputForm>
            <RequesInputTitle>비밀번호</RequesInputTitle>
            <RequestInputDiv direction="column">
              <PwdContainer>
                <PwdInput
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="비밀번호 입력"
                  // onKeyUp={acctiveSignup}
                  onChange={onChangePassword}
                />
                <EyeOffStyle onClick={togglePassWordPut}>
                  {showPassword ? <EyeOn /> : <EyeOff />}
                </EyeOffStyle>
              </PwdContainer>
              <PwdContainer>
                <PwdInput
                  id="Check"
                  name="Check"
                  type={showPasswordCheck ? "text" : "password"}
                  placeholder="비밀번호 확인"
                  // onKeyUp={acctiveSignup}
                  onChange={onChangePasswordCheck}
                />
                <EyeOffStyle onClick={togglePassWordCheck}>
                  {showPasswordCheck ? <EyeOn /> : <EyeOff />}
                </EyeOffStyle>
              </PwdContainer>
            </RequestInputDiv>
          </RequestInputForm>
          <RequestInputForm>
            <RequesInputTitle>닉네임</RequesInputTitle>
            <RequestInputDiv direction="row">
              <RequestInput
                id='id '
                name='id'
                type='text'
                placeholder='닉네임 입력'
                outline='none'
                // onChange={onChangeInput}
              >
              </RequestInput>
              <RequestButton
                type="button"
                // onClick={닉네임중복확인}
              >
                중복확인
              </RequestButton>
            </RequestInputDiv>
          </RequestInputForm>
        </RequesInputContainer>
        </SignupBody>
      <SignupButton
        type="button"
        // onClick={()=>{goToLogin(); errorCheck();}}
        color={active}
        onClick={()=>{setModal(true)}}
      >
        가입하기
      </SignupButton>
      {modal === true ? <ModalPage modaltext="비밀번호는 영문, 숫자, 특수문자 조합으로
8자 이상 입력해주세요." modalroute="/member/login" modalbutton="확인"/> : null}
    </div>
  )
}

export default SignupInfo