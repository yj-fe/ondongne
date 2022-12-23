import styled from 'styled-components'
export const TabDiv = styled.p`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  width: 728px;
`
export const TabProfileDiv = styled.p`
  width: 100%;
  height: 228px;
  background: #E0E0E0;
  padding: 16px;
  display: flex;
  flex-direction: row;
  justify-content: right;
`
export const ProfileBtnDiv = styled.p`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 6px 8px;
  gap: 4px;

  width: 93px;
  height: 30px;

  background: #FFFFFF;
  border-radius: 4px;

  font-weight: 400;
  font-size: 12px;
  color: #212121;
`
export const CameraImg = styled.img`
  width: 18px;
  height: 18px;
`
export const AvatarDiv = styled.div`
  position: absolute;
  top: 207px;
`
export const TabContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px ;
  gap: 40px;
  width: 100%;
  height: auto;
  background: #FFFFFF;
`
export const TabBtn = styled.button`
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: center;
  width: 728px;
  height: 56px;
  bottom: 0px;
  background: #0B806F;
  font-weight: 700;
  font-size: 18px;
  text-align: center;
  color: #FFFFFF;
`
export const ContentDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 16px;
  width: 100%;
  height: auto;
`
export const RowDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: flex-start;
  gap: 16px;
  width: 100%;
  height: auto;
`
export const RowTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items:  ${props => props.align || 'flex-start'};
  width: 100%;
  height: ${props => props.height || 'auto'};
`
export const ContentTitle = styled.p`
  font-weight: 600;
  font-size: 15px;
  color: #212121;
`
export const TitleInfoDiv = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  padding: 14px 12px;
  gap: 4px;
  width: 100%;
  height: 48px;
  background: #FFFFFF;
  border-bottom: 1px solid #EEEEEE;
`
export const InfoBoxDiv = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 14px 12px;
  width: 688px;
  height: 48px;
  background: #FFFFFF;
  border: 1px solid #EEEEEE;
  border-radius: 4px;
`
export const TitleInfo = styled.p`
  font-weight: ${props => props.weight || 400};
  font-size: 16px;
  color: ${props => props.color || 'gray900'};
  
`
export const TextCenter = styled.p`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 14px 12px;
  width: 688px;
  height: 48px;
  background: #FFFFFF;
  border: 1px solid #EEEEEE;
  border-radius: 4px;
`
export const RightStyle = styled.div`
  width: 24px;
  height: 24px;
`
export const InputBox = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 12px;
  gap: 4px;
  width: 100%;
  height: ${props => props.height}px;
  /* height: 200px; */
  background: #FFFFFF;
  border: 1px solid #EEEEEE;
  border-radius: 4px;
`
export const Input = styled.input`
  font-weight: 400;
  font-size: 16px;
  width: 100%;
  background-color:  ${props => props.color ? '#EEEEEE' : 'none'};
  text-align: ${props => props.align || null};
  color: #BDBDBD;
  &:focus{
    color: #212121;
  }
  &::-ms-reveal {
  display: none;
  }

`
export const RowInput = styled.input`
  font-weight: 400;
  font-size: 16px;
  width: 100%;
  color: #BDBDBD;
  text-align: center;
  &:focus{
    color: #212121;
  }
`
export const InputText = styled.p`
  display: flex;
  flex-direction: row;
  justify-content: right;
  font-weight: 400;
  font-size: 16px;
  color: #212121;
`
export const DayDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 8px;
  width: 688px;
  height: 48px;
  justify-content: space-evenly;
`
export const DayBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 16px;
  gap: 4px;
  width: 100%;
  height: 48px;
  background: ${props=>props.color ? '#E1F3F2' : '#F5F5F5'};
  border-radius: 4px;
  font-weight: 400;
  font-size: 16px;
  color: ${props=>props.color ? '#0B806F' : '#424242'};
`
export const BankToggleDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  isolation: isolate;
  position: absolute;
  width: 688px;
  height: 192px;
  justify-content: center;
  background: #FFFFFF;
  box-shadow: 0px 3px 16px rgba(0, 0, 0, 0.06);
  border-radius: 4px;
  overflow: scroll;
  &::-webkit-scrollbar-thumb {
      background-color: #BDBDBD;
      border-radius: 99px;
  }
  &::-webkit-scrollbar {
      width: 4px; 
  }
`
export const BankListDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 12px 16px;
  width: 100%;
  height: 48px;
`
export const RowTimeDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 8px;
  width: 609px;
  height: 44px;
`
export const TimeDiv = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  width: 291.5px;
  height: 100%;
  background: ${props=>props.color ? '#EEEEEE' : '#FFFFFF'};
  border: 1px solid #EEEEEE;
  border-radius: 4px;
`
export const TimeBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px 8px;
  width: 143.75px;
  height: 100%;
`
