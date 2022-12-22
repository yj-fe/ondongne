import React, { useState } from 'react'
import { ReactComponent as Right } from "../../../assets/main/right.svg";
import { Text } from '../../commonUi/Text';

import {TextCenter,InfoBoxDiv,TabDiv,TabContent,RowDiv,ContentDiv,ContentTitle,TitleInfo,TitleInfoDiv,RightStyle,TabBtn,InputBox,Input} from './BusinessManagementTabStyle'


function BusinessManagementTab2() {
  return (
    <div>
      <TabDiv>

        <TabContent>
          <ContentDiv>
            <ContentTitle>대표자 명</ContentTitle>
            <TitleInfoDiv>
              <TitleInfo>홍길동</TitleInfo>
            </TitleInfoDiv>
          </ContentDiv>
          <ContentDiv>
            <ContentTitle>전화번호</ContentTitle>
            <TitleInfoDiv>
              <TitleInfo>021234567</TitleInfo>
            </TitleInfoDiv>
          </ContentDiv>
          <ContentDiv>
            <ContentTitle>주소</ContentTitle>
            <TitleInfoDiv>
              <TitleInfo>우편번호 검색</TitleInfo>
              <RightStyle><Right/></RightStyle>
            </TitleInfoDiv>
            <TitleInfoDiv>
              <Input
                placeholder='상세주소 입력'
              />
            </TitleInfoDiv>
          </ContentDiv>
          <ContentDiv>
            <ContentTitle>사업자등록번호</ContentTitle>
            <TitleInfoDiv>
              <TitleInfo>012-34-567891</TitleInfo>
            </TitleInfoDiv>
          </ContentDiv>
          <ContentDiv>
            <ContentTitle>통장 정보</ContentTitle>
            <InfoBoxDiv>
              <TitleInfo>은행 선택</TitleInfo>
              <RightStyle><Right/></RightStyle>
            </InfoBoxDiv>
            <InfoBoxDiv>
              <Input
                placeholder='-를 제외한 계좌번호 입력'
              />
            </InfoBoxDiv>
          </ContentDiv>
          <ContentDiv>
            <ContentTitle>첨부파일</ContentTitle>
              <Text _size={14} _color={'gray600'} >사업자 관련 파일 첨부(파일은 pdf, jpg, png만 첨부 가능)</Text>
            <InfoBoxDiv>
              <TextCenter>파일 첨부</TextCenter>
            </InfoBoxDiv>
          </ContentDiv>



          <ContentDiv>
            <ContentTitle>첨부파일</ContentTitle>
            <TitleInfoDiv>
              <TitleInfo>파일 첨부</TitleInfo>
              <Text>파일 첨부</Text>
            </TitleInfoDiv>
          </ContentDiv>

        </TabContent>


        <TabBtn>수정 완료</TabBtn>

      </TabDiv>

    </div>
  )
}

export default BusinessManagementTab2