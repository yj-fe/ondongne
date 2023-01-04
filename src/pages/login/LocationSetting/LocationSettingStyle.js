import styled from "styled-components";
export const LocationBody = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	background: #f5f5f5;
	flex-direction: column;
	/* padding-bottom: 56px; */
	height: 100vh;
	/* gap: 8px; */
`;
export const LocationContainer = styled.div`
	display: flex;
	flex-direction: column;
	background: #ffffff;
	padding: 24px 20px;
	margin-top: 60px;
	gap: 15px;
	width: 728px;
	height: 100vh;
	overflow: hidden;
	> div {
		/* max-width: 728px; */
		width: 100%;

		@media only screen and (max-width: 728px) {
			width: 100%;
		}
	}
`;
export const LocationDiv = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	padding: 0px;
	gap: 20px;
	width: 100%;
	height: 126px;
`;
export const Div1 = styled.p`
	width: 100%;
	height: 26px;
	font-weight: 600;
	font-size: 18px;
	color: #212121;
`;
export const Div2 = styled.p`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	padding: 0px;
	gap: 16px;
	width: 100%;
	height: 80px;
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
	font-family: 'Pretendard';
	font-style: normal;
	color: black;
	background: #fafafa;
	&::placeholder{
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
export const Spinner = styled.div`
	width: 70px;
	text-align: center;

	> div {
		width: 10px;
		height: 10px;
		background-color: #bdbdbd;
		border-radius: 100%;
		display: inline-block;
	}
`;
export const Bounce1 = styled.div`
	-webkit-animation-delay: -0.32s;
	animation-delay: -0.32s;
	-webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;
	animation: sk-bouncedelay 1.4s infinite ease-in-out both;

	@keyframes sk-bouncedelay {
		0%,
		80%,
		100% {
			-webkit-transform: scale(0);
			transform: scale(0);
		}
		40% {
			-webkit-transform: scale(1);
			transform: scale(1);
		}
	}
`;
export const Bounce2 = styled.div`
	-webkit-animation-delay: -0.16s;
	animation-delay: -0.16s;
	-webkit-animation: sk-bouncedelay 1s infinite ease-in-out both;
	animation: sk-bouncedelay 1s infinite ease-in-out both;

	@keyframes sk-bouncedelay {
		0%,
		80%,
		100% {
			-webkit-transform: scale(0);
			transform: scale(0);
		}
		40% {
			-webkit-transform: scale(1);
			transform: scale(1);
		}
	}
`;
export const Bounce3 = styled.div`
	-webkit-animation-delay: -0.32s;
	animation-delay: -0.32s;
	-webkit-animation: sk-bouncedelay 0.8s infinite ease-in-out both;
	animation: sk-bouncedelay 0.8s infinite ease-in-out both;

	@keyframes sk-bouncedelay {
		0%,
		80%,
		100% {
			-webkit-transform: scale(0);
			transform: scale(0);
		}
		40% {
			-webkit-transform: scale(1);
			transform: scale(1);
		}
	}
`;
export const LocationListContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	padding: 0 20px;
	width: 648px;
	height: 100%;
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
