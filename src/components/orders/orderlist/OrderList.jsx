import React from 'react'
import * as L from 'components/commonUi/Layout';
import * as T from 'components/commonUi/Text';
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { ArrowRight, Close, OrderDelivery, OrderEnd, OrderEnd_Y, OrderNextIcon, OrderStandBy, OrderStandBy_Y, OrderSuccess, OrderSuccess_Y, Profile48 } from 'components/commonUi/Icon';
import Confirm from 'components/commonUi/Confirm';
import Overlay from 'components/layout/Overlay/Overlay';
import { S } from "./OrderListStyle";
import { useSelector } from 'react-redux';
import { orderCancel, orderList, orderUnView } from 'service/order';
import LoadingBar from 'components/commonUi/LoadingBar';
import { OrderDelivery_Y } from './../../commonUi/Icon';
import dayjs from 'dayjs';

const OrderList = () => {

    const auth = useSelector(state => state.auth);

    const [orderData, setOrderData] = useState(null);
    // ui
    const [delOrder, setDelOrder] = useState(-1);
    const [cancelOrder, setCancelOrder] = useState(-1);
    const [deliveryPopup, setDeliveryPopup] = useState(false);
    // 
    const navigate = useNavigate();

    /* ==============================
        배송지, 상품, 결제 정보 등 요청
        params: 카트 고유 값 등
    ============================== */
    const loadData = async () => {
        const response = await orderList();
        if (response && response.data.data) {
            setOrderData(response.data.data);
        }
    };

    /* ==============================
        주문 내역 삭제
    ============================== */
    const handleOrderDelete = async () => {
        const response = await orderUnView(delOrder);

        if (response && response.data.data) {
            loadData();
            setDelOrder(-1);
        }
    };

    /* ==============================
        주문 취소
    ============================== */
    const handleOrderCancel = async () => {
        const response = await orderCancel(cancelOrder);

        if (response && response.data.data) {
            loadData();
            setCancelOrder(-1);
        }
    };

    const orderName = (item) => {
        if (item.orderItems.length > 1) {
            return `${item.orderItems[0].name} 외 ${item.orderItems.length - 1}개`
        } else {
            return `${item.orderItems[0].name}`
        }
    }

    useEffect(() => {
        if (auth.isAuthenticated) {
            loadData();
        }
    }, [auth])

    return (
        orderData
            ? (
                orderData.length > 0
                    ? <L.Container _padding="8px 0 80px">
                        {
                            orderData.map((item, idx) => (
                                <L.Contents key={idx}>
                                    <L.FlexCols _gap={40}>
                                        <L.FlexRows _content="space-between" _items="flex-start">
                                            <L.FlexCols _gap={4} onClick={() => navigate(`/market/detail/${item.storeId}`)}>
                                                <T.Text _size={18} _weight={500}>{item.storeName}</T.Text>
                                                <T.Text _size={15} _color="gray800">{orderName(item)}</T.Text>
                                                <T.Text _size={13} _color="gray500">{dayjs(item.createDate).format('YYYY/MM/DD HH:mm')}</T.Text>
                                            </L.FlexCols>
                                        </L.FlexRows>
                                        <L.FlexRows _gap={0} _content="space-evenly" _items='center'>
                                            <L.FlexCols _width='auto'>
                                                {
                                                    item.orderStatus == "결제완료"
                                                        ? <OrderSuccess_Y />
                                                        : <OrderSuccess />
                                                }
                                                <T.Text _size={12} _align='center'
                                                    _weight={item.orderStatus == "결제완료" ? 600 : 400}
                                                    _color={item.orderStatus == "결제완료" ? "green700" : "gray400"}>결제 완료</T.Text>
                                            </L.FlexCols>
                                            <ArrowRight />
                                            <L.FlexCols _width='auto'>
                                                {
                                                    item.orderStatus == "상품준비"
                                                        ? <OrderStandBy_Y />
                                                        : <OrderStandBy />
                                                }
                                                <T.Text
                                                    _align='center' _size={12}
                                                    _weight={item.orderStatus == "상품준비" ? 600 : 400}
                                                    _color={item.orderStatus == "상품준비" ? "green700" : "gray400"}>상품 준비</T.Text>
                                            </L.FlexCols>
                                            <ArrowRight />
                                            {
                                                item.recetiveType === '배달' &&
                                                <>
                                                    <L.FlexCols _width='auto'>
                                                        {
                                                            item.orderStatus == "배송중"
                                                                ? <OrderDelivery_Y />
                                                                : <OrderDelivery />
                                                        }
                                                        <T.Text
                                                            _align='center' _size={12}
                                                            _weight={item.orderStatus == "배송중" ? 600 : 400}
                                                            _color={item.orderStatus == "배송중" ? "green700" : "gray400"}>배송중</T.Text>
                                                    </L.FlexCols>
                                                    <ArrowRight />
                                                </>
                                            }
                                            <L.FlexCols _width='auto'>
                                                {
                                                    item.orderStatus == "픽업완료" || item.orderStatus == "배송완료" || item.orderStatus == "상품수령완료"
                                                        ? <OrderEnd_Y />
                                                        : <OrderEnd />
                                                }
                                                <T.Text
                                                    _align='center' _size={12}
                                                    _weight={item.orderStatus == "픽업완료" || item.orderStatus == "배송완료" || item.orderStatus == "상품수령완료" ? 600 : 400}
                                                    _color={item.orderStatus == "픽업완료" || item.orderStatus == "배송완료" || item.orderStatus == "상품수령완료" ? "green700" : "gray400"}>
                                                    {item.recetiveType == "배달" ? '배송 완료' : '픽업 완료'}
                                                </T.Text>
                                            </L.FlexCols>
                                        </L.FlexRows>
                                        <L.FlexCols _gap={8}>
                                            {
                                                item.orderStatus === '결제완료' &&
                                                <S.Action
                                                    _type="cancel"
                                                    onClick={() => { setCancelOrder(item.orderId) }}
                                                >주문 취소</S.Action>
                                            }
                                            {
                                                item.orderStatus === '배송완료' &&
                                                item.orderStatus === '픽업완료' &&
                                                <S.Action
                                                    _type="bg"
                                                    onClick={() => { setDeliveryPopup(true) }}
                                                >상품 수령</S.Action>
                                            }
                                            {/* {
                                                item.orderStatus === '배송완료' &&
                                                item.orderStatus === '픽업완료' &&
                                                <S.Action
                                                    _type="cancel"
                                                    onClick={() => { alert('환불 쓰기') }}
                                                >환불 하기</S.Action>
                                            } */}
                                            {
                                                item.orderStatus === '상품수령완료' &&
                                                <S.Action
                                                    _type="bd"
                                                    onClick={() => { alert('리뷰 쓰기') }}
                                                >리뷰 쓰기</S.Action>
                                            }
                                            {
                                                item.orderStatus === '상품수령완료' &&
                                                <S.Action
                                                    _type="cancel"
                                                    onClick={() => { setDelOrder(item.orderId) }}
                                                >주문 내역 삭제</S.Action>
                                            }
                                            <S.Action
                                                as={Link}
                                                to={`/order/details/${item.orderId}`}
                                            >주문내역 보기</S.Action>
                                        </L.FlexCols>
                                    </L.FlexCols>
                                </L.Contents>
                            ))
                        }
                        <Confirm
                            active={delOrder >= 0}
                            contents={`주문내역을 정말로 삭제하시겠습니까? \n내역 삭제 전 나만의 단골집으로 등록해보세요!`}
                            warn={true}
                            confirmText="삭제"
                            cancelText="취소"
                            onConfirmClick={() => { handleOrderDelete() }}
                            onCancelClick={() => { setDelOrder(-1) }}
                        />
                        <Confirm
                            active={cancelOrder >= 0}
                            contents={`주문을 정말로 취소하시겠습니까?`}
                            warn={true}
                            confirmText="네"
                            cancelText="아니요"
                            onConfirmClick={handleOrderCancel}
                            onCancelClick={() => setCancelOrder(-1)}
                        />
                        {
                            deliveryPopup &&
                            <Overlay>
                                <S.DeliveryPopup>
                                    <button
                                        className="close"
                                        style={{ background: '#FFF' }}
                                        onClick={() => { setDeliveryPopup(false) }}
                                    >
                                        <Close />
                                    </button>
                                    <div className="top">
                                        <div className="img" />
                                    </div>
                                    <div className="contents">
                                        <strong>
                                            배송이 완료되었습니다.
                                        </strong>
                                        <p>
                                            고객님, 오늘도 맛있는 저희 상품을 구매해주셔서 감사합니다.
                                        </p>
                                    </div>
                                </S.DeliveryPopup>
                            </Overlay>
                        }
                    </L.Container>
                    : <L.Container
                        _height="100%"
                    >
                        <L.Contents
                            _padding="80px 20PX"
                            _height="calc(100vh - 80px)"
                        >
                            <T.Text _align="center" _color="gray600" _size={15} _weight={300}>
                                주문 내역이 없습니다
                                <br />
                                내 주변 마켓을 이용해보세요.
                            </T.Text>
                        </L.Contents>
                    </L.Container>
            )

            : <LoadingBar />
    )
}

export default OrderList