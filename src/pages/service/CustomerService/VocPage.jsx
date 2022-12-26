import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Layout from 'components/layout/Layout/Layout'
import * as L from 'components/commonUi/Layout';
import * as T from 'components/commonUi/Text';
import * as I from 'components/commonUi/Input';
import * as B from 'components/commonUi/Button';
import CheckBox from 'components/commonUi/CheckBox';
import { InfoBoxDiv, RightStyle, TitleInfo } from 'components/Buisness/BusinessManagement/BusinessManagementTabStyle';
import { Down } from 'components/commonUi/Icon';

function VocPage() {
  const navigate = useNavigate();
  const [select, setSelect] = useState(false)


  const [requestSave, setRequestSave] = useState(false);


  return (
    <div>
       <Layout
          title="Voc 의견"
          cart={false}
          bell={false}
          onBackClick={() => navigate('/')}
      >
        <L.Container _padding="0px 0px 8px" >
          <L.Contents  _height='100vh'>
            <L.FlexCols _gap={24} _padding="8px 20px">
              <L.FlexCols>
                <T.Text _weight={600} _size={16} _color="gray900">이름</T.Text>
                  <I.TextInput _boccolor={'#FFFFFF'}/>
             </L.FlexCols>
              <L.FlexCols>
                <T.Text _weight={600} _size={16} _color="gray900">분류</T.Text>
                <InfoBoxDiv>
                  <TitleInfo>UI/UX</TitleInfo>
                  <RightStyle
                    onClick={()=>setSelect(!select)}
                  ><Down/></RightStyle>
                </InfoBoxDiv>
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
              <CheckBox
                label="개인정보 수집, 이용에 동의합니다.(필수)"
                name="requestSave"
                checked={requestSave}
                onChange={e => {setRequestSave(e.currentTarget.checked)}}
              />
              </L.FlexRows>

            </L.FlexCols>

            <B.FixedPaddingActionButton>의견 보내기</B.FixedPaddingActionButton>

          </L.Contents>
        </L.Container>
      </Layout>
    </div>
  )
}

export default VocPage