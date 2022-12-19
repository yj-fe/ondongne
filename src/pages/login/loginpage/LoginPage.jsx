import React, { useState } from "react";
import { Link, useNavigate, useParams } from 'react-router-dom';
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
import ErrorToggle from "../../../components/Login/Common/ErrorToggle/ErrorToggle";
import { LoginBody, LogoImg, InputForm, Input, PwdContainer, PwdInput, EyeOffStyle, LoginButton, FindStyle, FindAccount, SnsIcon, SnsStyle, SnsTextStyle, Snstext, LoginFooter, LoginText, Button, GapContainer, SignupText, ArrowStyle } from "./LoginPageStyle";


function LoginPage() {
  const navigate = useNavigate();
  // const [account, setAccount] = useState({
  //   email: "",
  //   password: "",
  // });
  // const onChangeInput = (e) => {

  //   setAccount({
  //     ...account,
  //     [e.target.name]: e.target.value,
  //   });
  //   console.log(account);
  // };
  const [active, setActive] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPwd, setErrorPwd] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [disabled, setDisable] = useState(false);

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const [showPassword, setShowPassword] = useState(false);
  const togglePassWord = () => {
    /* e.preventDefault() */
    setShowPassword(!showPassword);
  };

  const acctiveLogin = () => {
    if (email && password.length >= 5 ) {
      setActive(true)
    }else{
      setActive(false)
    }
  };
  const errorCheckEmail = () => {
    if (email.includes('@')) {
      setErrorEmail(false)
    }else{
      setErrorEmail(true)
    }
    console.log(errorEmail);
  }

  
  const errorCheckPwd = () => {
    // if(이메일, 비밀번호 !== 회원정보){setErrorPwd(false)}
  }

  const goToMain = () => {
    console.log('gotomain');
    // if(input===회원정보){로그인 후 navigate('/main')}else{오류문구띄우기}
  } 
  const sumitInput = (e) => {
    e.preventDefault();
    setEmail('');
  };


  const loginNaver = () =>{

  }
  const loginKakao = () =>{
    
  }
  const loginGoogle = () =>{
    
  }
  const loginApple = () =>{

  }






  

  return (
    <div>
      <LoginHeader title="로그인"/>
      <LoginBody>
        <LogoImg src={Logo} />
        <InputForm>
          <Input
            placeholder="이메일"
            id="email"
            name="email"
            type='text'
            value={email}
            onKeyUp={acctiveLogin}
            onChange={onChangeEmail}
            errorEmail={errorEmail}
          />
          {errorEmail && <ErrorToggle errormessage="올바르지 않은 이메일 형식입니다."/>}
          <PwdContainer>
            <PwdInput
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="비밀번호"
              onKeyUp={acctiveLogin}
              onChange={onChangePassword}
              errorPwd={true}
              // errorPwd={errorPwd}
            />
            <EyeOffStyle onClick={togglePassWord}>
              {showPassword ? <EyeOn /> : <EyeOff />}
            </EyeOffStyle>
          </PwdContainer>
            {errorPwd && <ErrorToggle errormessage="이메일 또는 비밀번호가 일치하지 않습니다."/>}
             {/* <ErrorToggle errormessage="이메일 또는 비밀번호가 일치하지 않습니다."/> */}


          <LoginButton
            type="button"
            onClick={()=>{goToMain(); errorCheckEmail(); errorCheckPwd();}}
            disabled={disabled}
            // disabled={email === '' || password === ''  ? true : false}
            // active={active}
            color={active}
            >
            로그인</LoginButton>
          {/* <LoginButtonActive onclick={sumitInput}>로그인</LoginButtonActive> */}
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
              <Naver onClick={loginNaver}/>
              <Kakao onClick={loginKakao}/>
              <Google onClick={loginGoogle}/>
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
    </div>
  );
}

export default LoginPage;
