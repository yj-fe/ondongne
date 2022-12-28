import React, { useState } from 'react'
import { TabDiv, TabContent, ContentDiv, ContentTitle, TitleInfoDiv, TitleInfo, Input, RightStyle, BankToggleDiv, BankListDiv, TextCenter, } from 'components/Buisness/BusinessManagement/BusinessManagementTabStyle'
import { Text } from 'components/commonUi/Text'
import { ReactComponent as Right } from "assets/main/right.svg";
import { ReactComponent as Down } from "assets/icons/arrow/Arrow-Down.svg";
import Alert from 'components/commonUi/Alert';
import { Final } from 'components/commonUi/Icon';

import { NextButton } from 'components/Login/Signup/agreement/AgreementStyle'
import { ConfirmButton, CenterDiv, FinalPageDiv } from './BusinessApplicationStyle'
import LayoutPage from 'components/Common/LayoutPage';
import { Body, Container, Div } from 'components/Common/LayoutPageStyle';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';


function BusinessApplication() {
  const navigate = useNavigate();
  const [select, setSelect] = useState(false)
  const [alert, setAlert] = useState(null)

  const [data, setData] = useState({
    storeName: '',
    category: '',
    address: '',
    businessAddress: '',
    files: ''
  });

  const [categories, setCategories] = useState([
    { id: 0, name: '야채/과일',checked: false },
    { id: 1, name: '정육',checked: false },
    { id: 2, name: '수산/해산',checked: false },
    { id: 3, name: '쌀/잡곡',checked: false },
    { id: 4, name: '식품',checked: false },
    { id: 5, name: '생활용품',checked: false },
    { id: 6, name: '디저트',checked: false },
    { id: 7, name: '음료/주류',checked: false },
    { id: 8, name: '반려동물',checked: false },
    { id: 9, name: '기타',checked: false },
  ]);

  const categoryHandler = (id) => {
    setCategories(
      categories.map(category=>
        category.id === id ? {...category , checked : !category.checked} : category  
      )
    )

    const newCategory = data.category !== '' ? [
      data.category,
      categories.filter(category => category.id === id).map(category => category.name),
    ] : [
      categories.filter(category => category.id === id).map(category => category.name),
    ]
    
    setData({
      ...data,
      category: newCategory.join(', ')
    })
  }
  
  const openAlert = () => {
    return setAlert({
      title: "활동 지역 검색",
      desc: "최대 7개까지 추가 가능합니다.",
      placedesc: "시/구, 동 이름으로 검색",
      buttonText: "적용",
      onButtonClick: () => setAlert(null),
      onOverlayClick: () => setAlert(null),
    })
  }

  return (
    <div>
      {/* ============= 3. 비즈회원신청페이지 ============= */}
      <LayoutPage title="비즈 정보 관리" />
      <Body>
        <Container>
          <Div>
            <TabContent>
              <div>
                <Text _weight={600} _size={24} _color={'gray900'}><p>나만의 상점을</p><p>직접 등록해 보세요.</p></Text>
                <Text _weight={300} _size={15} _color={'gray800'}>관리자 승인 후 상점 활동이 가능합니다.</Text>
              </div>
              <ContentDiv>
                <ContentTitle>상점명</ContentTitle>
                <TitleInfoDiv>
                  <Input
                    maxLength={50}
                    placeholder='상점명 입력'
                  />
                </TitleInfoDiv>
              </ContentDiv>
              <ContentDiv style={{position: "relative"}}>
                <ContentTitle>카테고리</ContentTitle>
                <TitleInfoDiv>
                  <TitleInfo>
                    {data.category === '' ? '카테고리 선택' : data.category}
                  </TitleInfo>
                  <RightStyle
                    onClick={() => setSelect(!select)}
                  ><Down /></RightStyle>
                </TitleInfoDiv>
                {
                  select && 
                    <CateToggle 
                      close={() => setSelect(false)}
                      categories={categories}
                      categoryHandler={categoryHandler}
                    />
                }
              </ContentDiv>
              <ContentDiv>
                <ContentTitle>활동지역</ContentTitle>
                <TitleInfoDiv>
                  <TitleInfo>활동 지역 선택</TitleInfo>
                  <RightStyle
                    onClick={openAlert}
                  ><Right /></RightStyle>
                </TitleInfoDiv>
              </ContentDiv>
              <ContentDiv>
                <ContentTitle>사업자등록번호</ContentTitle>
                <TitleInfoDiv>
                  <Input
                    placeholder='번호 입력'
                  />
                </TitleInfoDiv>
              </ContentDiv>
              <ContentDiv>
                <ContentTitle>첨부파일</ContentTitle>
                <Text _size={14} _color={'gray600'} >사업자 관련 파일 첨부(파일은 pdf, jpg, png만 첨부 가능)</Text>
                <TextCenter>
                  <TitleInfo >파일 첨부</TitleInfo>
                </TextCenter>
              </ContentDiv>


              <NextButton
                type="button"
              >
                비즈 신청하기
              </NextButton>
            </TabContent>
          </Div>

          {/* ============= 4. 비즈회원신청 완료페이지 ============= */}
          {/* <FinalPageDiv>
            <CenterDiv>
              <Final/>
              <Text _size={22} _weight={700} _color={'gray900'}>비즈 신청이 완료되었습니다.</Text>
              <Text _size={15} _weight={400} _color={'gray800'} _align={'center'}><p>관리자 검토 후 2영업일 이내로 승인 처리 예정입니다.</p><p>승인이 완료되면 알림으로 알려드립니다.</p></Text>
            </CenterDiv>
            <ConfirmButton
              type="button"
              onClick={() => {navigate('/more')}}
              >
              확인
            </ConfirmButton>
          </FinalPageDiv> */}

        </Container>
      </Body>



      {
        alert &&
        <Alert
          title={alert.title}
          contents={alert.contents}
          desc={alert.desc}
          buttonText={alert.buttonText}
          onButtonClick={alert.onButtonClick}
          onOverlayClick={alert.onOverlayClick}
        />
      }
    </div>
  )
}


function CateToggle({close, categories, categoryHandler}) {

  const onChecked = id =>{
    categoryHandler(id);
    close();
  }

  return (
    <div>
      <BankToggleDiv>
        {
          categories.map(item => {
            return (
              <BankListDiv key={item.id} onClick={() => onChecked(item.id)}>
                <TitleInfo 
                  weight={item.checked && 600} 
                  color={item.checked && '#0B806F'}
                >
                  {item.name}
                </TitleInfo>
              </BankListDiv>
            )
          })
        }
      </BankToggleDiv>
    </div>
  )
}
export default BusinessApplication