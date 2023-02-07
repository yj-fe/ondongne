import styled from "styled-components";
import { Close } from "../Icon";

const SelectedItems = ({ data, categoryHandler }) => {

    return (
        <Container>
            {
                data
                    .filter(category => category.checked === true)
                    .map((category, i) => (
                        <div key={i}>
                            <p>{category.name}</p>
                            <button
                                type="button"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    categoryHandler(category.id);
                                }}
                            >
                                <Close width={12} height={12} />
                            </button>
                        </div>
                    ))
            }
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: flex-end;
    flex-wrap: wrap;
    gap: 8px;

    & div {
        display: flex;
        align-items: center;
        gap: 8px;
        background-color: #EFF8FB;
        border-radius: 2px;
        padding: 2px 6px;

        & p {
            font-size: 14px;
            font-weight: 500;
            color: #333333;
        }

        & button {
            display: flex;
            /* align-items: center; */
            padding: 0;
            margin: 0;
            cursor: pointer;
        }
    }
`;

export default SelectedItems;