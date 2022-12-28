import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Layout from 'components/layout/Layout/Layout'
import * as L from 'components/commonUi/Layout';
import * as T from 'components/commonUi/Text';
import * as B from 'components/commonUi/Button';
import CheckBox from 'components/commonUi/CheckBox';
import { ContentDiv, Input, RightStyle, TextCenter, TitleInfo, TitleInfoDiv, RowDiv } from 'components/Buisness/BusinessManagement/BusinessManagementTabStyle';
import { Down,  ArrowRightB, Delete, Calendar } from 'components/commonUi/Icon';
import { AbsoluteDiv, AbsoluteTopDiv, ImgSizeLayout, RelativDiv } from 'components/layout/Img/ImgSizeLayout';
import maindata from 'assets/data/maindata'



function BusinessProductEdit() {
  let [item] = useState(maindata)


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
          title="상품 수정"
          cart={false}
          bell={false}
          onBackClick={() => navigate(-1)}
      >

        <L.Container _padding="0px 0px 60px"  >
          <L.Contents >
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
              <L.FlexRows _gap={20}>
                <RelativDiv>
                  <ImgSizeLayout _width={80} _height={80} _bdr={4} src={item[0].img}/>
                  <AbsoluteTopDiv>
                    <Delete/>
                  </AbsoluteTopDiv>
                </RelativDiv>
                <RelativDiv>
                  <ImgSizeLayout _width={80} _height={80} _bdr={4} src={item[1].img}/>
                  <AbsoluteTopDiv>
                    <Delete/>
                  </AbsoluteTopDiv>
                </RelativDiv>
                <RelativDiv>
                  <ImgSizeLayout _width={80} _height={80} _bdr={4} src={item[2].img}/>
                  <AbsoluteTopDiv>
                    <Delete/>
                  </AbsoluteTopDiv>
                </RelativDiv>
                <RelativDiv>
                  <ImgSizeLayout _width={80} _height={80} _bdr={4} src={item[3].img}/>
                  <AbsoluteTopDiv>
                    <Delete/>
                  </AbsoluteTopDiv>
                </RelativDiv>
              </L.FlexRows>
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
                  placeholder='쫄깃쫄깃 생 삼겹살 1kg'
                />
                </TitleInfoDiv>
              </L.FlexCols>
              <L.FlexCols _gap={16}>
                <T.Text _weight={600} _size={16} _color="gray900">상품 가격(원)</T.Text>
                <TitleInfoDiv>
                <Input
                  placeholder='￦ 10.000'
                />
                </TitleInfoDiv>
              </L.FlexCols>
{/* 공동구매 체크하면 수량, 종료일 보여주기 */}
{group && 
            <L.FlexCols  _gap={40}>
              <L.FlexRows _gap={40}>
                <ContentDiv>
                  <T.Text _weight={600} _size={16} _color="gray900">최소 수량</T.Text>

                  <TitleInfoDiv>
                    <L.FlexRows _padding={16}>
                      <Input
                        placeholder='0'/>
                      <T.Text _weight={400} _size={16} _color="gray900">개</T.Text>
                    </L.FlexRows>
                  </TitleInfoDiv>
                </ContentDiv>
                <ContentDiv>
                  <T.Text _weight={600} _size={16} _color="gray900">최대 수량</T.Text>
                  <TitleInfoDiv>
                    <L.FlexRows _padding={16}>
                      <Input
                        placeholder='0'/>
                      <T.Text _weight={400} _size={16} _color="gray900">개</T.Text>
                    </L.FlexRows>
                  </TitleInfoDiv>
                </ContentDiv>
              </L.FlexRows>

              <L.FlexCols _gap={16}>
                <T.Text _weight={600} _size={16} _color="gray900">판매 종료일</T.Text>
                  <TitleInfoDiv>
                    <L.FlexRows _padding={16}>
                      <T.Text _weight={400} _size={16} _color="gray900">2022-12-15</T.Text>
                      <Calendar/>
                    </L.FlexRows>

                </TitleInfoDiv>
              </L.FlexCols>
            </L.FlexCols>



}

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
                  <Link to='/business/edit/info'>
                    <RightStyle><ArrowRightB/></RightStyle>
                  </Link>
              </TitleInfoDiv>
              </L.FlexCols>

            </L.FlexCols>

            <B.FixedActionButton>수정 완료</B.FixedActionButton>
          </L.Contents>
        </L.Container>
      </Layout>
    </div>
  )
}

export default BusinessProductEdit