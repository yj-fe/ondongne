import React, { useState, useEffect } from 'react'
import { RequestToggleBody, RequestToggleButton, RequestToggleCount, RequestToggleForm, RequestToggleInput, RequestToggleText } from 'components/Login/Common/RequestToggle/RequestToggleStyle';
import { AuthTimer, RequesInputForm } from 'components/Login/Signup/signuprequest/SignupRequestStyle';
import { RequesInput } from '../../Password/PwdRequest/PwdRequestStyle';
import { RequestToggleDiv, RequestToggleTextStyle, RequestToggleTextLink } from '../../Common/RequestToggle/RequestToggleStyle';
import ErrorToggle from '../../Common/ErrorToggle/ErrorToggle';
import Alert from 'components/commonUi/Alert';
import { memberFindEmail, sendSMS } from 'service/common';
import {EmailRequestBody,RequestButton,RequestInfo,RequestText,RequestTextStyle} from './EmailRequestStyle'


/* ==============================
    180 => 3: 00 문자열 반환
  ============================== */
function getFormattedTime(seconds) {
  const m = Math.floor(seconds / 60);
  const s = (seconds - (m * 60)) + '';

  return `${m}:${s.length < 2 ? '0' + s : s}`;
};

function EmailRequest({setData, setFindEmailSuccess}) {

  const AUTH_SECONDS = 180;
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
      await memberFindEmail(phone)
        .then(response => {

          const {data, message} = response.data

          if(data) {
            setData((prevState) => {
              return { 
                ...prevState,
                email: data.email,
                date: data.createDate
              }
            });
            setFindEmailSuccess(true);
          } else {
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
      <EmailRequestBody>
        <RequestTextStyle>
          <RequestText>휴대폰 번호를 인증해주세요.</RequestText>
          <RequestInfo>고객님의 정보 보호를 위해 휴대폰 인증을 진행해주세요.</RequestInfo>
        </RequestTextStyle>

        <RequesInputForm>
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
                disabled={authNum.length === 1}
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

export default EmailRequest