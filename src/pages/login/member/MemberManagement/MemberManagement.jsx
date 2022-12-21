import React, {useState, useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import BasicHeader from '../../../../components/Main/Main/BasicHeader/BasicHeader'
import Profile from '../../../../assets/common/Profile.png'
import Camera from '../../../../assets/common/Camera.png'
// import { memberPasswordChange } from "../../../../service/member";
// import { ReactComponent as EyeOn } from "../../../../assets/login/Eyeon.svg";
// import { ReactComponent as EyeOff } from "../../../../assets/login/Eyeoff.svg";

import { NameToggleInput,NameToggleInputForm,PwdResetToggleForm,PwdResetToggleInput,EyeOffStyle,PwdToggleButton,PwdToggleInput,PwdToggleInputForm,MemberBar,MemberLinkText,MemberBody,MemberContainer,MemberInfoDiv,MemberLinkDiv,MemberProfileDiv,CameraStyle,TextEmail,TextName,TitleText,ProfileDiv,ProfileTextDiv,ImgStyle,InfoDiv,Input,ChangeButton,InputForm} from './MemberManagementStyle'
import Alert from "../../../../components/commonUi/Alert";
import ModalPage from '../../../../components/Login/ModalPage';
import MemberPhone from '../../../../components/Login/Member/MemberPhone/MemberPhone';
import SimpleConfirm from '../../../../components/commonUi/SimpleConfirm';
import MemberPwd from '../../../../components/Login/Member/MemberPwd/MemberPwd';

function MemberManagement() {
  const [namevalue,setNamevalue] = useState('아이덴잇')
  const [showNameToggle,setShowNameToggle] = useState(true)
  // const [showPwdToggle,setShowPwdToggle] = useState(true)


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

{ showNameToggle ? <NameResetToggle namevalue={namevalue} setShowNameToggle={setShowNameToggle}/> : <NameToggle namevalue={namevalue}/> }
{/* { showNameToggle ? <NameResetToggle namevalue={namevalue} setShowNameToggle={setShowNameToggle}/> : <NameToggle setShowNameModal={setShowNameModal} namevalue={namevalue}/> } */}

            </InfoDiv>

{/* ========================== 전화번호 ========================== */}
            <InfoDiv>
              <TitleText>전화번호</TitleText>
              <MemberPhone/>
            </InfoDiv>

{/* ========================== 비밀번호 ========================== */}
            <InfoDiv>
              <TitleText>비밀번호 변경</TitleText>
              <MemberPwd/>
{/* { showPwdToggle ? <PwdResetToggle setShowPwdToggle={setShowPwdToggle}/> : <PwdToggle/> } */}

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
      {/* {showNameModal && <ModalPage modaltext1="닉네임이 변경되었습니다." modalbutton="확인"/>} */}

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
function NameToggle ({namevalue}){
  const [confirm, setConfirm] = useState(null)
  const [id, setId] = useState('')

  const openConfirm = () => {
    return setConfirm({
      contents: "닉네임이 변경되었습니다.",
      confirmText: "확인",
      onConfirmClick: () => setConfirm(null),
    })
  }

  return(
    <div>
      <NameToggleInputForm>
        <NameToggleInput
          id='id'
          type='text'
          value={id}
          onChange={e=>setId(e.target.value)}
          placeholder={namevalue}
        />
        <ChangeButton
          onClick={openConfirm}
        >적용</ChangeButton>
      </NameToggleInputForm>
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
    </div>
  )
}




// // 비밀번호 변경전
// function PwdResetToggle({setShowPwdToggle}){
//   return(
//     <div>
//       <PwdResetToggleForm>
//         <PwdResetToggleInput
//           placeholder='8자 이상 영문,숫자,특수문자 조합'
//           disabled
//         />
//         <ChangeButton
//         onClick={()=>{setShowPwdToggle(false)}}
//         >
//           변경
//         </ChangeButton>
//       </PwdResetToggleForm>
//       <PwdResetToggleForm>
//         <PwdResetToggleInput
//           placeholder='비밀번호 확인'
//           disabled
//         />
//       </PwdResetToggleForm> 

//     </div>
//   )
// }


// // 비밀번호 변경 토글
// function PwdToggle({ id }){
//   const [password, setPassword] = useState('');
//   const [showPassword, setShowPassword] = useState(false);
//   const [passwordCheck, setPasswordCheck] = useState('');
//   const [showPasswordCheck, setShowPasswordCheck] = useState(false);
//   const [passwordValid, setPasswordValid] = useState(null);
//   const [passwordValidMessage, setPasswordValidMessage] = useState('');
//   const [alert, setAlert] = useState(null);
//   const [resetModal, setResetModal] = useState(false);

//   const navigate = useNavigate();

//   const onSubmit = async () => {
//     await memberPasswordChange(id, password)
//       .then(response => {
//         const {data, message} = response.data

//         if(data) {
//           setAlert({
//             contents: message,
//             buttonText: "확인",
//             onButtonClick: () => navigate('/member/login'),
//             onOverlayClick: () => navigate('/member/login'),
//           })
//         } else {
//           setAlert({
//             contents: message,
//             buttonText: "확인",
//             onButtonClick: () => setAlert(false),
//             onOverlayClick: () => setAlert(false),
//           })
//         }

//       })
//       .catch(error => {
//         console.log(error)
//     })
//   }

//   // 비밀번호 유효성 검사
//   const passwordValidation = () => {
//     const regExp = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/;
//     return regExp.test(password);
//   }
  
//   //비밀번호 체크
//   useEffect(() => {

//     if(!passwordValidation()) {
//       setPasswordValid(false);
//       setPasswordValidMessage("8자 이상 영문, 숫자, 특수문자 조합으로 입력해주세요.");
//       return;
//     }

//     if(password === passwordCheck) {      
//       setPasswordValid(true);
//       setPasswordValidMessage("");
//     } else {
//       setPasswordValid(false);
//       setPasswordValidMessage("비밀번호가 서로 일치하지 않습니다.");
//     }
//   }, [password, passwordCheck])

//   return(
//     <div>
//         <PwdToggleInputForm>
//           <PwdToggleInput
//             placeholder='8자 이상 영문,숫자,특수문자 조합'
//             type={showPassword ? "text" : "password"}
//             value={password}
//             onChange={e => setPassword(e.target.value)}
//           />
//           <EyeOffStyle onClick={() => setShowPassword(!showPassword)}>
//             {showPassword ? <EyeOn /> : <EyeOff />}
//           </EyeOffStyle>
//         </PwdToggleInputForm>
//         <PwdToggleInputForm>
//           <PwdToggleInput
//             placeholder='비밀번호 확인'
//             type={showPasswordCheck ? "text" : "password"}
//             value={passwordCheck}
//             onChange={e => setPasswordCheck(e.target.value)}
//           />
//           <EyeOffStyle onClick={() => setShowPasswordCheck(!showPasswordCheck)}>
//             {showPasswordCheck ? <EyeOn /> : <EyeOff />}
//           </EyeOffStyle>
//         </PwdToggleInputForm>

//         <PwdToggleButton
//           type="button" 
//           onClick={()=>{onSubmit(); setResetModal(true);}}
//           color={passwordValid}
//           disabled={!passwordValid}
//         >
//           변경 완료
//         </PwdToggleButton>
//         {
//         alert &&
//           <Alert
//             title={alert.title}
//             contents={alert.contents}
//             buttonText={alert.buttonText}
//             onButtonClick={alert.onButtonClick}
//             onOverlayClick={alert.onOverlayClick}
//           />
//         }
//         {resetModal && <ModalPage modaltext1="비밀번호가 변경되었습니다." modalbutton="확인"/>}
//     </div>
//   )
// }
export default MemberManagement