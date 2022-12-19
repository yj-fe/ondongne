import styled from 'styled-components'
export const MemberBody = styled.div`
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
export const MemberContainer = styled.div`
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
export const MemberProfileDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 16px;
  isolation: isolate;

  width: 350px;
  height: 166px;
`
export const ProfileDiv = styled.div`
  /* width: 100px;
  height: 100px;
  background: #FAFAFA;
  border-radius: 99px;
  display: flex;
  flex-direction: row;
  align-items: flex-start; */
  
`
export const ImgStyle = styled.img`
  /* width: 100px;
  height: 100px; */
`
export const CameraStyle = styled.img`
  /* display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 4px;
  position: absolute; */
  /* width: 32px;
  height: 32px;
  border-radius: 99px; */
`
export const ProfileTextDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  width: 350px;
  height: 50px;
`
export const TextName = styled.p`
  font-weight: 600;
  font-size: 18px;
  text-align: center;
  color: #212121;
`
export const TextEmail = styled.p`
  font-weight: 400;
  font-size: 16px;
  text-align: center;
  color: #757575;
`
export const MemberInfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 24px;

  width: 688px;
  height: 344px;
`
export const InfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 8px;
  width: 688px;
  height: auto;
`
export const TitleText = styled.p`
  font-weight: 600;
  font-size: 16px;
  color: #212121;
`
export const InputForm = styled.form`
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
export const Input = styled.input`
  width: 600px;
  height: 24px;
  font-weight: 400;
  font-size: 16px;
  color: #212121;
`
export const ChangeButton = styled.button`
  display: flex;
  flex-direction: row;
  font-weight: 500;
  font-size: 14px;
  color: #0B806F;
`
export const MemberLinkDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 8px;

  width: 101px;
  height: 18px;
`