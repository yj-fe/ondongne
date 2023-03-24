import React, { useState, useCallback, useEffect } from "react";
import * as L from "components/commonUi/Layout";
import * as T from "components/commonUi/Text";
import * as C from "components/commonUi/Coupon";
import { DownloadC, DownloadD } from "components/commonUi/Icon";
import { storeConponList, couponDownload } from "service/coupon";
import Moment from "react-moment";
import "moment/locale/ko";
import HTMLReactParser from "html-react-parser";
import { useSelector } from "react-redux";
import Alert from "../../commonUi/Alert";
import { TextEditor } from "components/TextEditor/TextEditor.style";
import Confirm from "components/commonUi/Confirm";
import { useNavigate } from "react-router-dom";

function MarketDetailCoupon({ id }) {
    const navigate = useNavigate();
    const auth = useSelector((state) => state.auth);
    const [list, setList] = useState([]);
    const [alert, setAlert] = useState(null);
    const [confirm, setConfirm] = useState(false);

    const getList = useCallback(async () => {
        const response = await storeConponList(id);
        if (response && response.data) {
            setList(response.data);
        }
    }, [id]);

    const downloadHandler = async (id, storeId) => {
        if (!auth.isAuthenticated) {
            return setConfirm(true);
        }

        if (auth.storeId === storeId) {
            return setAlert({
                contents: "내 상점의 쿠폰은 다운 받을 수 없습니다.",
                buttonText: "확인",
                onButtonClick: () => setAlert(false),
                onOverlayClick: () => setAlert(false),
            });
        }

        const response = await couponDownload(id);
        if (response && response.data) {
            return setAlert({
                contents: response.data.message,
                buttonText: "확인",
                onButtonClick: () => setAlert(false),
                onOverlayClick: () => setAlert(false),
            });
        }
    };

    useEffect(() => {
        getList();
    }, [getList, id]);

    if (list.length === 0) {
        return (
            <L.Container>
                <L.Contents>
                    <L.FlexRows
                        _content="center"
                        _gap="0px"
                        _padding="56px 0px"
                        _height="150px"
                    >
                        <T.Text
                            _weight={300}
                            _size={15}
                            _color="gray600"
                            _align="center"
                        >
                            <p>해당 상점에</p>
                            <p>등록된 쿠폰이 없습니다.</p>
                        </T.Text>
                    </L.FlexRows>
                </L.Contents>
            </L.Container>
        );
    }

    return list.map((item, i) => (
        <L.Container key={i}>
            <L.Contents _padding="20px" _gap={16}>
                <L.FlexCols _gap={16}>
                    <L.FlexRows _align="center" _content="space-between">
                        <T.Text _size={18} _weight={600} _color="gray900">
                            {item.title}
                        </T.Text>
                        <T.Text _size={13} _weight={400} _color="gray500">
                            <CreatedAt date={item.createDate} />
                        </T.Text>
                    </L.FlexRows>
                    <TextEditor>{HTMLReactParser(item.contents)}</TextEditor>

                    {item.eventType === "coupon" && (
                        <C.Borderbox>
                            <C.Contentbox>
                                <L.FlexCols _gap={12}>
                                    <L.FlexCols _gap={0}>
                                        <T.Text
                                            _size={18}
                                            _weight={600}
                                            _color="gray900"
                                        >
                                            {item.coupon}
                                        </T.Text>
                                    </L.FlexCols>
                                    <L.FlexCols>
                                        <T.Text
                                            ext
                                            _size={13}
                                            _weight={400}
                                            _color="gray500"
                                        >
                                            <p>
                                                <Moment format="YY.MM.DD">
                                                    {item.endDate}
                                                </Moment>{" "}
                                                까지
                                            </p>
                                            <p>방문결제 시 현장 할인</p>
                                        </T.Text>
                                    </L.FlexCols>
                                </L.FlexCols>
                            </C.Contentbox>

                            <C.CouponUsebox
                                _color={
                                    item.downloadStatus ? "#9E9E9E" : "#0B806F"
                                }
                                _bg={
                                    item.downloadStatus ? "#F5F5F5" : "#E1F3F2"
                                }
                                _dir="column"
                                _gap={4}
                                onClick={
                                    item.downloadStatus
                                        ? () => {}
                                        : () =>
                                              downloadHandler(
                                                  item.storeCouponId,
                                                  item.storeId
                                              )
                                }
                            >
                                {item.downloadStatus ? (
                                    <DownloadD />
                                ) : (
                                    <DownloadC />
                                )}
                                {item.downloadStatus
                                    ? "받은 쿠폰"
                                    : "쿠폰 받기"}
                            </C.CouponUsebox>
                        </C.Borderbox>
                    )}
                </L.FlexCols>
            </L.Contents>
            {alert && (
                <Alert
                    title={alert.title}
                    contents={alert.contents}
                    buttonText={alert.buttonText}
                    onButtonClick={alert.onButtonClick}
                    onOverlayClick={alert.onOverlayClick}
                />
            )}
            {confirm && (
                <Confirm
                    contents="로그인 후 이용가능합니다. 로그인 페이지로 이동하시겠습니까?"
                    confirmText="네"
                    cancelText="아니오"
                    onConfirmClick={() => {
                        navigate("/login");
                    }}
                    onCancelClick={() => {
                        setConfirm(false);
                    }}
                />
            )}
        </L.Container>
    ));
}

const CreatedAt = ({ date }) => {
    let startTime = new Date(date);
    let nowTime = Date.now();

    // 방금전
    if (parseInt(startTime - nowTime) > -60000) {
        return <Moment format="방금 전">{startTime}</Moment>;
    }

    // 3일 후 날짜 표시
    if (parseInt(startTime - nowTime) < -86400000 * 3) {
        return <Moment format="YY.MM.DD">{startTime}</Moment>;
    }

    // 3일전 일, 시간, 분 표시
    if (parseInt(startTime - nowTime) > -86400000 * 3) {
        return <Moment fromNow>{startTime}</Moment>;
    }
};

export default MarketDetailCoupon;
