import React, { useState , useEffect } from "react";
import { sendSMS } from "../../../../service/common";
import { memberFindPassword } from "../../../../service/member";
import Alert from "../../../commonUi/Alert";
import ErrorToggle from "../../Common/ErrorToggle/ErrorToggle";
import { RequestToggleBody, RequestToggleButton, RequestToggleForm, RequestToggleText, RequestToggleTextLink, RequestToggleTextStyle } from "../../Common/RequestToggle/RequestToggleStyle";
import { AuthTimer } from "../../Signup/signuprequest/SignupRequestStyle";
import {RequestTextStyle, RequestText, RequestInfo, RequesInputForm,Input, InputContainer, RequesInput, RequestButton  } from './PwdRequestStyle'

/* ==============================
    180 => 3: 00 문자열 반환
  ============================== */
  function getFormattedTime(seconds) {
    const m = Math.floor(seconds / 60);
    const s = (seconds - (m * 60)) + '';
  
    return `${m}:${s.length < 2 ? '0' + s : s}`;
  };

function PwdRequest({setFindSuccess, setId}) {

  const AUTH_SECONDS = 180;
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [authNum, setAuthNum] = useState(null);
  const [alert, setAlert] = useState(null);
  const [authCode, setAuthCode] = useState('');
  const [authTime, setAuthTime] = useState(-1);
  const [authInterval, setAuthInterval] = useState(null); // 인증 번호 확인
  const [errorMessage, setErrorMessage] = useState('');

  const onAuthNumSubmit = async (event) => {
    event.preventDefault();

    if (authCode === authNum) {
      await memberFindPassword(email, phone)
        .then(response => {

          const {data, message} = response.data

          if(data) {
            setId(data)
            setFindSuccess(true);
          } else {
            setId(data)
            setAuthCode('')
            setAlert({
              contents: message,
              buttonText: "확인",
              onButtonClick: () => setAlert(null),
              onOverlayClick: () => setAlert(null),
            })
          }
        })
        .catch(e => {
          console.log(e);
        })
    }
    else {
      setErrorMessage('인증번호가 일치하지 않습니다.')
    }
  };

  // 인증번호 발송
  const smsHandler = async (event) => {

    if (phone === '') {
      return setAlert({
        contents: "휴대폰 번호를 입력해주세요.",
        buttonText: "확인",
        onButtonClick: () => setAlert(null),
        onOverlayClick: () => setAlert(null),
      })
    }

    await sendSMS(phone)
      .then(response => {
        const { message, data } = response.data;
        setAuthCode(data);
        setAlert({
          contents: message,
          buttonText: "확인",
          onButtonClick: () => setAlert(null),
          onOverlayClick: () => setAlert(null),
        })
      })
      .catch(error => {
        return setAlert({
          contents: error,
          buttonText: "확인",
          onButtonClick: () => setAlert(null),
          onOverlayClick: () => setAlert(null),
        })
      });
  }

  // 타이머 설정
  useEffect(() => {
    // authcode 지정되었을 때 timeout 시작
    if (authCode.length > 0) {
      setAuthTime(AUTH_SECONDS);
      setAuthInterval(setInterval(function () {
        setAuthTime(authTime => authTime - 1);
      }, 1000));
    } else {
      // authcode 없을 때 timeout 초기화
      setAuthTime(-1);
      setAuthNum('');
      if (authInterval) {
        clearInterval(authInterval);
        setAuthInterval(null);
      }
    }

    return () => {
      if (authInterval) clearInterval(authInterval);
    }
  }, [authCode]);

  // timeout 처리
  useEffect(() => {
    if (phone.length > 0 && authTime == 0) {
      setAuthCode('')
      return setAlert({
        contents: "인증시간이 초과하였습니다. 다시 시도해 주세요",
        buttonText: "확인",
        onButtonClick: () => setAlert(null),
        onOverlayClick: () => setAlert(null),
      })
    }
  }, [authTime]);


  return (
    <div>
      <RequestTextStyle>
        <RequestText>휴대폰 번호를 인증해주세요.</RequestText>
        <RequestInfo>
          고객님의 정보 보호를 위해 휴대폰 인증을 진행해주세요.
        </RequestInfo>
      </RequestTextStyle>
      <RequesInputForm>
        <Input
          type='text'
          placeholder="이메일 입력"
          outline='none'
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <InputContainer>
          <RequesInput
              type='number'
              placeholder='-를 제외한 휴대폰번호 입력'
              outline='none'
              value={phone}
              onChange={e => setPhone(e.target.value)}
            >
            </RequesInput>
            <RequestButton
              type='button'
              onClick={smsHandler}
            >
              인증요청
          </RequestButton>
        </InputContainer>

      </RequesInputForm>

      {
          authCode &&
          <RequestToggleBody>
            <RequestToggleForm>
              <RequesInputForm style={{position: 'relative'}}>
                <RequesInput
                  style={{width: '100%'}}
                  type='number'
                  placeholder='인증번호 입력'
                  outline='none'
                  value={authNum}
                  onChange={e => setAuthNum(e.target.value)}
                />
                <AuthTimer>{getFormattedTime(authTime)}</AuthTimer>
              </RequesInputForm>
              {errorMessage && <ErrorToggle errormessage={errorMessage} />}

              <RequestToggleButton
                active={authNum.length > 1}
                disabled={authNum.length == 1}
                onClick={onAuthNumSubmit}
              >
                인증확인
              </RequestToggleButton>
              <RequestToggleTextStyle>
                <RequestToggleText>인증번호를 못받으셨나요?</RequestToggleText>
                <RequestToggleTextLink onClick={sendSMS}>인증번호 재전송</RequestToggleTextLink>
              </RequestToggleTextStyle>
            </RequestToggleForm>
          </RequestToggleBody>
        }
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



export default PwdRequest