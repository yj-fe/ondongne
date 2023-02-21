import styled from "styled-components";

export const CartContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background: #6e6868;
	width: 100%;
	height: auto;
	margin-bottom: 30px;
`;
export const CartEmptyText = styled.p`
	font-weight: 300;
	font-size: 15px;
	line-height: 20px;
	text-align: center;
	color: #757575;
`;
export const CartDiv = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	padding: 0px;
	width: 100%;
	height: auto;
`;
export const CarProfiletDiv = styled.div`
	box-sizing: border-box;
	display: flex;
	flex-direction: row;
	align-items: center;
	padding: 16px 20px;
	gap: 8px;
	width: 100%;
	height: 64px;
	background: #ffffff;
	border-bottom: 1px solid #eeeeee;
`;
export const ProfileImg = styled.img`
	width: 34px;
	height: 34px;
	border-radius: 50%;
`;
export const ProfileName = styled.p`
	font-weight: 600;
	font-size: 16px;
	line-height: 16px;
	/* identical to box height, or 150% */

	text-align: center;

	/* Gray/900 */

	color: #212121;
`;
export const CarContentDiv = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	padding: 20px 24px;
	gap: 20px;
	width: 100%;
	height: auto;
	background: #ffffff;
`;
export const ContentProductDiv = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	padding: 0px;
	gap: 16px;
	width: 100%;
	height: auto;
`;
export const ProductTitleDiv = styled.div`
	display: flex;
	justify-content: space-between;
	flex-direction: row;
	align-items: center;
	padding: 0px;
	gap: 24px;
	width: 100%;
	height: 26px;
`;
export const DeleteStyle = styled.div`
	width: 20px;
	height: 20px;
`;
export const ProductTitle = styled.p`
	font-weight: 600;
	font-size: 18px;
	color: #212121;
`;
export const ProductInfo = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	padding: 0px;
	gap: 4px;
	width: 100%;
`;
export const ProductInfoText = styled.p`
	font-weight: 400;
	font-size: 16px;
	color: #757575;
`;
export const ContentCountDiv = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	padding: 0px;
	gap: 16px;

	width: 100%;
	height: 32px;
`;
export const CountText = styled.p`
	font-weight: 600;
	font-size: 16px;
	color: #212121;
`;
export const CountAddDiv = styled.div`
	box-sizing: border-box;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	padding: 0px;
	gap: 8px;
	width: 88px;
	height: 32px;
	border: 1px solid #eeeeee;
	border-radius: 4px;
`;
export const CountAddIconStyle = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	width: 32px;
	height: 32px;
`;
export const CoundAddNum = styled.p`
	font-weight: 500;
	font-size: 16px;
	color: #424242;
`;
export const ContentButton = styled.button`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	gap: 4px;
	width: 100%;
	height: 48px;
	background: ${(props) => (props.active ? "#0b806f" : "#E0E0E0")};
`;

export const ButtonText = styled.p`
	font-weight: 700;
	font-size: 16px;
	line-height: 24px;
	text-align: center;
	color: #ffffff;
`;
