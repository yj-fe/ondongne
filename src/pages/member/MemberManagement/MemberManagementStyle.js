import styled from 'styled-components'
export const MemberBody = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #cccccc;
  flex-direction: column;
  /* padding-bottom: 56px; */
  height: 100vh;
  /* margin-top: 60px; */
  /* gap: 8px; */
`
export const MemberContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #FFFFFF;
  padding: 24px 20px;
  gap: 40px;
  width: 728px;
  height: 100vh;  
  margin-top: 60px;
  > div {
    /* max-width: 728px; */
    width: 100%;

    @media only screen and (max-width: 728px) { 
      width: 100%;
    }
  }
`
export const MemberProfileDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 16px;
  isolation: isolate;

  width: 100%;
  height: 166px;
`

export const ProfileTextDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px;
  width: 100%;
  height: 50px;
`
export const TextName = styled.p`
  font-weight: 600;
  font-size: 18px;
  text-align: center;
  color: #212121;
`
export const TextEmail = styled.p`
  font-weight: 400;
  font-size: 16px;
  text-align: center;
  color: #757575;
`
export const MemberInfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 24px;
  width: 688px;
  height: auto;
`
export const InfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 8px;
  width: 100%;
  height: auto;
`
export const TitleText = styled.p`
  font-weight: 600;
  font-size: 16px;
  color: #212121;
`
export const InputForm = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  gap: 24px;
  width: 100%;
  height: 48px;
  background: ${props=> props._bg || '#F5F5F5'};
  border: 1px solid #EEEEEE;
  border-radius: 4px;
  &:focus-within{
    background: #FFFFFF;
  }
`
export const InputFormOrder = styled.form`

  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  gap: 24px;
  width: 100%;
  height: ${props=>props._height || '48px'};
  background: #FFFFFF;
  border: 1px solid #EEEEEE;
  border-radius: 4px;
`
export const NameToggleInputForm = styled.form`

  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  gap: 24px;
  width: calc(100% - 40px);
  height: ${props=>props._height || '48px'};
  background: #FFFFFF;
  border: 1px solid #EEEEEE;
  border-radius: 4px;
`
export const MaxWidth = styled.div`
  max-width: ${props => props.theme.breakpoint.tablet}px;
  width: 100%;
`
// export const PwdResetToggleInput = styled.input`
//   width: 550px;
//   height: 24px;
//   font-weight: 400;
//   font-size: 16px;
//   font-weight: 400;
//   font-size: 16px;
//   line-height: 24px;
//   color: #1E1E1E;
//   background-color: #F5F5F5;
//   &:focus{
//     background: #FFFFFF;
//     color: #212121;
//   }
// `
// export const PhoneToggleInputForm = styled.form`
//   display: flex;
//   flex-direction: row;
//   align-items: flex-start;
//   padding: 0px;
//   gap: 8px;
//   width: 688px;
//   height: 48px;
// `
// export const PhoneToggleInput = styled.input`
//   box-sizing: border-box;
//   display: flex;
//   flex-direction: row;
//   align-items: center;
//   padding: 12px 16px;
//   width: 599px;
//   height: 48px;
//   background: #FFFFFF;
//   border: 1px solid #EEEEEE;
//   border-radius: 4px;
//   color: #BDBDBD;
//   &:focus{
//     background: #FFFFFF;
//     color: #212121;
//   }
// `
// export const PwdResetToggleForm = styled.form`
//   box-sizing: border-box;
//   display: flex;
//   flex-direction: row;
//   justify-content: space-between;
//   align-items: center;
//   padding: 12px 16px;
//   gap: 24px;
//   width: 688px;
//   height: 48px;
//   background: #F5F5F5;
//   border: 1px solid #EEEEEE;
//   border-radius: 4px;

