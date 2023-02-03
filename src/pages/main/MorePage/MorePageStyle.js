import styled from "styled-components";

export const MoreLoginDiv = styled.div`
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	padding: 20px;
	gap: 24px;
	width: 100%;
	height: auto;
	background: #ffffff;
	border-bottom: 1px solid #eeeeee;
`;
export const MoreAccountDiv = styled.div`
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	padding: 20px;
	gap: 24px;
	width: 100%;
	height: auto;
	background: #ffffff;
	border-bottom: 1px solid #eeeeee;
`;
export const MoreAccountProfile = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	padding: 0px;
	gap: 16px;

	width: 100%;
	height: 52px;
`;
export const MoreAccountImg = styled.img`
	width: 52px;
	height: 52px;
	border-radius: 50%;
`;
export const MoreAccountImgBox = styled.div`
	width: 52px;
	height: 52px;
	background-color: #f5f5f5;
	border: 0;
	border-radius: 50%;
`;

export const MoreAccountTextDiv = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	padding: 0px;
	gap: 4px;

	width: auto;
	height: 52px;
`;
export const AccountBadge = styled.div`
	display: flex;
	flex-direction: row;
	align-items: flex-start;
	padding: 2px 6px;
	gap: 4px;
	width: max-content;
	/* width: 54px; */
	height: 22px;
	background: #e1f3f2;
	border-radius: 4px;
	font-weight: 600;
	font-size: 12px;
	line-height: 18px;
	color: #0b806f;
`;
export const AccountName = styled.p`
	font-weight: 600;
	font-size: 18px;
	line-height: 26px;
	color: #212121;
`;
export const MoreAccountButtonDiv = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	padding: 0px;
	gap: 12px;
	width: 100%;
	height: 44px;
`;
export const MoreAccountButton = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	padding: 4px;
	gap: 4px;
	width: 49.12%;
	height: 44px;
	background: #f5f5f5;
	border-radius: 99px;
	font-weight: 500;
	font-size: 15px;
	line-height: 20px;
	text-align: center;
	color: #424242;
`;
export const MoreLoginText = styled.p`
	width: 100%;
	font-weight: 400;
	font-size: 18px;
	line-height: 26px;
	text-align: center;
	color: #212121;
`;
export const MoreLoginButton = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	padding: 4px;
	gap: 4px;
	width: 100%;
	height: 52px;
	background: #0b806f;
	border-radius: 4px;
	font-weight: 500;
	font-size: 16px;
	line-height: 24px;
	text-align: center;
	color: #ffffff;
`;

export const MoreDiv = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	padding: 20px;
	width: 100%;
	height: auto;
	background: #ffffff;
`;
export const MoreContainerDiv = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	padding: 16px 0px;
	width: 100%;
	height: 56px;
	font-weight: 500;
	font-size: 16px;
	line-height: 24px;
	text-align: center;
	color: #212121;
	cursor: pointer;
`;
export const FooterDiv = styled.div`
	width: 728px;
	@media only screen and (max-width: 728px) {
		width: 100%;
	}
`;
export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  /* text-align: left; */
  width: 100%;
  height: auto;
  padding: 20px;
  gap: 12px;
  
  /* > div {
    width: 100%;

    @media only screen and (max-width: 728px) { 
      width: 100%;
    } */
  /* } */
`;
export const FooterText = styled.div`
	font-weight: 500;
	font-size: 11px;
	line-height: 18px;
	color: #bdbdbd;
	width: 100%;
`;
