import { ThreeDots } from "react-loader-spinner";
import styled from "styled-components";

const Loading = styled.div`
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 50%;
    transform: translate(0, -50%);
`;

const LoadingDots = ({ isVisible = false }) => {
    return (
        <Loading>
            <ThreeDots
                height="40"
                width="40"
                radius="9"
                color="#BDBDBD"
                ariaLabel="three-dots-loading"
                visible={isVisible}
            />
        </Loading>
    )
}

export default LoadingDots;