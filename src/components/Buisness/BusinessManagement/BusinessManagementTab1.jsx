import React, { useState } from 'react'
import Camera from '../../../assets/common/Camera.png'
import { ReactComponent as Right } from "../../../assets/main/right.svg";
import CheckBox from '../../commonUi/CheckBox';

import ProfileAvatar from '../../commonUi/ProfileAvatar'
import { Text } from '../../commonUi/Text';
import {TimeBox,TimeDiv,RowTimeDiv,DayDiv,DayBox,RowTitle,RowInput,InputText,TabDiv,TabProfileDiv,ProfileBtnDiv,CameraImg,AvatarDiv,TabContent,RowDiv,ContentDiv,ContentTitle,TitleInfo,TitleInfoDiv,RightStyle,TabBtn,InputBox,RowInfoDiv,Input} from './BusinessManagementTabStyle'

// 상점정보
function BusinessManagementTab1() {

  const [mobox, setMoBox] = useState(false);
  const [tubox, setTuBox] = useState(false);
  const [webox, setWeBox] = useState(false);
  const [thbox, setThBox] = useState(false);
  const [fibox, setFiBox] = useState(false);
  const [sabox, setSaBox] = useState(false);
  const [subox, setSuBox] = useState(false);
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

{/* ============== 상점명 ============== */}
          <ContentDiv>
            <ContentTitle>상점명</ContentTitle>
            <TitleInfoDiv>
              <Input
                placeholder='아재의 과일'
              />
            </TitleInfoDiv>
          </ContentDiv>


{/* ============== 활동지역 ============== */}
          <ContentDiv>
            <ContentTitle>활동지역</ContentTitle>
            <TitleInfoDiv>
              <TitleInfo>풍무동, 사우동, 걸포동 외 4개</TitleInfo>
              <RightStyle><Right/></RightStyle>
            </TitleInfoDiv>
          </ContentDiv>


{/* ============== 상점 소개 ============== */}
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


{/* ============== 배달 금액/최소 주문 ============== */}
          <RowDiv>
            <ContentDiv>
              <ContentTitle>배달 금액(원)</ContentTitle>
              <TitleInfoDiv>
              <InputText>￦ </InputText>
                <Input
                placeholder='0'/>
              </TitleInfoDiv>
            </ContentDiv>
            <ContentDiv>
              <ContentTitle>최소 주문 금액(원)</ContentTitle>
              <TitleInfoDiv>
              <InputText>￦ </InputText>
              <Input
                placeholder='0'/>
              </TitleInfoDiv>
            </ContentDiv>
          </RowDiv>


{/* ============== 매장 오픈 날짜 ============== */}
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


{/* ============== 휴무일 ============== */}
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
                <DayBox
                  onClick={()=>{setMoBox(!mobox)}}
                  color={mobox}
                >
                월</DayBox>
                <DayBox
                  onClick={()=>{setTuBox(!tubox)}}
                  color={tubox}
                >
                화</DayBox>
                <DayBox
                  onClick={()=>{setWeBox(!webox)}}
                  color={webox}
                >
                수</DayBox>
                <DayBox
                  onClick={()=>{setThBox(!thbox)}}
                  color={thbox}
                >
                목</DayBox>
                <DayBox
                  onClick={()=>{setFiBox(!fibox)}}
                  color={fibox}
                >
                금</DayBox>
                <DayBox
                  onClick={()=>{setSaBox(!sabox)}}
                  color={sabox}
                >
                토</DayBox>
                <DayBox
                  onClick={()=>{setSuBox(!subox)}}
                  color={subox}
                >
                일</DayBox>
              </DayDiv>
            </ContentDiv>
          </RowDiv>


{/* ============== 운영 시간 ============== */}
          <ContentDiv>
              <ContentTitle>운영 시간</ContentTitle>
            <RowTitle align={'center'}>
              <Text _size={15} height={'44px'}>월요일</Text>
              <RowTimeDiv>
                <TimeDiv color={mobox}><TimeBox><Input color={mobox} align={'center'} placeholder='09'/></TimeBox>:<TimeBox><Input color={mobox} align={'center'} placeholder='00'/></TimeBox></TimeDiv>
                ~
                <TimeDiv color={mobox}><TimeBox><Input color={mobox} align={'center'} placeholder='22'/></TimeBox>:<TimeBox><Input color={mobox} align={'center'} placeholder='00'/></TimeBox></TimeDiv>
              </RowTimeDiv>
            </RowTitle>
            <RowTitle align={'center'}>
              <Text _size={15} height={'44px'}>화요일</Text>
              <RowTimeDiv>
                <TimeDiv color={tubox}><TimeBox><Input color={tubox} align={'center'} placeholder='09'/></TimeBox>:<TimeBox><Input color={tubox} align={'center'} placeholder='00'/></TimeBox></TimeDiv>
                ~
                <TimeDiv color={tubox}><TimeBox><Input color={tubox} align={'center'} placeholder='22'/></TimeBox>:<TimeBox><Input color={tubox} align={'center'} placeholder='00'/></TimeBox></TimeDiv>
              </RowTimeDiv>
            </RowTitle>
            <RowTitle align={'center'}>
              <Text _size={15} height={'44px'}>수요일</Text>
              <RowTimeDiv>
                <TimeDiv color={webox}><TimeBox><Input color={webox} align={'center'} placeholder='09'/></TimeBox>:<TimeBox><Input color={webox} align={'center'} placeholder='00'/></TimeBox></TimeDiv>
                ~
                <TimeDiv color={webox}><TimeBox><Input color={webox} align={'center'} placeholder='22'/></TimeBox>:<TimeBox><Input color={webox} align={'center'} placeholder='00'/></TimeBox></TimeDiv>
              </RowTimeDiv>
            </RowTitle>
            <RowTitle align={'center'}>
              <Text _size={15} height={'44px'}>목요일</Text>
              <RowTimeDiv>
                <TimeDiv color={thbox}><TimeBox><Input color={thbox} align={'center'} placeholder='09'/></TimeBox>:<TimeBox><Input color={thbox} align={'center'} placeholder='00'/></TimeBox></TimeDiv>
                ~
                <TimeDiv color={thbox}><TimeBox><Input color={thbox} align={'center'} placeholder='22'/></TimeBox>:<TimeBox><Input color={thbox} align={'center'} placeholder='00'/></TimeBox></TimeDiv>
              </RowTimeDiv>
            </RowTitle>
            <RowTitle align={'center'}>
              <Text _size={15} height={'44px'}>금요일</Text>
              <RowTimeDiv>
                <TimeDiv color={fibox}><TimeBox><Input color={fibox} align={'center'} placeholder='09'/></TimeBox>:<TimeBox><Input color={fibox} align={'center'} placeholder='00'/></TimeBox></TimeDiv>
                ~
                <TimeDiv color={fibox}><TimeBox><Input color={fibox} align={'center'} placeholder='22'/></TimeBox>:<TimeBox><Input color={fibox} align={'center'} placeholder='00'/></TimeBox></TimeDiv>
              </RowTimeDiv>
            </RowTitle>
            <RowTitle align={'center'}>
              <Text _size={15} height={'44px'}>토요일</Text>
              <RowTimeDiv>
                <TimeDiv color={sabox}><TimeBox><Input color={sabox} align={'center'} placeholder='09'/></TimeBox>:<TimeBox><Input color={sabox} align={'center'} placeholder='00'/></TimeBox></TimeDiv>
                ~
                <TimeDiv color={sabox}><TimeBox><Input color={sabox} align={'center'} placeholder='22'/></TimeBox>:<TimeBox><Input color={sabox} align={'center'} placeholder='00'/></TimeBox></TimeDiv>
              </RowTimeDiv>
            </RowTitle>
            <RowTitle align={'center'}>
              <Text _size={15} height={'44px'}>일요일</Text>
              <RowTimeDiv>
                <TimeDiv color={subox}><TimeBox><Input color={subox} align={'center'} placeholder='09'/></TimeBox>:<TimeBox><Input color={subox} align={'center'} placeholder='00'/></TimeBox></TimeDiv>
                ~
                <TimeDiv color={subox}><TimeBox><Input color={subox} align={'center'} placeholder='22'/></TimeBox>:<TimeBox><Input color={subox} align={'center'} placeholder='00'/></TimeBox></TimeDiv>
              </RowTimeDiv>
            </RowTitle>
          </ContentDiv>
          
          
{/* ============== 수령 안내 ============== */}
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