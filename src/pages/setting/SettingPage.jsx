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

  //포스트맨 body
  const [email, setEmail] = useState({
    emailSmsAgreeStatus: 1,
    check: false
  })
  const [push, setPush] = useState({
    pushAgreeStatus: 1,
    check: false
  })
  // postMarketing(requestData) postPush(requestData)
  // 체크 박스 핸들러
  const emailHandler = (e) => {
    e.preventDefault();
    setEmail(item => ({...item, check: !email.check}))

  }
  const pushHandler = (e) => {
    e.preventDefault();
    setPush(item => ({...item, check: !push.check}))
  }

  const handleEmailChange = (e) => {
    const {value}=e.target;
    setEmail(item => ({...item, value}))
    console.log(email);
  }

  const handlePushChange = (e) => {
    const {value}=e.target;
    setEmail(item => ({...item, value}))
    console.log(email);
  }

  // const handleEmailSubmit = async (e) => {
  //   e.preventDefault();
  //   // if(!isAuthenticated) {
  //   //   return setConfirm({
  //   //     contents: "로그인해주세요.",
  //   //     buttonText: "확인",
  //   //     onConfirmClick: () => setConfirm(null),
  //   //     onOverlayClick: () => setConfirm(null),
  //   //   })
  //   // }
  //   const response = await postMarketing(email);
  //   console.log(response)
  //   // if(response && response.email) {
  //   //   return setConfirm({
  //   //     contents: "마케팅 활용 동의 하셨습니다",
  //   //     buttonText: "확인",
  //   //     onConfirmClick: () => setConfirm(null),
  //   //     onOverlayClick: () => setConfirm(null),
  //   //   })
  //   // }
  // }

  // const handlePushSubmit = async (e) => {
  //   e.preventDefault();

  //   // if(!isAuthenticated) {
  //   //   return setConfirm({
  //   //     contents: "로그인해주세요.",
  //   //     buttonText: "확인",
  //   //     onConfirmClick: () => setConfirm(null),
  //   //     onOverlayClick: () => setConfirm(null),
  //   //   })
  //   // }
  //   const response = await postPush(push);
  //   console.log(response)
  //   // if(response && response.push) {
  //   //   return setConfirm({
  //   //     contents: "Push 동의 하셨습니다",
  //   //     buttonText: "확인",
  //   //     onConfirmClick: () => setConfirm(null),
  //   //     onOverlayClick: () => setConfirm(null),
  //   //   })
  //   // }
  // }

  useEffect(() => {

  }, [])



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
                onClick={emailHandler}
                onChange={handleEmailChange}
                value={email.emailSmsAgreeStatus}
                // onClick={()=>{emailHandler(); handleEmailSubmit();}}
                _height='56px' 
                _content="space-between" 
                _items="center" 
                _padding="16px 0px"
              >
                <T.Text _weight={500} _size={16} _color="gray900">마케팅 활용 동의</T.Text>
                  {email.check ? <SwitchC /> : <Switch />}
              </L.FlexRows>
              <L.FlexRows
                onClick={pushHandler} 
                onChange={handlePushChange}
                value={push.pushAgreeStatus} 
                // onClick={()=>{pushHandler(); handlePushSubmit();}}  
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