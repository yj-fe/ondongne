import styled from 'styled-components'

export const SignupBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 32px 40px 0;
  gap: 40px;
  position: absolute;
  left: 596px;
  right: 596px;
  top: 60px;
  background: #ffffff;

  @media only screen and (max-width: 390px) {
    top: 104px;
    padding: 40px 20px;
    gap: 40px;
    left: 0px;
    right: 0px;
    width: 390px;
  }
`
export const RequestTextStyle = styled.p`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 8px;
  width: 100%;
  height: 60px;
  flex: none;

  /* @media only screen and (max-width: 390px) {
    width: 350px;
  } */
`
export const RequestText = styled.p`
  width: 648px;
  height: 32px;
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  color: #212121;
  flex: none;
  align-self: stretch;
  flex-grow: 0;
`
export const RequestInfo = styled.p`
  width: 648px;
  height: 20px;
  font-weight: 300;
  font-size: 15px;
  line-height: 20px;
  color: #424242;
  flex: none;
  align-self: stretch;
  flex-grow: 0;
`
export const InputForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 12px;
  width: 100%;

`
export const RequesInputForm = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  gap: 12px;
  width: 100%;
  height: auto;
`
export const RequesInput = styled.input`
  display: flex;
  flex-direction: row;

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
  color: #212121;
`

export const AuthTimer = styled.div`
    position: absolute;
    top: 0;
    right: 5px;
    width: 90px;
    height: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    color: #4361EE;
`;