import styled from "styled-components";

export const Div1 = styled.p`
	width: 100%;
	height: 26px;
	font-weight: 600;
	font-size: 18px;
	color: #212121;
`;
export const Div2 = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	padding: 0px;
	gap: ${props => props._gap || '16px'};
	width: 100%;
	height: auto;
	/* height: 90px; */
`;
export const SearchDiv = styled.div`
	box-sizing: border-box;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	padding: 12px 16px;
	width: 100%;
	height: 44px;
	background: #fafafa;
	border: 1px solid #eeeeee;
	border-radius: 4px;
`;
export const SearchInput = styled.input`
	width: calc(100% - 20px);
	font-weight: 400;
	font-size: 16px;
	font-family: "Pretendard";
	font-style: normal;
	color: black;
	background: #fafafa;
	&::placeholder {
		color: #bdbdbd;
	}
	&:focus {
		color: #212121;
	}
`;
export const SearchIcon = styled.div`
	width: 20px;
	height: 20px;
`;
export const MyLocationDiv = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	padding: 0px;
	gap: 4px;
	width: 100%;
	height: 20px;
`;
export const LocationIcon = styled.div`
	width: 20px;
	height: 20px;
`;
export const MyLocationText = styled.p`
	font-weight: 400;
	font-size: 14px;
	color: #757575;
`;
export const MyLocationResult = styled.p`
	font-weight: 500;
	font-size: 14px;
	color: #0b806f;
`;
export const Line = styled.div`
	height: 1px;
	width: 100%;
	background: #eeeeee;
`;


export const LocationListContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	padding: 0 20px;
	width: 648px;
	height: calc(100vh - 300px);
	overflow-y: scroll;
	&::-webkit-scrollbar-thumb {
		background-color: #bdbdbd;
		border-radius: 99px;
	}
	&::-webkit-scrollbar {
		width: 4px;
	}
`;
export const LocationListDiv = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	padding: 16px 0px;
	gap: 8px;
	width: 100%;
	height: 52px;
	cursor: pointer;
`;
export const LocationListText = styled.p`
	font-weight: 400;
	font-size: 15px;
	line-height: 20px;
	color: #212121;
`;
