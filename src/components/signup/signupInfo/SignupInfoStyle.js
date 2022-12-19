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
  /* height: 700px; */
  top: 60px;
  background: #ffffff;

  @media only screen and (max-width: 390px) {
    /* top: 104px; */
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
  width: 648px;
  height: 60px;
  flex: none;
  @media only screen and (max-width: 390px) {
    width: 350px;
  }
`
export const RequestText = styled.div`
  font-weight: 600;
  font-size: 24px;
  color: #212121;
`
export const RequestInfo = styled.p`
  font-weight: 300;
  font-size: 15px;
  color: #424242;
`
export const RequesInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 648px;

  @media only screen and (max-width: 390px) {
    width: 350px;
  }
`

export const RequestInputForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 0px;
  gap: 12px;
  margin-top: 40px;

  width: 648px;
  /* height: auto; */
`
export const RequesInputTitle = styled.p`
  font-weight: 500;
  font-size: 16px;
  color: #212121;
`
export const RequestInputDiv = styled.div`
  display: flex;
  flex-direction: ${props => props.direction };
  align-items: center;
  padding: 0px;
  gap: 12px;
  width: 648px;
  /* height: 48px; */

  @media only screen and (max-width: 390px) {
    width: 350px;
  }
`
export const RequestInput = styled.input`
  box-sizing: border-box;
  width: 546px;
  height: 48px;
  background: #FFFFFF;
  padding: 12px;
  border-bottom: 1px solid #E0E0E0;
  
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #BDBDBD;
  
  &:focus {
    outline: none;
    border-bottom: 1px solid #616161;
    color: #212121;
  }
  
  @media only screen and (max-width: 390px) {
    width: 257px;
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
export const PwdContainer = styled.div`
  box-sizing: border-box;
  /* align-items: center; */
  width: 648px;
  height: 48px;
  border-bottom: 1px solid #e0e0e0;
  padding: 12px;

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #bdbdbd;

  @media only screen and (max-width: 390px) {
    width: 350px;
  }
`;
export const PwdInput = styled.input`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #bdbdbd;
  outline: none;
  &::-ms-reveal {
   display: none;
  }
`;
export const EyeOffStyle = styled.div`
  float: right;
  /* display: flex;  */
  /* justify-content: center;  */
  /* align-items: center */
`;
export const SignupButton = styled.button`
  position: absolute;
  bottom: 0;
  width: 728px;
  height: 56px;
  background: ${ props => props.color  ? "#0B806F" : "#e0e0e0"};
  font-weight: 700;
  font-size: 18px;
  text-align: center;
  color: #FFFFFF;
  left: 31%;
  
  @media only screen and (max-width: 390px) {
    align-items: center;
    width: 390px;
    left: auto;
  } 
`