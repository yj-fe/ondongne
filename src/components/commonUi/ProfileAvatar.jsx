import React from 'react'
import styled from 'styled-components'
import Profile from '../../assets/common/Profile.png'
import Camera from '../../assets/common/Camera.png'

export const ProfileDiv = styled.div`
  width: 100px;
  height: 100px;
  background: #FAFAFA;
  border-radius: 99px;
  display: flex;
  flex-direction: row-reverse;
  align-items: flex-end;
  
`
export const ImgStyle = styled.img`
  position: absolute;
  width: 100px;
  height: 100px;
  background: #FAFAFA;
  border-radius: 99px;
`
export const CameraStyle = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 99px;
  z-index: 10;
`

function ProfileAvatar() {
  return (
    <div>
      <ProfileDiv>
        <ImgStyle
        src={Profile}
        >
          {/* <Avatar src={Avatar}> */}
        </ImgStyle>
        <CameraStyle
          src={Camera}
        >
        </CameraStyle>
      </ProfileDiv> 
    </div>
  )
}

export default ProfileAvatar