import styled from 'styled-components'

export const PhoneToggleInputForm = styled.form`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 8px;
  width: 100%;
  height: 48px;
`
export const PhoneToggleInput = styled.input`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 12px 16px;
  width: calc(100% - 90px);
  height: 48px;
  background: #FFFFFF;
  border: 1px solid #EEEEEE;
  border-radius: 4px;
  color: 'gray900';
  font-family: 'Pretendard';
  font-style: normal;
  font-size: 16px;
  &:focus{
    background: #FFFFFF;
    color: #212121;
  }
  &::-webkit-inner-spin-button { 
   display: none;
  }
  &::placeholder{
    color: #BDBDBD;
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
