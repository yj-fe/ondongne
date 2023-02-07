import { useEffect, useState } from "react";
import styled from "styled-components";
import CategorySelect from "./CategorySelect";
import { Down } from "../Icon";
import SelectedItems from "./SelectedItems";

const CategoryForm = ({ data, setData, multiple = false }) => {

    const [select, setSelect] = useState(false);
    const [categories, setCategories] = useState([
        { "id": 0, "name": "야채/과일", "checked": false },
        { "id": 1, "name": "정육", "checked": false },
        { "id": 2, "name": "수산/해산", "checked": false },
        { "id": 3, "name": "쌀/잡곡", "checked": false },
        { "id": 4, "name": "식품", "checked": false },
        { "id": 5, "name": "생활용품", "checked": false },
        { "id": 6, "name": "디저트", "checked": false },
        { "id": 7, "name": "식음료", "checked": false },
        { "id": 8, "name": "반려동물", "checked": false },
        { "id": 9, "name": "기타", "checked": false }
    ]);

    const categoryHandler = id => {
        if (multiple) {
            return setCategories(
                categories.map(category =>
                    category.id === id ? { ...category, checked: !category.checked } : category
                )
            )
        }
        setCategories(
            categories.map(category =>
                category.id === id ? { ...category, checked: true } : { ...category, checked: false }
            )
        )
    };

    useEffect(() => {
        setData({
            ...data,
            categories: categories
                .filter(category => category.checked === true)
                .map(category => category.name)
        });
        setSelect(false);
    }, [categories]);

    return (
        <Container>
            <h1>카테고리</h1>
            <div
                className="content"
                onClick={() => setSelect(!select)}
            >
                {
                    data.categories.length === 0 &&
                    <p>카테고리 선택</p>
                }
                {
                    data.categories.length > 0 &&
                        multiple
                        ? <SelectedItems
                            data={categories}
                            categoryHandler={categoryHandler}
                        />
                        : <p>{data.categories.toString()}</p>
                }
                <div className="icon"><Down /></div>
            </div>
            <CategorySelect
                isOpen={select}
                categories={categories}
                categoryHandler={categoryHandler}
            />
        </Container>
    )
}

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	padding: 0px;
	gap: 16px;
	width: 100%;
	height: auto;
    position: relative;

    & h1 {
        font-weight: 600;
        font-size: 15px;
        color: #212121;
        width: 100%;
    }

    & p {
        font-weight: ${(props) => props.weight || 400};
        font-size: 16px;
        color: ${(props) => props.color || "gray900"};
    }

    > .content {
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        padding: 14px 12px;
        gap: 12px;
        width: 100%;
        height: auto;
        background: #ffffff;
        border-bottom: 1px solid #eeeeee;
    }
    > .icon {
        width: 24px;
	    height: 24px;
    }
`;

export default CategoryForm;