import styled from "styled-components";
import { Close } from "../Icon";

const DeliverySelectedItems = ({ data, setData }) => {

    const onEventHandler = name => {
        setData(data.filter(d => d !== name));
    }

    const naming = (string) => {
        const strings = string.split(' ');
        return `${strings[1]} ${strings[2]}`;
    }

    return (
        <Container>
            {
                data
                    .map((delivery, i) => (
                        <div key={i}>
                            <p>{naming(delivery)}</p>
                            <button
                                type="button"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    onEventHandler(delivery);
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
        background-color: #EFFBEF;
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

export default DeliverySelectedItems;