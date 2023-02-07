import styled from 'styled-components';

const BankSelect = ({ close, data, setData }) => {

	const banks = [
		"국민은행", "우리은행", "신한은행", "농협은행", "KEB하나은행", "수협", "SC제일은행", "MG새마을금고"
	];

	const onSelect = (value) => {
		setData(value)
		close();
	}

	return (
		<SelectBox>
			{
				banks.map((bank, i) => (
					<Option
						key={i}
						onClick={() => onSelect(bank)}
					>
						<Text
							weight={data == bank && 600}
							color={data == bank && '#0B806F'}
						>{bank}</Text>
					</Option>
				))
			}
		</SelectBox>
	)
}


const SelectBox = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	padding: 0px;
	position: absolute;
    top: 100px;
    left: 0;
	max-width: 688px;
	width: 100%;
	height: 192px;
	justify-content: flex-start;
	background: #ffffff;
	box-shadow: 0px 3px 16px rgba(0, 0, 0, 0.06);
	border-radius: 4px;
	overflow: scroll;
	z-index: 9999;
	&::-webkit-scrollbar-thumb {
		background-color: #bdbdbd;
		border-radius: 99px;
	}
	&::-webkit-scrollbar {
		width: 4px;
	}
	@media screen and (max-width: 728px) {
		width: 94%;
	}
	@media screen and (max-width: 565px) {
		width: 92%;
	}
	@media screen and (max-width: 395px) {
		width: 90%;
	}
	@media screen and (max-width: 365px) {
		width: 88%;
	}
`;
const Option = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	padding: 12px 16px;
	width: 100%;
	height: 48px;
`;

const Text = styled.p`
	font-weight: ${(props) => props.weight || 400};
	font-size: 16px;
	color: ${(props) => props.color || "gray900"};
	cursor: pointer;
`;


export default BankSelect;