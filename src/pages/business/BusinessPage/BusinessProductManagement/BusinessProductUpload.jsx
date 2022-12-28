import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Layout from 'components/layout/Layout/Layout'
import * as L from 'components/commonUi/Layout';
import * as T from 'components/commonUi/Text';
import * as B from 'components/commonUi/Button';
import CheckBox from 'components/commonUi/CheckBox';
import { ContentDiv, Input, RightStyle, TextCenter, TitleInfo, TitleInfoDiv } from 'components/Buisness/BusinessManagement/BusinessManagementTabStyle';
import { Down,  ArrowRightB } from 'components/commonUi/Icon';




function BusinessProductUpload() {
  
  const navigate = useNavigate();
  const [select, setSelect] = useState(false)


  const [requestSave, setRequestSave] = useState(false);
  const [group, setGroup] = useState(false);
  const [delivery, setDelivery] = useState(false);
  const [pickup, setPickup] = useState(false);
  const [parcel, setParcel] = useState(false);


  return (
    <div>
      <Layout
          title="상품 등록"
          cart={false}
          bell={false}
          onBackClick={() => navigate(-1)}
      >

        <L.Container _padding="0px 0px 60px" >
          <L.Contents  _height='100vh'>
            <L.FlexCols _gap={40} _padding="8px 20px">
              <L.FlexCols _gap={16}>
                <T.Text _weight={600} _size={16} _color="gray900">판매 종류</T.Text>
                <L.FlexRows _gap={16}>
                  <CheckBox
                    label="일반상품"
                    name="requestSave"
                    checked={requestSave}
                    onChange={e => {setRequestSave(e.currentTarget.checked)}}
                  />
                  <CheckBox
                    label="공동구매 상품"
                    name="group"
                    checked={group}
                    onChange={e => {setGroup(e.currentTarget.checked)}}
                  />
                </L.FlexRows>
             </L.FlexCols>

             <ContentDiv>
              <L.FlexCols>
                <T.Text _weight={600} _size={16} _color="gray900">상품 이미지</T.Text>
                <T.Text _weight={400} _size={14} _color="gray600">상세페이지 상단에 노출할 상품 이미지를 등록해주세요.</T.Text>
              </L.FlexCols>
              <B.LayerTextButton>
                <T.Text _weight={400} _size={15} _color="gray900" _align='center' _content='center'>이미지 업로드</T.Text>
              </B.LayerTextButton>
            </ContentDiv>

              <L.FlexCols _gap={16}>
                <T.Text _weight={600} _size={16} _color="gray900">카테고리</T.Text>
                <L.FlexRows _gap={16}>
                  <TitleInfoDiv>
                    <TitleInfo>야채/과일</TitleInfo>
                  <RightStyle
                    onClick={()=>setSelect(!select)}
                  ><Down/></RightStyle>
                  </TitleInfoDiv>
                </L.FlexRows>
              </L.FlexCols>
              <L.FlexCols _gap={16}>
                <T.Text _weight={600} _size={16} _color="gray900">상품명</T.Text>
                <TitleInfoDiv>
                <Input
                  placeholder='상품명을 입력해주세요.'
                />
                </TitleInfoDiv>
              </L.FlexCols>
              <L.FlexCols _gap={16}>
                <T.Text _weight={600} _size={16} _color="gray900">상품 가격(원)</T.Text>
                <TitleInfoDiv>
                <Input
                  placeholder='￦ 0'
                />
                </TitleInfoDiv>
              </L.FlexCols>

              <L.FlexCols _gap={16}>
                <T.Text _weight={600} _size={16} _color="gray900">배달/픽업 여부</T.Text>
                <L.FlexRows _gap={16}>
                  <CheckBox
                    label="배달 가능"
                    name="delivery"
                    checked={delivery}
                    onChange={e => {setDelivery(e.currentTarget.checked)}}
                  />
                  <CheckBox
                    label="픽업 가능"
                    name="pickup"
                    checked={pickup}
                    onChange={e => {setPickup(e.currentTarget.checked)}}
                  />
                  <CheckBox
                    label="택배 가능"
                    name="parcel"
                    checked={parcel}
                    onChange={e => {setParcel(e.currentTarget.checked)}}
                  />
                </L.FlexRows>
             </L.FlexCols>

             <L.FlexCols _gap={16}>
                <T.Text _weight={600} _size={16} _color="gray900">상품 정보</T.Text>
                <TitleInfoDiv>
                <TitleInfo>작성하기</TitleInfo>
                <RightStyle
                ><ArrowRightB/></RightStyle>
              </TitleInfoDiv>
              </L.FlexCols>

            </L.FlexCols>

            <B.FixedActionButton>등록하기</B.FixedActionButton>
          </L.Contents>
        </L.Container>
      </Layout>

    </div>
  )
}

export default BusinessProductUpload