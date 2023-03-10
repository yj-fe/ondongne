import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as EyeOn } from "assets/login/Eyeon.svg";
import { ReactComponent as EyeOff } from "assets/login/Eyeoff.svg";
import { RequestTextStyle, RequestText, RequestInfo, RequesInputForm, RequestInputDiv, PwdContainer, PwdInput, EyeOffStyle, ResetButton } from './PwdResetStyle'
import { ValidText } from "components/Login/Signup/signupinfo/SignupInfoStyle";
import { memberPasswordChange } from "service/member";
import Alert from "components/commonUi/Alert";
import { client } from "service";
import { EmailRequestBody } from "components/Login/Email/EmailRequest/EmailRequestStyle";



function PwdReset({ id }) {

  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [passwordValid, setPasswordValid] = useState(null);
  const [passwordValidMessage, setPasswordValidMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordCheck, setShowPasswordCheck] = useState(false);
  const [alert, setAlert] = useState(null);
  const navigate = useNavigate();

  const onSubmit = async () => {

    client.defaults.headers.common['Authorization'] = id.accessToken;

    const response = await memberPasswordChange(password)
    const { data, message } = response.data

    if (data) {
      setAlert({
        contents: "비밀번호 설정이 완료되었습니다. \n 로그인 후 이용해주세요.",
        buttonText: "확인",
        onButtonClick: () => navigate('/login'),
        onOverlayClick: () => navigate('/login'),
      })
    }

    delete client.defaults.headers.common['Authorization']
  }

  // 비밀번호 유효성 검사
  const passwordValidation = () => {
    const regExp = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/;
    return regExp.test(password);
  }

  //비밀번호 체크
  useEffect(() => {

    if (password === '') {
      setPasswordValid(false);
      // setPasswordValidMessage("변경하실 비밀번호를 입력해주세요.");
      return;
    }

    if (!passwordValidation()) {
      setPasswordValid(false);
      setPasswordValidMessage("비밀번호는 영문, 숫자, 특수문자 조합으로 8자 이상 입력해주세요.");
      return;
    }

    if (!passwordCheck) {
      setPasswordValid(false);
      setPasswordValidMessage("비밀번호 확인이 필요합니다.");
      return;
    }

    if (password === passwordCheck) {
      setPasswordValid(true);
      setPasswordValidMessage("");
    } else {
      setPasswordValid(false);
      setPasswordValidMessage("비밀번호가 서로 일치하지 않습니다.");
    }
  }, [password, passwordCheck])

  return (
    <div>
      <EmailRequestBody>
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
                type={showPassword ? "text" : "password"}
                placeholder="새 비밀번호"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
              <EyeOffStyle onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <EyeOn /> : <EyeOff />}
              </EyeOffStyle>
            </PwdContainer>
            <PwdContainer>
              <PwdInput
                type={showPasswordCheck ? "text" : "password"}
                placeholder="새 비밀번호 확인"
                value={passwordCheck}
                onChange={e => setPasswordCheck(e.target.value)}
              />
              <EyeOffStyle onClick={() => setShowPasswordCheck(!showPasswordCheck)}>
                {showPasswordCheck ? <EyeOn /> : <EyeOff />}
              </EyeOffStyle>
            </PwdContainer>
          </RequestInputDiv>
        {
          passwordValidMessage &&
          <ValidText color={passwordValid}>{passwordValidMessage}</ValidText>
        }
        <ResetButton
          type="button"
          onClick={onSubmit}
          color={passwordValid}
          disabled={!passwordValid}
        >
          비밀번호 변경
        </ResetButton>
      </RequesInputForm>
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
      </EmailRequestBody>
    </div>
  )
}




export default PwdReset