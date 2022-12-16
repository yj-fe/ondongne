import React, { useEffect, useState } from "react";
import styled from 'styled-components'
import { ReactComponent as EyeOn } from "../../assets/login/Eyeon.svg";
import { ReactComponent as EyeOff } from "../../assets/login/Eyeoff.svg";
import ModalPage from "./ModalPage";




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
  /* height: 700px; */
  top: 60px;
  background: #ffffff;

  @media only screen and (max-width: 390px) {
    /* top: 104px; */
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
let RequestText = styled.div`
  font-weight: 600;
  font-size: 24px;
  color: #212121;
`
let RequestInfo = styled.p`
  font-weight: 300;
  font-size: 15px;
  color: #424242;
`
const RequesInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 648px;

  @media only screen and (max-width: 390px) {
    width: 350px;
  }
`

const RequestInputForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 0px;
  gap: 12px;
  margin-top: 40px;

  width: 648px;
  /* height: auto; */
`
const RequesInputTitle = styled.p`
  font-weight: 500;
  font-size: 16px;
  color: #212121;
`
const RequestInputDiv = styled.div`
  display: flex;
  flex-direction: ${props => props.direction };
  align-items: center;
  padding: 0px;
  gap: 12px;
  width: 648px;
  /* height: 48px; */

  @media only screen and (max-width: 390px) {
    width: 350px;
  }
`
const RequestInput = styled.input`
  box-sizing: border-box;
  width: 546px;
  height: 48px;
  background: #FFFFFF;
  padding: 12px;
  border-bottom: 1px solid #E0E0E0;
  
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #BDBDBD;
  
  &:focus {
    outline: none;
    border-bottom: 1px solid #616161;
    color: #212121;
  }
  
  @media only screen and (max-width: 390px) {
    width: 257px;
  }
  `
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
  background: #FFFFFF;
  border: 1px solid #EEEEEE;
  border-radius: 4px;
  flex: none;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #212121;
`
const PwdContainer = styled.div`
  box-sizing: border-box;
  /* align-items: center; */
  width: 648px;
  height: 48px;
  border-bottom: 1px solid #e0e0e0;
  padding: 12px;

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #bdbdbd;

  @media only screen and (max-width: 390px) {
    width: 350px;
  }
`;
const PwdInput = styled.input`
  font-family: "Pretendard";
  font-style: normal;
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
  /* display: flex;  */
  /* justify-content: center;  */
  /* align-items: center */
`;
const SignupButton = styled.button`
  position: absolute;
  bottom: 0;
  width: 728px;
  height: 56px;
  background: ${ props => props.color  ? "#0B806F" : "#e0e0e0"};
  font-weight: 700;
  font-size: 18px;
  text-align: center;
  color: #FFFFFF;
  left: 31%;
  
  @media only screen and (max-width: 390px) {
    align-items: center;
    width: 390px;
    left: auto;
  } 
`


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