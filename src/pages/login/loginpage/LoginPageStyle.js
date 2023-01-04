import styled from "styled-components";

export const LogoImg = styled.img`
  width: 172px;
  height: 38px;
`;
export const InputForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  width: 100%;

  @media only screen and (max-width: 728px) {
    width: 100%;
  }
`;
export const Input = styled.input`
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  height: 48px;
  /* border-bottom: 1px solid #e0e0e0; */
  border-bottom: 1px solid ${props => props.errorEmail ? "#D32F2F" :"#e0e0e0"};
  padding: 12px;
  /* margin: 40px 40px 0px 40px; */
  font-weight: 400;
  font-size: 16px;

  color: #bdbdbd;
  &:focus {
    outline: none;
    border-bottom: 1px solid #616161;
    color: #212121;
  }

  @media only screen and (max-width: 728px) {
    width: 100%;
  }
`;
export const InputError = styled.p`
  align-items: flex-start;
  font-weight: 400;
  font-size: 13px;
  color: #D32F2F;
  padding: 0;
  margin: 0;
`
export const PwdContainer = styled.div`
  justify-content: space-between;
  box-sizing: border-box;
  width: 100%;
  height: 48px;
  /* border-bottom: 1px solid #D32F2F; */
  /* border-bottom: 1px solid #e0e0e0; */
  border-bottom: 1px solid ${props => props.errorPwd ? "#D32F2F" :"#e0e0e0"};
  padding: 12px;

  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #bdbdbd;

  @media only screen and (max-width: 728px) {
    width: 100%;
  }
`;
export const PwdInput = styled.input`
  width: 80%;
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
`;
export const LoginButton = styled.button`
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 52px;
  background: ${ props => props.color  ? "#0B806F" : "#e0e0e0"};
  border-radius: 4px;
  display: flex;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;

  @media only screen and (max-width: 728px) {
    width: 100%;
  }
`;

export const FindStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 16px;
  `;
export const FindAccount = styled.button`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #424242;
  flex: none;
  flex-grow: 0;
  float: left;

  @media only screen and (max-width: 728px) {
    font-weight: 300;
  }
`;
export const GapContainer = styled.div`
display: flex;
flex-direction: column;
width: 100%;
`;
export const SnsStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 28px;
  width: 100%;
  height: 100px;
`;
export const SnsTextStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 24px;

  width: 100%;
  height: 20px;
`;
export const Snstext = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #757575;
  flex: none;
  text-align: center;
`;
export const SnsIcon = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 20px;
  width: 100%;
  height: 52px;
  flex: none;
  align-self: stretch;
  flex-grow: 0;
`;
export const LoginFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 4px;
  width: 100%;
  margin-top: 150px;
  bottom: 32px;
`;
export const LoginText = styled.p`
  font-weight: 400;
  font-size: 14px;
  color: #424242;
`;
export const Button = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 20px;
`;
export const SignupText = styled.p`
  font-weight: 600;
  font-size: 14px;
  color: #424242;
`;
export const ArrowStyle = styled.svg`
  width: 18px;
  padding-top: 1px;
`;