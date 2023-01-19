import styled from "styled-components";
import * as Common from "components/commonUi/Layout";
export const S = {
	Wrapper: styled.div`
		z-index: 10;
		position: relative;
		width: 100%;
		height: auto;
		background-color: ${(props) => props.theme.color.gray100};
	`,
	Main: styled(Common.Inner)`
		z-index: 20;
		background-color: ${props => props._bc || 'transparent'};
		padding-top: 60px;
		min-height: 100vh;
		/* overflow: auto; */
	`,
};
