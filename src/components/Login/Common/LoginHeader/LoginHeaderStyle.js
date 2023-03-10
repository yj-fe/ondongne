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
	justify-content: left;
	align-items: center;
	width: 50px;
	height: 24px;
	padding: 0px 10px;
`;

export const LoginNavTitle = styled.div`
	width: 100%;
	/* transform: translateX(-11px); */
	transform: ${props => props._transform ||'translateX(-11px)'};
	font-weight: 600;
	font-size: 18px;
	color: #212121;
	display: flex;
	justify-content: center;
	align-items: center;
`;
