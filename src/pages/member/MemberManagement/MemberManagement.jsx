import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import BasicHeader from 'components/Main/Main/BasicHeader/BasicHeader'

import { NameToggleInput, NameToggleInputForm, MemberBar, MemberLinkText, MemberLinkDiv, MemberProfileDiv, TextEmail, TextName, TitleText, ProfileTextDiv, Input, ChangeButton, InputForm, MaxWidth } from './MemberManagementStyle'
import Alert from "components/commonUi/Alert";
import MemberPhone from 'components/Login/Member/MemberPhone/MemberPhone';
import SimpleConfirm from 'components/commonUi/SimpleConfirm';
import MemberPwd from 'components/Login/Member/MemberPwd/MemberPwd';
import ProfileAvatar from 'components/commonUi/ProfileAvatar';
import { useDispatch, useSelector } from 'react-redux';
import { getMember, logout, memberNicknameChange, memberProfileChange } from 'service/member';
import { authActions } from 'store/slices/auth';
import { Text } from 'components/commonUi/Text';
import Layout from 'components/layout/Layout/Layout';
import * as L from 'components/commonUi/Layout';



function MemberManagement() {
  const navigate = useNavigate();
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
        onButtonClick: () => navigate("/more"),
        onOverlayClick: () => navigate("/more"),
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
      <Layout
        title="회원정보 관리"
        cart={false}
        bell={false}
        onBackClick={() => navigate(-1)}
      >
       <L.Container >
          <L.Contents _height='calc(100vh - 60px)'>
            <L.FlexCols _padding={0} _gap={0}>

        {/* ============ 회원정보관리 ============ */}
          <MemberProfileDiv>
            <ProfileAvatar 
              profile={member.profile}
            />
            <ProfileTextDiv>
              <TextName>{member.nickname}</TextName>
              <TextEmail>{member.email}</TextEmail>
            </ProfileTextDiv>
          </MemberProfileDiv>


          <L.FlexCols _gap={24}>
            {/* =========================== 닉네임 =========================== */}
            <L.FlexCols>
              <TitleText>닉네임</TitleText>
              
              {
                showNameToggle 
                  ? <NameResetToggle namevalue={member.nickname} setToggle={() => setShowNameToggle(false)} /> 
                  : <NameToggle namevalue={member.nickname} setToggle={() => setShowNameToggle(true)} getMemberProfile={getMemberProfile}/>
                }
            </L.FlexCols>


            {/* ========================== 전화번호 ========================== */}
            <L.FlexCols>
              <TitleText>전화번호</TitleText>
              <MemberPhone phone={member.phone} getMemberProfile={getMemberProfile}/>
            </L.FlexCols>

            {/* ========================== 비밀번호 ========================== */}
            <L.FlexCols>
              <TitleText>비밀번호 변경</TitleText>
              <MemberPwd />
            </L.FlexCols>

            </L.FlexCols>

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
        </L.FlexCols>
        
        </L.Contents>
      </L.Container>

      </Layout>
    </div>
  )
}



// 닉네임 변경전
function NameResetToggle({ setToggle, namevalue }) {

  return (
    <div>
        <InputForm>
          <Input
            disabled
            value={namevalue}
          />
          <ChangeButton
            onClick={ setToggle }
          >변경</ChangeButton>
        </InputForm>
    </div>
  )
}
// 닉네임 변경 토글
function NameToggle({ namevalue, setToggle, getMemberProfile }) {
  const [confirm, setConfirm] = useState(null);
  const [id, setId] = useState('');
  const [error, setError] = useState('');

  const nicknameChange = async () => {
    setError('');
    const response = await memberNicknameChange(id);
    const { data, message, code } = response.data;

    if (code && code === '500') {
      console.log('에러')
      console.log(message)
      return setError(message);
    }

    setConfirm({
      contents: message,
      confirmText: "확인",
      onConfirmClick: () => {
        setToggle()
        getMemberProfile();
      },
    })
    
  }

  return (
    <MaxWidth>

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
        error && (
          <Text  
            style={{ marginTop: 8, color: '#D32F2F' }}
            _size={14}>
            {error}
          </Text>
        )
      }
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
    </MaxWidth>
  )
}


export default MemberManagement