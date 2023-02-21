import styled from "styled-components";

export const Scroll = styled.div`
	overflow: scroll;
	height: ${(props) => props._height || "calc(100vh - 10%)"};
	&::-webkit-scrollbar {
		display: none;
	}
`;

export const ToggleBody = styled.div`
	display: flex;
	width: 100%;
	height: 100px;
`;
export const ToggleS = styled.div`
	display: flex;
	width: 100%;
	height: 192px;
	background: #ffffff;
	box-shadow: 0px 3px 16px rgba(0, 0, 0, 0.06);
	border-radius: 4px;
`;
export const ToggleDiv = styled.div`
	display: flex;
	flex-direction: row;
	align-items: flex-start;
	width: 100%;
	padding: ${(props) => props._padding || "8px 12px"};
	isolation: isolate;
	background: #f5f5f5;
	border-radius: 4px;
`;
export const ToggleText = styled.textarea`
	font-weight: 400;
	font-size: 14px;
	width: 100%;
	height: 100%;
	background-color: ${(props) => (props.color ? "#EEEEEE" : "none")};
	text-align: ${(props) => props.align || null};
	color: #212121;
	outline: none;
	border: 0;
	resize: none;
	background: #f5f5f5;
	&::-ms-reveal {
		display: none;
	}
	&::-webkit-scrollbar-thumb {
		background-color: #bdbdbd;
		border-radius: 99px;
	}
	&::-webkit-scrollbar {
		width: 4px;
	}
	margin: 0;
	font-family: "Pretendard";
	/* font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif; */
	-webkit-font-smoothing: antialiased;
`;
