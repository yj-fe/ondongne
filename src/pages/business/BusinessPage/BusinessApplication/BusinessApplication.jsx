import React, { useState } from 'react'
import { TabDiv,TabContent, ContentDiv, ContentTitle, TitleInfoDiv, TitleInfo, Input, RightStyle, BankToggleDiv, BankListDiv, TextCenter, } from '../../../../components/Buisness/BusinessManagement/BusinessManagementTabStyle'
import { Text } from '../../../../components/commonUi/Text'
import { ReactComponent as Right } from "../../../../assets/main/right.svg";
import { ReactComponent as Down } from "../../../../assets/icons/arrow/Arrow-Down.svg";
import Alert from '../../../../components/commonUi/Alert';
import { Final } from '../../../../components/commonUi/Icon';

import { NextButton } from '../../../../components/Login/Signup/agreement/AgreementStyle'
import {ConfirmButton,CenterDiv,FinalPageDiv} from './BusinessApplicationStyle'
import LayoutPage from '../../../../components/Common/LayoutPage';
import { Body, Container, Div } from '../../../../components/Common/LayoutPageStyle';
import { useNavigate } from 'react-router-dom';


function BusinessApplication() {
  const navigate = useNavigate();
  const [select, setSelect] = useState(false)
  const [alert, setAlert] = useState(null)

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
      <LayoutPage title="비즈 정보 관리"/>
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
                placeholder='상점명 입력'
              />
            </TitleInfoDiv>
          </ContentDiv>
            <ContentDiv>
              <ContentTitle>카테고리</ContentTitle>
                <TitleInfoDiv>
                  <TitleInfo>야채/과일</TitleInfo>
                <RightStyle
                  onClick={()=>setSelect(!select)}
                ><Down/></RightStyle>
                </TitleInfoDiv>
                {select && <CateToggle/>}
            </ContentDiv>
            <ContentDiv>
              <ContentTitle>활동지역</ContentTitle>
              <TitleInfoDiv>
                <TitleInfo>활동 지역 선택</TitleInfo>
                <RightStyle
                  onClick={openAlert}
                ><Right/></RightStyle>
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


function CateToggle (){
  return(
    <div>
      <BankToggleDiv>
        <BankListDiv>
          <TitleInfo weight={600} color={'#0B806F'}>야채/과일</TitleInfo>
        </BankListDiv>
        <BankListDiv>
          <TitleInfo weight={600} color={'#0B806F'}>야채/과일</TitleInfo>
        </BankListDiv>
        <BankListDiv>
          <TitleInfo>정육</TitleInfo>
        </BankListDiv>
        <BankListDiv>
          <TitleInfo>수산, 해산</TitleInfo>
        </BankListDiv>
        <BankListDiv>
          <TitleInfo>쌀 잡곡</TitleInfo>
        </BankListDiv>
        <BankListDiv>
          <TitleInfo>식품</TitleInfo>
        </BankListDiv>
      </BankToggleDiv>
    </div>
  )
}
export default BusinessApplication