import React, { useState } from 'react'
import Camera from '../../../assets/common/Camera.png'
import { ReactComponent as Right } from "../../../assets/main/right.svg";
import CheckBox from '../../commonUi/CheckBox';

import ProfileAvatar from '../../commonUi/ProfileAvatar'
import { Text } from '../../commonUi/Text';
import {TimeBox,TimeDiv,RowTimeDiv,DayDiv,DayBox,RowTitle,RowInput,InputText,TabDiv,TabProfileDiv,ProfileBtnDiv,CameraImg,AvatarDiv,TabContent,RowDiv,ContentDiv,ContentTitle,TitleInfo,TitleInfoDiv,RightStyle,TabBtn,InputBox,RowInfoDiv,Input} from './BusinessManagementTabStyle'

// 상점정보
function BusinessManagementTab1() {

  const [requestSave, setRequestSave] = useState(false);

  return (
    <div>
      <TabDiv>
        <TabProfileDiv>
          <ProfileBtnDiv>
            <CameraImg src={Camera}/>
            이미지 변경
          </ProfileBtnDiv>
        </TabProfileDiv>
        <AvatarDiv>
          <ProfileAvatar/>
        </AvatarDiv>

        <TabContent>
          <ContentDiv>
            <ContentTitle>상점명</ContentTitle>
            <TitleInfoDiv>
              <TitleInfo>아재의 과일</TitleInfo>
            </TitleInfoDiv>
          </ContentDiv>
          <ContentDiv>
            <ContentTitle>활동지역</ContentTitle>
            <TitleInfoDiv>
              <TitleInfo>풍무동, 사우동, 걸포동 외 4개</TitleInfo>
              <RightStyle><Right/></RightStyle>
            </TitleInfoDiv>
          </ContentDiv>
          <ContentDiv>
            <ContentTitle>상점 소개</ContentTitle>
            <InputBox
            height={200}
            >
              <Input
                placeholder='어떤 상점인지 소개해 주세요!'
                />
            </InputBox>
          </ContentDiv>
          <RowDiv>
            <ContentDiv>
              <ContentTitle>배달 금액(원)</ContentTitle>
              <TitleInfoDiv>
                <Input
                placeholder='￦ 0'/>
              </TitleInfoDiv>
            </ContentDiv>
            <ContentDiv>
              <ContentTitle>최소 주문 금액(원)</ContentTitle>
              <TitleInfoDiv>
              <Input
                placeholder='￦ 0'/>
              </TitleInfoDiv>
            </ContentDiv>
          </RowDiv>
          <ContentDiv>
            <ContentTitle>매장 오픈 날짜</ContentTitle>
            <RowDiv>
              <TitleInfoDiv>
                  <RowInput
                    placeholder='YY'
                    type='number'
                  />
                  <InputText>년</InputText>
              </TitleInfoDiv>
              <TitleInfoDiv>
                  <RowInput
                    placeholder='MM'
                    type='number'
                  />
                  <InputText>월</InputText>
              </TitleInfoDiv>
              <TitleInfoDiv>
                  <RowInput
                    placeholder='DD'
                    type='number'
                  />
                  <InputText>일</InputText>
              </TitleInfoDiv>
            </RowDiv>
          </ContentDiv>
          <RowDiv>
            <ContentDiv>
              <RowTitle>
                <ContentTitle>휴무일</ContentTitle>
                  <CheckBox
                      label="공휴일 휴무"
                      name="requestSave"
                      checked={requestSave}
                      onChange={e => {setRequestSave(e.currentTarget.checked)}}
                  />
              </RowTitle>
              <DayDiv>
                <DayBox>월</DayBox>
                <DayBox>화</DayBox>
                <DayBox>수</DayBox>
                <DayBox>목</DayBox>
                <DayBox>금</DayBox>
                <DayBox>토</DayBox>
                <DayBox>일</DayBox>
              </DayDiv>
            </ContentDiv>
          </RowDiv>

          <ContentDiv>
              <ContentTitle>운영 시간</ContentTitle>
            <RowTitle align={'center'}>
              <Text _size={15} height={'44px'}>월요일</Text>
              <RowTimeDiv>
                <TimeDiv><TimeBox><Input  align={'center'} placeholder='09'/></TimeBox>:<TimeBox><Input  align={'center'} placeholder='00'/></TimeBox></TimeDiv>
                ~
                <TimeDiv><TimeBox><Input  align={'center'} placeholder='22'/></TimeBox>:<TimeBox><Input  align={'center'} placeholder='00'/></TimeBox></TimeDiv>
              </RowTimeDiv>
            </RowTitle>
            <RowTitle align={'center'}>
              <Text _size={15} height={'44px'}>화요일</Text>
              <RowTimeDiv>
                <TimeDiv><TimeBox><Input  align={'center'} placeholder='09'/></TimeBox>:<TimeBox><Input  align={'center'} placeholder='00'/></TimeBox></TimeDiv>
                ~
                <TimeDiv><TimeBox><Input  align={'center'} placeholder='22'/></TimeBox>:<TimeBox><Input  align={'center'} placeholder='00'/></TimeBox></TimeDiv>
              </RowTimeDiv>
            </RowTitle>
            <RowTitle align={'center'}>
              <Text _size={15} height={'44px'}>수요일</Text>
              <RowTimeDiv>
                <TimeDiv><TimeBox><Input  align={'center'} placeholder='09'/></TimeBox>:<TimeBox><Input  align={'center'} placeholder='00'/></TimeBox></TimeDiv>
                ~
                <TimeDiv><TimeBox><Input  align={'center'} placeholder='22'/></TimeBox>:<TimeBox><Input  align={'center'} placeholder='00'/></TimeBox></TimeDiv>
              </RowTimeDiv>
            </RowTitle>
            <RowTitle align={'center'}>
              <Text _size={15} height={'44px'}>목요일</Text>
              <RowTimeDiv>
                <TimeDiv><TimeBox><Input  align={'center'} placeholder='09'/></TimeBox>:<TimeBox><Input  align={'center'} placeholder='00'/></TimeBox></TimeDiv>
                ~
                <TimeDiv><TimeBox><Input  align={'center'} placeholder='22'/></TimeBox>:<TimeBox><Input  align={'center'} placeholder='00'/></TimeBox></TimeDiv>
              </RowTimeDiv>
            </RowTitle>
            <RowTitle align={'center'}>
              <Text _size={15} height={'44px'}>금요일</Text>
              <RowTimeDiv>
                <TimeDiv><TimeBox><Input  align={'center'} placeholder='09'/></TimeBox>:<TimeBox><Input  align={'center'} placeholder='00'/></TimeBox></TimeDiv>
                ~
                <TimeDiv><TimeBox><Input  align={'center'} placeholder='22'/></TimeBox>:<TimeBox><Input  align={'center'} placeholder='00'/></TimeBox></TimeDiv>
              </RowTimeDiv>
            </RowTitle>
            <RowTitle align={'center'}>
              <Text _size={15} height={'44px'}>토요일</Text>
              <RowTimeDiv>
                <TimeDiv><TimeBox><Input  align={'center'} placeholder='09'/></TimeBox>:<TimeBox><Input  align={'center'} placeholder='00'/></TimeBox></TimeDiv>
                ~
                <TimeDiv><TimeBox><Input  align={'center'} placeholder='22'/></TimeBox>:<TimeBox><Input  align={'center'} placeholder='00'/></TimeBox></TimeDiv>
              </RowTimeDiv>
            </RowTitle>
            <RowTitle align={'center'}>
              <Text _size={15} height={'44px'}>일요일</Text>
              <RowTimeDiv>
                <TimeDiv><TimeBox><Input  align={'center'} placeholder='09'/></TimeBox>:<TimeBox><Input  align={'center'} placeholder='00'/></TimeBox></TimeDiv>
                ~
                <TimeDiv><TimeBox><Input  align={'center'} placeholder='22'/></TimeBox>:<TimeBox><Input  align={'center'} placeholder='00'/></TimeBox></TimeDiv>
              </RowTimeDiv>
            </RowTitle>
          </ContentDiv>


        <ContentDiv>
          <ContentTitle>수령 안내</ContentTitle>
          <InputBox height={120}>
            <Input
              placeholder='수령 안내 메시지를 입력해주세요.'
            />
          </InputBox>
        </ContentDiv>
        </TabContent>


        <TabBtn>수정 완료</TabBtn>

      </TabDiv>

    </div>
  )
}

export default BusinessManagementTab1