//   margin-bottom: 8px;
// `
export const Input = styled.input`
  width: calc(100% - 40px);
  height: 24px;
  font-weight: 400;
  font-size: 16px;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: black;
  background-color: #F5F5F5;
  font-family: 'Pretendard';
  font-style: normal;
  &::placeholder{
    color: #BDBDBD;
  }
`
// export const PhoneRequestForm = styled.form`
//   box-sizing: border-box;
//   display: flex;
//   justify-items: flex-start;
//   justify-content: space-between;
//   align-items: center;
//   padding: 12px 16px;
//   width: 688px;
//   height: 48px;
//   background: #FFFFFF;
//   border: 1px solid #EEEEEE;
//   border-radius: 4px;
//   margin-top: 8px;
//   margin-bottom: 16px;
// `
// export const PhoneRequestInput = styled.input`
//   width: 450px;
//   height: 24px;
//   font-weight: 400;
//   font-size: 16px;
//   line-height: 24px;
//   color: #BDBDBD;
// `
// export const AuthTimerStyle = styled.div`
//   display: flex;  
//   width: 38px;
//   height: 20px;
//   font-weight: 400;
//   font-size: 14px;
//   color: #1565C0;
// `
export const NameToggleInput = styled.input`
  width: calc(100%-70px);
  height: 24px;
  font-weight: 400;
  font-size: ${props=> props._size || '16px'};
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #212121;
  background-color: #FFFFFF;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 20px;
  align-self: start;
  &::placeholder{
    color: #BDBDBD;
  }
`
// export const PwdToggleInputForm = styled.form`
//   box-sizing: border-box;
//   display: flex;
//   flex-direction: row;
//   justify-content: space-between;
//   align-items: center;
//   padding: 12px 16px;
//   gap: 24px;
//   width: 688px;
//   height: 48px;
//   background: #FFFFFF;
//   border: 1px solid #EEEEEE;
//   border-radius: 4px;
//   margin-bottom: 8px;
// `
// export const PwdToggleInput = styled.input`
//   width: 550px;
//   height: 24px;
//   font-weight: 400;
//   font-size: 16px;
//   font-weight: 400;
//   font-size: 16px;
//   line-height: 24px;
//   color: #1E1E1E;
//   background-color: #FFFFFF;
//   &:focus{
//     color: #424242;
//   }
//   &::-ms-reveal {
//    display: none;
//   }
// `
// export const PhoneRequestButton = styled.button`
//   width: 100%;
//   height: 52px;
//   background: #E0E0E0;
//   border-radius: 4px;
//   font-weight: 700;
//   font-size: 16px;
//   text-align: center;
//   color: #FFFFFF;
// `
// export const PwdToggleButton = styled.button`
//   width: 100%;
//   height: 52px;
//   background: #0B806F;
//   border-radius: 4px;
//   font-weight: 700;
//   font-size: 16px;
//   text-align: center;
//   color: #FFFFFF;
//   margin-top: 8px;
// `
export const ChangeButton = styled.button`
  display: flex;
  flex-direction: row;
  font-weight: 500;
  font-size: 14px;
  color: #0B806F;
  width: 40px;
`
// export const RequestButton = styled.button`
//   display: flex;
//   box-sizing: border-box;
//   display: flex;
//   flex-direction: row;
//   justify-content: center;
//   align-items: center;
//   padding: 13px 15px;
//   gap: 4px;
//   width: 81px;
//   height: 48px;
//   background: #FFFFFF;
//   border: 1px solid #EEEEEE;
//   border-radius: 4px;
//   font-weight: 400;
//   font-size: 14px;
//   color: #212121;
// `
export const MemberLinkDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 40px 0px 0px 0px; 
  gap: 8px;
  width: 100%;
  height: 18px;
  
`
export const MemberBar = styled.div`
  width: 1px;
  height: 14px;
  background: #E0E0E0;
`
export const MemberLinkText = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  color: #757575;
`
// export const EyeOffStyle = styled.div`
//   float: right;
// `;
