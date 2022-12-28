import styled from 'styled-components'

export const InputForm = styled.form`

  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  gap: 24px;
  width: 688px;
  height: 48px;
  background: #F5F5F5;
  border: 1px solid #EEEEEE;
  border-radius: 4px;
  &:focus-within{
    background: #FFFFFF;
  }
`
export const Input = styled.input`
  width: 550px;
  height: 24px;
  font-weight: 400;
  font-size: 16px;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #1E1E1E;
  background-color: #F5F5F5;
`
export const ChangeButton = styled.button`
  display: flex;
  flex-direction: row;
  font-weight: 500;
  font-size: 14px;
  color: #0B806F;
`
export const PhoneToggleInputForm = styled.form`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 8px;
  width: 688px;
  height: 48px;
`
export const PhoneToggleInput = styled.input`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 12px 16px;
  width: 599px;
  height: 48px;
  background: #FFFFFF;
  border: 1px solid #EEEEEE;
  border-radius: 4px;
  color: #BDBDBD;
  &:focus{
    background: #FFFFFF;
    color: #212121;
  }
  &::-webkit-inner-spin-button { 
   display: none;
  }
`
export const RequestButton = styled.button`
  display: flex;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 13px 15px;
  gap: 4px;
  width: 81px;
  height: 48px;
  background: #FFFFFF;
  border: 1px solid #EEEEEE;
  border-radius: 4px;
  font-weight: 400;
  font-size: 14px;
  color: #212121;
`
export const AlertText = styled.p`
  font-weight: 400;
  font-size: 14px;
  color: #D32F2F;
  margin-top: 8px;
`
