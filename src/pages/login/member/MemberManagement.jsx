import React from 'react'
import styled from 'styled-components'
import BasicHeader from '../../../components/Main/BasicHeader'
import Avatar from '../../../assets/common/avatar.png'
import { ReactComponent as Camera } from "../../../assets/login/camera.svg";


const MemberBody = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #cccccc;
  flex-direction: column;
  /* padding-bottom: 56px; */
  height: 100vh;
  /* margin-top: 60px; */
  /* gap: 8px; */
`
const MemberContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #FFFFFF;
  padding: 24px 20px;
  gap: 40px;
  width: 728px;
  height: 100vh;  
  > div {
    /* max-width: 728px; */
    width: 100%;

    @media only screen and (max-width: 728px) { 
      width: 100%;
    }
  }
`
const MemberProfileDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 16px;
  isolation: isolate;

  width: 350px;
  height: 166px;
`
const ProfileDiv = styled.div`
  /* width: 100px;
  height: 100px;
  background: #FAFAFA;
  border-radius: 99px;
  display: flex;
  flex-direction: row;
  align-items: flex-start; */
  
`
const ImgStyle = styled.img`
  /* width: 100px;
  height: 100px; */
`
const CameraStyle = styled.img`
  /* display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 4px;
  position: absolute; */
  /* width: 32px;
  height: 32px;
  border-radius: 99px; */
`
const ProfileTextDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  width: 350px;
  height: 50px;
`
const TextName = styled.p`
  font-weight: 600;
  font-size: 18px;
  text-align: center;
  color: #212121;
`
const TextEmail = styled.p`
  font-weight: 400;
  font-size: 16px;
  text-align: center;
  color: #757575;
`
const MemberInfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 24px;

  width: 688px;
  height: 344px;
`
const InfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 8px;
  width: 688px;
  height: auto;
`
const TitleText = styled.p`
  font-weight: 600;
  font-size: 16px;
  color: #212121;
`
const InputForm = styled.form`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 12px 16px;
  gap: 24px;
  width: 688px;
  height: 48px;
  background: #F5F5F5;
  border: 1px solid #EEEEEE;
  border-radius: 4px;
`
const Input = styled.input`
  width: 600px;
  height: 24px;
  font-weight: 400;
  font-size: 16px;
  color: #212121;
`
const ChangeButton = styled.button`
  display: flex;
  flex-direction: row;
  font-weight: 500;
  font-size: 14px;
  color: #0B806F;
`
const MemberLinkDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 8px;

  width: 101px;
  height: 18px;
`

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