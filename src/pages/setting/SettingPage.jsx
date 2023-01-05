import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Layout from 'components/layout/Layout/Layout'
import * as L from 'components/commonUi/Layout';
import * as T from 'components/commonUi/Text';
import { Switch, SwitchC } from 'components/commonUi/Icon';
import { CheckStyle } from 'pages/member/MemberWithdrawal/MemberWithdrawalStyle';

function SettingPage() {
  const navigate = useNavigate();
  const [check, setCheck] = useState(false)

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
              <L.FlexRows _height='56px' _content="space-between" _items="center" _padding="16px 0px">
                <T.Text _weight={500} _size={16} _color="gray900">마케팅 활용 동의</T.Text>

                  {check ? <SwitchC /> : <Switch />}

              </L.FlexRows>
              <L.FlexRows  
               _height='56px' _content="space-between" _items="center" _padding="16px 0px">
                <T.Text _weight={500} _size={16} _color="gray900">Push 수신 동의</T.Text>

                {check ? <SwitchC /> : <Switch />}
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
    </div>
  )
}

export default SettingPage