import styled from "styled-components";

export const PwdToggleInputForm = styled.div`
	box-sizing: border-box;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	padding: 12px 16px;
	gap: 24px;
	width: 100%;
	height: 48px;
	background: #ffffff;
	border: 1px solid #eeeeee;
	border-radius: 4px;
	margin-bottom: 8px;
`;
export const PwdToggleInput = styled.input`
	width: calc(100% - 30px);
	font-family: "Pretendard";
	font-style: normal;
	height: 24px;
	font-weight: 400;
	font-size: 16px;
	font-weight: 400;
	font-size: 16px;
	line-height: 24px;
	color: #1e1e1e;
	background-color: #ffffff;
	&:focus {
		color: #424242;
	}
	&::-ms-reveal {
		display: none;
	}
	&::placeholder {
		color: #bdbdbd;
	}
`;
export const EyeOffStyle = styled.div`
	width: 20px;
	height: 20px;
`;
export const PwdToggleButton = styled.button`
	width: 100%;
	height: 52px;
	background: ${(props) => (props._bg ? "#0B806F" : "#E0E0E0")};
	border-radius: 4px;
	font-weight: 700;
	font-size: 16px;
	text-align: center;
	color: #ffffff;
	margin-top: 8px;
`;
