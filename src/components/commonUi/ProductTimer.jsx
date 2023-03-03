import LastDateCountDown from "hooks/LastDateCountDown";
import { Watch } from "react-loader-spinner";
import styled from "styled-components";

const ContentDate = styled.div`
    display: flex;
    align-items: center;
    padding: 2px 6px;
    gap: 4px;
    width: max-content !important;
    height: 22px;
    background: #fdecee;
    border-radius: 2px;
    font-weight: 700;
    font-size: 12px;
    line-height: 18px;
    color: #ed4f62;
    margin-bottom: 4px;

    & div {
        width: auto;
    }

    & p {
        width: auto;
    }
`;

const ProductTimer = ({ date }) => {
    const [days, hours, minutes, seconds] = LastDateCountDown(date);

    return (
        <ContentDate>
            <Watch
                height="12"
                width="12"
                radius="48"
                color="red"
                ariaLabel="watch-loading"
                wrapperStyle={{ fontWeight: "blod" }}
                visible={true}
            />
            <p>
                {days > 0 && `D-${`${days}일`} ${hours}시간 ${minutes}분`}
                {days <= 0 && `D-Day ${hours}시간 ${minutes}분`}
            </p>
        </ContentDate>
    );
};

export default ProductTimer;
