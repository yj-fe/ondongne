import React, { useEffect, useState } from "react";
import { ReactComponent as EyeOn } from "assets/login/Eyeon.svg";
import { ReactComponent as EyeOff } from "assets/login/Eyeoff.svg";
import { EyeOffStyle, RequesInputTitle, RequestButton, RequestInfo, ValidText } from "./SignupInfoStyle";
import { useNavigate } from "react-router-dom";
import Alert from 'components/commonUi/Alert';
import { RequestText, RequesInputForm } from 'components/Login/Signup/signuprequest/SignupRequestStyle';
import { PwdContainer, PwdInput, RequestInputDiv, RequestTextStyle } from 'components/Login/Password/PwdReset/PwdResetStyle';
import { signup } from "service/auth";
import { memberEmailValidation, memberNicknameValidation } from "service/common";
import * as L from 'components/commonUi/Layout';
import * as T from 'components/commonUi/Text';
import { EmailRequestBody } from 'components/Login/Email/EmailRequest/EmailRequestStyle';
import { Input } from 'components/Login/Password/PwdRequest/PwdRequestStyle';
import { NextButton } from "../agreement/AgreementStyle";
import { isEmail } from "utils/utils";



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

    if (!isEmail(email)) {
      return setAlert({
        contents: "이메일을 형식을 맞춰주세요.",
        buttonText: "확인",
        onButtonClick: () => setAlert(null),
        onOverlayClick: () => setAlert(null),
      })
    }

    await memberEmailValidation(email)
      .then(response => {
        const { data, message } = response.data;
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
        const { data, message } = response.data;
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
        if (response.status == 200) {

          const authData = localStorage.getItem("auth");
          if (authData) {
            localStorage.removeItem('auth');
          }
          if (!passwordValidation()) {
            setPasswordValid(false);
            return setAlert({
              contents: "비밀번호는 영문, 숫자, 특수문자 조합으로 8자 이상 입력해주세요.",
              buttonText: "확인",
              onButtonClick: () => setAlert(null),
              onOverlayClick: () => setAlert(null),
            })} 

          setAlert({
            contents: "회원가입을 축하드립니다. \n 로그인 후 이용해 주세요.",
            buttonText: "확인",
            onButtonClick: () => navigate('/login'),
            onOverlayClick: () => navigate('/login'),
          })
        }
        else {
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

    if (data.isAuth) {
      return;
    }

    if (!password) {
      return;
    }

    if (!passwordCheck) {
      setPasswordValid(false);
      setPasswordValidMessage("비밀번호 확인이 필요합니다.");
      return
    }

    if (password === passwordCheck) {
      setPasswordValid(true);
      setPasswordValidMessage("");
    } else {
      setPasswordValid(false);
      setPasswordValidMessage("비밀번호가 서로 일치하지 않습니다.");
    }
  }, [password, passwordCheck])

  useEffect(() => {
    if (data.isAuth) {
      if (emailValid && nicknameValid) {
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
      }

      return;
    }

    if (emailValid && passwordValid && nicknameValid) {
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
    if (data.isAuth) {
      setEmail(data.email)
      setPassword(data.password)
      setNickname(data.nickname)
    }
  }, [data])

  useEffect(() => {
    setEmailValid(null)
    setEmailValidMessage('');
  }, [email])

  useEffect(() => {
    setNicknameValid(null)
    setNicknameValidMessage('');
  }, [nickname])

  return (
    <div>
      <EmailRequestBody>
        <L.FlexCols _gap={40}>
          <L.FlexCols>
            <T.Text _size={24} _weight={600} >회원 정보 입력</T.Text>
            <T.Text _size={15} _color='gray800'>회원가입 시 필요한 회원정보를 모두 입력해 주세요.</T.Text>
          </L.FlexCols>
        </L.FlexCols>
        <L.FlexCols _gap={24}>
          <L.FlexCols>
            <RequesInputTitle>이메일</RequesInputTitle>
            <RequesInputForm>
              <Input
                type='text'
                placeholder='이메일 입력'
                outline='none'
                value={email}
                _bordercolor={ emailValid === null ? '' : emailValid ? '#388E3C' : '#D32F2F'}
                onChange={e => setEmail(e.target.value)}
              />
              <RequestButton
                type="button"
                onClick={emailValidation}
              >
                중복확인
              </RequestButton>
            </RequesInputForm>
            {
              emailValidMessage &&
              <ValidText color={emailValid}>{emailValidMessage}</ValidText>
            }
          </L.FlexCols>
          {
            !data.isAuth &&
            <L.FlexCols>
              <RequesInputTitle>비밀번호</RequesInputTitle>
              <RequestInputDiv direction="column">
                <PwdContainer
                  _bordercolor={(passwordValid != null && !passwordValid) ? '#D32F2F' : '#E0E0E0'}>
                  <PwdInput
                    type={showPassword ? "text" : "password"}
                    placeholder="8자 이상 영문,숫자,특수문자 조합"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                  />
                  <EyeOffStyle onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? <EyeOn /> : <EyeOff />}
                  </EyeOffStyle>
                </PwdContainer>
                <PwdContainer
                  _bordercolor={(passwordValid != null && !passwordValid) ? '#D32F2F' : '#E0E0E0'}>
                  <PwdInput
                    type={showPasswordCheck ? "text" : "password"}
                    placeholder="비밀번호 확인"
                    value={passwordCheck}
                    onChange={e => setPasswordCheck(e.target.value)}
                  />
                  <EyeOffStyle onClick={() => setShowPasswordCheck(!showPasswordCheck)}>
                    {showPasswordCheck ? <EyeOn /> : <EyeOff />}
                  </EyeOffStyle>
                </PwdContainer>
                {
                  passwordValidMessage &&
                  <ValidText color={passwordValid}>{passwordValidMessage}</ValidText>
                }
              </RequestInputDiv>
            </L.FlexCols>
          }
          <L.FlexCols>
            <RequesInputTitle>닉네임</RequesInputTitle>
            <RequesInputForm>
              <Input
                type='text'
                placeholder='닉네임 입력'
                outline='none'
                value={nickname}
                _bordercolor={nicknameValid == null ? '#E0E0E0' : nicknameValid ? '#388E3C' : '#D32F2F'}
                onChange={e => setNickname(e.target.value)}
              />
              <RequestButton
                type="button"
                onClick={nicknameValidation}
              >
                중복확인
              </RequestButton>
            </RequesInputForm>
            {
              nicknameValidMessage &&
              <ValidText color={nicknameValid}>{nicknameValidMessage}</ValidText>
            }
          </L.FlexCols>
        </L.FlexCols>
        <NextButton
          type="button"
          color={active}
          disabled={disabled}
          onClick={onSubmit}
        >
          가입하기
        </NextButton>
      </EmailRequestBody>
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