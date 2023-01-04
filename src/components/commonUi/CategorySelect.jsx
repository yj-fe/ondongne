import { useEffect, useState } from "react";
import styled from "styled-components";

function CategorySelect({ isOpen, data, dataHanler, errorHandler }) {

    const [categories, setCategories] = useState([
        { "id": 0, "name": "야채/과일", "checked": false },
        { "id": 1, "name": "정육", "checked": false },
        { "id": 2, "name": "수산/해산", "checked": false },
        { "id": 3, "name": "쌀/잡곡", "checked": false },
        { "id": 4, "name": "식품", "checked": false },
        { "id": 5, "name": "생활용품", "checked": false },
        { "id": 6, "name": "디저트", "checked": false },
        { "id": 7, "name": "음료/주류", "checked": false },
        { "id": 8, "name": "반려동물", "checked": false },
        { "id": 9, "name": "기타", "checked": false }
    ]);

    const categoryHandler = (id, checked) => {

        if (!checked) {
            const count = categories.filter(category => category.checked === true)
            if (count.length == 5) {
                return errorHandler('최대 5개까지 추가 가능합니다.');
            }
        }

        setCategories(
            categories.map(category =>
                category.id === id ? { ...category, checked: !category.checked } : category
            )
        )
    }

    useEffect(() => {
        dataHanler({
            ...data,
            categories: categories
                .filter(category => category.checked === true)
                .map(category => category.name)
        });
    }, [categories])

    // 체크된거 체크하기
    useEffect(() => {
        if (data.categories.length > 0) {
            setCategories(
                categories.map(category =>
                    data.categories.includes(category.name) ? { ...category, checked: true } : category
                )
            )
        }
    }, [])

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
                                onClick={() => categoryHandler(item.id, item.checked)}
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
	isolation: isolate;
	position: absolute;
	width: 688px;
	height: 192px;
	justify-content: flex-start;
	background: #ffffff;
	box-shadow: 0px 3px 16px rgba(0, 0, 0, 0.06);
	border-radius: 4px;
	overflow: scroll;
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
`;


export default CategorySelect;