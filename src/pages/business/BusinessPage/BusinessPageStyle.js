import styled from "styled-components";
export const InfoCard = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	padding: 16px;
	gap: 20px;
	max-width: 167px;
	height: 154px;
	background: #ffffff;
	box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.06);
	border-radius: 8px;
	@media screen and (max-width: 375px) {
		width: 100%;
	}
`;
export const CardTextDiv = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	padding: 0px;
	gap: 4px;
	max-width: 135px;
	height: 54px;
`;
export const InfoIconStyle = styled.div`
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
	width: 100%;
	/* height: 316px; */
`;
export const FooterDiv = styled.div`
	cursor: default;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	width: 100%;
	height: auto;
	padding: 0 24px 0px 0;
`;
export const FloatingToggleDiv = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	padding: 16px;
	position: absolute;
	justify-content: center;
	bottom: 88px;
	right: 0;
	width: 152px;
	height: auto;
	background: #ffffff;
	box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.16);
	border-radius: 20px;
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
export const Display = styled.div`
	@media screen and (max-width: 500px) {
		display: ${(props) => props._displaynone};
	}
	@media screen and (min-width: 501px) {
		display: ${(props) => props._display};
	}
`;
