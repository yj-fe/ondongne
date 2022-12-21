import React, {useState, useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom';


import { ReactComponent as EyeOn } from "../../../../assets/login/Eyeon.svg";
import { ReactComponent as EyeOff } from "../../../../assets/login/Eyeoff.svg";

import { memberPasswordChange } from "../../../../service/member";

import {EyeOffStyle,PwdToggleButton,PwdResetToggleForm,PwdResetToggleInput,ChangeButton,PwdToggleInputForm,PwdToggleInput} from './MemberPwdStyle'
import Alert from '../../../commonUi/Alert';
import ModalPage from '../../ModalPage';

// 비밀번호 변경전
function MemberPwd() {
  const [showPwdToggle,setShowPwdToggle] = useState(false)
  return (
    <div>
      <PwdResetToggleForm>
        <PwdResetToggleInput
          placeholder='8자 이상 영문,숫자,특수문자 조합'
          disabled
        />
        <ChangeButton
        onClick={()=>{setShowPwdToggle(true)}}
        >
          변경
        </ChangeButton>
      </PwdResetToggleForm>
      <PwdResetToggleForm>
        <PwdResetToggleInput
          placeholder='비밀번호 확인'
          disabled
        />
      </PwdResetToggleForm> 
      { showPwdToggle && <PwdToggle/> }

    </div>
  )
}

// 비밀번호 변경 토글
function PwdToggle({ id }){
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [passwordCheck, setPasswordCheck] = useState('');
  const [showPasswordCheck, setShowPasswordCheck] = useState(false);
  const [passwordValid, setPasswordValid] = useState(null);
  const [passwordValidMessage, setPasswordValidMessage] = useState('');
  const [alert, setAlert] = useState(null);
  const [resetModal, setResetModal] = useState(false);

  const navigate = useNavigate();

  const onSubmit = async () => {
    await memberPasswordChange(id, password)
      .then(response => {
        const {data, message} = response.data

        if(data) {
          setAlert({
            contents: message,
            buttonText: "확인",
            onButtonClick: () => navigate('/member/login'),
            onOverlayClick: () => navigate('/member/login'),
          })
        } else {
          setAlert({
            contents: message,
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

  // 비밀번호 유효성 검사
  const passwordValidation = () => {
    const regExp = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/;
    return regExp.test(password);
  }
  
  //비밀번호 체크
  useEffect(() => {

    if(!passwordValidation()) {
      setPasswordValid(false);
      setPasswordValidMessage("8자 이상 영문, 숫자, 특수문자 조합으로 입력해주세요.");
      return;
    }

    if(password === passwordCheck) {      
      setPasswordValid(true);
      setPasswordValidMessage("");
    } else {
      setPasswordValid(false);
      setPasswordValidMessage("비밀번호가 서로 일치하지 않습니다.");
    }
  }, [password, passwordCheck])

  return(
    <div>
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

        <PwdToggleButton
          type="button" 
          onClick={()=>{onSubmit(); setResetModal(true);}}
          color={passwordValid}
          disabled={!passwordValid}
        >
          변경 완료
        </PwdToggleButton>
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
        {resetModal && <ModalPage modaltext1="비밀번호가 변경되었습니다." modalbutton="확인"/>}
    </div>
  )
}
export default MemberPwd

