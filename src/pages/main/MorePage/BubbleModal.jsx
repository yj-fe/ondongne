import { Sticky } from "./MorePageStyle";
import * as L from "components/commonUi/Layout";
import * as B from "components/commonUi/Button";
import * as T from "components/commonUi/Text";
import { useCookies } from "react-cookie";
import { Close } from "components/commonUi/Icon";
import moment from "moment";
import styled from "styled-components";

const BubbleModal = () => {
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
                <T.Text _size={13} _weight={400} _color="white">
                    상품 판매가 가능한{" "}
                    <T.Text _size={13} _weight={600} _color="white" as="span">
                        {`\n`}비즈 회원으로 전환
                    </T.Text>
                    해 보세요!
                </T.Text>
                <div className="bar"></div>
                <B.Button _width={"max-content"}>
                    <Close width={12} height={12} fill={"#fff"} />
                </B.Button>
            </Container>
        </Sticky>
    );
};

const Container = styled.div`
    display: flex;
    align-items: center;
    background-color: #d32f2f;
    border-radius: 4px;
    padding: 10px 8px;
    width: 210px;
    gap: 8px;
    min-height: max-content;

    .bar {
        width: 1px;
        height: 100%;
        background: #ef9a9a;
    }
`;

export default BubbleModal;
