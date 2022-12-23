import React, { useState } from 'react'
import { ReactComponent as Right } from "../../../assets/main/right.svg";
import { ReactComponent as Down } from "../../../assets/icons/arrow/Arrow-Down.svg";
import { Text } from '../../commonUi/Text';

import {BankListDiv,BankToggleDiv,TextCenter,InfoBoxDiv,TabDiv,TabContent,ContentDiv,ContentTitle,TitleInfo,TitleInfoDiv,RightStyle,TabBtn,InputBox,Input} from './BusinessManagementTabStyle'


function BusinessManagementTab2() {
  const [select, setSelect] = useState(false)

  return (
    <div>
      <TabDiv>

        <TabContent>
          <ContentDiv>
            <ContentTitle>대표자 명</ContentTitle>
            <TitleInfoDiv>
              <Input
                placeholder='홍길동'
              />
            </TitleInfoDiv>
          </ContentDiv>
          <ContentDiv>
            <ContentTitle>전화번호</ContentTitle>
            <TitleInfoDiv>
              <Input
                placeholder='0123456789'
              />
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
              <Input
                placeholder='012-34-567891'
              />
            </TitleInfoDiv>
          </ContentDiv>
          <ContentDiv>
            <ContentTitle>통장 정보</ContentTitle>
            <InfoBoxDiv>
              <TitleInfo>은행 선택</TitleInfo>
              <RightStyle
                onClick={()=>setSelect(!select)}
              ><Down/></RightStyle>
            </InfoBoxDiv>
            {select && <BankToggle/>}

            <InfoBoxDiv>
              <Input
                placeholder='-를 제외한 계좌번호 입력'
              />
            </InfoBoxDiv>
          </ContentDiv>
          <ContentDiv>
            <ContentTitle>첨부파일</ContentTitle>
              <Text _size={14} _color={'gray600'} >사업자 관련 파일 첨부(파일은 pdf, jpg, png만 첨부 가능)</Text>
            <TextCenter>
              <TitleInfo >파일 첨부</TitleInfo>
            </TextCenter>
          </ContentDiv>


        </TabContent>


        <TabBtn>수정 완료</TabBtn>

      </TabDiv>

    </div>
  )
}

function BankToggle (){
  return(
    <div>
      <BankToggleDiv>
        <BankListDiv>
          <TitleInfo weight={600} color={'#0B806F'}>은행 선택</TitleInfo>
        </BankListDiv>
        <BankListDiv>
          <TitleInfo>NH은행</TitleInfo>
        </BankListDiv>
        <BankListDiv>
          <TitleInfo>우리은행</TitleInfo>
        </BankListDiv>
        <BankListDiv>
          <TitleInfo>기업은행</TitleInfo>
        </BankListDiv>
      </BankToggleDiv>
    </div>
  )
}

export default BusinessManagementTab2