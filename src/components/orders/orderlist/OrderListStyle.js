import styled from "styled-components";
import Corn from "../../../assets/images/corn.jfif";

export const S = {
	Action: styled.button`
		width: 100%;
		height: 48px;
		line-height: 46px;
		border-radius: 4px;
		text-align: center;
		background-color: ${(props) => {
			switch (props._type) {
				case "bg":
					return props.theme.color.green700;
				case "bgb":
					return props.theme.color.blue;
				default:
					return "#FFF";
			}
		}};
		border: 1px solid
			${(props) => {
				switch (props._type) {
					case "bd":
					case "bg":
						return props.theme.color.green700;
					case "bgb":
						return props.theme.color.blue;
					case "cancel":
						return props.theme.color.error;
					default:
						return props.theme.color.gray200;
				}
			}};
		color: ${(props) => {
			switch (props._type) {
				case "bd":
					return props.theme.color.green700;
				case "bg":
					return "#FFF";
				case "bgb":
					return "#FFF";
				case "cancel":
					return props.theme.color.error;
				default:
					return props.theme.color.gray900;
			}
		}};
		font-weight: 500;
	`,
	DeliveryPopup: styled.div`
		z-index: 91;
		position: relative;
		width: 350px;
		max-width: calc(100vw - 40px);
		max-height: calc(100vh - 40px);
		border-radius: 12px;
		overflow: hidden;
		background: #fff;

		.close {
			z-index: 93;
			position: absolute;
			top: 16px;
			right: 16px;
			display: flex;
			justify-content: center;
			align-items: center;
			width: 24px;
			height: 24px;
			border-radius: 12px;
			overflow: hidden;
			padding: 0;
			background: #fff;
		}

		.top {
			z-index: 92;
			position: relative;
			width: 100%;
			height: 0;
			padding-top: 100%;

			img {
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				background-size: cover;
			}
		}

		.contents {
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			gap: 4px;
			padding: 16px 20px;

			strong {
				font-weight: 500;
			}

			button {
				width: 100%;
				height: 48px;
				line-height: 46px;
				border-radius: 4px;
				text-align: center;
				background-color: ${(props) => props.theme.color.blue};
				border: 1px solid ${(props) => props.theme.color.blue};
				color: #fff;
				font-weight: 500;
				margin-top: 24px;
			}
		}
	`,
};
