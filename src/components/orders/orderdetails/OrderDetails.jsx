import React from "react";
import * as L from "components/commonUi/Layout";
import * as T from "components/commonUi/Text";
import * as Tb from "components/commonUi/Table";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { Profile48 } from "components/commonUi/Icon";
import Confirm from "components/commonUi/Confirm";
import Alert from "components/commonUi/Alert";
import { S } from "./OrderDetailsStyle";
import { orderCancel, orderDetails } from "service/order";
import { numberFormat } from "utils/utils";
import dayjs from "dayjs";
const IMGURL = "https://cdn.ondongnemarket.com/store/";

const OrderDetails = (props) => {
    // id parameter
    const { id } = useParams();
    const [orderData, setOrderData] = useState(null);
    // ui - alert (나중에 global로 관리)
    const [alert, setAlert] = useState(null);
    const [confirm, setConfirm] = useState(null);
    //
    const navigate = useNavigate();

    /* ==============================
        주문 정보 등 요청
        params: 주문항목 고유 id 등
    ============================== */
    const loadData = async (prodId) => {
        const response = await orderDetails(prodId);
        if (response && response.data.data) {
            setOrderData(response.data.data);
        }
    };

    const onPickUpClick = (e) => {
        e.preventDefault();
        setConfirm({
            contents: `정말로 상품을 수령하셨나요? \n 상품을 수령하셨다면 확인버튼을 눌러주세요.`,
            onConfirmClick: () => {
                handlePickUp();
                setConfirm(null);
            },
            onCancelClick: () => {
                setConfirm(null);
            },
        });
    };

    const onDeleteClick = (e) => {
        e.preventDefault();
        setConfirm({
            warn: true,
            contents: `주문내역을 정말로 삭제하시겠습니까? \n내역 삭제 전 나만의 단골집으로 등록해보세요!`,
            confirmText: "삭제",
            cancelText: "취소",
            onConfirmClick: () => {
                handleDelete();
                setConfirm(null);
            },
            onCancelClick: () => {
                setConfirm(null);
            },
        });
    };

    /* ==============================
        주문 내역 삭제
    ============================== */
    const handleDelete = () => {
        setAlert({
            title: "삭제 완료",
            contents: "주문 내역이 삭제되었습니다.",
            buttonText: "확인",
            onButtonClick: () => {
                navigate("/order/all");
            },
            onOverlayClick: () => {
                navigate("/order/all");
            },
        });
    };

    /* ==============================
        상점 수령
    ============================== */
    const handlePickUp = () => {
        setAlert({
            title: "수령 완료",
            contents: "주문 내역이 수령 완료 처리되었습니다.",
            buttonText: "확인",
            onButtonClick: () => {
                navigate("/order/all");
            },
            onOverlayClick: () => {
                navigate("/order/all");
            },
        });
    };

    /* ==============================
        주문 취소
    ============================== */
    const handleOrderDelete = async () => {
        const response = await orderCancel(id);

        if (response && response.data.data) {
            navigate(-1, { replace: true });
        }
    };

    // 주문 총 가격
    const orderTotalPrice = (items) => {
        let price = 0;
        items.map((item) => (price += Number(item.price) * item.count));
        return price;
    };

    useEffect(() => {
        loadData(id);
    }, [id]);

    return orderData ? (
        <L.Container _height="calc(100vh - 60px)">
            {/* 주문 완료 */}
            <L.Contents>
                <L.FlexCols _gap={24}>
                    <L.FlexRows _gap={0} _content="space-between">
                        <L.FlexRows _gap={16} _width="auto" _items="center">
                            {orderData.storeProfile ? (
                                <img
                                    src={IMGURL + orderData.storeProfile}
                                    width="48px"
                                    height="48px"
                                />
                            ) : (
                                <Profile48 />
                            )}
                            <L.FlexCols _width="auto" _gap={4}>
                                <T.Text _size={18} _weight={600}>
                                    {orderData.storeName}
                                </T.Text>
                                <T.Text _size={15} _color="gray800">
                                    {orderData.orderName}
                                </T.Text>
                            </L.FlexCols>
                        </L.FlexRows>
                        <T.Text _size={14} _weight={500} _color="gray800">
                            {orderData.orderStatus}
                        </T.Text>
                    </L.FlexRows>
                    <L.FlexCols _gap={4}>
                        <L.FlexCols _gap={4}>
                            <T.Text _size={14} _color="gray600">
                                주문 일시:{" "}
                                {dayjs(orderData.createDate).format(
                                    "YYYY.MM.DD"
                                )}
                            </T.Text>
                            <T.Text _size={14} _color="gray600">
                                주문 번호: {orderData.orderId}
                            </T.Text>
                            <T.Text _size={14} _color="gray600">
                                수령 방법: {orderData.recetiveType}
                            </T.Text>
                        </L.FlexCols>
                    </L.FlexCols>
                </L.FlexCols>
            </L.Contents>
            {/* 배송지 / 요청 사항 */}
            <L.Contents>
                <L.FlexCols _gap={16}>
                    {orderData.recetiveType === "배달" ? (
                        <L.FlexCols _gap={4}>
                            <T.Text _weight={600}>배송지 주소</T.Text>
                            <T.Text _size={15} _color="gray800">
                                {orderData.deliveryAddress}{" "}
                                {orderData.deliveryAddressDetails}
                            </T.Text>
                        </L.FlexCols>
                    ) : (
                        <L.FlexCols _gap={4}>
                            <T.Text _weight={600}>수령지 주소</T.Text>
                            <T.Text _size={15} _color="gray800">
                                {orderData.storeAddress}{" "}
                                {orderData.storeAddressDetails}
                            </T.Text>
                        </L.FlexCols>
                    )}
                    {orderData.deliveryContents && (
                        <L.FlexCols _gap={4}>
                            <T.Text _weight={600}>요청사항</T.Text>
                            <T.Text _size={15} _color="gray800">
                                {orderData.deliveryContents}
                            </T.Text>
                        </L.FlexCols>
                    )}
                </L.FlexCols>
            </L.Contents>
            {/* 주문 상품 */}
            {orderData.orderItems.length > 0 &&
                orderData.orderItems.map((item, index) => (
                    <L.Contents key={index}>
                        <L.FlexCols _gap={16}>
                            <T.Text _weight={600} _size={18}>
                                {item.name}
                            </T.Text>
                            <L.FlexCols _gap={4}>
                                <T.Text _color="gray800">
                                    수량: {item.count}개
                                </T.Text>
                                <T.Text _color="gray800">
                                    기본:{" "}
                                    {numberFormat(
                                        Number(item.price) * item.count
                                    )}
                                    원
                                </T.Text>
                            </L.FlexCols>
                        </L.FlexCols>
                    </L.Contents>
                ))}

            {/* 결제 금액 */}
            <L.Contents>
                <L.FlexCols _gap={16}>
                    <T.Text _size={18} _weight={600}>
                        결제 금액
                    </T.Text>
                    <Tb.ReciptTable>
                        <tbody>
                            <tr>
                                <th>상품 주문 금액</th>
                                <td>
                                    {numberFormat(
                                        orderTotalPrice(orderData.orderItems)
                                    )}{" "}
                                    원
                                </td>
                            </tr>
                            <tr>
                                <th>배달비</th>
                                <td>
                                    {numberFormat(orderData.deliveryPrice)} 원
                                </td>
                            </tr>
                            <tr>
                                <th>결제 수단</th>
                                <td>{orderData.paymentType}결제</td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <th>총 결제금액</th>
                                <td>{numberFormat(orderData.amount)} 원</td>
                            </tr>
                        </tfoot>
                    </Tb.ReciptTable>
                </L.FlexCols>
            </L.Contents>
            <S.Actions>
                {orderData.orderStatus === "결제완료" && (
                    <S.Action
                        _color="error"
                        onClick={() =>
                            setConfirm({
                                warn: true,
                                contents: `주문을 정말로 취소하시겠습니까?`,
                                confirmText: "네",
                                cancelText: "아니요",
                                onConfirmClick: () => {
                                    handleOrderDelete();
                                },
                                onCancelClick: () => {
                                    setConfirm(null);
                                },
                            })
                        }
                    >
                        주문 취소
                    </S.Action>
                )}
                {orderData.recetiveType === "픽업" &&
                    orderData.orderStatus === "상품준비중" && (
                        <S.Action onClick={onPickUpClick}>상점 수령</S.Action>
                    )}
                {orderData.orderStatus === "상품수령완료" && (
                    <S.Action onClick={onDeleteClick} _color="error">
                        주문 내역 삭제
                    </S.Action>
                )}
            </S.Actions>
            {/* CONFIRMS */}
            {confirm && (
                <Confirm
                    warn={confirm.warn}
                    contents={confirm.contents}
                    confirmText={confirm.confirmText}
                    cancelText={confirm.cancelText}
                    onConfirmClick={confirm.onConfirmClick}
                    onCancelClick={confirm.onCancelClick}
                />
            )}
            {alert && (
                <Alert
                    title={alert.title}
                    contents={alert.contents}
                    buttonText={alert.buttonText}
                    onButtonClick={alert.onButtonClick}
                    onOverlayClick={alert.onOverlayClick}
                />
            )}
        </L.Container>
    ) : (
        <></>
    );
};

export default OrderDetails;
