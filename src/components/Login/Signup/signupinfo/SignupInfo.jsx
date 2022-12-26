import React, { useEffect, useState } from "react";
import { ReactComponent as EyeOn } from "assets/login/Eyeon.svg";
import { ReactComponent as EyeOff } from "assets/login/Eyeoff.svg";
import { EyeOffStyle, PwdContainer, PwdInput, RequesInputContainer, RequesInputTitle, RequestButton, RequestInfo, RequestInput, RequestInputDiv, RequestInputForm, SignupButton, ValidText } from "./SignupInfoStyle";
import { useNavigate } from "react-router-dom";
import Alert from 'components/commonUi/Alert';
import { SignupBody, RequestText } from 'components/Login/Signup/signuprequest/SignupRequestStyle';
import { RequestTextStyle } from 'components/Login/Password/PwdReset/PwdResetStyle';
import { signup } from "service/auth";
import { memberEmailValidation, memberNicknameValidation } from "service/common";

function SignupInfo({ data, setData }) {

  const [email, setEmail] = useState('');
  const [emailValidMessage, setEmailValidMessage] = useState('');
  const [emailValid, setEmailValid] = useState(null);

  const [password, setPassword] = useState(''); 
  const [passwordCheck, setPasswordCheck] = useState('');
  const [passwordValid, setPasswordValid] = useState(null);
  const [passwordValidMessage, setPasswordValidMessage] = useState('');
 
  const [nickname, setNickname] = useState('');
  const [nicknameValidMessage, setNicknameValidMessage] = useState('');
  const [nicknameValid, setNicknameValid] = useState(null);

  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordCheck, setShowPasswordCheck] = useState(false);
  const [active, setActive] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [alert, setAlert] = useState(null);

  const navigate = useNavigate();
  
  // 이메일 중복체크
  const emailValidation = async () => {
    if (email === '') {
      setAlert({
        contents: "이메일을 입력해주세요.",
        buttonText: "확인",
        onButtonClick: () => setAlert(null),
        onOverlayClick: () => setAlert(null),
      })
    }

    await memberEmailValidation(email)
      .then(response => {
        const {data, message} = response.data;
        setEmailValid(data);
        setEmailValidMessage(message);
      })
      .catch(error => {
        console.log(error)
      })
  }

  // 닉네임 중복체크
  const nicknameValidation = async () => {
    if (nickname === '') {
      setAlert({
        contents: "닉네임을 입력해주세요.",
        buttonText: "확인",
        onButtonClick: () => setAlert(null),
        onOverlayClick: () => setAlert(null),
      })
    }

    await memberNicknameValidation(nickname)
      .then(response => {
        const {data, message} = response.data;
        setNicknameValid(data);
        setNicknameValidMessage(message);
      })
      .catch(error => {
        console.log(error)
      })
  }

  // 회원가입
  const onSubmit = async () => {
    await signup(data)
      .then(response => {
        if(response.status == 200) {
          setAlert({
            contents: "회원가입을 축하드립니다. \n 로그인 후 이용해 주세요.",
            buttonText: "확인",
            onButtonClick: () => navigate('/login'),
            onOverlayClick: () => navigate('/login'),
          })
        } else {
          setAlert({
            contents: "회원가입을 실패하였습니다.",
            buttonText: "확인",
            onButtonClick: () => setAlert(null),
            onOverlayClick: () => setAlert(null),
          })
        }
      })
      .catch(error => {
        console.log(error)
    })
  }

  // 비밀번호 유효성 검사
  const passwordValidation = () => {
    const regExp = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/;
    return regExp.test(password);
  }
  
  //비밀번호 체크
  useEffect(() => {

    if(data.isAuth) {
      return;
    }

    if(!password) {
      return;
    }

    if(!passwordValidation()) {
      setPasswordValid(false);
      setPasswordValidMessage("비밀번호는 영문, 숫자, 특수문자 조합으로 8자 이상 20이하로 입력해주세요.");
      return;
    }

    if(!passwordCheck) {
      setPasswordValid(false);
      setPasswordValidMessage("비밀번호 확인이 필요합니다.");
      return
    }

    if(password === passwordCheck) {      
      setPasswordValid(true);
      setPasswordValidMessage("");
    } else {
      setPasswordValid(false);
      setPasswordValidMessage("비밀번호가 서로 일치하지 않습니다.");
    }
  }, [password, passwordCheck])

  useEffect(() => {
    if(data.isAuth) {
      if(emailValid && nicknameValid) {
        setActive(true)
        setDisabled(false)
  
        setData((prevState) => {
          return { 
            ...prevState,
            email,
            password,
            nickname
          }
        });
      }
      return;
    }

    if(emailValid && passwordValid && nicknameValid) {
      setActive(true)
      setDisabled(false)

      setData((prevState) => {
        return { 
          ...prevState,
          email,
          password,
          nickname
        }
      });

    } else {
      setActive(false)
      setDisabled(true)
      
      setData((prevState) => {
        return { 
          ...prevState,
          email: '',
          password: '',
          nickname: ''
        }
      });
    }
  }, [emailValid, passwordValid, nicknameValid])

  useEffect(() => {
    if(data.isAuth) {
      setEmail(data.email)
      setPassword(data.password)
      setNickname(data.nickname)
    }
  }, [data])

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
                type='text'
                placeholder='이메일 입력'
                outline='none'
                value={email}
                borderColor={emailValid == null ?'#E0E0E0' : emailValid ? '#388E3C' : '#D32F2F'}
                onChange={e => setEmail(e.target.value)}
              />
              
              <RequestButton
                type="button"
                onClick={emailValidation}
              >
                중복확인
              </RequestButton>
            </RequestInputDiv>
            {
              emailValidMessage && 
              <ValidText color={emailValid}>{emailValidMessage}</ValidText>
            }
          </RequestInputForm>
          {
            !data.isAuth && 
            <RequestInputForm>
              <RequesInputTitle>비밀번호</RequesInputTitle>
              <RequestInputDiv direction="column">
                <PwdContainer
                  borderColor={(passwordValid != null && !passwordValid) ? '#D32F2F' : '#E0E0E0'}>
                  <PwdInput
                    type={showPassword ? "text" : "password"}
                    placeholder="비밀번호 입력"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                  />
                  <EyeOffStyle onClick={()=>setShowPassword(!showPassword)}>
                    {showPassword ? <EyeOn /> : <EyeOff />}
                  </EyeOffStyle>
                </PwdContainer>
                <PwdContainer
                  borderColor={(passwordValid != null && !passwordValid) ? '#D32F2F' : '#E0E0E0'}>
                  <PwdInput
                    type={showPasswordCheck ? "text" : "password"}
                    placeholder="비밀번호 확인"
                    value={passwordCheck}
                    onChange={e => setPasswordCheck(e.target.value)}
                  />
                  <EyeOffStyle onClick={()=>setShowPasswordCheck(!showPasswordCheck)}>
                    {showPasswordCheck ? <EyeOn /> : <EyeOff />}
                  </EyeOffStyle>
                </PwdContainer>
                {
                  passwordValidMessage && 
                  <ValidText color={passwordValid}>{passwordValidMessage}</ValidText>
                }
              </RequestInputDiv>
            </RequestInputForm>
          }

          <RequestInputForm>
            <RequesInputTitle>닉네임</RequesInputTitle>
            <RequestInputDiv direction="row">
              <RequestInput
                type='text'
                placeholder='닉네임 입력'
                outline='none'
                value={nickname}
                borderColor={nicknameValid == null ?'#E0E0E0' : nicknameValid ? '#388E3C' : '#D32F2F'}
                onChange={e => setNickname(e.target.value)}
              >
              </RequestInput>
              <RequestButton
                type="button"
                onClick={nicknameValidation}
              >
                중복확인
              </RequestButton>
            </RequestInputDiv>
            {
              nicknameValidMessage && 
              <ValidText color={nicknameValid}>{nicknameValidMessage}</ValidText>
            }
          </RequestInputForm>
        </RequesInputContainer>
      </SignupBody>
      <SignupButton
        type="button"
        color={active}
        disabled={disabled}
        onClick={onSubmit}
      >
        가입하기
      </SignupButton>
      {
        alert &&
        <Alert
          title={alert.title}
          contents={alert.contents}
          buttonText={alert.buttonText}
          onButtonClick={alert.onButtonClick}
          onOverlayClick={alert.onOverlayClick}
        />
      }
    </div>
  )
}

export default SignupInfo