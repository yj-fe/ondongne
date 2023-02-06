import styled from "styled-components";

export const RequestToggleBody = styled.div`
	width: 100%;
`;
export const RequestToggleForm = styled.div`
	width: 100%;
`;
export const RequestToggleDiv = styled.div`
	box-sizing: border-box;
	flex-direction: row;
	width: 100%;
	height: 48px;
	border-bottom: 1px solid #e0e0e0;
	/* border-bottom: 1px solid ${(props) =>
		props.errorPwd ? "#D32F2F" : "#e0e0e0"}; */
	padding: 12px;

	font-weight: 400;
	font-size: 16px;
	line-height: 24px;
	color: #bdbdbd;
`;
export const RequestToggleInput = styled.input`
	font-weight: 400;
	font-size: 16px;
	line-height: 24px;
	color: #212121;
	outline: none;
	&::-ms-reveal {
		display: none;
	}
`;
export const RequestToggleCount = styled.div`
	font-weight: 400;
	font-size: 14px;
	line-height: 20px;
	color: #1565c0;
	float: right;
`;
export const RequestToggleButton = styled.button`
	width: 100%;
	height: 52px;
	background: ${(props) => (props.active ? "#0B806F" : "#E0E0E0")};
	/* background: #E0E0E0; */
	border-radius: 4px;
	text-align: center;
	color: #ffffff;
	margin-top: 24px;
`;
export const RequestToggleTextStyle = styled.p`
	display: flex;
	align-items: center;
	justify-content: center;
	font-weight: 400;
	font-size: 14px;
	color: #424242;
	gap: 4px;
	margin-top: 40px;
`;
export const RequestToggleText = styled.p``;
export const RequestToggleTextLink = styled.p`
	font-weight: 700;
	text-decoration: underline;
	text-underline-position: under;
`;
