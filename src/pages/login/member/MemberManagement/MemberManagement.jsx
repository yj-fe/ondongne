import React from 'react'
import BasicHeader from '../../../../components/Main/Main/BasicHeader/BasicHeader'
import Avatar from '../../../../assets/common/avatar.png'
import { ReactComponent as Camera } from "../../../../assets/login/camera.svg";

import {MemberBody,MemberContainer,MemberInfoDiv,MemberLinkDiv,MemberProfileDiv,CameraStyle,TextEmail,TextName,TitleText,ProfileDiv,ProfileTextDiv,ImgStyle,InfoDiv,Input,ChangeButton,InputForm} from './MemberManagementStyle'


function MemberManagement() {


  
  return (
    <div>
      <BasicHeader title="회원정보 관리"/>
      <MemberBody>

{/* ============ 회원정보관리 ============ */}
        <MemberContainer>
          <MemberProfileDiv>    
            <ProfileDiv>
              <ImgStyle>
                {/* <Avatar/> */}
              </ImgStyle>
              <CameraStyle>
                {/* <Camera/> */}
              </CameraStyle>
            </ProfileDiv> 
            <ProfileTextDiv>
              <TextName>아이덴잇</TextName>
              <TextEmail>sosangongin@email.com</TextEmail>
            </ProfileTextDiv> 
            
          </MemberProfileDiv> 

          <MemberInfoDiv>     
            <InfoDiv>
              <TitleText>닉네임</TitleText>
              <InputForm>
                <Input
                  placeholder='아이덴잇'
                />
                <ChangeButton>변경</ChangeButton>
              </InputForm>
            </InfoDiv>

          </MemberInfoDiv>        

          <MemberLinkDiv>     
          </MemberLinkDiv>          
        </MemberContainer>
      </MemberBody>
    </div>
  )
}

export default MemberManagement