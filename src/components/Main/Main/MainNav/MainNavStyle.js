import styled from "styled-components";
export const MainNavDiv = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	box-sizing: border-box;
	position: fixed;
	z-index: 30;
	height: 60px;
	left: 0px;
	right: 0px;
	top: 0px;
	background: #ffffff;
	border-bottom: 1px solid #eeeeee;

	@media only screen and (max-width: 728px) {
		width: 100%;
	}
`;
export const NavContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	max-width: 728px;
	padding: 0px 20px;
	width: 100%;
	@media screen and (max-width : 420px) {
		padding: ${props => props._paddingmedia || '0px 20px'};
	}
`;

export const ImgLogoBox = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
`;
export const MainLocation = styled.div`
	cursor: default;
	display: flex;
	align-items: center;
	flex-direction: row;
	height: 20px;
	gap: 2px;
	width: 33%;
	@media only screen and (max-width: 768px) {
		width: 70%;
		padding-left: 16px;
	}
`;

export const LogoBox = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 33%;
	@media only screen and (max-width: 768px) {
		display: none;
	}
`;

export const LogoImg = styled.img`
	width: 120px;
	height: 28px;
	display: flex;
	justify-content: center;
	justify-items: center;
	align-items: center;
`;

export const PinStyle = styled.div`
	width: 20px;
	height: 20px;
`;
export const LocationText = styled.p`
	font-weight: 500;
	font-size: 15px;
	color: #424242;
	margin-right: 2px;
`;
export const ArrowStyle = styled.div`
	width: 20px;
	height: 20px;
	margin-bottom: 5px;
`;

export const Icon = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-end;
	flex-direction: row;
	gap: 20px;
	padding-top: 7px;
	width: 33%;
	@media only screen and (max-width: 768px) {
		padding-right: 16px;
		width: 30%;
	}
`;
export const NewsStyle = styled.svg`
	width: 24px;
	height: 24px;
`;
export const CartStyle = styled.svg`
	width: 24px;
	height: 24px;
`;
