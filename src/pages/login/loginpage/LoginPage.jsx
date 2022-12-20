import React, { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import LoginHeader from '../../../components/Login/Common/LoginHeader/LoginHeader'
import Logo from "../../../assets/logo.png";
import { ReactComponent as EyeOn } from "../../../assets/login/Eyeon.svg";
import { ReactComponent as EyeOff } from "../../../assets/login/Eyeoff.svg";
import { ReactComponent as Bar } from "../../../assets/bar.svg";
import { ReactComponent as Horizon } from "../../../assets/horizon.svg";
import { ReactComponent as Naver } from "../../../assets/login/naver.svg";
import { ReactComponent as Kakao } from "../../../assets/login/kakao.svg";
import { ReactComponent as Google } from "../../../assets/login/google.svg";
import { ReactComponent as Apple } from "../../../assets/login/apple.svg";
import { ReactComponent as Arrow } from "../../../assets/login/Arrow-Right.svg";
import { LoginBody, LogoImg, InputForm, Input, PwdContainer, PwdInput, EyeOffStyle, LoginButton, FindStyle, FindAccount, SnsIcon, SnsStyle, SnsTextStyle, Snstext, LoginFooter, LoginText, Button, GapContainer, SignupText, ArrowStyle } from "./LoginPageStyle";
import Alert from './../../../components/commonUi/Alert';
import { login } from "../../../service/auth";
import { useDispatch } from "react-redux";
import { authActions } from "../../../store/slices/auth";
import { client } from "../../../service";

function LoginPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [account, setAccount] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [active, setActive] = useState(false);
  const [alert, setAlert] = useState(false);

  const onChangeInput = (e) => {
    setAccount({
      ...account,
      [e.target.name]: e.target.value,
    });
  };
  
  const onSubmut = async () => {
    await login(account)
      .then(response => {
        if(response.status === 200) {
          const {message, data} = response.data;
          dispatch(authActions.login(data));
          client.defaults.headers.common['Authorization'] = data.accessToken;
          navigate('/main')
        } else {
          setAlert({
            title: "로그인 실패",
            contents: "이메일 또는 비밀번호가 일치하지 않습니다.",
            buttonText: "확인",
            onButtonClick: () => setAlert(false),
            onOverlayClick: () => setAlert(false),
          })
        }
      })
      .catch(error => {
        console.log(error)
      })
  }
  
  const loginNaver = () =>{
    window.location.href='http://localhost:8080/oauth2/authorization/naver';
  }
  const loginKakao = () =>{
    window.location.href='http://localhost:8080/oauth2/authorization/kakao';
  }
  const loginGoogle = () =>{
    window.location.href='http://localhost:8080/oauth2/authorization/google';
  }
  const loginApple = () =>{
    window.location.href='http://localhost:8080/oauth2/authorization/apple';
  }

  useEffect(() => {
    if(account.email.length > 0 && account.password.length > 0) {
      setActive(true)
    } else {
      setActive(false)
    }
  }, [account])

  return (
    <div>
      <LoginHeader title="로그인"/>
      <LoginBody>
        <LogoImg src={Logo} />
        <InputForm>
          <Input
            placeholder="이메일"
            name="email"
            type='text'
            value={account.email}
            onChange={onChangeInput}
          />
          <PwdContainer>
            <PwdInput
              name="password"
              type={showPassword ? "text" : "password"}
              value={account.password}
              placeholder="비밀번호"
              onChange={onChangeInput}
            />
            <EyeOffStyle onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <EyeOn /> : <EyeOff />}
            </EyeOffStyle>
          </PwdContainer>

          <LoginButton
            type="button"
            onClick={onSubmut}
            disabled={!active}
            color={active}
            >
            로그인</LoginButton>
        </InputForm>
        <FindStyle>
        <Link to="/member/find/email">
          <FindAccount>
            이메일 찾기
          </FindAccount>
          </Link>
          <Bar />
          <Link to="/member/find/password">
          <FindAccount>
            비밀번호 찾기
          </FindAccount>
          </Link>
        </FindStyle>
        <GapContainer>
          <SnsStyle>
            <SnsTextStyle>
              <Horizon />
              <Snstext>SNS로 1초만에 시작하기</Snstext>
              <Horizon />
            </SnsTextStyle>
            <SnsIcon>
              {/* <Naver onClick={loginNaver}/>
              <Kakao onClick={loginKakao}/>
              <Google onClick={loginGoogle}/> */}
              {/* <Apple onClick={loginApple}/> */}
            </SnsIcon>
          </SnsStyle>
          <LoginFooter>
            <LoginText>아직 온동네 회원이 아니신가요?</LoginText>
            <Link to="/member/signup">
            <Button>
              <SignupText>회원가입</SignupText>
              <ArrowStyle>
                <Arrow />
              </ArrowStyle>
            </Button>
            </Link>
          </LoginFooter>
        </GapContainer>
      </LoginBody>
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
  );
}

export default LoginPage;
