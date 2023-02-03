import styled from "styled-components";
import { ReactComponent as Icon } from "assets/checkinput.svg";
export const CheckboxForm = styled.p`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 12px;
  width: 100%;
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
  align-items: center;
  padding-top: 10px;
`
export const Line = styled.div`
  width: 100%;
  height: 1px;
  background: #F5F5F5;
`
export const CheckboxText = styled.label`
  font-weight: ${props => props.weight};
  font-size: ${props => props.size};
  color: #212121;
`
export const CheckboxToggle = styled.div`
  align-items: center;
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