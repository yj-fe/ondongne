import React, { useEffect, useState } from "react";
import * as L from "components/commonUi/Layout";
import * as T from "components/commonUi/Text";
import Layout from "components/layout/Layout/Layout";
import { Link, useNavigate } from "react-router-dom";
import {
    ArrowRight,
    Down,
    OrderDelivery,
    OrderDelivery_Y,
    OrderEnd,
    OrderEnd_Y,
    OrderStandBy,
    OrderStandBy_Y,
    OrderSuccess,
    OrderSuccess_Y,
} from "components/commonUi/Icon";
import { S } from "components/orders/orderlist/OrderListStyle";
import Confirm from "components/commonUi/Confirm";
import { useSelector } from "react-redux";
import { bizOrderList, orderStatusUpdate } from "service/bizOrder";
import dayjs from "dayjs";
import Alert from "components/commonUi/Alert";
import { orderCancel } from "service/order";
import { orderName } from "utils/utils";
import { CursorDiv } from "components/Common/LayoutPageStyle";

function OrderManagement() {
    const navigate = useNavigate();
    const auth = useSelector((state) => state.auth);
    const [orderData, setOrderData] = useState([]);
    const [delOrder, setDelOrder] = useState(null);
    const [alert, setAlert] = useState(null);
    const [cancelOrder, setCancelOrder] = useState(null);
    console.log(orderData);

    const loadData = async () => {
        const response = await bizOrderList(auth.storeId);

        if (response && response.data.data) {
            setOrderData(response.data.data);
        } else {
            navigate("/", {
                replace: true,
                state: { error: "잘못된 접근입니다." },
            });
        }
    };

    const statusUpdtae = async (id, status) => {
        const response = await orderStatusUpdate(id, status);

        if (response && response.data) {
            const { message, data } = response.data;

            loadData();
            return setAlert({
                contents: message,
                buttonText: "확인",
                onButtonClick: () => setAlert(false),
                onOverlayClick: () => setAlert(false),
            });
        }
    };

    /* ==============================
        주문 취소
    ============================== */
    const handleOrderCancel = async (id) => {
        const response = await orderCancel(id);

        if (response && response.data.data) {
            loadData();
            setDelOrder(null);
        }
    };

    useEffect(() => {
        if (auth.isAuthenticated && auth.storeId) {
            loadData();
        }
    }, [auth]);

    return (
        <CursorDiv>
            <Layout
                title="주문 관리"
                bell={false}
                cart={false}
                onBackClick={() => navigate(-1)}
            >
                <L.Container _height="calc(100vh - 60px)">
                    <L.FlexNewScroll
                        _cursor="default"
                        _padding="8px 0 80px"
                        _height="calc(100vh - 70px)"
                        _bg="transparent"
                    >
                        <L.Contents>
                            <L.FlexCols _gap={80}>
                                <L.FlexRows
                                    _gap={4}
                                    _content="space-between"
                                    _items="center"
                                >
                                    <div>
                                        <T.Text
                                            _size={16}
                                            _weight={600}
                                            _color="gray900"
                                        >
                                            전체 {orderData.length}
                                        </T.Text>
                                    </div>
                                    <L.FlexRows
                                        _gap={4}
                                        _content="flex-end"
                                        _width="150px"
                                        _items="center"
                                    >
                                        <T.Text
                                            _size={13}
                                            _weight={400}
                                            _color="gray900"
                                        >
                                            최근 주문 순
                                        </T.Text>
                                        <Down />
                                    </L.FlexRows>
                                </L.FlexRows>
                                {/* 주문 없을 때 */}
                                {orderData.length === 0 && (
                                    <L.FlexRows
                                        _height="calc(100vh - 68px)"
                                        _content="center"
                                        _item="center"
                                    >
                                        <T.Text
                                            _align="center"
                                            _size={15}
                                            _weight={300}
                                            _color="gray600"
                                        >
                                            <p>주문 내역이 없습니다.</p>
                                        </T.Text>
                                    </L.FlexRows>
                                )}
                            </L.FlexCols>
                        </L.Contents>

                        {/* 주문 있을 때 */}
                        {/* ===== 1-1. 배달- 결제 완료 ===== */}
                        {orderData &&
                            orderData.length > 0 &&
                            orderData.map((item, idx) => (
                                <L.Contents key={idx}>
                                    <L.FlexCols _gap={40}>
                                        <L.FlexRows
                                            _content="space-between"
                                            _items="flex-start"
                                        >
                                            <L.FlexCols _gap={4}>
                                                <T.Text
                                                    _size={18}
                                                    _weight={600}
                                                >
                                                    {item.memberNickname}
                                                </T.Text>
                                                <T.Text
                                                    _size={15}
                                                    _color="gray800"
                                                >
                                                    <T.Text
                                                        as="span"
                                                        _size={15}
                                                        _color="gray800"
                                                        _weight={600}
                                                    >
                                                        연락처
                                                    </T.Text>
                                                    :{" "}
                                                    {item.memberPhone.replace(
                                                        /(\d{3})(\d{4})(\d{4})/,
                                                        "$1-$2-$3"
                                                    )}
                                                </T.Text>
                                                <T.Text
                                                    _size={15}
                                                    _color="gray800"
                                                >
                                                    <T.Text
                                                        as="span"
                                                        _size={15}
                                                        _color="gray800"
                                                        _weight={600}
                                                    >
                                                        주소
                                                    </T.Text>
                                                    :{" "}
                                                    {`${item.deliveryAddress} ${item.deliveryAddressDetails}`}
                                                </T.Text>
                                                <T.Text
                                                    _size={15}
                                                    _color="gray800"
                                                >
                                                    <T.Text
                                                        as="span"
                                                        _size={15}
                                                        _color="gray800"
                                                        _weight={600}
                                                    >
                                                        상품명
                                                    </T.Text>
                                                    : {item.orderName}
                                                </T.Text>

                                                <T.Text
                                                    _size={15}
                                                    _color="gray800"
                                                >
                                                    <T.Text
                                                        as="span"
                                                        _size={15}
                                                        _color="gray800"
                                                        _weight={600}
                                                    >
                                                        요청사항
                                                    </T.Text>
                                                    :{" "}
                                                    {item.deliveryContents
                                                        ? item.deliveryContents
                                                        : "요청사항 없음"}
                                                </T.Text>

                                                <T.Text
                                                    _size={13}
                                                    _color="gray500"
                                                >
                                                    {dayjs(
                                                        item.createDate
                                                    ).format(
                                                        "YYYY/MM/DD HH:mm"
                                                    )}
                                                </T.Text>
                                            </L.FlexCols>
                                            <L.FlexCols _width={"15%"}>
                                                <T.Text
                                                    _size={15}
                                                    _color="gray800"
                                                    _align="right"
                                                >
                                                    {item.orderStatus}
                                                </T.Text>
                                            </L.FlexCols>
                                        </L.FlexRows>
                                        <L.FlexRows
                                            _gap={0}
                                            _content="space-evenly"
                                            _items="center"
                                        >
                                            <L.FlexCols _width="auto">
                                                {item.orderStatus ==
                                                "결제완료" ? (
                                                    <OrderSuccess_Y />
                                                ) : (
                                                    <OrderSuccess />
                                                )}
                                                <T.Text
                                                    _size={12}
                                                    _align="center"
                                                    _weight={
                                                        item.orderStatus ==
                                                        "결제완료"
                                                            ? 600
                                                            : 400
                                                    }
                                                    _color={
                                                        item.orderStatus ==
                                                        "결제완료"
                                                            ? "green700"
                                                            : "gray400"
                                                    }
                                                >
                                                    결제 완료
                                                </T.Text>
                                            </L.FlexCols>
                                            <ArrowRight />
                                            <L.FlexCols _width="auto">
                                                {item.orderStatus ==
                                                "상품준비" ? (
                                                    <OrderStandBy_Y />
                                                ) : (
                                                    <OrderStandBy />
                                                )}
                                                <T.Text
                                                    _align="center"
                                                    _size={12}
                                                    _weight={
                                                        item.orderStatus ==
                                                        "상품준비"
                                                            ? 600
                                                            : 400
                                                    }
                                                    _color={
                                                        item.orderStatus ==
                                                        "상품준비"
                                                            ? "green700"
                                                            : "gray400"
                                                    }
                                                >
                                                    상품 준비
                                                </T.Text>
                                            </L.FlexCols>
                                            <ArrowRight />
                                            {item.recetiveType === "배달" && (
                                                <>
                                                    <L.FlexCols _width="auto">
                                                        {item.orderStatus ==
                                                        "배송중" ? (
                                                            <OrderDelivery_Y />
                                                        ) : (
                                                            <OrderDelivery />
                                                        )}
                                                        <T.Text
                                                            _align="center"
                                                            _size={12}
                                                            _weight={
                                                                item.orderStatus ==
                                                                "배송중"
                                                                    ? 600
                                                                    : 400
                                                            }
                                                            _color={
                                                                item.orderStatus ==
                                                                "배송중"
                                                                    ? "green700"
                                                                    : "gray400"
                                                            }
                                                        >
                                                            배송중
                                                        </T.Text>
                                                    </L.FlexCols>
                                                    <ArrowRight />
                                                </>
                                            )}
                                            <L.FlexCols _width="auto">
                                                {item.orderStatus ==
                                                    "픽업완료" ||
                                                item.orderStatus ==
                                                    "배송완료" ? (
                                                    <OrderEnd_Y />
                                                ) : (
                                                    <OrderEnd />
                                                )}
                                                <T.Text
                                                    _align="center"
                                                    _size={12}
                                                    _weight={
                                                        item.orderStatus ==
                                                            "픽업완료" ||
                                                        item.orderStatus ==
                                                            "배송완료"
                                                            ? 600
                                                            : 400
                                                    }
                                                    _color={
                                                        item.orderStatus ==
                                                            "픽업완료" ||
                                                        item.orderStatus ==
                                                            "배송완료"
                                                            ? "green700"
                                                            : "gray400"
                                                    }
                                                >
                                                    {item.recetiveType == "배달"
                                                        ? "배송 완료"
                                                        : "픽업 완료"}
                                                </T.Text>
                                            </L.FlexCols>
                                        </L.FlexRows>
                                        <L.FlexCols _gap={8}>
                                            {item.orderStatus ===
                                                "결제완료" && (
                                                <S.Action
                                                    _type="bg"
                                                    onClick={() => {
                                                        statusUpdtae(
                                                            item.orderId,
                                                            "상품준비"
                                                        );
                                                    }}
                                                >
                                                    주문 확인
                                                </S.Action>
                                            )}
                                            {item.orderStatus ===
                                                "상품준비" && (
                                                <S.Action
                                                    _type="bg"
                                                    onClick={() => {
                                                        statusUpdtae(
                                                            item.orderId,
                                                            "배송중"
                                                        );
                                                    }}
                                                >
                                                    배달 진행
                                                </S.Action>
                                            )}
                                            {item.orderStatus === "배송중" && (
                                                <S.Action
                                                    _type="bg"
                                                    onClick={() =>
                                                        navigate(
                                                            "/business/order/details/auth",
                                                            {
                                                                state: {
                                                                    id: item.orderId,
                                                                    storeId:
                                                                        item.storeId,
                                                                },
                                                            }
                                                        )
                                                    }
                                                >
                                                    배달/픽업 인증
                                                </S.Action>
                                            )}
                                            <S.Action
                                                as={Link}
                                                to={`/order/details/${item.orderId}`}
                                            >
                                                주문내역 보기
                                            </S.Action>
                                            {item.orderStatus ===
                                                "결제완료" && (
                                                <S.Action
                                                    _type="cancel"
                                                    onClick={() => {
                                                        return setDelOrder({
                                                            active: true,
                                                            warn: true,
                                                            contents:
                                                                "해당 고객의 주문을 취소하시겠습니까?",
                                                            confirmText:
                                                                "주문 취소",
                                                            cancelText:
                                                                "아니요",
                                                            onConfirmClick:
                                                                () =>
                                                                    handleOrderCancel(
                                                                        item.orderId
                                                                    ),
                                                            onCancelClick: () =>
                                                                setDelOrder(
                                                                    null
                                                                ),
                                                        });
                                                    }}
                                                >
                                                    주문 취소
                                                </S.Action>
                                            )}
                                        </L.FlexCols>
                                    </L.FlexCols>
                                </L.Contents>
                            ))}
                    </L.FlexNewScroll>
                </L.Container>
            </Layout>
            {delOrder && (
                <Confirm
                    contents={delOrder.contents}
                    confirmText={delOrder.confirmText}
                    cancelText={delOrder.cancelText}
                    onConfirmClick={delOrder.onConfirmClick}
                    onCancelClick={delOrder.onCancelClick}
                    active={delOrder.active}
                    warn={delOrder.warn}
                />
            )}
            {alert && (
                <Alert
                    title={alert.title}
                    contents={alert.contents}
                    desc={alert.desc}
                    buttonText={alert.buttonText}
                    onButtonClick={alert.onButtonClick}
                    onOverlayClick={alert.onOverlayClick}
                />
            )}
        </CursorDiv>
    );
}

export default OrderManagement;
