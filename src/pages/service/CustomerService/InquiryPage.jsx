import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Layout from 'components/layout/Layout/Layout'
import * as L from 'components/commonUi/Layout';
import * as T from 'components/commonUi/Text';
import * as I from 'components/commonUi/Input';
import * as B from 'components/commonUi/Button';
import CheckBox from 'components/commonUi/CheckBox';
import { ButtonDiv } from 'pages/member/MemberWithdrawal/MemberWithdrawalStyle';
import { InfoBoxDiv, RightStyle, TitleInfo } from 'components/Buisness/BusinessManagement/BusinessManagementTabStyle';
import { Down } from 'components/commonUi/Icon';

function InquiryPage() {
  const navigate = useNavigate();
  const [select, setSelect] = useState(false)


  const [requestSave, setRequestSave] = useState(false);


  return (
    <div>
       <Layout
          title="1:1 문의"
          cart={false}
          bell={false}
          onBackClick={() => navigate(-1)}
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
                  <TitleInfo>주문 및 배달문의</TitleInfo>
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
                <T.Text _weight={600} _size={16} _color="gray900">문의내용</T.Text>
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

            <B.FixedPaddingActionButton>문의하기</B.FixedPaddingActionButton>

          </L.Contents>
        </L.Container>
      </Layout>
    </div>
  )
}

export default InquiryPage