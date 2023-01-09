import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Layout from 'components/layout/Layout/Layout'
import * as L from 'components/commonUi/Layout';
import * as T from 'components/commonUi/Text';
import * as I from 'components/commonUi/Input';
import { InfoBoxDiv, TitleInfo } from 'components/Buisness/BusinessManagement/BusinessManagementTabStyle';
import { ButtonDiv, CheckStyle, CheckTitle, CheckTitleDiv } from 'pages/member/MemberWithdrawal/MemberWithdrawalStyle';
import { ReactComponent as Check } from 'assets/login/checkgray.svg'
import { ReactComponent as Checked } from 'assets/login/checked.svg'
import { ArrowTop, Down } from 'components/commonUi/Icon';
import { ToggleS } from 'components/Login/Password/ToggleDetail/ToggleDetailStyle';
import SimpleConfirm from './../../../components/commonUi/SimpleConfirm';


function VocPage() {
  const navigate = useNavigate();
  const [confirm, setConfirm] = useState(false);
  const [btn, setBtn] = useState(false)
  const [check, setCheck] = useState(false)
  const [show, setShow] = useState()
  const openConfirm = () => {
    return setConfirm({
      contents: "고객님의 문의가 정상적으로 접수되었습니다.\n빠른 시간내에 답변 드리도록 하겠습니다.",
      buttonText: "확인",
      onButtonClick: () => setConfirm(null),
      onOverlayClick: () => setConfirm(null),
    })
  }


  return (
    <div>
       <Layout
          title="Voc 의견"
          cart={false}
          bell={false}
          onBackClick={() => navigate(-1)}
      >
        <L.Container _padding="0px 0px 8px" >
          <L.Contents  _height='100vh'>
            <L.FlexCols _gap={24} _padding="0px">
              {/* <L.FlexCols>
                <T.Text _weight={600} _size={16} _color="gray900">이름</T.Text>
                  <I.TextInput _boccolor={'#FFFFFF'}/>
             </L.FlexCols> */}
              <L.FlexCols>
                <T.Text _weight={600} _size={16} _color="gray900">분류</T.Text>
                <InfoBoxDiv onClick={() => setShow((s) => !s)}>
                  <TitleInfo>UI/UX</TitleInfo>
                  {show ? <ArrowTop/> : <Down/> }
                </InfoBoxDiv>
                {show && <Toggle/>}
             </L.FlexCols>
              <L.FlexCols>
                <T.Text _weight={600} _size={16} _color="gray900">제목</T.Text>
                  <I.TextInput _boccolor={'#FFFFFF'}/>
             </L.FlexCols>
              <L.FlexCols>
                <T.Text _weight={600} _size={16} _color="gray900">의견내용</T.Text>
                  <I.TextInput _boccolor={'#FFFFFF'} _height={140}/>
             </L.FlexCols>
              <L.FlexRows _content="flex-start" _items="center" >
                <CheckTitleDiv onClick={() => { setCheck((s) => !s); setBtn((s) => !s) }}>
                  <CheckStyle
                    id="confirm"
                    type="button"
                  >
                    {check ? <Checked /> : <Check />}
                  </CheckStyle>
                  <CheckTitle>개인정보 수집, 이용에 동의합니다.(필수)</CheckTitle>
                </CheckTitleDiv>
            
              </L.FlexRows>

            </L.FlexCols>

            <L.BottomCols>
              <ButtonDiv
                type="button"
                btn={btn}
                onClick={openConfirm}
              >의견 보내기
              </ButtonDiv>
            </L.BottomCols>

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
          />
      }
    </div>
  )
}
function Toggle() {

  return (
    <div>
      <ToggleS>
        <L.FlexCols _gap='0px'>
          <L.FlexRows _padding='12px 16px' _height='48px' _items='center'><T.Text _weight={600} _size={15} _color="green700">UI/UX</T.Text></L.FlexRows>
          <L.FlexRows _padding='12px 16px' _height='48px' _items='center'><T.Text _size={15} _color="gray900">기능/개발</T.Text></L.FlexRows>
          <L.FlexRows _padding='12px 16px' _height='48px' _items='center'><T.Text _size={15} _color="gray900">상점 신고</T.Text></L.FlexRows>
          <L.FlexRows _padding='12px 16px' _height='48px' _items='center'><T.Text _size={15} _color="gray900">기타 불편사항</T.Text></L.FlexRows>
        </L.FlexCols>
      </ToggleS>
    </div>
  )
}
export default VocPage