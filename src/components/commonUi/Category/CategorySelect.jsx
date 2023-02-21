import styled from "styled-components";

const CategorySelect = ({ isOpen, categories, categoryHandler }) => {

	return (
		<div
			style={{ display: isOpen ? 'block' : 'none' }}
		>
			<List>
				{
					categories.map(item => {
						return (
							<Item
								key={item.id}
								onClick={() => categoryHandler(item.id)}
							>
								<Text
									weight={item.checked && 600}
									color={item.checked && '#0B806F'}
								>
									{item.name}
								</Text>
							</Item>
						)
					})
				}
			</List>
		</div>
	)
}

const List = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	padding: 0px;
	/* isolation: isolate; */
	position: absolute;
    top: 100px;
    left: 0;
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
`;
const Item = styled.div`
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


export default CategorySelect;