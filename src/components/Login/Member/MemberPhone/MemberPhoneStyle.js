import styled from "styled-components";

export const PhoneToggleInputForm = styled.div`
	display: flex;
	flex-direction: row;
	align-items: flex-start;
	padding: 0px;
	gap: 8px;
	width: 100%;
	height: 48px;
`;
export const PhoneToggleInput = styled.input`
	box-sizing: border-box;
	display: flex;
	flex-direction: row;
	align-items: center;
	padding: 12px 16px;
	width: calc(100% - 90px);
	height: 48px;
	background: #ffffff;
	border: 1px solid #eeeeee;
	border-radius: 4px;
	color: "gray900";
	font-family: "Pretendard";
	font-style: normal;
	font-size: 16px;
	&:focus {
		background: #ffffff;
		color: #212121;
	}
	&::-webkit-inner-spin-button {
		display: none;
	}
	&::placeholder {
		color: #bdbdbd;
	}
`;
export const RequestButton = styled.button`
	display: flex;
	box-sizing: border-box;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	padding: 13px 15px;
	gap: 4px;
	width: 81px;
	height: 48px;
	background: #ffffff;
	border: 1px solid #eeeeee;
	border-radius: 4px;
	font-weight: 400;
	font-size: 14px;
	color: #212121;
`;
export const AlertText = styled.p`
	font-weight: 400;
	font-size: 14px;
	color: #d32f2f;
	margin-top: 8px;
`;
