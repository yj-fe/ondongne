import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import BasicHeader from 'components/Main/Main/BasicHeader/BasicHeader'
// import { memberPasswordChange } from "service/member";
// import { ReactComponent as EyeOn } from "assets/login/Eyeon.svg";
// import { ReactComponent as EyeOff } from "assets/login/Eyeoff.svg";

import { NameToggleInput, NameToggleInputForm, PwdResetToggleForm, PwdResetToggleInput, EyeOffStyle, PwdToggleButton, PwdToggleInput, PwdToggleInputForm, MemberBar, MemberLinkText, MemberBody, MemberContainer, MemberInfoDiv, MemberLinkDiv, MemberProfileDiv, TextEmail, TextName, TitleText, ProfileTextDiv, InfoDiv, Input, ChangeButton, InputForm } from './MemberManagementStyle'
import Alert from "components/commonUi/Alert";
import ModalPage from 'components/Login/ModalPage';
import MemberPhone from 'components/Login/Member/MemberPhone/MemberPhone';
import SimpleConfirm from 'components/commonUi/SimpleConfirm';
import MemberPwd from 'components/Login/Member/MemberPwd/MemberPwd';
import ProfileAvatar from 'components/commonUi/ProfileAvatar';
import { useDispatch, useSelector } from 'react-redux';
import { getMember, logout, memberNicknameChange } from 'service/member';
import { authActions } from 'store/slices/auth';

function MemberManagement() {
  const dispatch = useDispatch();
  const [showNameToggle, setShowNameToggle] = useState(true)
  const [member, setMember] = useState({});
  const auth = useSelector(state => state.auth);
  const [alert, setAlert] = useState(null);

  const getMemberProfile = async () => {
    const response = await getMember()
    const { message, data } = response.data;
    if (data) setMember(data);
  }

  const Logout = async () => {
    const response = await logout();
    if (response.status === 200) {
      dispatch(authActions.logout())
      setAlert({
        title: "로그아웃 성공",
        contents: "로그아웃 되었습니다.",
        buttonText: "확인",
        onButtonClick: () => setAlert(false),
        onOverlayClick: () => setAlert(false),
      })
    } else {
      setAlert({
        title: "로그아웃 실패",
        contents: "다시 한번 시도해주세요.",
        buttonText: "확인",
        onButtonClick: () => setAlert(false),
        onOverlayClick: () => setAlert(false),
      })
    }
  }

  useEffect(() => {
    if (auth.isAuthenticated) {
      getMemberProfile()
    }
  }, [auth])

  return (
    <div>
      <BasicHeader title="회원정보 관리" />
      <MemberBody>

        {/* ============ 회원정보관리 ============ */}
        <MemberContainer>
          <MemberProfileDiv>
            <ProfileAvatar profile={member.profile} />
            <ProfileTextDiv>
              <TextName>{member.nickname}</TextName>
              <TextEmail>{member.email}</TextEmail>
            </ProfileTextDiv>

          </MemberProfileDiv>

          <MemberInfoDiv>
            {/* =========================== 닉네임 =========================== */}
            <InfoDiv>
              <TitleText>닉네임</TitleText>

              {showNameToggle ? <NameResetToggle namevalue={member.nickname} setShowNameToggle={setShowNameToggle} /> : <NameToggle namevalue={member.nickname} />}

            </InfoDiv>

            {/* ========================== 전화번호 ========================== */}
            <InfoDiv>
              <TitleText>전화번호</TitleText>
              <MemberPhone phone={member.phone} />
            </InfoDiv>

            {/* ========================== 비밀번호 ========================== */}
            <InfoDiv>
              <TitleText>비밀번호 변경</TitleText>
              <MemberPwd />

            </InfoDiv>
          </MemberInfoDiv>

          <MemberLinkDiv>
            <Link to="/member/withdrawal" >
              <MemberLinkText
              >
                회원탈퇴
              </MemberLinkText>
            </Link>
            <MemberBar />
            <MemberLinkText
              onClick={Logout}
            >
              로그아웃
            </MemberLinkText>
          </MemberLinkDiv>
        </MemberContainer>
      </MemberBody>
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



// 닉네임 변경전
function NameResetToggle({ setShowNameToggle, namevalue }) {

  return (
    <div>
      <InputForm>
        <Input
          disabled
          value={namevalue}
        />
        <ChangeButton
          onClick={() => { setShowNameToggle(false) }}
        >변경</ChangeButton>
      </InputForm>
    </div>
  )
}
// 닉네임 변경 토글
function NameToggle({ namevalue }) {
  const [confirm, setConfirm] = useState(null)
  const [id, setId] = useState('')

  const nicknameChange = async () => {
    const response = await memberNicknameChange(id);
    const {data, message} = response;
    if(!data) {
      return setConfirm({
        contents: "닉네임이 변경되었습니다.",
        confirmText: "확인",
        onConfirmClick: () => setConfirm(null),
      })
    } 
  }

  return (
    <div>
      <NameToggleInputForm>
        <NameToggleInput
          id='id'
          type='text'
          value={id}
          onChange={e => setId(e.target.value)}
          placeholder={namevalue}
        />
        <ChangeButton
          type='button'
          onClick={nicknameChange}
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


export default MemberManagement