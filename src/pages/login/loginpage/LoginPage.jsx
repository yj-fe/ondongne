import React, { useEffect, useState } from "react";
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import LoginHeader from 'components/Login/Common/LoginHeader/LoginHeader'
import { ReactComponent as EyeOn } from "assets/login/Eyeon.svg";
import { ReactComponent as EyeOff } from "assets/login/Eyeoff.svg";
import { ReactComponent as Bar } from "assets/bar.svg";
import { ReactComponent as Horizon } from "assets/horizon.svg";
import { ReactComponent as Naver } from "assets/login/naver.svg";
import { ReactComponent as Kakao } from "assets/login/kakao.svg";
import { ReactComponent as Google } from "assets/login/google.svg";
import { ReactComponent as Apple } from "assets/login/apple.svg";
import { LogoImg, InputForm, Input, PwdContainer, PwdInput, EyeOffStyle, LoginButton, FindStyle, FindAccount, SnsIcon, SnsStyle, SnsTextStyle, Snstext, Button, GapContainer, ArrowStyle } from "./LoginPageStyle";
import Alert from 'components/commonUi/Alert';
import Confirm from 'components/commonUi/Confirm';
import { login } from "service/auth";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "store/slices/auth";
import * as L from 'components/commonUi/Layout';
import * as T from 'components/commonUi/Text';
import { S } from 'components/layout/Layout/LayoutStyle'
import { ArrowRighteight, Logo } from "components/commonUi/Icon";
import jwtDecode from "jwt-decode";


function LoginPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const isAuth = searchParams.get('isAuth');
  const error = searchParams.get('error');
  const auth = useSelector(state => state.auth);

  const [account, setAccount] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [active, setActive] = useState(false);
  const [alert, setAlert] = useState(false);
  const [confirm, setConfirm] = useState(false);

  const onChangeInput = (e) => {
    setAccount({
      ...account,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmut = async () => {
    const response = await login(account);
    const { message, data, code } = response.data;

    console.log("로그인 data : ", response.data);

    if (code != '200') {
      setAlert({
        title: "로그인 실패",
        contents: "이메일 또는 비밀번호가 일치하지 않습니다.",
        buttonText: "확인",
        onButtonClick: () => setAlert(false),
        onOverlayClick: () => setAlert(false),
      })
    }

    if (data) {
      dispatch(authActions.login(data));
    }
  }

  function loginNaver() {
    window.location.href = '/oauth2/authorization/naver';
  }
  const loginKakao = () => {
    window.location.href = '/oauth2/authorization/kakao';
  }
  const loginGoogle = () => {
    window.location.href = '/oauth2/authorization/google';
  }
  const loginApple = () => {
    window.location.href = '/oauth2/authorization/apple';
  }

  useEffect(() => {
    if (account.email.length > 0 && account.password.length > 0) {
      setActive(true)
    } else {
      setActive(false)
    }
  }, [account])

  useEffect(() => {
    const provider = searchParams.get('provider');
    const providerId = searchParams.get('providerId');
    const email = searchParams.get('email');
    const name = searchParams.get('name');
    const accessToken = searchParams.get('accessToken');
    const expiresIn = searchParams.get('tokenExpiresIn');

    if (isAuth == null) {
      return;
    }

    if (!JSON.parse(isAuth)) {
      const data = { provider, providerId, email, name };
      localStorage.setItem('auth', JSON.stringify(data))
      setConfirm(true);
    }

    if (JSON.parse(isAuth)) {
      const data = { accessToken, expiresIn };
      dispatch(authActions.login(data));
    }
  }, [isAuth])

  useEffect(() => {
    if (error) {
      setAlert({
        title: "로그인 실패",
        contents: "SNS 로그인을 실패하였습니다.",
        buttonText: "확인",
        onButtonClick: () => setAlert(false),
        onOverlayClick: () => setAlert(false),
      })
    }
  }, [error])

  useEffect(() => {
    if (auth.isAuthenticated) {
      if (auth.role === "ROLE_BIZ") {
        return navigate("/business", { replace: true });
      } else {
        return navigate("/", { replace: true });
      }
    }
  }, [auth])

  return (
    <S.Wrapper>
      <LoginHeader title="로그인" to={"/more"} />

      <S.Main as="main" _bc='#fff'>
        <L.ContentsMedia _padding='80px 40px 0px 40px ' _paddingm='60px 20px'>
            <L.Scroll>
          <L.FlexColsMedia _gap={80} _gapm={60}>
            <L.FlexRows _content='center' >
              <Logo />
            </L.FlexRows>
            <L.FlexCols _gap={60}>
              <L.FlexCols _gap={16}>
                <InputForm>
                  <L.FlexCols _gap={16}>
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
                  </L.FlexCols>

                  <LoginButton
                    type="button"
                    onClick={onSubmut}
                    disabled={!active}
                    color={active}
                  >
                    로그인</LoginButton>

                </InputForm>
                <FindStyle>
                  <Link to="/login/find/email">
                    <FindAccount>
                      이메일 찾기
                    </FindAccount>
                  </Link>
                  <Bar />
                  <Link to="/login/find/password">
                    <FindAccount>
                      비밀번호 찾기
                    </FindAccount>
                  </Link>
                </FindStyle>
              </L.FlexCols>

              <GapContainer>
                <SnsStyle>
                  <SnsTextStyle>
                    <Horizon />
                    <Snstext>SNS로 1초만에 시작하기</Snstext>
                    <Horizon />
                  </SnsTextStyle>
                  <SnsIcon>
                    <Naver onClick={loginNaver} />
                    <Kakao onClick={loginKakao} />
                    <Google onClick={loginGoogle} />
                    {/* <Apple onClick={loginApple}/> */}
                  </SnsIcon>
                </SnsStyle>
              </GapContainer>
            </L.FlexCols>

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
            {
              confirm &&
              <Confirm
                contents="가입하지 않은 계정입니다. 회원가입 하시겠습니까?"
                confirmText="네"
                cancelText="아니오"
                onConfirmClick={() => navigate('/login/signup', { replace: true })}
                onCancelClick={() => {
                  setConfirm(false)
                  localStorage.removeItem('auth');
                  navigate('/login', { replace: true })
                }}
              />
            }

            <L.FlexRows _gap='0px' _content='center'>
              <T.Text _size={14} _color='gray800'>아직 온동네 회원이 아니신가요?</T.Text>
              <Link to="/login/signup">
                <Button>
                  <T.Text _weight={600} _size={14} _color='gray800'>회원가입</T.Text>
                  <ArrowStyle>
                    <ArrowRighteight/>
                  </ArrowStyle>
                </Button>
              </Link>
            </L.FlexRows>
          </L.FlexColsMedia>
            </L.Scroll>
        </L.ContentsMedia>
      </S.Main>
    </S.Wrapper>
  );
}

export default LoginPage;
