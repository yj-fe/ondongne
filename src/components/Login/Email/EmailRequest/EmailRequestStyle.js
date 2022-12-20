import styled from 'styled-components'
export const EmailRequestBody = styled.div``
export const RequestTextStyle = styled.p`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 0px;
  gap: 8px;

  @media only screen and (max-width: 390px) {
    width: 100%;
  }
`
export const RequestText = styled.div`
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  color: #212121;
`
export const RequestInfo = styled.p`
  font-weight: 300;
  font-size: 14px;
  line-height: 20px;
  color: #424242;
  @media only screen and (max-width: 390px) {
    width: 100%;
  }
`
export const RequestInputForm = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  gap: 12px;
  width: 648px;
  height: 48px;
  margin-top: 40px;
  margin-bottom: 16px;

  @media only screen and (max-width: 390px) {
    width: 100%;
  }
`
export const RequestInput = styled.input`
  box-sizing: border-box;
  width: 546px;
  height: 48px;
  background: #FFFFFF;
  border-bottom: 1px solid #E0E0E0;
  flex: none;
  padding: 12px;

  font-weight: 400;
  font-size: 16px;

  color: #BDBDBD;
  &:focus {
    outline: none;
    border-bottom: 1px solid #616161;
    color: #212121;
  }
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  @media only screen and (max-width: 390px) {
    width: 255px;
  }
`
export const RequestButton = styled.button`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 14px 16px;
  gap: 4px;
  width: 90px;
  height: 48px;
  background: #FFFFFF;
  border: 1px solid #EEEEEE;
  border-radius: 4px;
  flex: none;

  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color:  ${props => props.checked ? "#BDBDBD" : "#212121"};
  /* color: #212121; */
`