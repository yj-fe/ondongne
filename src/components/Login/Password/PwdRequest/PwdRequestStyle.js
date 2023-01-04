import styled from "styled-components";

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
  width: 648px;
  height: 112px;
  margin-top: 40px;

  @media only screen and (max-width: 390px) {
    width: 100%;
  }
`;
export const Input = styled.input`
  box-sizing: border-box;
  width: 100%;
  height: 48px;
  background: #ffffff;
  border-bottom: 1px solid #e0e0e0;
  padding: 12px;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: #212121;
  &::placeholder{
    color: #BDBDBD;
  }
  &:focus {
    outline: none;
    border-bottom: 1px solid #616161;
    color: #212121;
  }

`;
export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  gap: 12px;
  width: 648px;
  height: 48px;

  @media only screen and (max-width: 390px) {
    width: 100%;
  }
`
export const RequesInput = styled.input`
  box-sizing: border-box;
  width: calc(100% - 90px);
  height: 48px;
  background: #ffffff;
  border-bottom: 1px solid #e0e0e0;
  flex: none;
  padding: 12px;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #212121;
  &::placeholder{
    color: #BDBDBD;
  }
  &:focus {
    outline: none;
    border-bottom: 1px solid #616161;
    color: #212121;
  }
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  @media only screen and (max-width: 390px) {
    width: 80%;
  }
`;
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
  background: #ffffff;
  border: 1px solid #eeeeee;
  border-radius: 4px;
  flex: none;

  font-weight: 400;
  font-size: 14px;
  line-height: 20px;

  color: #212121;
`;