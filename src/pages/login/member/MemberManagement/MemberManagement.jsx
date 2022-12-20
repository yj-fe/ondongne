import React, {useState, useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import BasicHeader from '../../../../components/Main/Main/BasicHeader/BasicHeader'
import Profile from '../../../../assets/common/Profile.png'
import Camera from '../../../../assets/common/Camera.png'
import { memberPasswordChange } from "../../../../service/member";
import { ReactComponent as EyeOn } from "../../../../assets/login/Eyeon.svg";
import { ReactComponent as EyeOff } from "../../../../assets/login/Eyeoff.svg";

import { AuthTimerStyle,PhoneRequestForm,PhoneRequestInput,PhoneRequestButton,PhoneToggleInput,PhoneToggleInputForm,RequestButton,NameToggleInput,NameToggleInputForm,PwdResetToggleForm,PwdResetToggleInput,EyeOffStyle,PwdToggleButton,PwdToggleInput,PwdToggleInputForm,MemberBar,MemberLinkText,MemberBody,MemberContainer,MemberInfoDiv,MemberLinkDiv,MemberProfileDiv,CameraStyle,TextEmail,TextName,TitleText,ProfileDiv,ProfileTextDiv,ImgStyle,InfoDiv,Input,ChangeButton,InputForm} from './MemberManagementStyle'
import Alert from "../../../../components/commonUi/Alert";
import ModalPage from '../../../../components/Login/ModalPage';
import ManagementPhone from '../../../../components/Login/Member/ManagementPhone/ManagementPhone';
// import Alert from "../../../commonUi/Alert";

function MemberManagement() {
  const [namevalue,setNamevalue] = useState('아이덴잇')
  const [phonevalue,setPhonevalue] = useState('01012345678')
  const [showNameToggle,setShowNameToggle] = useState(true)
  // const [showPhoneToggle,setShowPhoneToggle] = useState(true)
  // const [showPhoneRequestToggle,setShowPhoneRequestToggle] = useState(false)
  const [showPwdToggle,setShowPwdToggle] = useState(true)
  const [showNameModal,setShowNameModal] = useState(false)


  const Logout = () => {

  }
  
  return (
    <div>
      <BasicHeader title="회원정보 관리"/>
      <MemberBody>

{/* ============ 회원정보관리 ============ */}
        <MemberContainer>
          <MemberProfileDiv>    
            <ProfileDiv>
              <ImgStyle
              src={Profile}
              >
                {/* <Avatar src={Avatar}> */}
              </ImgStyle>
              <CameraStyle
                src={Camera}
              >
              </CameraStyle>
            </ProfileDiv> 
            <ProfileTextDiv>
              <TextName>아이덴잇</TextName>
              <TextEmail>sosangongin@email.com</TextEmail>
            </ProfileTextDiv> 
            
          </MemberProfileDiv> 
          <MemberInfoDiv>     
{/* =========================== 닉네임 =========================== */}
            <InfoDiv>
              <TitleText>닉네임</TitleText>

{ showNameToggle ? <NameResetToggle namevalue={namevalue} setShowNameToggle={setShowNameToggle}/> : <NameToggle setShowNameModal={setShowNameModal} namevalue={namevalue}/> }

            </InfoDiv>

{/* ========================== 전화번호 ========================== */}
            <InfoDiv>
              <TitleText>전화번호</TitleText>
              <ManagementPhone/>
{/* { showPhoneToggle ? <PhoneResetToggle phonevalue={phonevalue} setShowPhoneToggle={setShowPhoneToggle}/> : <PhoneToggle/> }
{ showPhoneRequestToggle && <PhoneRequestToggle setShowPhoneRequestToggle={setShowPhoneRequestToggle}/>} */}

            </InfoDiv>

{/* ========================== 비밀번호 ========================== */}
            <InfoDiv>
              <TitleText>비밀번호 변경</TitleText>

{ showPwdToggle ? <PwdResetToggle setShowPwdToggle={setShowPwdToggle}/> : <PwdToggle/> }

            </InfoDiv>



          </MemberInfoDiv>        

          <MemberLinkDiv>     
            <Link to="/member/withdrawal" >
              <MemberLinkText
              >
                회원탈퇴
              </MemberLinkText>
            </Link>
            <MemberBar/>
              <MemberLinkText
                onClick={Logout}
              >
                로그아웃
              </MemberLinkText>
          </MemberLinkDiv>   
        </MemberContainer>
      </MemberBody>
      {showNameModal && <ModalPage modaltext1="닉네임이 변경되었습니다." modalbutton="확인"/>}

    </div>
  )
}



// 닉네임 변경전
function NameResetToggle ({setShowNameToggle, namevalue}){

  return(
    <div>
      <InputForm>
        <Input
          disabled
          value={namevalue}
        />
        <ChangeButton
          onClick={()=>{setShowNameToggle(false)}}
        >변경</ChangeButton>
      </InputForm>
    </div>
  )
}
// 닉네임 변경 토글
function NameToggle ({namevalue, setShowNameModal}){
  // const [showNameModal,setShowNameModal] = useState(false)
  return(
    <div>
      <NameToggleInputForm>
        <NameToggleInput
          placeholder={namevalue}
        />
        <ChangeButton
          onClick={()=>{setShowNameModal(false)}}
        >적용</ChangeButton>
      </NameToggleInputForm>
      {/* {showNameModal && <ModalPage modaltext1="닉네임이 변경되었습니다." modalbutton="확인"/>} */}
    </div>
  )
}


// // 전화번호 변경전
// function PhoneResetToggle ({setShowPhoneToggle, phonevalue}){

//   return(
//     <div>
//       <InputForm>
//         <Input
//           value={phonevalue}
//           disabled
//         />
//         <ChangeButton onClick={()=>{setShowPhoneToggle(false)}}>변경</ChangeButton>
//       </InputForm>
//     </div>
//   )
// }
// // 전화번호 인증 토글
// function PhoneToggle ({setShowPhoneRequestToggle}){
//   const [showPhoneRequestToggle,setShowPhoneRequestToggle] = useState(false)

//   return(
//     <div>
//       <PhoneToggleInputForm>
//         <PhoneToggleInput
//           placeholder='-를 제외한 휴대폰번호 입력'
//         />
//         <RequestButton
//           onClick={()=>setShowPhoneRequestToggle(true)}
//         >인증요청</RequestButton>
//       </PhoneToggleInputForm>
//       {/* { showPhoneRequestToggle && <PhoneRequestToggle />} */}
//     </div>
//   )
// }
// // 전화번호 인증번호 토글
// function PhoneRequestToggle ({setShowPhoneRequestToggle}){
//   const [authTime, setAuthTime] = useState(-1);
//   return(
//     <div>
//       <PhoneRequestForm>
//         <PhoneRequestInput
//           placeholder='인증번호 입력'
//         />
//         <AuthTimerStyle>{getFormattedTime(authTime)}</AuthTimerStyle>
        
//       </PhoneRequestForm>
//       <PhoneRequestButton>인증 확인</PhoneRequestButton>
//     </div>
//   )
// }
// /* ==============================
//     180 => 3: 00 문자열 반환
//   ============================== */
//   function getFormattedTime(seconds) {
//     const m = Math.floor(seconds / 60);
//     const s = (seconds - (m * 60)) + '';
  
//     return `${m}:${s.length < 2 ? '0' + s : s}`;
//   };


// 비밀번호 변경전
function PwdResetToggle({setShowPwdToggle}){
  return(
    <div>
      <PwdResetToggleForm>
        <PwdResetToggleInput
          placeholder='8자 이상 영문,숫자,특수문자 조합'
          disabled
        />
        <ChangeButton
        onClick={()=>{setShowPwdToggle(false)}}
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
export default MemberManagement