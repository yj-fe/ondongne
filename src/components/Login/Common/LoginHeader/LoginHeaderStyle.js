import styled from "styled-components";

export const LoginNavDiv = styled.div`
		z-index: 30;
		position: fixed;
		display: flex;
		justify-content: center;
		top: 0;
		left: 0;
		width: 100%; 
		height: 60px;
		background: #FFF;
		border-bottom: 1px solid ${props => props.theme.color.gray200};

		@media(${props => props.theme.media.tablet}) {
				border-bottom: 0;
		}
`;
export const Inner = styled.div`
	height: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 16px;
	width: 728px;
`;

export const UtilBtn = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 24px;
	height: 24px;
	padding: 0;
`;

export const LoginNavTitle = styled.div`
	width: 100%;
	font-weight: 600;
	font-size: 18px;
	color: #212121;
	display: flex;
	justify-content: center;
	align-items: center;
`;
