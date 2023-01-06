import styled from "styled-components";
export const TitleText = styled.p`
	font-weight: 600;
	font-size: 18px;
	color: #212121;
	padding-bottom: 32px;
`;
export const InfoDiv = styled.div`
	display: flex;
	flex-direction: row;
	align-items: flex-start;
	padding: 0px;
	gap: 16px;
	width: 688px;
	height: 154px;
`;
export const InfoCard = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	padding: 16px;
	gap: 20px;
	width: 167px;
	height: 154px;
	background: #ffffff;
	box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.06);
	border-radius: 8px;
`;
export const CardTextDiv = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	padding: 0px;
	gap: 4px;
	width: 135px;
	height: 54px;
`;
export const InfoIconStyle = styled.div`
	/* display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px;
  gap: 4px; */
	width: 48px;
	height: 48px;
	border-radius: 4px;
`;
export const CardText = styled.p`
	font-weight: 400;
	font-size: 16px;
	color: #212121;
`;
export const CardCount = styled.p`
	font-weight: 600;
	font-size: 18px;
	color: #212121;
`;
export const CouponDiv = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	padding: 0px;
	gap: 16px;
	width: 100%;
	height: auto;
`;
export const CouponCard = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	padding: 20px;
	gap: 12px;
	width: 100%;
	height: 140px;
	background: #2dac9e;
	border-radius: 8px;
`;
export const CouponTitleDiv = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	padding: 0px;
	gap: 4px;
	width: 200px;
	height: 52px;
`;
export const CouponTitleInfoDiv = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	padding: 0px;
	width: 150px;
	height: 36px;
	font-weight: 400;
	font-size: 13px;
	color: #ffffff;
`;
export const CouponBadge = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	padding: 2px 5px;
	gap: 4px;
	width: 45px;
	height: 22px;
	background: #e1f3f2;
	border-radius: 4px;
	font-weight: 600;
	font-size: 12px;
	letter-spacing: 0.07em;
	color: #0b806f;
`;
export const CouponTitleText = styled.p`
	font-weight: 600;
	font-size: 18px;
	line-height: 26px;
	letter-spacing: 0.07em;
	color: #ffffff;
`;
export const CouponInfoDiv = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	padding: 0px;
	gap: 16px;
	width: 100%;
	height: auto;
`;
export const DownloadDiv = styled.div`
	box-sizing: border-box;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	padding: 12px 24px;
	gap: 8px;
	width: 336px;
	height: 54px;
	background: #ffffff;
	border: 1px solid #eeeeee;
	border-radius: 8px;
`;
export const DownloadText = styled.p`
	font-weight: 400;
	font-size: 15px;
	color: #212121;
`;
export const DownloadCount = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	padding: 0px;
	gap: 4px;
	width: 52px;
	height: 30px;
`;
export const DownloadCountTextB = styled.p`
	font-weight: 600;
	font-size: 20px;
	color: #212121;
`;
export const DownloadCountTextN = styled.p`
	font-weight: 400;
	font-size: 15px;
	color: #212121;
`;
export const EmptyDiv = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 40px 0px;
	gap: 16px;
	width: 100%;
	height: 154px;
`;
export const EmptyButton = styled.div`
	box-sizing: border-box;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	padding: 9px 15px;
	width: 97px;
	height: 38px;
	background: #ffffff;
	border: 1px solid #eeeeee;
	border-radius: 99px;
`;
export const EmptyButtonIcon = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 16px;
	height: 16px;
`;
export const EmptyButtonText = styled.p`
	font-weight: 500;
	font-size: 13px;
	text-align: center;
	color: #424242;
`;
export const EmptyText = styled.p`
	font-weight: 300;
	font-size: 15px;
	text-align: center;
	color: #757575;
`;
export const MyBestProductContent = styled.div`
	display: flex;
	flex-direction: row;
	align-items: flex-start;
	gap: 16px;
	width: 814px;
	height: 316px;
`;
export const FooterDiv = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	width: 728px;
	padding: 0 24px 0 0;
`;
export const FloatingDivT = styled.div`
	margin: 0px;
	padding: 0px;
	position: absolute;
	right: 24px;
	bottom: 40px;
	@media screen and (max-width: 728px){
		right: 3%;
	}
`;
export const Footer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	width: 500px;
	height: 156px;
	padding: 20px;
	gap: 12px;

	> div {
		max-width: 728px;
		width: 100%;

		@media only screen and (max-width: 728px) {
			width: 100vw;
		}
	}
`;
export const FloatingToggleDiv = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	padding: 16px;

	position: absolute;
	justify-content: center;
	bottom: 120px;
	right: 0;
	width: 152px;
	height: 256px;
	background: #ffffff;
	box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.16);
	border-radius: 20px;
`;
export const FloatingContentIcon = styled.div`
	width: 24px;
	height: 24px;
`;
export const FloatingContentTitle = styled.div`
	font-weight: 400;
	font-size: 16px;
	color: #000000;
`;
export const FloatingContentDiv = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	padding: 16px 16px 16px 8px;
	gap: 12px;

	width: 120px;
	height: 56px;
`;
