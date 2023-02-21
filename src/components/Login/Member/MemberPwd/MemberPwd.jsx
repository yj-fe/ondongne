import React, { useState, useEffect } from 'react'
import { ReactComponent as EyeOn } from "assets/login/Eyeon.svg";
import { ReactComponent as EyeOff } from "assets/login/Eyeoff.svg";
import { memberPasswordChange } from "service/member";
import { EyeOffStyle, PwdToggleButton, PwdToggleInputForm, PwdToggleInput } from './MemberPwdStyle'
import SimpleConfirm from 'components/commonUi/SimpleConfirm';
import { Text } from 'components/commonUi/Text';
import { ChangeButton, Input, InputForm } from 'pages/member/MemberManagement/MemberManagementStyle';
import * as L from 'components/commonUi/Layout';


function MemberPwd() {
  const [showPwdToggle, setShowPwdToggle] = useState(true)
  return (
    <>
      {
        showPwdToggle
          ? <PwdResetToggle setShowPwdToggle={setShowPwdToggle} />
          : <PwdToggle setShowPwdToggle={setShowPwdToggle} />
      }
    </>
  )
}
// 비밀번호 변경전
function PwdResetToggle({ setShowPwdToggle }) {
  return (
    <L.FlexCols>
      <InputForm>
        <Input
          placeholder='8자 이상 영문,숫자,특수문자 조합'
          disabled
        />
        <ChangeButton
          onClick={() => { setShowPwdToggle(false) }}
        >
          변경
        </ChangeButton>
      </InputForm>
      <InputForm>
        <Input
          placeholder='비밀번호 확인'
          disabled
        />
      </InputForm>
    </L.FlexCols>
  )
}

// 비밀번호 변경 토글
function PwdToggle({ setShowPwdToggle }) {

  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [passwordCheck, setPasswordCheck] = useState('');
  const [showPasswordCheck, setShowPasswordCheck] = useState(false);
  const [passwordValid, setPasswordValid] = useState(null);
  const [passwordValidMessage, setPasswordValidMessage] = useState('');

  const [confirm, setConfirm] = useState(null)


  // 비밀번호 변경
  const onSubmit = async () => {
    const response = await memberPasswordChange(password)

    const { data } = response.data

    if (data) {
      setConfirm({
        contents: "비밀번호가 변경되었습니다.",
        confirmText: "확인",
        onConfirmClick: () => {
          setShowPwdToggle(true)
          setConfirm(null)
        },
      })
    }
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
      setPasswordValidMessage("변경하실 비밀번호를 입력해주세요.");
      return;
    }

    if (!passwordValidation()) {
      setPasswordValid(false);
      setPasswordValidMessage("비밀번호는 영문, 숫자, 특수문자 조합으로 8자 이상 20이하로 입력해주세요.");
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
    <>
      <PwdToggleInputForm>
        <PwdToggleInput
          placeholder='8자 이상 영문,숫자,특수문자 조합'
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <EyeOffStyle onClick={() => setShowPassword(!showPassword)}>
          {showPassword ? <EyeOn /> : <EyeOff />}
        </EyeOffStyle>
      </PwdToggleInputForm>
      <PwdToggleInputForm>
        <PwdToggleInput
          placeholder='비밀번호 확인'
          type={showPasswordCheck ? "text" : "password"}
          value={passwordCheck}
          onChange={e => setPasswordCheck(e.target.value)}
        />
        <EyeOffStyle onClick={() => setShowPasswordCheck(!showPasswordCheck)}>
          {showPasswordCheck ? <EyeOn /> : <EyeOff />}
        </EyeOffStyle>
      </PwdToggleInputForm>
      {
        passwordValidMessage &&
        <Text
          style={{ marginTop: 8, color: '#D32F2F' }}
          _size={14}>
          {passwordValidMessage}
        </Text>
      }
      <PwdToggleButton
        type="button"
        disabled={!passwordValid}
        _bg={passwordValid}
        onClick={onSubmit}
      >
        변경 완료
      </PwdToggleButton>
      {
        confirm &&
        <SimpleConfirm
          contents={confirm.contents}
          confirmText={confirm.confirmText}
          onConfirmClick={confirm.onConfirmClick}
          warn={confirm.warn}
          active={confirm.active}
        />
      }
    </>
  )
}
export default MemberPwd

