import { Sticky } from "./MorePageStyle";
import * as L from "components/commonUi/Layout";
import * as B from "components/commonUi/Button";
import * as T from "components/commonUi/Text";
import { useCookies } from "react-cookie";
import { Close } from "components/commonUi/Icon";
import moment from "moment";
import styled from "styled-components";
import useWindowSize from "hooks/useWindowSize";

const BubbleModal = () => {
    const size = useWindowSize();
    const COOKIE_BUBBLE_KEY = "bubbleNeverWatch";
    const [cookiesBubble, setCookieBubble] = useCookies([COOKIE_BUBBLE_KEY]);

    // 다시보지않기 이벤트
    const onClose = () => {
        const decade = moment();
        decade.add(7, "d");
        setCookieBubble(COOKIE_BUBBLE_KEY, "true", {
            path: "/more",
            expires: decade.toDate(),
        });
    };

    return cookiesBubble[COOKIE_BUBBLE_KEY] ? null : (
        <Sticky>
            <Container>
                <T.Text _size={13} _weight={600} _color="white">
                    상품 판매가 가능한{" "}
                    <T.Text _size={13} _weight={700} _color="white" as="span">
                        {size.width <= 600 ? `\n` : ""}비즈 회원으로 전환
                    </T.Text>
                    해 보세요!
                </T.Text>
                <div className="bar"></div>
                <B.Button _width={"max-content"} onClick={onClose}>
                    <Close width={14} height={14} fill={"#fff"} />
                </B.Button>
            </Container>
            <Arrow />
        </Sticky>
    );
};

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #e54e2b;
    border-radius: 4px;
    padding: 10px 12px;
    width: 100%;
    min-width: 210px;
    gap: 4px;
    height: 38px;

    @media screen and (max-width: 600px) {
        height: 56px;
    }

    .bar {
        width: 1px;
        height: 100%;
        background: #ef9a9a;
    }
`;

const Arrow = styled.div`
    width: 0px;
    height: 0px;
    border-bottom: 8px solid transparent;
    border-top: 8px solid #e54e2b;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    z-index: 30;
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0);

    @media screen and (max-width: 400px) {
        left: 65%;
    }
`;

export default BubbleModal;
