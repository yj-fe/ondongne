import styled from "styled-components";

export const ModalOutside = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.6);
	display: flex;
	align-items: center;
	z-index: 998;
`;
export const ModalBody = styled.div`
	left: 50%;
	width: 100%;
	max-width: ${(props) => props.theme.breakpoint.tablet}px;
	transform: translateX(-50%);
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	padding: 0px;
	bottom: 0;
	position: absolute;
	z-index: 999;

`;
export const ModalShareBody = styled.div`
	left: 50%;
	width: 100%;
	max-width: ${(props) => props.theme.breakpoint.tablet}px;
	transform: translateX(-50%);
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	/* align-items: flex-start; */
	padding: 0px;
	bottom: 0;
	position: absolute;
`;
export const ModalDiv1 = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	padding: ${props => props._pd || '12px 4px'};
	gap: 4px;
	height: ${props => props._height || 'auto'};
	background: #ffffff;
	border-radius: 20px 20px 0px 0px;
	flex: none;
	order: 0;
	align-self: stretch;
	flex-grow: 0;
	font-weight: 500;
	font-size: 14px;
	line-height: 20px;
	color: #212121;
	box-shadow: ${props => props._shadow};
`;
export const ModalDiv3 = styled.button`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 12px 4px;
	gap: 4px;
	height: auto;
	background: #ffffff;
	flex: none;
	order: 0;
	align-self: stretch;
	flex-grow: 0;
	font-weight: 500;
	font-size: 14px;
	line-height: 20px;
	color: #212121;
`;
export const ModalDiv4 = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	padding: 12px 4px;
	gap: 20%;
	height: auto;
	background: #ffffff;
	flex: none;
	order: 0;
	align-self: stretch;
	flex-grow: 0;
	font-weight: 500;
	font-size: 14px;
	line-height: 20px;
	color: #212121;
`;
export const ModalDiv2 = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	padding: 0px;
	height: auto;
	background: #ffffff;
	width: 728px;
`;

export const ModalTitle = styled.div`
	font-weight: 400;
	font-size: 16px;
	line-height: 24px;
	color: #424242;
	display: flex;
	flex-direction: row;
	align-items: center;
	padding: 16px 24px;
	gap: 4px;
	width: 100%;
	height: 56px;
	border-radius: 0px;
`;
export const ModalTitle2 = styled.div`
	font-weight: 400;
	font-size: 16px;
	line-height: 24px;
	color: #d32f2f;
	display: flex;
	flex-direction: row;
	align-items: center;
	padding: 16px 24px;
	gap: 4px;
	width: 100%;
	height: 56px;
	border-radius: 0px;
`;
export const ModalButton = styled.button`
	box-sizing: border-box;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	padding: 16px 20px;
	gap: 4px;

	width: 100%;
	height: 56px;
	background: #ffffff;
	border-top: 1px solid #eeeeee;
	font-weight: 600;
	font-size: 16px;
	line-height: 24px;
	color: #212121;
`;
export const AgreementDiv = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	background: #ffffff;
	padding: 32px 20px;
	gap: 16px;
	width: 100%;
	height: auto;
`;
export const SpaceBet = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	width: 100%;

	& button {
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 0;
	}
`;
export const Button = styled.button`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	padding: 12px 4px;
	margin-top: 10px;
	gap: 4px;
	width: 100%;
	height: 48px;
	/* background: #0B806F; */
	background: ${(props) => (props.active ? "#0B806F" : "#E0E0E0")};
	border-radius: 4px;
	font-weight: 600;
	font-size: 18px;
	color: #ffffff;
`;
export const TextArea = styled.textarea`
	position: absolute;
	left: 0;
	bottom: 0;
	width: 0;
	height: 0;
	opacity: 0;
`;
