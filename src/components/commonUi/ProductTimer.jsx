import useCountDown from "hooks/useCountDown";
import { Watch } from "react-loader-spinner";
import styled from "styled-components";

const ContentDate = styled.div`
    display: flex;
    align-items: center;
    padding: 2px 6px;
    gap: 4px;
    width: max-content !important;
    height: 22px;
    background: ${(props) => props._bg};
    border-radius: 2px;
    font-weight: 700;
    font-size: 12px;
    line-height: 18px;
    color: ${(props) => props._color};
    margin-bottom: 4px;

    & div {
        width: auto;
    }

    & p {
        width: auto;
    }
`;

const ProductTimer = ({ startDate = new Date(), endDate, type = false }) => {
    const [days, hours, minutes, seconds] = useCountDown(startDate, endDate);

    if (days < 0) return <></>;
    return (
        <ContentDate
            _bg={type ? "#f1faff" : "#fdecee"}
            _color={type ? "#0095e8" : "#ed4f62"}
        >
            <Watch
                height="12"
                width="12"
                radius="48"
                color={type ? "#0095e8" : "#ed4f62"}
                ariaLabel="watch-loading"
                wrapperStyle={{ fontWeight: "blod" }}
                visible={true}
            />
            <p>
                {days > 0 &&
                    `D-${`${days}일`} ${hours}시간 ${minutes}분 ${seconds}초`}
                {days === 0 && `D-Day ${hours}시간 ${minutes}분 ${seconds}초`}
            </p>
        </ContentDate>
    );
};

export default ProductTimer;
