import styled from 'styled-components'
export const MemberBody = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #cccccc;
  flex-direction: column;
  /* padding-bottom: 56px; */
  height: 100vh;
  /* gap: 8px; */
`
export const MemberContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #FFFFFF;
  padding: 24px 20px;
  margin-top: 60px;
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
export const WithdrawalDiv1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 40px;
  width: 688px;
  height: 204px;
`

export const TextTitle = styled.p`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 8px;
  width: 100%;
  height: 88px;
`
export const TextTitleBold = styled.p`
  font-weight: 600;
  font-size: 20px;
  align-items: center;
  color: #212121;
`
export const TextTitleNomal = styled.p`
  font-weight: 300;
  font-size: 14px;
  line-height: 20px;
  display: flex;
  align-items: center;
  color: #757575;
`
export const TextInfo = styled.p`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  /* gap: 12px; */
  width: 100%;
  height: auto;
`
export const InfoTitle = styled.p`
  font-weight: 600;
  font-size: 15px;
  line-height: 20px;
  display: flex;
  align-items: center;
  color: #212121;
`
export const InfoText = styled.p`
  font-weight: 400;
  font-size: 15px;
  align-items: center;
  padding-top: 12px;
  color: #212121;
`
export const CheckForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 16px;
  width: 100%;
  height: 136px;
`

export const CheckTitleDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 8px;
  width: 100%;
  height: auto;

`
export const CheckStyle = styled.div`
  width: 20px;
  height: 20px;
`
export const CheckTitle = styled.p`
  font-weight: 400;
  font-size: 14px;
  display: flex;
  /* align-items: center; */
  color: #212121;
`
export const InputDiv = styled.div`
  /* box-sizing: border-box; */
  gap: 4px;
  width: 100%;
  height: 100px;
  background: #FFFFFF;
  border: 1px solid #EEEEEE;
  border-radius: 4px;
  padding: 12px;
`
export const CheckInput = styled.textarea`
  font-weight: 400;
  font-size: 15px;
  color: #9E9E9E;
  /* width: 100%; */
  height: 100%;
  padding: 12px;
  background: #FFFFFF;
  /* border: 1px solid #EEEEEE; */
  /* border-radius: 4px; */
  /* resize: none; */
  /* outline: none; */
  font-family: 'Pretendard';
  font-style: normal;
&::placeholder{
  color: #9E9E9E;
}
`
export const ButtonDiv = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 4px;
  gap: 4px;
  width: 100%;
  height: 56px;
  background: ${props => props.btn ? "#0B806F" :"#E0E0E0"};
  border-radius: 4px;
  font-weight: 600;
  font-size: 18px;
  text-align: center;
  color: #FFFFFF;

`
