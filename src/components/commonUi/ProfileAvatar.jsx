import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import defaultProfile from '../../assets/common/Profile.png'
import Camera from '../../assets/common/Camera.png'
import { memberProfileChange } from 'service/member'
import { imageValidation } from 'utils/utils'
import Alert from './Alert'

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
  overflow: ${props => props._hidden};
  object-fit: ${props => props._object};
  background-repeat: no-repeat;
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

function ProfileAvatar({ profile, onChange = null }) {
  const [alert, setAlert] = useState(null);
  const [file, setFile] = useState(null)

  const fileUpload = async (e) => {
    const uploadFile = e.target.files[0];
    const valid = imageValidation(uploadFile);

    if (valid) {
      return setAlert({
        title: "프로필 등록 실패",
        contents: valid,
        buttonText: "확인",
        onButtonClick: () => setAlert(null),
        onOverlayClick: () => setAlert(null),
      })
    }

    const response = await memberProfileChange(uploadFile);
    const { data } = response.data;
    if (data) setFile(data)
  }

  useEffect(() => {
    if (profile) setFile(profile)
  }, [profile])

  return (
    <>
      <ProfileDiv htmlFor="profile">
        <ImgStyle _hidden='hidden' _object='cover' src={file ?? defaultProfile} />
        <CameraStyle src={Camera} />
      </ProfileDiv>
      <FileInput type="file" id="profile" onChange={onChange ?? fileUpload} />
      {
        alert &&
        <Alert
          title={alert.title}
          contents={alert.contents}
          buttonText={alert.buttonText}
          onButtonClick={alert.onButtonClick}
          onOverlayClick={alert.onOverlayClick}
        />
      }
    </>
  )
}

export default ProfileAvatar