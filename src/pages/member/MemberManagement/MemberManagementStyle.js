import styled from "styled-components";

export const MemberProfileDiv = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 0px;
	gap: 16px;
	isolation: isolate;

	width: 100%;
	height: 166px;
`;

export const ProfileTextDiv = styled.div`
	display: flex;
	flex-direction: column;
	padding: 0px;
	width: 100%;
	height: 50px;
`;
export const TextName = styled.p`
	font-weight: 600;
	font-size: 18px;
	text-align: center;
	color: #212121;
`;
export const TextEmail = styled.p`
	font-weight: 400;
	font-size: 16px;
	text-align: center;
	color: #757575;
`;
export const TitleText = styled.p`
	font-weight: 600;
	font-size: 16px;
	color: #212121;
`;
export const InputForm = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	padding: 12px 16px;
	gap: 24px;
	width: 100%;
	height: 48px;
	background: ${(props) => props._bg || "#F5F5F5"};
	border: 1px solid #eeeeee;
	border-radius: 4px;
	&:focus-within {
		background: #ffffff;
	}
`;
export const Input = styled.input`
	width: calc(100% - 40px);
	height: 24px;
	font-weight: 400;
	font-size: 16px;
	font-weight: 400;
	font-size: 16px;
	line-height: 24px;
	color: black;
	background-color: #f5f5f5;
	font-family: "Pretendard";
	font-style: normal;
	&::placeholder {
		color: #bdbdbd;
	}
`;

export const NameToggleInput = styled.input`
	width: calc(100% - 70px);
	height: 24px;
	font-weight: 400;
	font-size: ${(props) => props._size || "16px"};
	font-weight: 400;
	font-size: 16px;
	line-height: 24px;
	color: #212121;
	background-color: #ffffff;
	font-family: "Pretendard";
	font-style: normal;
	font-weight: 400;
	font-size: 15px;
	line-height: 20px;
	align-self: start;
	&::placeholder {
		color: #bdbdbd;
	}
`;
export const ChangeButton = styled.button`
	width: ${(props) => props._width};
	display: flex;
	flex-direction: row;
	font-weight: 500;
	font-size: 14px;
	color: #0b806f;
	width: 40px;
	font-family: "Pretendard";
`;

export const MemberLinkDiv = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	padding: 40px 0px 0px 0px;
	gap: 8px;
	width: 100%;
	height: 18px;
`;
export const MemberBar = styled.div`
	width: 1px;
	height: 14px;
	background: #e0e0e0;
`;
export const MemberLinkText = styled.p`
	font-weight: 400;
	font-size: 12px;
	line-height: 18px;
	color: #757575;
`;
// export const EyeOffStyle = styled.div`
//   float: right;
// `;
