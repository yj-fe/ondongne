import styled from "styled-components";

export const RequesInputForm = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: flex-start;
	gap: 12px;
	width: 100%;
	height: auto;
	padding: ${props => props._padding || ''};
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

export const AuthTimer = styled.div`
	position: absolute;
	top: 0;
	right: 0px;
	width: 90px;
	height: 90%;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 14px;
	color: #4361ee;
`;
