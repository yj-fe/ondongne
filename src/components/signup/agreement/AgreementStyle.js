import styled from "styled-components";
import { ReactComponent as Icon } from "../../../assets/checkinput.svg";

export const AgreementBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 32px 40px 0;
  margin-top: 60px;
  padding-top: 60px;
  gap: 60px;

  background: #FFFFFF;

  @media only screen and (max-width: 728px) {

  }
  > form {
    max-width: 728px;
    width: 100%;
    background-color: #fff;

    @media only screen and (max-width: 728px) { 
      width: 100%;
  
    }
  }
`
export const AgreementTextStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  width: 648px;
  /* height: 60px; */
  padding: 0px;
  gap: 8px;
  @media only screen and (max-width: 728px) {
    width: 100%;
  }
`
export const AgreementText = styled.p`
  width: 648px;
  height: 32px;
  font-weight: 600;
  font-size: 24px;
  color: #212121;
`
export const AgreementInfo = styled.p`
  height: 20px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  /* line-height: 20px; */
  color: #424242;
  @media only screen and (max-width: 728px) {
    width: 100%;
    font-size: 13px;
  }
  
`
export const CheckboxForm = styled.p`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 16px;

  /* width: 648px; */
  /* height: 293px; */
  @media only screen and (max-width: 728px) { 
    width: 100%;
  }
`
export const CheckboxInput = styled.form`
  display: flex;
  flex-direction: row;
  /* align-items: flex-start; */
  padding: 0px;
  gap: 8px;
  width: 648px;
  height: 24px;
`

export const CheckboxButton = styled.button`
`
export const Line = styled.div`
  width: 100%;
  height: 1px;
  background: #F5F5F5;
`
export const CheckInput = styled.input`
    box-sizing: border-box;

    width: 20px;
    height: 20px;
    border: 1px solid  ${props => props.checked ? "#0B806F" :"#E0E0E0"};
    background:  ${props => props.checked ? "#0B806F" :"#FFFFFF"};
    border-radius: 2px;
    outline: none;
    appearance: none;
  
${Icon}
`
// export const CheckboxButton = styled.button`
//   box-sizing: border-box;
//   width: 20px;
//   height: 20px;
//   background: #FFFFFF;
//   border: 1px solid #E0E0E0;
//   border-radius: 2px;
// `
export const CheckboxText = styled.label`
  font-weight: ${props => props.weight};
  font-size: ${props => props.size};
  color: #212121;
`
export const CheckboxToggle = styled.div`
  
  right: 0;
  display: flex;
  /* float: right; */
  /* clear: left; */
  /* align-items: flex-end; */
  padding-top: 7px;
`
export const NextButton = styled.button`
  position: fixed;
  /* align-items: center; */
  /* justify-content: center; */
  left: 0;
  right: 0;
  margin: 0 auto;
  bottom: 0;
  width: 728px;
  height: 56px;
  background: #0B806F;
  background: ${props => props.color ? "#0B806F" :"#E0E0E0"};
  font-weight: 700;
  font-size: 18px;
  line-height: 26px;
  text-align: center;
  color: #FFFFFF;
  @media only screen and (max-width: 728px) { 
    width: 100%;
  }
`

export const NextText = styled.p`
  position: absolute;
  height: 26px;
  left: calc(50% - 32px/2);
  top: calc(50% - 26px/2);

  font-weight: 700;
  font-size: 18px;
  line-height: 26px;
  text-align: center;
  color: #FFFFFF;
`