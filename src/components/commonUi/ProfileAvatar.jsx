import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import defaultProfile from '../../assets/common/Profile.png'
import Camera from '../../assets/common/Camera.png'
import { memberProfileChange } from 'service/member'

export const ProfileDiv = styled.label`
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

const FileInput = styled.input`
  display: none;
`;

function ProfileAvatar({profile}) {
  const [file, setFile] = useState()

  const fileUpload = async (e) => {
    const file = e.target.files[0];
    const response = await memberProfileChange(file);
    const {data, message} = response.data;
    if(data) setFile(data)
  }

  useEffect(() => {
    if(profile) setFile(profile)
  }, [profile])

  return (
    <div>
      <ProfileDiv for="profile">
        <ImgStyle
        src={file ? file : defaultProfile}
        >
          {/* <Avatar src={Avatar}> */}
        </ImgStyle>
        <CameraStyle
          src={Camera}
        >
        </CameraStyle>
      </ProfileDiv> 
      <FileInput type="file" id="profile" onChange={fileUpload}/>
    </div>
  )
}

export default ProfileAvatar