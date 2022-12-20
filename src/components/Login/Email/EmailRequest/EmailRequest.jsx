import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { RequestToggleBody, RequestToggleButton, RequestToggleCount, RequestToggleForm, RequestToggleInput, RequestToggleText } from '../../Common/RequestToggle/RequestToggleStyle';
import { AuthTimer, RequesInputForm } from '../../Signup/signuprequest/SignupRequestStyle';
import { RequesInput } from '../../Password/PwdRequest/PwdRequestStyle';
import { RequestToggleDiv, RequestToggleTextStyle, RequestToggleTextLink } from '../../Common/RequestToggle/RequestToggleStyle';
import ErrorToggle from '../../Common/ErrorToggle/ErrorToggle';
import Alert from '../../../commonUi/Alert';
import { memberFindEmail, sendSMS } from '../../../../service/common';

const EmailRequestBody = styled.div``
const RequestTextStyle = styled.p`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 0px;
  gap: 8px;

  @media only screen and (max-width: 390px) {
    width: 100%;
  }
`
const RequestText = styled.div`
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  color: #212121;
`
const RequestInfo = styled.p`
  font-weight: 300;
  font-size: 14px;
  line-height: 20px;
  color: #424242;
  @media only screen and (max-width: 390px) {
    width: 100%;
  }
`
const RequestInputForm = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  gap: 12px;
  width: 648px;
  height: 48px;
  margin-top: 40px;
  margin-bottom: 16px;

  @media only screen and (max-width: 390px) {
    width: 100%;
  }
`
const RequestInput = styled.input`
  box-sizing: border-box;
  width: 546px;
  height: 48px;
  background: #FFFFFF;
  border-bottom: 1px solid #E0E0E0;
  flex: none;
  padding: 12px;

  font-weight: 400;
  font-size: 16px;

  color: #BDBDBD;
  &:focus {
    outline: none;
    border-bottom: 1px solid #616161;
    color: #212121;
  }
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  @media only screen and (max-width: 390px) {
    width: 255px;
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
  color:  ${props => props.checked ? "#BDBDBD" : "#212121"};
  /* color: #212121; */
`

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