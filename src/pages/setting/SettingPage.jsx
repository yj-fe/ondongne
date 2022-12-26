import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Layout from 'components/layout/Layout/Layout'
import * as L from 'components/commonUi/Layout';
import * as T from 'components/commonUi/Text';
import * as I from 'components/commonUi/Input';
import * as B from 'components/commonUi/Button';
import SwitchCheckBox from 'components/commonUi/SwitchCheckBox';

function SettingPage() {
  const navigate = useNavigate();
  const [requestSave, setRequestSave] = useState(false);


  return (
    <div>
      <Layout
          title="환경설정"
          cart={false}
          bell={false}
          onBackClick={() => navigate('/')}
      >
        <L.Container _padding="0px 0px 8px" >
          <L.Contents >
            <L.FlexCols _gap={24} _padding="8px 20px">
              <L.FlexCols _gap={36}>
                <L.FlexRows _content="space-between" _items="center" >
                  <T.Text _weight={500} _size={16} _color="gray900">마케팅 활용 동의</T.Text>
                  <SwitchCheckBox
                    name="requestSave"
                    checked={requestSave}
                    onChange={e => {setRequestSave(e.currentTarget.checked)}}
                  />
                </L.FlexRows>
                <L.FlexRows _content="space-between" _items="center">
                  <T.Text _weight={500} _size={16} _color="gray900">Push 수신 동의</T.Text>
                  <SwitchCheckBox
                    name="requestSave"
                    checked={requestSave}
                    onChange={e => {setRequestSave(e.currentTarget.checked)}}
                  />
                </L.FlexRows>
             </L.FlexCols>

            </L.FlexCols>


          </L.Contents>
          <L.Contents >
            <L.FlexRows _content="space-between" _items="center" >
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