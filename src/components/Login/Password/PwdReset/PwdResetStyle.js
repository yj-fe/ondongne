import styled from "styled-components";



export const RequestTextStyle = styled.p`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 0px;
  gap: 8px;


`;
export const RequestText = styled.p`
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  color: #212121;
`;
export const RequestInfo = styled.p`
  font-weight: 300;
  font-size: 14px;
  line-height: 20px;
  color: #424242;
`;
export const RequesInputForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  width: 100%;

`;
export const RequestInputDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 12px;
  width: 100%;
  /* height: 48px; */

`
export const PwdContainer = styled.div`
  box-sizing: border-box;
  /* align-items: center; */
  width: 100%;
  height: 48px;
  border-bottom: 1px solid #e0e0e0;
  padding: 12px;

  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #bdbdbd;

`;
export const PwdInput = styled.input`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: black;
  outline: none;
  &::-ms-reveal {
   display: none;
  }
  &::placeholder{
    color: #BDBDBD;
  }
`;
export const EyeOffStyle = styled.div`
  float: right;
`;
export const ResetButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 4px;
  margin-top: 24px;
  gap: 4px;
  font-weight: 700;
  font-size: 16px;
  width: 100%;
  height: 52px;

  background: ${ props => props.color  ? "#0B806F" : "#e0e0e0"};
  color: #FFFFFF;
  border-radius: 4px;
`
