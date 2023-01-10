import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Layout from 'components/layout/Layout/Layout'
import * as L from 'components/commonUi/Layout';
import * as T from 'components/commonUi/Text';
import { Switch, SwitchC } from 'components/commonUi/Icon';
import { CheckStyle } from 'pages/member/MemberWithdrawal/MemberWithdrawalStyle';
import { postMarketing, postPush } from 'service/border';
import { useSelector } from 'react-redux';
import SimpleConfirm from 'components/commonUi/SimpleConfirm';

function SettingPage() {
  const navigate = useNavigate();
  const [confirm, setConfirm] = useState(false);
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  //포스트맨 body(마케팅, Push)
  const [email, setEmail] = useState({
    emailSmsAgreeStatus: 0,
    check: false
  })
  const [push, setPush] = useState({
    pushAgreeStatus: 0,
    check: false
  })
  // 체크 박스 핸들러(마케팅, Push)
  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    if(!isAuthenticated) {
      return setConfirm({
        contents: "로그인해주세요.",
        buttonText: "확인",
        onConfirmClick: () => setConfirm(null),
        onOverlayClick: () => setConfirm(null),
      })
    }
    setEmail(item => ({...item, check: !email.check}))
    if(email.check === true){
      setEmail(item => ({...item, emailSmsAgreeStatus: 0}))
    }else if(email.check === false){
      setEmail(item => ({...item, emailSmsAgreeStatus: 1}))
    }

    const response = await postMarketing(email);
    console.log(response)
    if(response && response.email) {
      return setConfirm({
        contents: "마케팅 활용 동의 하셨습니다",
        buttonText: "확인",
        onConfirmClick: () => setConfirm(null),
        onOverlayClick: () => setConfirm(null),
      })
    }
  }
  const handlePushSubmit = async (e) => {
    e.preventDefault();

    if(!isAuthenticated) {
      return setConfirm({
        contents: "로그인해주세요.",
        buttonText: "확인",
        onConfirmClick: () => setConfirm(null),
        onOverlayClick: () => setConfirm(null),
      })
    }
    setPush(item => ({...item, check: !push.check}));
    if(push.check === true){
      setPush(item => ({...item, pushAgreeStatus: 0}))
    }else if(push.check === false){
      setPush(item => ({...item, pushAgreeStatus: 1}))
    }
    const response = await postPush(push);
    // console.log(response)
    if(response && response.push) {
      return setConfirm({
        contents: "Push 동의 하셨습니다",
        buttonText: "확인",
        onConfirmClick: () => setConfirm(null),
        onOverlayClick: () => setConfirm(null),
      })
    }

  }
  // console.log(email);
  // console.log(push);

  useEffect(() => {

  }, [email, push])



  return (
    <div>
      <Layout
          title="환경설정"
          cart={false}
          bell={false}
          onBackClick={() => navigate(-1)}
      >
        <L.Container _padding="0px 0px 8px" >
          <L.Contents  _padding='0px'>
            <L.FlexCols _gap='0px' _padding="8px 20px">
              <L.FlexRows
                onClick={handleEmailSubmit}
                value={email.emailSmsAgreeStatus}
                _height='56px' 
                _content="space-between" 
                _items="center" 
                _padding="16px 0px"
              >
                <T.Text _weight={500} _size={16} _color="gray900">마케팅 활용 동의</T.Text>
                  {email.check ? <SwitchC /> : <Switch />}
              </L.FlexRows>
              <L.FlexRows
                onClick={handlePushSubmit} 
                value={push.pushAgreeStatus} 
                _height='56px' 
                _content="space-between" 
                _items="center" 
                _padding="16px 0px"
              >
                <T.Text _weight={500} _size={16} _color="gray900">Push 수신 동의</T.Text>
                {push.check ? <SwitchC /> : <Switch />}
              </L.FlexRows>
            </L.FlexCols>

          </L.Contents>
          <L.Contents _padding='8px 20px'>
            <L.FlexRows _height='52px' _content="space-between" _items="center" _padding="0px">
              <T.Text _weight={500} _size={14} _color="gray800">앱 버전 정보</T.Text>
              <T.Text _weight={400} _size={14} _color="gray800">1.1.1</T.Text>
            </L.FlexRows>

          </L.Contents>
        </L.Container>
      </Layout>
      {
        confirm &&
        <SimpleConfirm 
            warn={confirm.warn}
            contents={confirm.contents}
            confirmText={confirm.confirmText}
            onConfirmClick={confirm.onConfirmClick}
            onOverlayClick={confirm.onOverlayClick}
        />
      }
    </div>
  )
}

export default SettingPage