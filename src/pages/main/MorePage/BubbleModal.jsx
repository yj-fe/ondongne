import { Sticky } from "./MorePageStyle";
import * as T from "components/commonUi/Text";
import { AbsoluteDiv, RelativDiv } from "components/layout/Img/ImgSizeLayout";
import { useCookies } from "react-cookie";
import { Bubble } from "components/commonUi/Icon";
import moment from "moment";

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
            <RelativDiv _width={199} _height={100} _widthmedia="170px">
                <Bubble />
                <AbsoluteDiv
                    _pd="6px"
                    _width={20}
                    _height={20}
                    _right="9%"
                    _top="10%"
                    _rightmedia="-10%"
                    onClick={onClose}
                >
                    <T.Text
                        _size={13}
                        _weight={600}
                        _color="white"
                        _align="center"
                    >
                        X
                    </T.Text>
                </AbsoluteDiv>
                <AbsoluteDiv _width={190} _height={80} _left="30px">
                    <T.Text
                        _size={12}
                        _weight={600}
                        _color="white"
                        _align="center"
                    >
                        상품 판매가 가능한 {`\n`} 비즈 회원으로 전환해 보세요!
                    </T.Text>
                </AbsoluteDiv>
            </RelativDiv>
        </Sticky>
    );
};

export default BubbleModal;
