import styled from 'styled-components'
export const PhoneRequestForm = styled.form`
  box-sizing: border-box;
  display: flex;
  justify-items: flex-start;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  width: 100%;
  height: 48px;
  background: #FFFFFF;
  border: 1px solid #EEEEEE;
  border-radius: 4px;
  margin-top: 8px;
  margin-bottom: 16px;
`
export const PhoneRequestInput = styled.input`
  font-family: 'Pretendard';
  font-style: normal;
  width: calc(100% - 80px);
  height: 24px;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: black;
  &::-webkit-inner-spin-button { 
   display: none;
  }
  &::placeholder{
    color: #BDBDBD;
  }
`
export const AuthTimerStyle = styled.div`
  display: flex;  
  width: 38px;
  height: 20px;
  font-weight: 400;
  font-size: 14px;
  color: #1565C0;
`
export const PhoneRequestButton = styled.button`
  width: 100%;
  height: 52px;
  background: ${ props => props.color  ? "#0B806F" : "#e0e0e0"};
  border-radius: 4px;
  font-weight: 700;
  font-size: 16px;
  text-align: center;
  color: #FFFFFF;
`